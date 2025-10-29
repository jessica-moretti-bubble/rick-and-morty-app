import { defineStore } from "pinia";

interface State {
  favoritesIds: number[];
}

export const useFavoritesStore = defineStore("favorites", {
  state: (): State => ({
    favoritesIds: [],
  }),

  getters: {
    getFavoritesIds: (state) => state.favoritesIds,
  },

  actions: {
    addFavorite(id: number) {
      if (!this.favoritesIds.includes(id)) {
        this.favoritesIds.push(id);
      }
    },
    removeFavorite(id: number) {
      this.favoritesIds = this.favoritesIds.filter((favId) => favId !== id);
    },
    toggleFavorite(id: number) {
      if (this.favoritesIds.includes(id)) {
        this.removeFavorite(id);
      } else {
        this.addFavorite(id);
      }
    },
  },
});
