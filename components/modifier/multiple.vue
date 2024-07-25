<template>
  <!-- Start Modifiere -->
  <div id="checkboxes" class="flex flex-wrap mx-2 my-2 rounded-full">
    <label v-for="(it, index) in modelValue.items" :key="modelValue.name + '_' + index" class="m-2"
      :for="modelValue.name + '_' + index">
      <input :id="modelValue.name + '_' + index" type="checkbox"  v-model="modelValue.items[index].selected"
        :disabled="modelValue.items.filter(it => it.selected).length >= modelValue.limit && !modelValue.items[index].selected"
        class="w-4 h-4 text-primary bg-gray-50 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

      {{ it.name }}
    </label>
  </div>
  <!-- End modifier -->
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Object
  },
})

</script>

<style></style>
