<template>
    <div class="px-2">
        <h2 class="text-base font-semibold leading-6 text-gray-900">Travels</h2>
        <p class="mt-1 text-sm text-gray-500">Manage your travels with us.</p>
        <ul role="list" class="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2">
            <li class="flow-root">
                <div
                    class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                    <div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-pink-500">
                        <GlobeEuropeAfricaIcon class="h-6 w-6 text-white"/>
                    </div>
                    <div>
                        <h3 class="text-sm font-medium text-gray-900">
                            <NuxtLink to="/travels" class="focus:outline-none">
                                <span class="absolute inset-0" aria-hidden="true"></span>
                                <span>View Travels</span>
                                <span aria-hidden="true"> &rarr;</span>
                            </NuxtLink>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">Discover every wonder our planet has to give.</p>
                    </div>
                </div>
            </li>
            <li class="flow-root">
                <div
                    class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                    <div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500">
                        <PlusIcon class="h-6 w-6 text-white"/>
                    </div>
                    <div>
                        <h3 class="text-sm font-medium text-gray-900">
                            <NuxtLink to="/travels/add" class="focus:outline-none">
                                <span class="absolute inset-0" aria-hidden="true"></span>
                                <span>Create a Travel</span>
                                <span aria-hidden="true"> &rarr;</span>
                            </NuxtLink>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">Let other join your journey and be the captain of your own
                            adventure.</p>
                    </div>
                </div>
            </li>
        </ul>

    </div>


    <div class="mt-8 px-2">
        <h2 class="text-base font-semibold leading-6 text-gray-900">Bookings</h2>
        <p class="mt-1 text-sm text-gray-500">See all the booked adventures.</p>
        <ul role="list" class="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2">
            <li class="flow-root">
                <div
                    class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                    <div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-pink-500">
                        <GlobeAmericasIcon class="h-6 w-6 text-white"/>
                    </div>
                    <div>
                        <h3 class="text-sm font-medium text-gray-900">
                            <NuxtLink to="/bookings" class="focus:outline-none">
                                <span class="absolute inset-0" aria-hidden="true"></span>
                                <span>View Bookings</span>
                                <span aria-hidden="true"> &rarr;</span>
                            </NuxtLink>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">Look all those people sailing to new adventures.</p>
                    </div>
                </div>
            </li>
            <li class="flow-root">
                <div
                    class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                    <div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500">
                        <PlusIcon class="h-6 w-6 text-white"/>
                    </div>
                    <div>
                        <h3 class="text-sm font-medium text-gray-900">
                            <NuxtLink to="/bookings/add" class="focus:outline-none">
                                <span class="absolute inset-0" aria-hidden="true"></span>
                                <span>Book a travel</span>
                                <span aria-hidden="true"> &rarr;</span>
                            </NuxtLink>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">Grab your baggages and be amazed by your next journey.</p>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script setup lang="ts">
import { GlobeEuropeAfricaIcon, GlobeAmericasIcon, PlusIcon } from '@heroicons/vue/24/solid'


</script>
