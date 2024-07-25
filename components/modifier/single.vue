<template>
  <div class="bg-white  mt-6 text-sm font-medium  w-full">
    <div id="checkboxes" class="flex flex-wrap mx-2 rounded-full inline">
      <div v-for="(it, index) in modelValue.items" :key="modelValue.name+'_'+index" class="mx-2">
        <input
          :id="modelValue.name+'_'+index"
          v-model="modelValue.items[index].selected"
          type="radio"
          :name="it.name"
          :value="true"
          :checked="modelValue.items[index].selected === it"
          class="mr-2 text-primary"
        >
        <label :for="modelValue.name+'_'+index">{{ it.name }}</label>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Object
  },
})
</script>

<style>

</style>
