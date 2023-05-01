<template>
    <form @submit.prevent="submit">


        <div class="space-y-12 sm:space-y-16">
            <div class="flex items-center justify-between">
                <h2 class="text-sm font-medium leading-6 text-gray-900">Payment type</h2>

            </div>

            <fieldset class="mt-2">
                <legend class="sr-only">Choose a payment type</legend>
                <div class="grid grid-cols-3 gap-3">
                    <label
                        class=" flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1 cursor-pointer focus:outline-none"
                        :class="props.paymentInfo.type === 'CreditTransfer' ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50'">
                        <input type="radio" v-model="props.paymentInfo.type" name="memory-option" value="CreditTransfer"
                            class="sr-only" aria-labelledby="memory-option-0-label">
                        <span id="memory-option-0-label">Credit transfer</span>
                    </label>

                    <label
                        class=" flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1 cursor-pointer focus:outline-none"
                        :class="props.paymentInfo.type === 'Paypal' ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50'">
                        <input type="radio" v-model="props.paymentInfo.type" name="memory-option" value="Paypal"
                            class="sr-only" aria-labelledby="memory-option-1-label">
                        <span id="memory-option-1-label">Paypal</span>
                    </label>
                    <label
                        class=" flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1 cursor-pointer focus:outline-none"
                        :class="props.paymentInfo.type === 'Revolut' ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50'">
                        <input type="radio" v-model="props.paymentInfo.type" name="memory-option" value="Revolut"
                            class="sr-only" aria-labelledby="memory-option-2-label">
                        <span id="memory-option-2-label">Revolut</span>
                    </label>

                </div>
            </fieldset>
        </div>



        <section v-if="props.paymentInfo.type === 'CreditTransfer'" class="space-y-12 sm:space-y-16">
            <div>

                <div
                    class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name"
                            class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Name</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <input v-model="props.paymentInfo.name" type="text" name="first-name" id="first-name" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="Card number" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Card
                            number</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <input type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number"
                                maxlength="19" placeholder="xxxx xxxx xxxx xxxx" v-model="props.paymentInfo.cardNumber"
                                name="Card number" id="Card number" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="cvc" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">CVC</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <input type="tel" inputmode="numeric" autocomplete="cc-number" maxlength="3" placeholder="xxx"
                                pattern="[0-9\s]{3}" v-model="props.paymentInfo.cvc" name="cvc" id="cvc" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        </div>
                    </div>




                </div>
            </div>


        </section>
        <section v-if="props.paymentInfo.type === 'Paypal'" class="space-y-12 sm:space-y-16">
            <div>

                <div
                    class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Email</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <input v-model="props.paymentInfo.email" type="email" name="email" id="email" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section v-if="props.paymentInfo.type === 'Revolut'" class="space-y-12 sm:space-y-16">
            <div>

                <div
                    class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="account"
                            class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Account</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <input v-model="props.paymentInfo.accountName" type="text" name="account" id="account" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label for="notes" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Notes</label>
            <div class="mt-2 sm:col-span-2 sm:mt-0">
                <textarea required v-model="notesInfo" id="notes" name="notes" rows="3"
                    class="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                <p class="mt-3 text-sm leading-6 text-gray-600">Tell us everything we need to know.</p>
            </div>
        </div>

        <div class="flex justify-between mt-2">
            <Button type="button" @click="$emit('navigate:prev')">Prev</Button>
            <Button type="submit" :disabled="disabled">Next</Button>
        </div>
    </form>
</template>


<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';
import Button from '~/components/Button.vue';
import { IPaymentType } from '~/types/bookings';

const emits = defineEmits<{
    (e: 'update:payment-info', info: IPaymentType): void
    (e: 'update:notes', value: string): void
    (e: 'navigate:next'): void
    (e: 'navigate:prev'): void
}>()


const props = defineProps({
    paymentInfo: {
        type: Object as PropType<IPaymentType>,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    }
})

const notesInfo = ref<string>(props.notes)


const disabled = computed(() => {

    if (props.paymentInfo.type === "CreditTransfer") {
        if (!props.paymentInfo.name) return true
        if (!props.paymentInfo.cvc) return true
        if (!props.paymentInfo.cardNumber) return true

        return false
    }
    else if (props.paymentInfo.type === "Paypal") {
        if (!props.paymentInfo.email) return true

        return false
    }
    else if (props.paymentInfo.type === "Revolut") {
        if (!props.paymentInfo.accountName) return true

        return false
    }
    else {
        return true
    }

})


async function submit() {
    if (disabled.value) return;
    emits('update:notes', notesInfo.value)
    emits('navigate:next')

}



</script>
