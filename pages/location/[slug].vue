<template>
  <div class="items-center w-full">
    <LocationProfile class="w-full my-2" />
    <itemGrid class="w-full" />

  </div>

</template>

<script setup>
await useLocations().fetchLocation(useRoute().params.slug.split('--')[1])
await useLocations().fetchTax()

</script>
