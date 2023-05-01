<template>
    <form @submit.prevent="submit">
        <div class="space-y-12 sm:space-y-16">
            <div>
                <h2 class="text-base font-semibold leading-7 text-gray-900">New travel</h2>
                <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-600">Please share with us the detail of this amazing
                    travel.</p>

                <div
                    class="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="first-name"
                            class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Name</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <input v-model="travel.name" type="text" name="first-name" id="first-name" required
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Price</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span class="text-gray-500 sm:text-sm">€</span>
                            </div>
                            <input required type="number" min="1" name="price" id="price" v-model="travel.price"
                                class="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="0.00">

                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="description"
                            class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Description</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <textarea required v-model="travel.description" id="description" name="description" rows="3"
                                class="block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the travel.</p>
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="departure"
                            class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Name</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0 flex-col md:flex-row flex gap-2">
                            <input required type="datetime-local" v-model="travel.departure" :max="travel.arrival"
                                name="departure" id="departure"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <input required type="datetime-local" v-model="travel.arrival" :min="travel.departure"
                                name="arrival" id="arrival"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        </div>
                    </div>

                    <div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                        <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">Cover
                            photo</label>
                        <div class="mt-2 sm:col-span-2 sm:mt-0">
                            <div
                                class="flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div class="text-center">
                                    <svg v-show="!url" class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24"
                                        fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <img :src="url" class="mx-auto h-48 w-48 text-gray-300 object-cover" v-show="url">
                                    <div class="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                                        <label for="file-upload"
                                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <p> Upload a file</p>
                                            <input id="file-upload" name="file-upload" type="file" accept="image/*"
                                                class="sr-only" @change="onFileChange">
                                        </label>

                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 999TB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <Button @click="router.back()" type="button" variant="secondary">Cancel</Button>


            <Button :disabled="disabled" type="submit">Save</Button>
        </div>
    </form>
</template>

<script setup lang="ts">
import Button from '~/components/Button.vue';
import { ITravel } from '~/types/travels';
import { useObjectUrl } from '@vueuse/core'
import { shallowRef } from 'vue'


const disabled = computed(() => {

    if (!travel.value.name) return true
    if (!travel.value.description) return true
    if (!travel.value.price || travel.value.price < 1) return true
    if (!travel.value.departure || !travel.value.arrival) return true

    return false

})

const file = shallowRef()
const url = useObjectUrl(file)
const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target?.files) {
        file.value = target.files[0];
    }
}

const router = useRouter()

async function submit() {
    if (disabled.value) return;

    const body: Record<string, any> = {
        ...travel.value
    }

    body.price = body.price * 100
    body.image = file.value

    let formData = new FormData();
    for (let key in body) {
        formData.append(key, body[key]);
    }


    await $fetch("/api/travels/", {
        method: "post",
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    router.replace('/travels')
}


const travel = ref<ITravel>({
    name: "ff",
    arrival: getDateValue(new Date()),
    departure: getDateValue(new Date()),
    rating: 0,
    description: "u",
    price: 0,
    id: "",
    image: ""
});

</script>
