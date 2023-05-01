<template>
    <!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-100">
  <body class="h-full">
  ```
-->
    <div class="min-h-full">
        <nav class="bg-white shadow-sm">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 justify-between">
                    <div class="flex">
                        <div class="flex flex-shrink-0 items-center">
                            <img class="block h-8 w-auto lg:hidden"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
                            <img class="hidden h-8 w-auto lg:block"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
                        </div>
                        <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <!-- Current: "border-indigo-500 text-gray-900", Default: "" -->
                            <NuxtLink to="/"
                                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                                active-class="router-active" aria-current-value="page">Dashboard
                            </NuxtLink>
                            <NuxtLink to="/travels" aria-current-value="page" active-class="router-active"
                                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                                Travels</NuxtLink>
                            <NuxtLink to="/bookings" aria-current-value="page" active-class="router-active"
                                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">
                                Bookings</NuxtLink>

                        </div>
                    </div>

                    <div class="-mr-2 flex items-center sm:hidden">
                        <!-- Mobile menu button -->
                        <button type="button" @click="menuOpen = !menuOpen"
                            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <!-- Menu open: "hidden", Menu closed: "block" -->
                            <XMarkIcon class="block h-6 w-6" v-show="menuOpen" />
                            <Bars3Icon class="block h-6 w-6" v-show="!menuOpen" />
                            <!-- Menu open: "block", Menu closed: "hidden" -->

                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden" id="mobile-menu" v-show="menuOpen">
                <div class="space-y-1 pb-3 pt-2">

                    <NuxtLink to="/"
                        class="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                        aria-current-value="page" active-class="router-active-mobile">Dashboard</NuxtLink>
                    <NuxtLink to="/travels"
                        class="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                        aria-current-value="page" active-class="router-active-mobile">
                        Travels</NuxtLink>
                    <NuxtLink to="/bookings"
                        class="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                        aria-current-value="page" active-class="router-active-mobile">
                        Bookings</NuxtLink>

                </div>

            </div>
        </nav>

        <div class="py-10">
            <main>
                <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <NuxtLoadingIndicator/>
                    <NuxtPage />
                </div>
            </main>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/solid";

const menuOpen = ref<boolean>(false)

</script>

<style>
.router-active {
    @apply border-indigo-500 text-gray-900
}

.router-active-mobile {
    @apply border-indigo-500 bg-indigo-50 text-indigo-700
}
</style>
