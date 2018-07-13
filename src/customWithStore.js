import { create } from 'proppy';

const defaultOptions = {
  providerName: 'store',
};

export function withCustomStore(
  mapState,
  options = defaultOptions
) {
  return create({
    initialize() {
      this._store = this.providers[options.providerName];

      if (!this._store) {
        throw new Error('Store not found');
      }

      if (mapState) {
        this.set(mapState.apply(this, [
          this._store.getState(),
          this.props,
          this.providers,
        ]));
      }
    },

    didSubscribe() {
      if (mapState) {
        this._storeSubscription = this._store.subscribe(() => {
          this.set(mapState.apply(this, [
            this._store.getState(),
            this.props,
            this.providers,
          ]));
        });
      }
    },

    willDestroy() {
      if (this._storeSubscription) {
        this._storeSubscription();
      }
    },
  });
}
