<template>
    <div class="flex flex-col justify-center items-center mb-8">
        <div
            class="w-5/6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 justify-center justify-items-center">
            <LocationsCard v-for="(location, idx) in locations" :key="idx" :location="location" />
        </div>

    </div>

</template>
<script setup>
import { computed } from 'vue';
const locations = computed(() => {
    return useLocations().locations;
})
</script>