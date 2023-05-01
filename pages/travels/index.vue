<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">Travels</h1>
                <p class="mt-2 text-sm text-gray-700">Look at all those awesome places.</p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <NuxtLink to="/travels/add">
                    <Button type="button">Add
                        travel</Button>
                </NuxtLink>
            </div>
        </div>
        <div class="mt-6">
            <h2 class="text-base font-semibold leading-6 text-gray-900">Search</h2>
            <form class="flex gap-2" @submit.prevent="load()">
                <input v-model="search" type="search" name="search" id="search" autocomplete="off"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">

                <div class="mt-2 sm:col-span-2 sm:mt-0 flex-col md:flex-row flex gap-2">
                    <input type="datetime-local" v-model="departure" :max="arrival" name="departure" id="departure"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <input type="datetime-local" v-model="arrival" :min="departure" name="arrival" id="arrival"
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                </div>

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
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Dates</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Rating
                                </th>
                                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <tr v-for="travel in travels" :key="travel.id">
                                <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                    <div class="flex items-center">
                                        <div class="">
                                            <div class="font-medium text-gray-900">{{ travel.name }}</div>
                                            <div class="mt-1 text-gray-500">{{ travel.description }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                    <div class="text-gray-900">{{ travel.departure }} - {{ travel.arrival }}</div>

                                </td>
                                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                    <span
                                        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{{
                                            travel.price }}</span>
                                </td>
                                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ travel.rating }}</td>
                                <td
                                    class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                    <NuxtLink :to="`/travels/${travel.id}`" class="text-indigo-600 hover:text-indigo-900">
                                        Edit<span class="sr-only">, {{ travel.name }}</span></NuxtLink>
                                </td>
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
import type { ITravel } from "~/types/travels"
import { formatTime } from '~/utils/DateTime'
import { useRouteQuery } from "@vueuse/router";

const search = useRouteQuery<string>("search", "");
const arrival = useRouteQuery<string>("arrival", "");
const departure = useRouteQuery<string>("departure", "");
const page = useRouteQuery<string>("page", "0");
const pageNr = computed(() => Number(page.value));

const loading = ref<boolean>(false)
const fetched = ref<Array<ITravel>>([])


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

        const { data } = await useFetch<Array<ITravel>>(`/api/travels`, {
            query: {
                name: search.value,
                departure: departure.value,
                arrival: arrival.value,
                page: page.value,

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

const travels = computed(() => {
    return fetched.value.map(travel => {
        return {
            id: travel.id,
            arrival: formatTime(new Date(travel.arrival)),
            departure: formatTime(new Date(travel.departure)),
            image: travel.image,
            name: travel.name,
            description: travel.description,
            price: `${travel.price / 100} €`,
            rating: `${travel.rating}/100`
        }
    })
})

await load(false);

</script>
