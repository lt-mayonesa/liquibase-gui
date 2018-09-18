<template>
    <div>
        <label :for="name">{{label}}</label>
        <input :name="name" type="number" :value="value" @input="$emit('input', $event.target.value)"
               :placeholder="placeholder"/>
    </div>
</template>

<script>
    export default {
        props: ['name', 'value', 'placeholder', 'label']
    }
</script>

<style scoped>
    div {
        position: relative;
        margin-bottom: 12px;
    }
</style>