<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-base font-semibold leading-6 text-gray-900">Travels</h1>
                <p class="mt-2 text-sm text-gray-700">Look at all those awesome places.</p>
            </div>
            <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <NuxtLink to="/travels/add">
                    <button type="button"
                        class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add
                        travel</button>
                </NuxtLink>
            </div>
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
                                        <div class="h-11 w-11 flex-shrink-0">
                                            <NuxtImg class="h-11 w-11 rounded-full" v-if="travel.image" :src="travel.image"
                                                :alt="travel.name" />
                                        </div>
                                        <div class="ml-4">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ITravel } from "~/types/travels"
import {formatTime} from '~/utils/DateTime'

const { data } = await useFetch<Array<ITravel>>('/api/travels/')

const travels = computed(() => {
    return data.value?.map(travel => {
        return {
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

</script>
