<template>
  <div
    class="lg:grid-cols-3 grid-cols-1 grid h-auto lg:h-[50vh] w-full bg-[url('/back1.png')] bg-cover bg-no-repeat items-center">
    <!-- First part -->
    <div class="lg:col-span-1 flex m-4 flex-col justify-center items-center">
      <img :src="location?.business.logo" class="w-24 h-24 lg:w-48 lg:h-48 bg-gray-300 rounded-full mb-4 shrink-0">
      <!-- Adjust image size -->
    </div>

    <!-- Second part -->
    <div class="lg:col-span-2 flex flex-col  px-4 lg:px-0">
      <!-- Adjust padding for smaller screens and text alignmet -->
      <h1
        class="text-center sm:text-left mb-2 text-2xl lg:text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
        {{ location?.name }}</h1>
      <!-- Adjust text size -->
      <p
        class="text-center sm:text-left mb-4 text-base lg:text-lg font-normal text-white lg:text-xl dark:text-white font-bold">
        {{ location?.description }}</p>
      <!-- Adjust text size -->
    </div>
  </div>
  <div class="flex justify-center items-center">
    <!-- data-section -->
    <div
      class="bg-white mt-[2vh] w-[80vw] sm text-sm px-2 md:px-4 py-2 flex flex-col md:flex-row items-center justify-between border border-red-500 shadow-lg rounded-lg">
      <div class="flex items-center m-1">
        <span class="mr-2"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#E10A23" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </span>
        <span class="font-bold mr-2">Open Hours: </span><span class="text-red-700 font-bold mr-2"> 11AM - 01AM</span>
      </div>

      <div class="flex items-center space-x-1 m-1">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" fill="#E10A23" viewBox="0 0 24 24">
          <path
            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
        <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">5</p>
        <span class="w-1 h-1 mx-1.5 bg-black-500 rounded-full dark:bg-black-400"></span>
        <a href="#" class="text-sm font-medium text-black-900 underline hover:no-underline dark:text-white">200
          reviews</a>
      </div>
      <!-- Pick Up -->
      <div class="flex items-center space-x-0 m-1">
        <locationWorkinghours  v-if="useLocations().getLocation.id"/>

        <button @click="toggleDropdowntype" id="dropdownHelperFulfillmentButton"
          data-dropdown-toggle="dropdownHelperFulfillment"
          class="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center"
          type="button">
          {{ selectedDelivery ? selectedDelivery : 'Pick Up' }}
          <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 4 4 4-4" />
          </svg></button>
        <!-- Dropdown menu -->
        <div :class="{ hidden: !isDropdownOpentype }" id="dropdownHelperFulfillment"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full md:w-60 dark:bg-gray-700 dark:divide-gray-600"
          data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
          style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 6119.5px, 0px);">
          <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHelperFulfillmentButton">
            <li v-for="type in fulfillment_types" :key="type">
              <div class="flex p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                <div class="flex items-center h-5">
                  <input :id="'helper-fulfillment-' + type" name="helper-fulfillment" :value="type" type="radio"
                    @change="updateSelectedDelivery(type)"
                    class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                </div>
                <div class="ms-2 text-sm">
                  <label :for="'helper-fulfillment-' + type" class="font-medium text-gray-900 dark:text-gray-300">
                    <div>{{ type }}</div>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const location = useLocations().getLocation;
const fulfillment_types = [...new Set(useMenu().getMenu.items.flatMap(item => item.fulfillment_types).filter(v => !!v))];
const selectedDelivery = ref(useOrder().getFulfillment.method);
const isDropdownOpentype = ref(false);


const toggleDropdowntype = () => {
  isDropdownOpentype.value = !isDropdownOpentype.value;
};


const updateSelectedDelivery = (type) => {
  selectedDelivery.value = type
  let data = { ...useOrder().fulfillment, method: type }
  if (type == "delivery"){
    data.fee = useLocations().getLocation.delivery.fee
  }
  useOrder().setFulfillment(data)
  isDropdownOpentype.value = false
}
</script>
