<template>
    <h1>Sono bookings</h1>


    <table>
        <thead>
            <th>Travel</th>
            <th>User</th>
            <th>Payment</th>
            <th>Notes</th>
        </thead>
        <tbody>
            <tr v-for="booking in data" :key="booking.id">

                <td>{{ booking.travel.name }}</td>
                <td>{{ booking.userInfo.email }}</td>
                <td>{{ booking.payment.type }}</td>
                <td>{{ booking.notes }}</td>


            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">


const { data } = await useFetch('/api/bookings')


</script>
