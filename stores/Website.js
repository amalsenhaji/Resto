import { defineStore } from "pinia";
export const useWebsite = defineStore("website", {
  state: () => {
    return {
      website: {
        name: "Restohub",
        business_id: 0
      }
    };
  },

  getters: {
    getWebsite: (state) => state.website
  },
  actions: {
    async fetchWebsite() {

    },
  },
});
