<template>
  <div>
    <button :disabled="items.length === 0" @click="showDialog = !showDialog"
      class="fixed z-50 bottom-10 right-8 bg-red-600 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-red-700 hover:drop-shadow-2xl duration-300">
      <svg class="w-10 h-10 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        width="30" height="30" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
      </svg>
      <span class="sr-only">Notifications</span>
      <div
        class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-600 border-2 border-white rounded-full -top-2 -end-2">
        {{ items.length }}</div>

    </button>

    <div v-if="showDialog" class="fixed bottom-[9rem] right-5 bg-gray-500 bg-opacity-75 z-40">
      <div class="flex flex-col items-center bg-white p-4 border-2 border-red-600 rounded-lg max-w-md mx-auto">


        <div class="w-full mb-4">
          <div class="flex items-start mb-3" v-for="(item, index) in items" :key="index">
            <div class="flex flex-col flex-grow">
              <span class="text-gray-900 font-bold text-lg">{{ item.name }}</span>
              <span v-for="(modifier, index) in item.modifiers" :key="index">
                <span class="text-gray-800 font-semibold text-sm mb-0">{{ modifier.name }}:</span>
                <br /><span v-for="(mit, index) in modifier.items" :key="index" class="mt-0 text-gray-600 text-sm">{{
      mit.quantity }}*{{ mit.name }}, </span>
              </span>
              <button @click="removeItem(index)" class="text-red-600 text-sm mt-2 " style="margin-right:12rem;">X
                Remove</button>
            </div>
            <span class="text-gray-700 text-lg font-bold self-end">${{ (item.subTotal / 100).toFixed(2) }}</span>
          </div>
        </div>

        <!-- <div class="w-full">
                    <div class="flex justify-between">
                      <span>Subtotal</span>
                      <span>$80.00</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Tip</span>
                      <span>$5.00</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Shipping</span>
                      <span>$0.00</span>
                    </div>
                    <div class="flex justify-between mb-4">
                      <span>Order Type</span>
                      <span>Pickup</span>
                    </div>
                  </div> -->

        <!-- <div class="w-full flex justify-between items-center font-bold text-lg mb-4">
                    <span>Subtotal</span>
                    <span>$85.00</span>
                  </div>
               -->

        <button @click="toCheckout" class="bg-red-600 text-white py-2 px-4 rounded-full w-full">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const showDialog = ref(false);
const items = ref(useOrder().getItems);
const removeItem = (index) => {
  items.value.splice(index, 1);
  if (items.value.length === 0) showDialog.value = false;
};
const toCheckout = () => {
  showDialog.value = false
  useRouter().push('/checkout')
}
</script>
