<template>
  <div id="default-carousel" class="relative w-full z-0" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-[35vh] md:h-[500px] overflow-hidden rounded-lg">
      <!-- Item 1 -->
      <div
        v-for="slide in slides"
        :key="slide"
        class="hidden duration-700 ease-in-out"
        data-carousel-item
      >
        <img
          :src="slide.img"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          :alt="slide.alt"
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
    >
      <button
        v-for="(slide, idx) in slides"
        :key="idx"
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="true"
        :aria-label="idx"
        :data-carousel-slide-to="idx"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>
<script setup>
import { initCarousels } from "flowbite";
const slides = [
    {
        img: 'https://static.wixstatic.com/media/f50a6c_7074e71d8ace417badb9f2ad80fded31~mv2.jpg/v1/fill/w_1260,h_741,al_c,q_85/f50a6c_7074e71d8ace417badb9f2ad80fded31~mv2.jpg',
        alt: 'burger'
    },
    {
        img: 'https://static.wixstatic.com/media/f50a6c_7074e71d8ace417badb9f2ad80fded31~mv2.jpg/v1/fill/w_1260,h_741,al_c,q_85/f50a6c_7074e71d8ace417badb9f2ad80fded31~mv2.jpg',
        alt: 'burger'
    },
    {
        img: 'https://static.wixstatic.com/media/f50a6c_7074e71d8ace417badb9f2ad80fded31~mv2.jpg/v1/fill/w_1260,h_741,al_c,q_85/f50a6c_7074e71d8ace417badb9f2ad80fded31~mv2.jpg',
        alt: 'burger'
    },
]
onMounted(() => {
  initCarousels();
});
</script>