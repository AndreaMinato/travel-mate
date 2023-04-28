<template>
    <form @submit.prevent="submit" v-if="travel">

        <fieldset>
            <label for="name">Name</label>
            <input id="name" required type="text" v-model="travel.name">
        </fieldset>
        <fieldset>
            <label for="description">Description</label>
            <textarea id="description" required type="text" v-model="travel.description" />
        </fieldset>
        <fieldset>
            <label for="price">Price</label>
            <input required type="number" v-model="travel.price">
        </fieldset>
        <fieldset>
            <label for="rating">Rating</label>
            <input required min="0" max="100" type="number" v-model="travel.rating">
        </fieldset>

        <fieldset>
            <label for="departure">Departure</label>
            <input required min="0" max="100" type="datetime-local" v-model="travel.departure">
        </fieldset>
        <fieldset>
            <label for="Arrival">arrival</label>
            <input required min="0" max="100" type="datetime-local" v-model="travel.arrival">
        </fieldset>
        <div class="flex gap-3 pt-4">
            <NuxtLink to="/travels">
                <Button type="button" variant="danger">Cancel</Button>
            </NuxtLink>

            <Button type="submit" >Save</Button>
        </div>
    </form>
    <div v-else>
        Not found
    </div>
</template>
<script setup lang="ts">
import type { ITravel } from "~/types/travels"

const route = useRoute()
const router = useRouter()


const { data: travel } = await useFetch<ITravel>(`/api/travels/${route.params.id}`)

async function submit() {
    await useFetch(`/api/travels/${travel.value?.id}`, {
        method: "PUT",
        body: JSON.stringify(travel.value),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    router.back()
}


</script>
