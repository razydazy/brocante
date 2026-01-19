defineGlobalOnce('ThemeSection_Cart', () => {

  return {
    currentItemCount: null,
    lineItemStatusElement: document.getElementById(
      'shopping-cart-line-item-status',
    ),
    errorMessages: {},
    mounted() {
      const debouncedOnChange = this.debounce(event => {
        this.onChange(event);
      }, 300);
      this.$el.addEventListener('change', debouncedOnChange.bind(this));
    },
    debounce(fn, wait) {
      let t;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
      };
    },
    onChange(event) {
      this.updateQuantity(event.detail.line, event.detail.value, event.detail.name);
    },
    updateQuantity(line, quantity, id) {
      document.getElementById('main-cart-items').classList.add('opacity-10');
      this.lineItemStatusElement.setAttribute('aria-hidden', false);
      const lastQuantity = parseInt(document.getElementById(`CartItem-${line}`).dataset.lastQuantity, 10);

      const body = JSON.stringify({
        line,
        quantity,
        sections: this.getSectionsToRender().map((section) => section.section),
        sections_url: window.location.pathname,
      });

      fetch(`${window.theme.routes.cart_change_url}`, {
        ...{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/javascript',
          },
        },
        ...{ body },
      })
        .then((response) => {
          return response.text();
        })
        .then((state) => {
          const parsedState = JSON.parse(state);
          if (parsedState.status === 422) {
            document.getElementById(`CartItem-${line}`)
              .dispatchEvent(new CustomEvent('quantity-error', {
                detail: {
                  message: parsedState.message,
                  lastQuantity,
                }
              }))
          } else {
            document
              .getElementById('main-cart-footer')
              .classList.toggle('hidden', parsedState.item_count === 0);

            this.getSectionsToRender().forEach((section) => {
              const elementToReplace =
                document
                  .getElementById(section.id)
                  .querySelector(section.selector) ||
                document.getElementById(section.id);

              elementToReplace.innerHTML = this.getSectionInnerHTML(
                parsedState.sections[section.section],
                section.selector,
              );
            });

            document.getElementById('CartCount').textContent =
              parsedState.item_count;

            this.updateLiveRegions(line, parsedState.item_count);
          }

          document
            .getElementById('main-cart-items')
            .classList.remove('opacity-10');
          document.getElementById(`CartItem-${line}`).querySelector(`[name="${id}"]`).focus();
        })
        .catch((error) => {
          console.error('Updating quantity resulted in an error', error);
          document
            .getElementById('main-cart-items')
            .classList.remove('opacity-10');
          document.getElementById('cart-errors').textContent =
            window.theme.strings.cartError;
        });
    },
    getSectionInnerHTML(html, selector) {
      return new DOMParser()
        .parseFromString(html, 'text/html')
        .querySelector(selector).innerHTML;
    },
    getSectionsToRender() {
      return [
        {
          id: 'main-cart-items',
          section: document.getElementById('main-cart-items').dataset.id,
          selector: '.js-contents',
        },
        {
          id: 'main-cart-footer',
          section: document.getElementById('main-cart-footer').dataset.id,
          selector: '.js-contents',
        },
        {
          id: 'cart-live-region-text',
          section: 'cart-live-region-text',
          selector: '.shopify-section',
        },
      ];
    },
    updateLiveRegions(line, itemCount) {
      if (this.currentItemCount === itemCount) {
        document
          .getElementById(`Line-item-error-${line}`)
          .querySelector(
            '.cart-item-error-text',
          ).innerHTML = window.theme.strings.cartQuantityError.replace(
          '[quantity]',
          document.getElementById(`Quantity-${line}`).value,
        );
        document
          .getElementById(`Line-item-error-${line}`)
          .classList.remove('hidden');
      } else {
        const cartErrors = document.querySelectorAll('.cart-item-error');
        cartErrors.forEach((el) => {
          el.classList.add('hidden');
        });
      }
      this.currentItemCount = itemCount;
      this.lineItemStatusElement.setAttribute('aria-hidden', true);

      const cartStatus = document.getElementById('cart-live-region-text');
      cartStatus.setAttribute('aria-hidden', false);
      setTimeout(() => {
        cartStatus.setAttribute('aria-hidden', true);
      }, 1000);
    },
  };
});

defineGlobalOnce('ThemeSection_CartFooter', () => {
  return {
    updating: false,
    updateNote($event) {
      this.updating = true;
      const body = JSON.stringify({ note: $event.target.value });
      fetch(`${window.theme.routes.cart_update_url}`, {
        ...{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
        ...{ body },
      }).then(() => {
        this.updating = false;
      });
    }
  };
});
