<template>
    

<div class="border-2 border-red-600 rounded-2xl h-70 w-9/10 mt-20 mx-auto p-2.5">
    <div class="text-2xl font-semibold relative">
        <span class="inline-block font-bold after:block after:border-b-2 after:border-black after:w-full after:absolute after:left-0 after:mt-1 after:shadow">Payment Methods</span>
    </div>
    <div class="flex items-center mt-5 ml-1">
        <div class="w-5 h-5 bg-red-600 rounded-full mr-2"></div>
        <span class="text-lg font-semibold">Credit or Debit</span>
    </div>

    <input type="text" class="border-2 border-pink-200 bg-pink-200 rounded-2xl mt-3 mx-1 w-11/12 h-8 pl-2" placeholder="Cardholder Name">
    <div class="relative mt-4 mx-1 w-11/12">
        <input type="text" class="border-2 border-pink-200 bg-pink-200 rounded-2xl w-full h-8 pl-2" placeholder="Card Number">
        <div class="absolute right-6 top-1/2 transform -translate-y-1/2 flex">
            <div class="w-4 h-4 bg-red-400 rounded-full -mr-2"></div>
            <div class="w-4 h-4 bg-red-600 rounded-full ml-1"></div>
        </div>
    </div>

    <div class="flex justify-start -mt-1 mr-1/3 ">
        <input type="text" class="border-2 border-pink-200 bg-pink-200 rounded-2xl mt-5 mx-1/2 mr-4 w-32 h-8 pl-2" placeholder="EXP Date">
        <input type="text" class="border-2 border-pink-200 bg-pink-200 rounded-2xl mt-5  mx-1/2 w-32 h-8 pl-2" placeholder="CVC">
    </div>
</div>
</template>

<style>
  input:focus {
    outline: none !important;
    border: 2px solid pink !important; 
    box-shadow: none !important;
  }
</style>
