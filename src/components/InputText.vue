<template>
    <div>
        <label :for="name">{{label}}</label>
        <input :name="name" type="text" :value="value" @input="$emit('input', $event.target.value)"
               :placeholder="placeholder"/>
        <small>{{hint}}</small>
    </div>
</template>

<script>
    export default {
        props: ['name', 'value', 'placeholder', 'label', 'hint']
    }
</script>

<style scoped>
    div {
        position: relative;
        margin-bottom: 12px;
    }

</style>