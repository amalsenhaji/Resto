import { defineStore } from "pinia";
import { useLocations } from "./Locations";
export const useOrder = defineStore("order", {
  state: () => {
    return {
      order: {
        services: [{
          name: 'Service fee',
          price: 15
        }],
        total: 0,
        busines_id: null,
        location_id: null,
        status: 'abandoned',
        coupon: null,
        salesTax: 0,
        discount: 0,
        total: 0,
        subTotal: 0,
        source: 'MARKETPLACE',
        serviceFee: 0
      },
      items: [],
      fulfillment: {
        method: 'pickup',
        address: {

        },
        contact: {
          name: null,
          phone: null,
          email: null
        },
        instructions: null,
        tip: 0,
        fulfillmentTime: 'ASAP',
        fee: 0,
        status: 'pending',
      }
    };
  },

  getters: {
    getOrder: (state) => state.order,
    getItems: (state) => state.items,
    getFulfillment: (state) => state.fulfillment,
  },
  actions: {
    calculateSubtotal(item) {
      // Calculate the total price of modifiers
      const modifierTotalPrice = item.modifiers.reduce((acc, modifier) => {
        return acc + modifier.items.reduce((acc2, modifierItem) => {
          return acc2 + modifierItem.price * modifierItem.quantity;
        }, 0);
      }, 0);
    
      // Calculate the subtotal
      const subtotal = (item.price + modifierTotalPrice) * item.quantity;
    
      return subtotal;
    },
    addItem (item) {
      let subTotal = this.calculateSubtotal(item);
      let taxRate = Number(useLocations().getTax.rates[item.tax || 'default']) / 100
      let salesTax = Number((subTotal * taxRate).toFixed(0))
      this.items.push({...item, subTotal, salesTax});
    },
    removeItem (item) {
      this.items.splice(this.items.indexOf(this.items.find((i) => i.id === item.id)), 1);
    },
    setFulfillment (fulfillment) {
      this.fulfillment = fulfillment;
    },
    async updateTotal () {
      this.order.total = 0;
      this.order.salesTax = 0;
      this.order.discount = 0;
      this.order.serviceFee = 0;
      this.order.subTotal = Number(this.items.reduce((acc, item) => acc + item.subTotal || 0, 0).toFixed(0));
      this.order.salesTax = Number(this.items.reduce((acc, item) => acc + item.salesTax || 0, 0).toFixed(0));
      this.order.discount = Number(this.items.reduce((acc, item) => acc + item.discount || 0, 0).toFixed(0));
      this.order.serviceFee = this.order.services.length > 0 ? Number(this.order.services.reduce((acc, s) => acc + s.price || 0, 0).toFixed(0)) : 0;
      this.order.total = Number((this.order.subTotal + this.order.salesTax + this.order.discount + this.order.serviceFee + this.fulfillment.fee + this.fulfillment.tip).toFixed(0));
      console.log(this.order.total);
    },
    setTip (tip) {
      this.fulfillment.tip = Number(tip);
    },
    setAddresss (address) {
      this.fulfillment.address = {...address, ...this.fulfillment.address};
    }
  }
});
