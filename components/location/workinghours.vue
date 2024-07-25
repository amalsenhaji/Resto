<template>
    <button @click="isOpen = true"
        class="text-white bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm px-8 py-2.5 text-center inline-flex items-center mr-5">
        {{ useOrder().getFulfillment.fulfillmentTime ? getformateddate(useOrder().getFulfillment.fulfillmentTime) :
        'Select Fulfillment Time' }}
    </button>
    <div v-if="isOpen" class="fixed inset-0 bg-gray-500 bg-opacity-50 z-10" @click.self="closeDialog">
        <div class="bg-white rounded shadow p-8 m-4 max-w-md mx-auto z-20">
            <div class="mb-4 text-center font-bold text-lg">Select fulfillment Time</div>
            <div class="mb-4">
                <div class="inline-flex w-full justify-between">
                    <button @click="useOrder().fulfillment.fulfillmentTime = 'ASAP'"
                        :class="['w-1/2 py-2 border border-gray-200 rounded-l-lg', activeClass('ASAP')]">ASAP</button>
                    <button @click="useOrder().fulfillment.fulfillmentTime = selecteddatetime"
                        :class="['w-1/2 py-2 border border-gray-200 rounded-r-lg', activeClass()]">LATER</button>
                </div>
                <VueDatePicker v-if="useOrder().getFulfillment.fulfillmentTime !== 'ASAP'" :timezone="location.timezone"
                    :min-date="new Date()" :disabled-week-days="disabledweekdays" :disabled-dates="disabledDate"
                    :disabled-times="getActiveHoursForDay(selecteddatetime)" :config="config" v-model="selecteddatetime"
                    auto-apply time-picker-inline
                    class="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  mt-3">
                </VueDatePicker>

            </div>
            <button @click="submit()"
                class="w-full text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-4 py-2.5">Submit</button>
        </div>
    </div>
</template>
<script setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
const location = useLocations().getLocation
const selecteddatetime = ref(new Date())
selecteddatetime.value.setHours(selecteddatetime.value.getHours() + 1)
const isOpen = ref(false)
const closeDialog = () => {
    if (isOpen.value) {
        isOpen.value = false
    }
};
const config = {
    closeOnClearValue: false,
    closeOnAutoApply: false
}
const activeClass = (val) => {
    if (val === 'ASAP') {
        if (val === useOrder().getFulfillment.fulfillmentTime) {
            return 'text-white bg-red-600 hover:bg-red-700'
        } else {
            return 'text-gray-900 bg-white hover:bg-red-200'
        }
    } else {
        if (useOrder().getFulfillment.fulfillmentTime !== 'ASAP') {
            return 'text-white bg-red-600 hover:bg-red-700'
        } else {
            return 'text-gray-900 bg-white hover:bg-red-200'
        }
    }
};
const disabledweekdays = location.workinghours.hours.filter(d => !d.open).map(el => location.workinghours.hours.indexOf(el))
const disabledDate = (datetime) => {
    const day = datetime.getFullYear() + '-' + ((datetime.getMonth() + 1) > 9 ? (datetime.getMonth() + 1) : '0' + (datetime.getMonth() + 1)) + '-' + datetime.getDate()
    return !!location.workinghours.hdays.find(d => d == day)
}
const disabledTime = (datetime) => {
    let isOpen = false
    const date = new Date(selecteddatetime.value)
    date.setHours(datetime.hours, datetime.minutes, datetime.seconds)
    const todayHours = useLocations().getLocation.workinghours.hours[date.getDay()].hours
    isOpen = todayHours.find(hour => {
        const start = new Date((date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + hour.from).toLocaleString('en-US', { timeZone: useLocations().getLocation.timezone }))
        const end = new Date((date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + hour.to).toLocaleString('en-US', { timeZone: useLocations().getLocation.timezone }))
        return start < date && end > date
    })
    return !isOpen
}

const getActiveHoursForDay = (x) => {
    const dayIndex = new Date(x.value || x).getDay();
    const todayHours = location.workinghours.hours[dayIndex].hours

    const activeHours = []
    const closedHours = []

    for (let hour = 0; hour < 24; hour++) {
        let isActive = false

        todayHours.forEach(range => {
            const fromHour = parseInt(range.from.split(':')[0], 10)
            const toHour = parseInt(range.to.split(':')[0], 10)

            if (hour >= fromHour && hour <= toHour) {
                activeHours.push({ hours: hour, minutes: '*' })
                isActive = true
            }
        });

        if (!isActive) {
            closedHours.push({ hours: hour, minutes: '*' })
        }
    }

    return closedHours
};


const submit = () => {
    if (disabledDate(selecteddatetime.value)) {
        console.log('closed')
        return
    }
    if (disabledTime({ hours: selecteddatetime.value.getHours(), minutes: selecteddatetime.value.getMinutes(), seconds: selecteddatetime.value.getSeconds() })) {
        console.log('closed')
        return
    }
    useOrder().fulfillment.fulfillmentTime = selecteddatetime.value
    closeDialog()
}
const getformateddate = (date) => {
    if (date == 'ASAP') {
        return 'ASAP'
    }
    return new Intl.DateTimeFormat('default', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour12: false,
        hour: 'numeric',
        minute: 'numeric'
    }).format(new Date(date))
}
</script>