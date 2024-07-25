<template>
  <header class="relative">
    <nav class="bg-white w-full top-3 start-0">
      <div class="flex justify-between items-center w-full px-4 py-2">
        <div class="ml-4">
          <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="public/logo.png" class="h-8" alt="Resto Logo">
          </NuxtLink>
        </div>

        <div class="relative">
          <svg @click="handleClick" id="avatarButton" src="/docs/images/people/profile-picture-5.jpg" alt="User dropdown" class="w-10 h-10 text-red-600 dark:text-white mr-3 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd"
              d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
              clip-rule="evenodd" />
          </svg>

          <div v-if="user" id="loggedin"
            class="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            v-show="showDropdown">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
              <li>
                <NuxtLink to="/profile" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</NuxtLink>
              </li>
              <li>
                <a @click="signout" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
              </li>
            </ul>
          </div>
          <div v-else id="loggedout"
            class="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            v-show="showDropdown">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const user = useSupabaseUser();
const showDropdown = ref(false);
const router = useRouter();

const handleClick = () => {
  if (user.value) {
    showDropdown.value = !showDropdown.value;
  } else {
    showDropdown.value = !showDropdown.value;
  }
};

const signout = async () => {
  await useBusiness().signOut()
  useRouter().push('/')
}

</script>