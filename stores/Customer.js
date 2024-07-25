import { defineStore } from "pinia";
import { useWebsite } from "./Website";

export const useCustomer = defineStore("customer", {
  state: () => {
    return {
      customer: {},
      profile: {},
      orders: [],
    };
  },

  getters: {
    getCustomer: (state) => state.customer,
    getProfile: (state) => state.profile,
    getOrders: (state) => state.orders
  },
  actions: {
    async fetchCustomer(user_id) {
      const { data } = await useSupabaseClient().from("customer").select("*").eq("user_id", user_id).eq("business_id", useWebsite().getWebsite.business_id).single();
      this.customer = data;
      this.fetchProfile(data.id)
    },
    async fetchProfile() {
      
    },
    fetchOrders() {
      
    }
  },
});
