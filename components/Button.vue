<template>
    <button
        class="rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        :class="{
            'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600': variant === 'primary',
            'bg-red-600 text-white hover:bg-red-500 focus-visible:outline-red-600': variant === 'danger',
        }"
        >

        <slot></slot>
    </button>
</template>

<script lang="ts" setup>

const props = defineProps({
    variant: {
        type: String,
        default: "primary"
    }
})

</script>
