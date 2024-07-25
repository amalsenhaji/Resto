import { defineStore } from "pinia";
export const useMenu = defineStore("menu", {
  state: () => {
    return {
      menu: {},
      items: [],
      categories: [],
      fulfillment_types:[],
     
    };
  },

  getters: {
    getMenu: (state) => state.menu,
  },
  actions: {
    async fetchMenu(menu) {
      try {
        this.menu = menu;
        const { data: categories, error: categoriesError } =
          await useSupabaseClient()
            .from("categories")
            .select("*")
            .in("id", this.menu.categories);
        const { data: items, error: itemsError } = await useSupabaseClient()
          .from("items")
          .select("*")
          .in("id", this.menu.items);
        if (categoriesError) {
          console.log(categoriesError);
        }
        if (itemsError) {
          console.log(itemsError);
        }
        this.menu.categories = categories;
        this.menu.items = items;
        this.fulfillment_types = [...new Set(this.menu.items.flatMap(item => item.fulfillment_types).filter(v => !!v))];



      } catch (error) {
        console.log(error);
      }
    },
    async fetchItem(item) {
      return new Promise(async (resolve, reject) => {
        const { data: modifiers, error: modifiersError } = await useSupabaseClient().from("modifiers").select("*").in("id", item.modifiers);
        resolve({...item, modifiers: modifiers});
      });
    }
  },
});
