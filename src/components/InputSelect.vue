<template>
    <div>
        <label :for="name">{{label}}</label>
        <select :name="name" :value="value" @input="$emit('input', $event.target.value)">
            <option v-for="option in options" :key="option.value" :value="option.value" :disabled="option.disabled">{{option.label}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            value: String,
            label: String,
            name: String,
            options: Array
        }
    }
</script>

<style scoped>
    div {
        padding-bottom: 12px;
    }
</style>