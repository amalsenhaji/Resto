<template>
    <NuxtLink :to="'/location/' + location.name + '--' + location.id"
        class="max-w-full w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="w-full rounded-t" :src="location.img" :alt="location.name" />

        <div class="px-8 py-2">

<p class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ location.name }}
                </p>
            <div class="flex items-center space-x-5 ">
                
                <div class="flex ">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" fill="#E10A23"
                        viewBox="0 0 24 24">
                        <path
                            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <span class="mx-2 text-md">{{ location.rating }}</span>
                </div>
                <p class="my-2 text-md tracking-tight text-gray-900 dark:text-white">
                    {{ location.address.street }}, {{ location.address.city }}
                </p>
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    location: {
        type: Object,
        default: () => { },
    },
});
</script>