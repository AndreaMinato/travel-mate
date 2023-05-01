<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">Bookings</h1>
                <p class="mt-2 text-sm text-gray-700">So many adventurous people booked with us.</p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <NuxtLink to="/bookings/add">
                    <Button type="button">Book with us</Button>
                </NuxtLink>
            </div>
        </div>
        <div class="mt-6">
            <h2 class="text-base font-semibold leading-6 text-gray-900">Search</h2>
            <form class="flex gap-2" @submit.prevent="load(true)">
                <input v-model="search" type="text" name="search" id="search" autocomplete="off"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">

                <Button :disabled="loading" type="submit" class="ml-auto">Search
                </Button>

            </form>
        </div>
        <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col"
                                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Travel
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">User</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Payment
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Notes
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="booking in fetched" :key="booking.id">
                                <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                    <div class="flex items-center">
                                        <div class="">
                                            <div class="font-medium text-gray-900">{{ booking.travel.name }}</div>

                                        </div>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                    <div class="text-gray-900">{{ booking.userInfo.email }}</div>

                                </td>
                                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                    <span
                                        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{
                                            booking.payment.type }}</span>
                                </td>
                                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ booking.notes }}</td>

                            </tr>

                        </tbody>
                    </table>
                    <nav class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
                        aria-label="Pagination">

                        <div class="flex flex-1 justify-between sm:justify-end">
                            <button @click="previous" :disabled="loading || pageNr <= 0"
                                class="disabled:opacity-50 relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Previous</button>
                            <button @click="next" :disabled="loading"
                                class="disabled:opacity-50 relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">Next</button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from "~/components/Button.vue"
import { formatTime } from '~/utils/DateTime'
import { useRouteQuery } from "@vueuse/router";
import { IBookingWithTravel } from "~/types/bookings";

const search = useRouteQuery<string>("search", "");
const page = useRouteQuery<string>("page", "0");
const pageNr = computed(() => Number(page.value));

const loading = ref<boolean>(false)
const fetched = ref<Array<IBookingWithTravel>>([])


async function previous() {
    page.value = Math.max(0, Number(page.value) - 1).toString();
    await load(false);
}
async function next() {
    page.value = (Number(page.value) + 1).toString();
    await load(false);
}


async function load(resetPage = true) {
    if (loading.value) return
    loading.value = true;

    if (resetPage) {
        page.value = '0'
    }

    try {

        const { data } = await useFetch(`/api/bookings`, {
            query: {
                name: search.value,
                page: page.value
            }
        })
        if (data.value) {
            fetched.value = data.value
        } else {
            fetched.value = []
        }
    } catch { }
    loading.value = false;
}


await load(false);

</script>
