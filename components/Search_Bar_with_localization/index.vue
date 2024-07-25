<template>

  <div class="flex justify-center items-center">

    <div class="bg-white text-sm px-4 py-2 flex items-center justify-between shadow-lg rounded-lg w-2/3">
      <div class="flex items-center">
        <span class="mr-2"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#E10A23" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </span>
        <span class="font-bold mr-1">Open Hours: </span><span> 11:00AM | 01:00AM</span>
      </div>

      <div class="flex items-center space-x-1">
        <div class="flex space-x-0">
          <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" fill="#E10A23" viewBox="0 0 24 24">
            <path
              d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <path
            d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" fill="#E10A23" viewBox="0 0 24 24">
            <path
              d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" fill="#E10A23" viewBox="0 0 24 24">
            <path
              d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" fill="#E10A23" viewBox="0 0 24 24">
            <path
              d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
          <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" fill="#E10A23" viewBox="0 0 24 24">
            <path
              d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
          </svg>
        </div>

        <span>(200)</span>
      </div>


      <div class="flex items-center">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" fill="#E10A23" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
            clip-rule="evenodd" />
        </svg>
        <span class="mx-1" style="font-weight:bold">85%</span>


      </div>


      <div class="flex items-center space-x-0 ">
        <button @click="isOpen = true"
          class="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center mr-4">
          {{ buttondata }}
        </button>
        <div v-if="isOpen" class="fixed inset-0 bg-gray-500 bg-opacity-50 z-10" @click.self="closeDialog">
          <div class="bg-white rounded shadow p-8 m-4 max-w-md mx-auto z-20">
            <div class="mb-4 text-center font-bold text-lg">Select</div>
            <div class="mb-4">
              <div class="inline-flex w-full justify-between">
                <button @click="selectOption('ASAP')"
                  class="w-1/2 py-2 text-white bg-red-600 border border-gray-200 rounded-l-lg hover:bg-red-700">ASAP</button>
                <button @click="showDatePicker = !showDatePicker"
                  class="w-1/2 py-2 text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100">LATER</button>
              </div>
              <input v-if="showDatePicker" v-model="selectedDate" type="date"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mt-3">
              <input v-if="showDatePicker" v-model="selectedTime" type="time"
                class="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mt-3">
            </div>
            <button @click="submitSelection"
              class="w-full text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2.5">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <form class="flex w-max mx-auto bg-red-600 rounded-full  rounded-2xl border-2 border-red-600  mt-10">
    <div class="relative">
      <select
        class="border-0 focus:ring-0 rounded-2xl font-medium text-white py-2.5 inline-flex items-center bg-red-600"
        id="SelectOptions" style="font-size:15px">
        <option value="" disabled selected hidden>Select your category</option>
        <option value="Burger" selected="method == 'Burger'">Burger</option>
        <option value="Sandwich" selected="method == 'Sandwich'">Sandwich</option>
      </select>

    </div>

    <div class="relative">

      <select
        class="border-0 focus:ring-0 rounded-2xl font-medium text-white py-2.5 inline-flex items-center bg-red-600"
        id="SelectOptionsdiet" style="font-size:15px">
        <option value="" disabled selected hidden>Select your diet</option>
        <option value="Burger" selected="method == 'Burger'">Burger</option>
        <option value="Sandwich" selected="method == 'Sandwich'">Sandwich</option>
      </select>
    </div>


    <div class="relative">

      <select
        class="border-0 focus:ring-0 rounded-2xl font-medium text-white py-2.5 inline-flex items-center bg-red-600"
        id="SelectOptionsdiet" style="font-size:15px">
        <option value="Burger" selected="method == 'Burger'">PickUp</option>
        <option value="Sandwich" selected="method == 'Sandwich'">Dine-in</option>
        <option value="Sandwich" selected="method == 'Sandwich'">Drive-Trough</option>

        <option value="Sandwich" selected="method == 'Sandwich'">Delivery</option>

      </select>
    </div>


  </form>


</template>
<style scoped>
#dropdownDelayButton,
#dropdownDividerButton {
  background: #E10A23;
  color: white;
}

#dropdownDelayButton:hover,
#dropdownDividerButton:hover {
  background-color: #ee586a;
}

#SelectOptions #SelectOptionsdiet {
  padding-left: 30px;
  background: #e10a23;
  color: #fff;

}
</style>

<script setup>
import { onMounted } from 'vue';
const showDatePicker = ref(false);
const selectedDate = ref('');
const selectedTime = ref('');
const isOpen = ref(false);
const buttondata = ref('ASAP');
const locations = ref([]);


const closeDialog = () => {
  if (isOpen.value) {
    isOpen.value = false;
    showDatePicker.value = false;
  }
};
const selectOption = (option) => {
  if (option === 'ASAP') {
    buttondata.value = 'ASAP';
    selectedDate.value = '';
    selectedTime.value = '';
    showDatePicker.value = false;
  }
  isOpen.value = !isOpen.value;
};
const submitSelection = () => {
  if (selectedDate.value && selectedTime.value) {
    const selectedDateTime = new Date(`${selectedDate.value} ${selectedTime.value}`);
    const hours = selectedDateTime.getHours();
    const period = hours < 12 ? 'AM' : 'PM';
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${formattedHours}:${selectedDateTime.getMinutes().toString().padStart(2, '0')} ${period}`;
    buttondata.value = `${selectedDate.value} | ${formattedTime}`;
  } else {
    buttondata.value = 'ASAP';
  }
  isOpen.value = false;
  showDatePicker.value = false;
};
const fetchLocationsByGeolocation = async () => {
  locations.value = await useLocations().fetchLocationsByGeolocation({latitude: 38.9383584,longitude: -76.9609304})
}

onMounted(fetchLocationsByGeolocation)
</script>