<template>
  <form class="flex max-w-lg bg-red-600 rounded-full overflow-hidden my-5 mx-2 sm:mx-auto">
    <div class="flex relative flex-grow items-center text-white">

      <input type="search" id="search-dropdown"
        class="block pl-5 w-full text-sm  rounded-full border-2 border-primary focus:ring-0 focus:border-primary"
        style="color:black" placeholder="Search " required />
    </div>
    <button  @click="toggleDropdown" id="dropdownHelperFulfillmentButton" data-dropdown-toggle="dropdownHelperFulfillment"
      class="w-[35vw] md:w-auto flex justify-center items-center text-white bg-red-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      type="button">
      {{ selectedDelivery ? selectedDelivery : 'Pick Up' }}
      <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="m1 1 4 4 4-4" />
      </svg></button>
    <!-- Dropdown menu -->
    <div  v-show="isDropdownOpen" id="dropdownHelperFulfillment"
      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full md:w-60 dark:bg-gray-700 dark:divide-gray-600"
      data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
      style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 6119.5px, 0px);">
      <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownHelperFulfillmentButton">
        <li v-for="type in fulfillment_types" :key="type">
          <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="flex items-center h-5">
              <input :id="'helper-fulfillment-' + type" name="helper-fulfillment" :value="type" type="radio" 
                class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" @change="updateSelectedDelivery(type)">
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

    <button id="locationbutton" @click="show"
      class="text-white bg-primary focus:outline-none  font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center"
      type="button">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="white" class="w-[15px] mr-2">
        <path
          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
      </svg>
      <div>
        {{ zipcode }}
      </div>
    </button>
    <button
      class="text-white bg-primary focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      type="button">
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="white" stroke-linecap="round" stroke-width="2"
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
      </svg>
    </button>
    <div id="locationmodal" tabindex="-1" aria-hidden="true"
      class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Your Zip Code
            </h3>
            <button type="button" @click="hide"
              class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 border-b ">
            <form class="space-y-4" @submit.prevent="setZipcode">
              <div class="">
                <input name="zipcode" id="zipcode"
                  class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required v-model="tmpZipcode" type="number" placeholder="zipcode" />
              </div>
              <button type="submit" id="submitbutton" v-if="tmpZipcode && tmpZipcode >= 10000"
                class="mt-5 w-full text-white bg-primary hover:bg-primary focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Submit
              </button>
            </form>
          </div>
          <div class="flex justify-center">
            <button type="button" @click="locate" class="text-primary font-medium text-sm p-5 text-center h-full">
              <ClientOnly>
                <font-awesome-icon icon="location-crosshairs" size="2xl"/>
              </ClientOnly>
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script setup>
import { Modal } from "flowbite";
import { onMounted } from 'vue'
let modal
const show = () => {
  modal.show()
}
const hide = () => {
  modal.hide()
}
const method = ref('pick-up')
const tmpZipcode = ref()
const zipcode = ref()
const fetchLocationsByGeolocation = async (position) => {
  
  if (position) {
    hide()
    await useLocations().fetchLocationsByGeolocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
  }
  
}
let locate
onMounted(() => {
  const $modalElement = document.querySelector('#locationmodal');
  const modalOptions = {
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40'
  }
  if ($modalElement) {
    modal = new Modal($modalElement, modalOptions);
  }
  fetchLocationsByGeolocation()

  locate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchLocationsByGeolocation);
    } else {
      console.log('nada');
    }
  }
  if (!useLocations().getLocations.length) {
    locate()
  }
})
const setZipcode = () => {
  modal.hide()
  zipcode.value = tmpZipcode.value
}

const buttonPickUp = ref('Pick Up');

  const selectedDelivery = ref();

  const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  
  isDropdownOpen.value = !isDropdownOpen.value;
  isDropdownOpen.value = true;
    
}
const updateSelectedDelivery = (type) => {
  selectedDelivery.value = type;
  isDropdownOpen.value = false;
}

const fulfillment_types = ref(['Delivery', 'Pick Up', 'Dine In']);

</script>
<style>
.fa-map-marker-alt {
  font-size: 1.25rem;
  color: #E10A23;

}

#FullfilementSelect {
  padding-left: 30px;
  background: #e10a23;
  color: #fff;

}

#search-dropdown {
  flex-grow: 1;
  border-radius: 9999px;
  border: 2px solid #E10A23;
  margin-right: -1px;
}


input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

.font-awesome-icon {
  color: #E10A23;
}

option:not(:checked) {
  background-color: #FFF;
  color: #E10A23;
}

option::selection {
  background-color: #E10A23;
  color: #fff;
}

#submitbutton {
  background-color: #E10A23;
  color: #fff;
}
</style>
