<template>

  <div class="fixed inset-0 bottom-0 bg-black bg-opacity-50 flex justify-center p-5 z-50 overflow-y-auto w-full md:inset-0 h-full">
    <div class="md:flex md:container bg-white rounded-lg shadow-lg">
      <div id="accordion-collapse" data-accordion="collapse" class="w-full bg-white md:w-2/3 border-r ">
        <div v-for="(modifier, index) in item.modifiers">
          <h2 :id="'accordion-collapse-heading-' + index">
            <button type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-red-600  dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              :data-accordion-target="'#accordion-collapse-body-' + index" aria-expanded="true"
              :aria-controls="'accordion-collapse-body-' + index">
              <span>{{ modifier.name }}<span v-if="modifier.required" class="text-sm">*</span></span>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="#e10a23" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                  clip-rule="evenodd" />
              </svg>

            </button>
          </h2>
          <div :id="'accordion-collapse-body-' + index" class="hidden"
            :aria-labelledby="'accordion-collapse-heading-' + index">
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <component :is="mods[modifier.type]" v-model="item.modifiers[index]"></component>
            </div>
          </div>
        </div>

        <div class="flex justify-center ">
          <input type="text" placeholder="Special Instructions" v-model="item.instructions"
            class="w-11/12 px-4 py-3 text-gray-700 bg-white border-2 border-red-600 rounded-md focus:border-red-700 focus:outline-none focus:ring focus:ring-red-200" />
        </div>
      </div>

      <div class="w-full md:w-1/3 bg-white p-5">
        <div class="flex flex-col h-full justify-between">
          <!-- Modal header -->
          <div class="flex items-center justify-between rounded-t dark:border-gray-600">
            <button type="button" @click="close"
              class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div>
            <div class="flex justify-center">
              <img v-if="item.imgs.length" :src="item.imgs[0]" :alt="item.name" class="max-w-full h-auto">
            </div>
            <h1 class="flex justify-center text-2xl font-bold text-gray-800 mt-8">{{ item.name }}</h1>
            <h3 class="flex justify-center text-lg text-gray-800 mt-2">${{ (item.price / 100).toFixed(2) }}</h3>
            <div class="text-gray-500 mt-4">{{ item.description }}</div>
            <div class="flex justify-center items-center  ">
              <div class="flex  items-center space-x-2 mt-5">
                <button :disabled="item.quantity === 1" @click="item.quantity--"
                  class="text-gray-500 bg-gray-200 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                  </svg>
                </button>
                <span class="text-gray-700 font-bold">{{ item.quantity }}</span>
                <button @click="item.quantity++" class="text-gray-500 bg-gray-200 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
            <button @click="addToCard"
              class="w-full bg-red-600 text-white hover:bg-red-700 py-3 rounded-lg font-medium mt-5">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>

<script setup>
import { initAccordions } from "flowbite";
import { ModifierMultiple, ModifierExtra, ModifierSingle } from '#components'
const mods = {
  single: ModifierSingle,
  extra: ModifierExtra,
  multiple: ModifierMultiple
}

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['close'])
const close = () => emit('close')
const item = ref(await useMenu().fetchItem(props.modelValue))
item.value.quantity = 1
const addToCard = () => {
  if (item.value.modifiers.find(modifier => modifier.required && !modifier.items.find(item => item.selected))) {
    console.log('Please select all required modifiers');
    return
  }
  const Item = {
    item_id: item.value.id,
    name: item.value.name,
    price: item.value.price || 0,
    quantity: item.value.quantity || 1,
    instructions: item.value.instructions,
    modifiers: item.value.modifiers.map(modifier => {
      return {
        id: modifier.id, name: modifier.name, items: modifier.items.filter(item => item.selected).map(item => {
          return { name: item.name, price: item.price || 0, quantity: item.quantity || 1 }
        })
      }
    }).filter(modifier => modifier.items.length)
  }
  useOrder().addItem(Item)
  close()
}

onMounted(() => {
  initAccordions();
});
</script>
