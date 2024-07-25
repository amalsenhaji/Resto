<template>

    <div class="border-2 border-red-600 rounded-2xl h-50 w-9/10 p-4">
        <div class="text-xl font-semibold relative pl-2 pt-1">
            <span
                class="inline-block font-bold after:content-[''] after:block after:border-b-2 after:border-black after:absolute after:left-2 after:mt-1 after:w-full">Shipping
                Address</span>
        </div>
        <input ref="autocompleteInput" autocomplete="off"
            class="border-2 border-pink-200 rounded-2xl bg-pink-200 mt-5 w-full h-8 px-4 mb-0 focus:outline-none focus:shadow-none focus:border-transparent mx-0"
            placeholder="Address" type="text">
        <div class="flex justify-center mt-3">
            <input v-model="useOrder().fulfillment.address.floor" type="text" class="border-2 border-pink-200 rounded-2xl bg-pink-200   h-8 mt-1 mr-3.5 w-6/12  pl-2"
                placeholder="Floor #">
            <input v-model="useOrder().fulfillment.address.ext" type="text" class="border-2 border-pink-200  rounded-2xl bg-pink-200  h-8 mt-1 w-6/12  pl-2"
                placeholder="EXT/APT">
        </div>
        <input
            class="border-2 border-pink-200 rounded-2xl bg-pink-200 mt-5 w-full h-8 px-4 mb-0 focus:outline-none focus:shadow-none focus:border-transparent mx-0"
            placeholder="Delivery instructions" type="text" v-model="useOrder().fulfillment.instructions"/>
    </div>

</template>
<script setup lang="ts">
import { onMounted } from 'vue'
const address = ref({
    ext: '',
    floor: ''
})
const autocompleteInput = ref(null)
let autocomplete: google.maps.places.Autocomplete
const radiusInMeters = 5 * 1609.34 // 5 miles in meters
const centerCoordinates = { lat: useLocations().getLocation.address.coordinates.lat, lng: useLocations().getLocation.address.coordinates.lng }

onMounted(() => {
  if (!window.google) {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBSzgE464nQ5eqHIx8SGxg1dNukRVfDVzw&libraries=places&language=en`
    script.async = true
    script.defer = true
    script.onload = initAutocomplete
    document.head.appendChild(script)
  } else {
    initAutocomplete()
  }
})

const initAutocomplete = () => {
  if (autocompleteInput.value) {
    const options = {
      location: new google.maps.LatLng(centerCoordinates.lat, centerCoordinates.lng),
      radius: radiusInMeters,
      strictBounds: true
    }
    autocomplete = new google.maps.places.Autocomplete(autocompleteInput.value as HTMLInputElement, options)
    autocomplete.addListener('place_changed', onPlaceChanged)
  }
}

const onPlaceChanged = () => {
  const place = autocomplete.getPlace()
  const formattedAddress = formatPlaceDetails(place)
  useOrder().setAddress(formattedAddress)
  console.log('Formatted address:', address.value)
}

const formatPlaceDetails = (place: google.maps.places.PlaceResult) => {
  const addressComponents = place.address_components || []
  const getAddressComponent = (type: string) => addressComponents.find(component => component.types.includes(type))?.long_name || ''
  const coordinates = {
    lat: place.geometry?.location?.lat() || 0,
    lng: place.geometry?.location?.lng() || 0
  }

  return {
    street: `${getAddressComponent('street_number')} ${getAddressComponent('route')}`,
    city: getAddressComponent('locality'),
    state: getAddressComponent('administrative_area_level_1'),
    postcode: getAddressComponent('postal_code'),
    country: getAddressComponent('country'),
    coordinates
  }
}
</script>
