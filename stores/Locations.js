import { defineStore } from "pinia";
import { useMenu } from "./Menu";
export const useLocations = defineStore("locations", {
  state: () => {
    return {
      locations: [],
      cords: null,
      location: {},
      fulfillment: [],
      tax: {}
    };
  },

  getters: {
    getLocations: (state) => state.locations,
    getLocation: (state) => state.location,
    getFulfillment: (state) => state.fulfillment,
    getTax: (state) => state.tax
  },
  actions: {
    async fetchLocationsByGeolocation(cords) {
      this.cords = cords;
      const { data, error } = await useSupabaseClient().rpc('nearby_locations', {
        lat: cords.latitude,
        long: cords.longitude,
        distance: cords.distance,
        count: 8,
        skip: this.locations.length
      })

      this.locations = data;
    },
    async fetchLocation(id) {
      const { data: location } = await useSupabaseClient().from("locations").select("*, business:business_id ( name, logo ), menu:menu_id (*), workinghours:working_hours_id(*)").eq("id", id).single()
      this.location = location

      await useMenu().fetchMenu(location.menu)
    },
    async fetchTax () {
      const { data: tax } = await useSupabaseClient().from("taxes").select("rates").contains("zipcodes", [this.location.address.postcode]).single();
      this.tax = tax
    }
  },
});