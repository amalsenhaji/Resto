<template>
  <div class="flex flex-col items-center bg-white p-4 border-2 border-red-600 rounded-lg  mx-auto mb-[10vh]">

    <h1 class="text-2xl font-bold mb-2 ">{{ useLocations().getLocation.name }}</h1>
    <div class="w-full mb-4">
      <div class="flex items-start mb-3" v-for="(item, index) in items" :key="index">
        <div class="flex flex-col flex-grow">
          <span class="text-gray-700 text-lg">{{ item.name }}</span>
          <span v-for="(modifier, index) in item.modifiers" :key="index">
            <span class="text-gray-700 text-sm mb-0">{{ modifier.name }}:</span>
            <br /><span v-for="(mit, index) in modifier.items" :key="index" class="mt-0 text-gray-600 text-sm">{{
      mit.quantity }}*{{ mit.name }}, </span>
          </span>
          <button @click="removeItem(item)" class="text-red-600 text-sm mt-2 " style="margin-right:12rem;">X
            Remove</button>
        </div>
        <span class="text-gray-700 text-lg font-bold self-end">${{ (item.subTotal / 100).toFixed(2) }}</span>
      </div>
    </div>

    <div class="w-full">
      <div class="flex justify-between">
        <span>Subtotal</span>
        <span>${{ (useOrder().getOrder.subTotal / 100).toFixed(2) }}</span>
      </div>
      <div class="flex justify-between">
        <span>Tip</span>
        <span>${{ (useOrder().getFulfillment.tip / 100).toFixed(2) }}</span>
      </div>
      <div class="flex justify-between">
        <span>Fulfillment fee ({{ useOrder().getFulfillment.method }})</span>
        <span>${{ (useOrder().getFulfillment.fee / 100).toFixed(2) }}</span>
      </div>
      <div class="flex justify-between" v-for="(service, index) in useOrder().getOrder.services" :key="index">
        <span>{{ service.name }}</span>
        <span>${{ (service.price / 100).toFixed(2) }}</span>
      </div>
      <div class="flex justify-between mb-4">
        <span>SalesTax</span>
        <span>${{ (useOrder().getOrder.salesTax / 100).toFixed(2) }}</span>
      </div>
    </div>

    <div class="w-full flex justify-between items-center font-bold text-lg mb-4">
      <span>Total</span>
      <span>${{ (useOrder().getOrder.total / 100).toFixed(2) }}</span>
    </div>

    <button @click="toLocation" class="text-center bg-red-600 text-white py-2 px-4 rounded-full w-full mb-2">
      Add More Items
    </button>
    <span class="text-gray-700 mb-2">Or</span>
    <div class="flex items-center mt-5 ml-1">
      <div class="w-5 h-5 bg-red-600 rounded-full mr-2"></div>
      <span class="text-lg font-semibold">Credit or Debit</span>
    </div>

    <input type="text" class="border-2 border-pink-200 bg-pink-200 rounded-2xl mt-3 mx-1 w-11/12 h-8 pl-2" placeholder="Cardholder Name" v-model="cardholderName">

    <div class="relative mt-4 mx-1 w-11/12">
      <input type="text" class="border-2 border-pink-200 bg-pink-200 rounded-2xl w-full h-8 pl-2" placeholder="Card Number" v-model="cardNumber" @input="detectCardType">
      <div class="absolute right-6 top-1/2 transform -translate-y-1/2 flex">
        <div v-if="cardType" class="flex items-center">
          <img :src="cardTypeImage" alt="Card Type" class="h-6 ml-2">
        </div>
      </div>
    </div>

    <div class="flex justify-start space-x-1.5">
      <input type="text" class="border-2 border-pink-200 bg-pink-200 rounded-2xl mt-5 w-[85px] md:w-[12vw] h-8 pl-2" placeholder="EXP Date" v-model="expDate">
      <input type="text" class="border-2 border-pink-200 bg-pink-200 rounded-2xl mt-5 w-[85px] md:w-[12vw] h-8 pl-2" placeholder="CVC" v-model="cvc">
      <input type="text" class="border-2 border-pink-200 bg-pink-200 rounded-2xl mt-5 w-[85px] md:w-[12vw] h-8 pl-2" placeholder="ZipCode" v-model="zipCode">
    </div>

    <button @click="checkout" class="bg-red-600 text-white py-2 px-4 rounded-full w-full mt-[3vh]">
      Checkout
    </button>
    <div v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import creditCardType from 'credit-card-type'

const items = useOrder().getItems
const cardNumber = ref('')
const cardType = ref(null)
const cardTypeImage = ref('')
const errorMessage = ref('')
const cardholderName = ref('')
const cvc = ref('')
const expDate = ref('')
const zipCode = ref('')


const detectCardType = () => {
  const types = creditCardType(cardNumber.value)
  if (types.length > 0) {
    cardType.value = types[0].type
    cardTypeImage.value = getCardTypeImage(cardType.value)
  } else {
    cardType.value = null
    cardTypeImage.value = ''
  }
}

const getCardTypeImage = (type) => {
  const cardImages = {
    visa: "/Visalogo.png",
    mastercard: '/Masterlogo.png',
    'american-express': '/Amexlogo.png',
    discover: '/Discoverlogo.png',
    diners: '/Dinerslogo.png',
    jcb: '/JCLogo.png',
    unionpay: '/UnionPaylogo.png',
    maestro: '/Maestrologo.png',
    elo: '/Elologo.png',
    mir: '/Mirlogo.png',
    hiper: '/Hiperlogo.png',
    hipercard: '/Hipercardlogo.png'
  }
  return cardImages[type] || ''
}

const removeItem = async (item) => {
  useOrder().removeItem(item)
  await useOrder().updateTotal()
}
const toLocation = () => {
  useRouter().push('/location/' + useLocations().getLocation.name + '--' + useLocations().getLocation.id)
}

const checkout = () => {
  const fulfillmentContact = useOrder().fulfillment.contact
  const fulfillmenttime = useOrder().fulfillment.fulfillmentTime
  const fulfillmentmethod = useOrder().fulfillment.method


  if (fulfillmentmethod == "delivery") {
    const now = new Date()
    const fulfillmentDate = new Date(fulfillmenttime)

    const timeDifference = (fulfillmentDate - now) / (1000 * 60 * 60)
      console.log(timeDifference)
    if (timeDifference <= 1) {
      errorMessage.value = 'Fulfillment time must be more than 1 hour from now'
      return
    }
  }
  if (!fulfillmentContact.name) {
    errorMessage.value = 'Contact name is required'
    return;
  }

  if (!fulfillmentContact.email) {
    errorMessage.value = 'Contact email is required'
    return
  }

  if (!fulfillmentContact.phone) {
    errorMessage.value = 'Contact phone is required'
    return
  }
  if (items.length == 0) {
    errorMessage.value = 'At Least One Item is required'
    return
  }
  if (cardNumber.value.length !== 16) {
    errorMessage.value = 'Card number must be 16 digits long'
    return
  }
  if (!cardholderName.value) {
    errorMessage.value = 'Cardholder name is required'
    return
  }
  const cvcRegex = /^[0-9]{3,4}$/
  if (!cvcRegex.test(cvc.value)) {
    errorMessage.value = 'CVC must be 3 or 4 digits long'
    return
  }

  const expDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/
  if (!expDateRegex.test(expDate.value)) {
    errorMessage.value = 'Expiration date must be in MM/YY format'
    return
  }
  if (!zipCode.value) {
    errorMessage.value = 'ZIP code is required'
    return
  }
  
  const [month, year] = expDate.value.split('/')

  const checkoutData = {
    amount: useOrder().getOrder.total,
    card: {
      name: cardholderName.value,
      number: cardNumber.value,
      month,
      year,
      verification: cvc.value,
      address_postal_code: zipCode.value,
    },
    method: "card",
    merchant_id: ""
  }

  console.log(checkoutData)
  
}
</script>

<style>
  input:focus {
    outline: none !important;
    border: 2px solid pink !important; 
    box-shadow: none !important;
  }
</style>
