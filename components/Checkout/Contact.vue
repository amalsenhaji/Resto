<template>

    <div class="border-2 border-red-600 rounded-2xl h-50 w-9/10 p-4">
        <button class="bg-red-600 text-white py-2 px-4 rounded-full w-full mb-4">
            Sign in Now! For faster checkout
        </button>
        <div class="text-xl font-semibold relative pl-2 pt-1">
            <span
                class="inline-block font-bold after:content-[''] after:block after:border-b-2 after:border-black after:absolute after:left-2 after:mt-1 after:w-full">Contact
                Informations</span>
        </div>
        <input
            class="border-2 border-pink-200 rounded-2xl bg-pink-200 mt-5 w-full h-8 px-4 mb-0 focus:outline-none focus:shadow-none focus:border-transparent mx-0"
            placeholder="Your full name" type="text" v-model="useOrder().fulfillment.contact.name"/>
        <div class="flex justify-center mt-3">
            <input type="email" class="border-2 border-pink-200 rounded-2xl bg-pink-200   h-8 mt-1 mr-3.5 w-6/12  pl-2"
                placeholder="Your email" v-model="useOrder().fulfillment.contact.email"/>
            <input type="tel" class="border-2 border-pink-200  rounded-2xl bg-pink-200  h-8 mt-1 w-6/12  pl-2"
                placeholder="Phone number #" v-model="useOrder().fulfillment.contact.phone"/>
        </div>
        
    </div>

</template>