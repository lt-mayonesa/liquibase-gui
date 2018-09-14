<template>
    <div>
        <label :for="name">{{label}}</label>
        <select :name="name">
            <option v-for="option in options" :value="option.value">{{option.label}}</option>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            name: String,
            options: Array
        }
    }
</script>

<style scoped>

</style>