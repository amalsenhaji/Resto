<template>
  <form class="flex justify-center items-center my-[2vh] ">
    <!-- categories-->
    <div class="">
      <button @click="toggleDropdowncategory" id="dropdownHelperRadioButton" data-dropdown-toggle="dropdownHelperRadio"
        class="flex justify-center items-center text-white bg-red-600 hover:bg-red-700 rounded-l-full font-medium text-sm py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-[40vw]"
        type="button">
        {{ selectedCategory ? selectedCategory.name : 'Category' }}
        <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 1 4 4 4-4" />
        </svg></button>

      <!-- Dropdown menu -->
      <div :class="{ hidden: !isDropdownOpencat }" id="dropdownHelperRadio"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full md:w-60 dark:bg-gray-700 dark:divide-gray-600"
        data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
        style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 6119.5px, 0px);">
        <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200 max-h-60 overflow-y-auto"
          aria-labelledby="dropdownHelperRadioButton">
          <li>
            <div class="flex p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
              <div class="flex items-center h-5">
                <input @click="updateSelectedCategory(null)" id="helper-radio" name="helper-radio" type="radio"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
              </div>
              <div class="ms-2 text-sm">
                <label class="font-medium text-gray-900 dark:text-gray-300">
                  <div>All Categories </div>
                </label>
              </div>
            </div>
          </li>
          <li v-for="category in categories" :key="category.id">
            <div class="flex p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
              <div class="flex items-center h-5">
                <input @change="updateSelectedCategory(category)" :id="'helper-radio-' + category.id"
                  name="helper-radio" :value="category" type="radio"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
              </div>
              <div class="ms-2 text-sm">
                <label :for="'helper-radio-' + category.id" class="font-medium text-gray-900 dark:text-gray-300">
                  <div>{{ category.name }}</div>
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- diet -->
    <div class="">
      <button @click="toggleDropdown" id="dropdownHelperDietButton" data-dropdown-toggle="dropdownHelperDiet"
        class="flex justify-center items-center text-white bg-red-600 hover:bg-red-700 rounded-r-full  font-medium text-sm py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-[40vw]"
        type="button">
        {{ selectedDiet ? selectedDiet : 'Diet' }}
        <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m1 1 4 4 4-4" />
        </svg></button>

      <!-- Dropdown menu -->
      <div :class="{ hidden: !isDropdownOpen }" id="dropdownHelperDiet"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-full md:w-60 dark:bg-gray-700 dark:divide-gray-600"
        data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
        style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 6119.5px, 0px);">
        <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperDietButton">
          <li>
            <div class="flex p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
              <div class="flex items-center h-5">
                <input @click="updateSelectedDiet(null)" id="helper-radiodiet-all" name="helper-diet" type="radio"
                  value="All"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
              </div>
              <div class="ms-2 text-sm">
                <label for="helper-radiodiet-all" class="font-medium text-gray-900 dark:text-gray-300">
                  <div>All</div>
                </label>
              </div>
            </div>
          </li>
          <li v-for="(tag, idx) in tags" :key="idx">
            <div class="flex p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
              <div class="flex items-center h-5">
                <input :id="'helper-diet-' + tag" name="helper-diet" :value="tag" type="radio"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  @change="updateSelectedDiet(tag)">
              </div>
              <div class="ms-2 text-sm">
                <label :for="'helper-diet-' + tag" class="font-medium text-gray-900 dark:text-gray-300">
                  <div>{{ tag }}</div>
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </form>
  <div class="flex flex-col justify-center items-center">
    <div class="w-full max-w-screen-xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 justify-items-center">

        <ItemCard v-if="filteredItems.length > 0" v-for="item in filteredItems" :key="item.id" :item="item"
          :useImages="menu.images" @selected="Item = { quantity: 1, ...item }" />
        <ItemDialog v-if="Item" v-model="Item" @close="Item = null" />
      </div>
    </div>
  </div>


</template>

<script setup>
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
})
const menu = useMenu().getMenu
const Item = ref(null)
const selectedCategory = ref()
const selectedDiet = ref()
const isDropdownOpen = ref(false);
const isDropdownOpencat = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
const toggleDropdowncategory = () => {
  isDropdownOpencat.value = !isDropdownOpencat.value;

}
const updateSelectedDiet = (tag) => {
  selectedDiet.value = tag;
  isDropdownOpen.value = false;
}

const updateSelectedCategory = (category) => {
  selectedCategory.value = category;
  isDropdownOpencat.value = false;

}

const tags = [...new Set(useMenu().getMenu.items.flatMap(item => item.tags).filter(v => !!v))];

const categories = useMenu().getMenu.categories;
const fulfillment_types = useMenu().fulfillment_types;


const filteredItems = computed(() => {
  let items = menu.items;

  if (selectedCategory.value) {
    items = items.filter(item => item.categories.includes(selectedCategory.value.id));
  }

  if (selectedDiet.value) {
    items = items.filter(item => item.tags.includes(selectedDiet.value));
  }
  if (useOrder().fulfillment.method) {
    items = items.filter(item => item.fulfillment_types && item.fulfillment_types.includes(useOrder().fulfillment.method));
  }

  return items;
});

</script>

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