<template>
  <div class="flex flex-col lg:flex-row lg:mx-32 mt-4">
    <div class="flex-1 px-6 lg:px-3">
      <div class="mb-4">
        <CheckoutTip />
      </div>
      <div class="mb-4">
        <CheckoutContact />
      </div>
      <div class="mb-4">
        <CheckoutShipping v-if="useOrder().getFulfillment.method == 'delivery'"/>
      </div>
      <div class="mb-4 -mt-14">
        <CheckoutPay />
      </div>
    </div>
    <div class="flex-1 px-6 lg:px-3 bg-white">
      <CheckoutSummary />
    </div>
  </div>
</template>

<script setup>
if (!useLocations().getLocation.id) {
  useRouter().push('/');
} else if (!useOrder().getItems.length) {
  useRouter().push('/location/'+ useLocations().getLocation.name + '--' + useLocations().getLocation.id);
}
useOrder().setTip((useOrder().getOrder.total * 0.15).toFixed())
await useOrder().updateTotal()
</script>


