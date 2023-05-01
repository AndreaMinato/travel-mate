<template>
    <nav aria-label="Progress">
        <ol role="list" class="space-y-4 md:flex md:space-x-8 md:space-y-0">
            <li class="md:flex-1">
                <!-- Completed Step -->
                <div class="group flex flex-col border-l-4  py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                    :class="{
                        'border-gray-200': upcomingSteps.includes('select-travel'),
                        'border-indigo-600': !upcomingSteps.includes('select-travel')
                    }">
                    <span class="text-sm font-medium" :class="{
                            'text-gray-500': upcomingSteps.includes('select-travel'),
                            'text-indigo-600': !upcomingSteps.includes('select-travel')
                        }">Step 1</span>
                    <span class="text-sm font-medium">Select travel</span>
                </div>
            </li>
            <li class="md:flex-1">
                <!-- Current Step -->
                <div class="flex flex-col border-l-4 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4" :class="{
                        'border-gray-200': upcomingSteps.includes('customer-info'),
                        'border-indigo-600': !upcomingSteps.includes('customer-info')
                    }">
                    <span class="text-sm font-medium" :class="{
                            'text-gray-500': upcomingSteps.includes('customer-info'),
                            'text-indigo-600': !upcomingSteps.includes('customer-info')
                        }">Step 2</span>
                    <span class="text-sm font-medium">Customer info</span>
                </div>
            </li>
            <li class="md:flex-1">
                <!-- Upcoming Step -->
                <div class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                    :class="{
                            'border-gray-200': upcomingSteps.includes('payment-type'),
                            'border-indigo-600': !upcomingSteps.includes('payment-type')
                        }">
                    <span class="text-sm font-medium" :class="{
                            'text-gray-500': upcomingSteps.includes('payment-type'),
                            'text-indigo-600': !upcomingSteps.includes('payment-type')
                        }">Step 3</span>
                    <span class="text-sm font-medium">Payment type</span>
                </div>
            </li>
            <li class="md:flex-1">
                <!-- Upcoming Step -->
                <div class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                    :class="{
                            'border-gray-200': upcomingSteps.includes('recap'),
                            'border-indigo-600': !upcomingSteps.includes('recap')
                        }">
                    <span class="text-sm font-medium" :class="{
                            'text-gray-500': upcomingSteps.includes('recap'),
                            'text-indigo-600': !upcomingSteps.includes('recap')
                        }">Step 4</span>
                    <span class="text-sm font-medium">Recap</span>
                </div>
            </li>
        </ol>
    </nav>

    <main class="mx-auto max-w-3xl pt-12">
        <BookingSelectTravel v-if="step == 'select-travel'" v-model:travel="travelId" @navigate:next="nextStep" />
        <BookingFillCustomerInfo v-if="step == 'customer-info'" @navigate:next="nextStep" @navigate:prev="previousStep"
            v-model:customer-info="customerInfo" />
        <BookingSelectPaymentType v-if="step == 'payment-type'" @navigate:next="nextStep" @navigate:prev="previousStep"
            v-model:payment-info="paymentInfo" v-model:notes="notes" />
        <BookingRecap :customer-info="customerInfo" :payment-info="paymentInfo" :travel-id="travelId" :notes="notes"
            v-if="step == 'recap'" @navigate:prev="previousStep" @navigate:end="bookAndClose" />


    </main>
</template>

<script setup lang="ts">
import { IBooking, ICustomerInfo, IPaymentType } from '~/types/bookings';
onMounted(() => {
    window.addEventListener("beforeunload", preventBrowserNavigation)
})
onUnmounted(() => {
    window.removeEventListener("beforeunload", preventBrowserNavigation)
})

function preventBrowserNavigation(event: BeforeUnloadEvent) {
    event.preventDefault()
    event.returnValue = ""
}

const confirmed = ref<boolean>(false)
onBeforeRouteLeave((from, to, next) => {

    if (confirmed.value) {
        next();
        return;
    }

    if (confirm(("You may lose unconfirmed changes, are you sure?"))) {
        next();
    } else {
        next(false);
    }
})


const AllSteps = [
    'select-travel', 'customer-info', 'payment-type', 'recap'
] as const

type Steps = typeof AllSteps[number];

const step = ref<Steps>("select-travel")

const upcomingSteps = ref<Array<Steps>>(['customer-info', 'payment-type', 'recap'])

function nextStep() {
    const _nextStep = upcomingSteps.value.shift()
    if (_nextStep) {
        step.value = _nextStep;
    }
}
function previousStep() {
    upcomingSteps.value.unshift(step.value)

    const idx = AllSteps.indexOf(step.value)
    const _step = AllSteps.at(idx - 1)
    if (_step) {
        step.value = _step;
    }

}

const travelId = ref<string>("")


const customerInfo = ref<ICustomerInfo>({
    name: "",
    surname: "",
    phone: "",
    email: "",
    gender: "Non Bynary",
    age: ""
});

const paymentInfo = ref<IPaymentType>({
    type: "",
})

const notes = ref<string>("")

const router = useRouter()
async function bookAndClose() {

    const body: IBooking = {
        _travelId: travelId.value,
        payment: paymentInfo.value,
        userInfo: customerInfo.value,
        notes: notes.value,
        id: ""
    }

    try {

        await $fetch("/api/bookings/", {
            method: "post",
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        confirmed.value = true;
        router.replace('/bookings')
    } catch {

    }

}

</script>
