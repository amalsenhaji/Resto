<template>
  <div class="item-card-class">

    <div class="w-72 h-auto rounded-lg shadow-md bg-white">
      <div class="p-5">
        <h2 class="text-center text-2xl font-bold text-red-700">{{item.name}}</h2>
        <img v-if="useImages" class="w-3/5 mx-auto" src="@/assets/image/image.png" />
        <div class="flex justify-between items-center p-4 flex-wrap">
          <p class="text-xl font-bold text-black flex-1 ml-[-6]">${{(item.price/100).toFixed(2)}}</p>
          <button @click="selected"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none dark:bg-blue-600">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
 
</template>
<script setup>
const props = defineProps({
  item: Object,
  useImages: Boolean
});
const emit = defineEmits(["selected"])
const selected = () => emit("selected")

</script>
