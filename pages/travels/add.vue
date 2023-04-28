<template>
    <form @submit.prevent="submit">

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
            <input id="departure" required min="0" max="100" type="datetime-local" v-model="travel.departure">
        </fieldset>
        <fieldset>
            <label for="arrival">arrival</label>
            <input id="arrival" required min="0" max="100" type="datetime-local" v-model="travel.arrival">
        </fieldset>

        <div class="flex gap-3 pt-4">

            <Button @click="router.back()" type="button" variant="danger">Cancel</Button>


            <Button type="submit">Save</Button>
        </div>

    </form>
</template>

<script setup lang="ts">
import Button from '~/components/Button.vue';
import { ITravel } from '~/types/travels';

const router = useRouter()

async function submit() {
    await $fetch("/api/travels/", {
        method: "post",
        body: travel.value,
        headers: {
            'Content-Type': 'application/json'
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
    image: "https://source.unsplash.com/random"
});

</script>
