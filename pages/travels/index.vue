<template>
    <h1>Sono travels</h1>
    <NuxtLink to="/travels/add">Add</NuxtLink>

    <table>
        <thead>
            <th>Name</th>
            <th>Description</th>
            <th>Dates</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Image</th>
        </thead>
        <tbody>

            <tr v-for="travel in data" :key="travel.id">

                <td>
                    <NuxtLink :to="`/travels/${travel.id}`">

                        {{ travel.name }}
                    </NuxtLink>
                </td>
                <td>{{ travel.description }}</td>
                <td>{{ travel.arrival }} - {{ travel.departure }}</td>
                <td>{{ travel.price }}</td>
                <td>{{ travel.rating }}</td>

                <td>

                    <NuxtImg v-if="travel.image" :src="travel.image" :alt="travel.name">

                    </NuxtImg>

                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import type { ITravel } from "~/types/travels"

const { data } = await useFetch<Array<ITravel>>('/api/travels/')


</script>
