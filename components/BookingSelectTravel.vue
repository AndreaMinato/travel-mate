<template>
    <div>

        <form class="flex gap-2 mb-8" @submit.prevent="load()">
            <input v-model="search" type="search" name="search" id="search" autocomplete="off"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">



            <Button :disabled="loading" type="submit" class="ml-auto">Search
            </Button>

        </form>

        <div class="flex items-center justify-center" v-show="!travels.length">

            <div
                class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <GlobeEuropeAfricaIcon class="mx-auto h-12 w-12 text-gray-400" />
                <span class="mt-2 block text-sm font-semibold text-gray-900">No travels found</span>
            </div>


        </div>
        <ul class="grid grid-cols-3 gap-3" v-show="travels.length">
            <li class="relative" v-for=" travel  in  travels " :key="travel.id">
                <div
                    class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                    <img :src="travel.image" alt="" class="pointer-events-none object-cover group-hover:opacity-75">
                    <button @click="$emit('update:travel', travel.id)" type="button"
                        class="absolute inset-0 focus:outline-none">
                        <span class="sr-only">Select {{ travel.name }}</span>
                    </button>
                </div>
                <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ travel.name }}</p>
                <p class="pointer-events-none block text-sm font-medium text-gray-500">{{ travel.departure }} - {{
                    travel.arrival }}</p>
            </li>
        </ul>


        <div class="flex justify-end mt-2">
            <Button :disabled="!travel" @click="$emit('navigate:next')">Next</Button>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ITravel } from '~/types/travels';
import { GlobeEuropeAfricaIcon } from "@heroicons/vue/24/solid";
import Button from '~/components/Button.vue';

const search = ref<string>("")

const loading = ref<boolean>(false)
const fetched = ref<Array<ITravel>>([])
defineProps(['travel'])

defineEmits<{
  (e: 'update:travel', id: string): void
  (e: 'navigate:next'): void
}>()

async function load() {
    if (loading.value) return
    loading.value = true;
    try {

        const { data } = await useFetch<Array<ITravel>>(`/api/travels`, {
            query: {
                name: search.value,
                perPage: 3,
                _mockName: search.value
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


</script>
