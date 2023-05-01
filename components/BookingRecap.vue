<template>
    <main>
        <section>
            <div>
                <div class="px-4 sm:px-0">
                    <h3 class="text-base font-semibold leading-7 text-gray-900">Travel information</h3>

                </div>
                <div class="mt-6">
                    <dl class="grid grid-cols-1 sm:grid-cols-2">
                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Name</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ travel.name }}</dd>
                        </div>

                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Rating</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ travel.rating }}</dd>
                        </div>
                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Dates</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ travel.departure }} - {{
                                travel.arrival }}</dd>
                        </div>
                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Price</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ travel.price }}</dd>
                        </div>
                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ travel.description }}</dd>
                        </div>

                    </dl>
                </div>
            </div>

        </section>


        <section class="border-t pt-4">
            <div>
                <div class="px-4 sm:px-0">
                    <h3 class="text-base font-semibold leading-7 text-gray-900">Customer information</h3>

                </div>
                <div class="mt-6">
                    <dl class="grid grid-cols-1 sm:grid-cols-2">
                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Name</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ customerInfo.name }} {{
                                customerInfo.surname }}</dd>
                        </div>

                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Email</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ customerInfo.email }}</dd>
                        </div>
                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Phone</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ customerInfo.phone }} </dd>
                        </div>
                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Age and gender</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ customerInfo.age }} ({{
                                customerInfo.gender }})</dd>
                        </div>


                    </dl>
                </div>
            </div>

        </section>
        <section class="border-t pt-4">
            <div>
                <div class="px-4 sm:px-0">
                    <h3 class="text-base font-semibold leading-7 text-gray-900">Payment</h3>

                </div>
                <div class="mt-6">
                    <dl class="grid grid-cols-1 sm:grid-cols-2">
                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Type</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ paymentInfo.type }}</dd>
                        </div>
                        <div class="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900">Notes</dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{{ notes }}</dd>
                        </div>



                    </dl>
                </div>
            </div>

        </section>

        <div class="flex justify-between mt-2">
            <Button type="button" @click="$emit('navigate:prev')">Prev</Button>

            <Button type="button" @click="$emit('navigate:end')">Confirm</Button>

        </div>
    </main>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { ICustomerInfo, IPaymentType } from '~/types/bookings';
const props = defineProps({
    travelId: {
        type: String,
        required: true
    },
    customerInfo: {
        type: Object as PropType<ICustomerInfo>,
        required: true
    },
    paymentInfo: {
        type: Object as PropType<IPaymentType>,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
})

defineEmits<{
    (e: 'navigate:end'): void
    (e: 'navigate:prev'): void
}>()

const { data } = await useFetch(`/api/travels/${props.travelId}`)

const travel = computed(() => {
    if (!data.value) return {}
    return {
        id: data.value?.id,
        arrival: formatTime(new Date(data.value.arrival)),
        departure: formatTime(new Date(data.value.departure)),
        image: data.value.image,
        name: data.value.name,
        description: data.value.description,
        price: `${data.value.price / 100} €`,
        rating: `${data.value.rating}/100`
    }

})

</script>
