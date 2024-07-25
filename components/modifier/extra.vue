<template>
  <div class="bg-white rounded-xl p-2  mt-4 text-sm font-medium  w-full flex flex-wrap">

    <div v-for="(item, index) in modelValue.items" :key="modelValue.name+'_'+index" class="flex flex-wrap mx-2 my-2 rounded-full bg-gray-100 px-4 py-2">
      <button class=" text-xs text-red-600 h-6 rounded-full w-6 border-2  " @click="redQty(index)" :disabled="!item.selected">
        <i class="fas fa-minus" />
      </button>
      <div class=" flex  flex-col justify-around pl-1 ">
        <span class="text-sm font-medium mx-1 ">{{ item.name }} x {{ qty(item) }} </span>
      </div>
      <button class=" text-xs h-6 text-green-400 rounded-full w-6 border-2  " @click="addQty(index)">
        <i class="fas fa-plus" />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Object
  },
})
const redQty = (index) => {
  if (modelValue.items.quantity > 1) {
    modelValue.items[index].quantity--
  } else if (modelValue.items.quantity === 1) {
    modelValue.items[index].selected = false
    modelValue.items[index].quantity = 0
  }
}
const addQty = (index) => {
  if (modelValue.items[index].quantity === 0) {
    modelValue.items[index].selected = true
    modelValue.items[index].quantity = 1
  } else {
    modelValue.items[index].quantity++
  }
}
</script>

<style>

</style>
