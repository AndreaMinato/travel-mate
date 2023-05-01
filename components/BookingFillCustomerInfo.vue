<template>
    <form @submit.prevent="submit">
        <div class="space-y-12 sm:space-y-16">
            <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">New travel</h2>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">Tell us about you.</p>

                <div
                    class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name"
                            class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Name</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <input v-model="props.customerInfo.name" type="text" name="first-name" id="first-name" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="surname"
                            class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Surname</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <input v-model="props.customerInfo.surname" type="text" name="surname" id="surname" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Email</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <input v-model="props.customerInfo.email" type="email" name="email" id="email" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="phone" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Phone</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <input v-model="props.customerInfo.phone" type="tel" name="phone" id="phone" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="age" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Age</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <select v-model="props.customerInfo.age" name="age" id="age" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option value="" disabled>-</option>
                                <option>18-24</option>
                                <option>25-30</option>
                                <option>31-40</option>
                                <option>41-50</option>
                                <option>50+</option>
                            </select>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="gender"
                            class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Gender</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <select v-model="props.customerInfo.gender" name="gender" id="gender" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option>Male</option>
                                <option>Female</option>
                                <option>Non Bynary</option>
                            </select>
                        </div>
                    </div>


                </div>
            </div>


        </div>

        <div class="flex justify-between mt-2">
            <Button type="button" @click="$emit('navigate:prev')">Prev</Button>
            <Button :disabled="disabled" type="submit">Next</Button>
        </div>
    </form>
</template>


<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';

import Button from '~/components/Button.vue';
import { ICustomerInfo } from '~/types/bookings';

const emits = defineEmits<{
    (e: 'update:customer-info', info: ICustomerInfo): void
    (e: 'navigate:next'): void
    (e: 'navigate:prev'): void
}>()


const props = defineProps({
    customerInfo: {
        type: Object as PropType<ICustomerInfo>,
        required: true,
    }
})



const disabled = computed(() => {

    if (!props.customerInfo.name) return true
    if (!props.customerInfo.surname) return true
    if (!props.customerInfo.phone) return true
    if (!props.customerInfo.email) return true
    if (!props.customerInfo.age) return true
    if (!props.customerInfo.gender) return true

    return false
})



const router = useRouter()

async function submit() {
    if (disabled.value) return;
    emits('navigate:next')

}



</script>
