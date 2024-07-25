<template>
    <div class="border-2 border-red-600 rounded-2xl h-50 w-9/10 p-4">
        <div class="text-xl font-semibold relative pl-2 pt-1">
            <span class="inline-block font-bold after:content-[''] after:block after:border-b-2 after:border-black after:absolute after:left-2 after:mt-1 after:w-full">Show some love</span>
        </div>
        <input v-model="tip" class="border-2 border-pink-200 rounded-2xl bg-pink-200 mt-5 w-full h-8 px-4 mb-0 focus:outline-none focus:shadow-none focus:border-transparent mx-1" placeholder="Enter" type="number">
        <div class="flex justify-around space-x-0.5 mt-2.5 ">
            <div class="w-[20vw] md:w-36 text-center bg-gray-200 rounded-2xl flex justify-center items-center px-1 py-2">
                <button @click="tip = (useOrder().getOrder.total * 0.001).toFixed(2)" class="text-black text-sm font-medium">10%-${{ (useOrder().getOrder.total * 0.001).toFixed(2) }}</button>
            </div>
            <div class="w-[20vw] md:w-36 text-center bg-gray-200 rounded-2xl flex justify-center items-center px-1 py-2">
                <button @click="tip = (useOrder().getOrder.total * 0.0015).toFixed(2)" class="text-black text-sm font-medium">15%-${{ (useOrder().getOrder.total * 0.0015).toFixed(2) }}</button>
            </div>
            <div class="w-[20vw] md:w-36 text-center bg-gray-200 rounded-2xl flex justify-center items-center px-1 py-2">
                <button @click="tip = (useOrder().getOrder.total * 0.002).toFixed(2)" class="text-black text-sm font-medium">20%-${{ (useOrder().getOrder.total * 0.0020).toFixed(2) }}</button>
            </div>
            <div class="w-[20vw] md:w-36 text-center bg-gray-200 rounded-2xl flex justify-center items-center px-1 py-2">
                <button @click="tip = (useOrder().getOrder.total * 0.0025).toFixed(2)" class="text-black text-sm font-medium">25%-${{ (useOrder().getOrder.total * 0.0025).toFixed(2) }}</button>
            </div>
        </div>
       
    </div>
</template>
<script setup>
import { computed, watch } from 'vue'

const tip = computed({
    get() {
        return Number((useOrder().getFulfillment.tip/100).toFixed(2))
    },
    set(value) {
        useOrder().setTip((value*100).toFixed(0))
    }
})
onMounted(() => {
    const orderTotal = useOrder().getOrder.total
    tip.value = (orderTotal * 0.15).toFixed(2)
    useOrder().setTip((tip.value).toFixed(2))
})
</script>
<style>
  input:focus {
    outline: none !important;
    border: 2px solid pink !important; 
    box-shadow: none !important;
  }
</style>
