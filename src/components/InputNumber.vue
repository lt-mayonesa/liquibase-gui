<template>
    <div class="input-field col s12">
        <label :for="name" >{{label}}</label>
        <input :name="name" type="number" :value="value" @input="$emit('input', $event.target.value)" :placeholder="placeholder"/>
    </div>
</template>

<script>
    export default {
        props: ['name', 'value', 'placeholder', 'label']
    }
</script>

<style scoped>
    div {
        padding-bottom: 12px;
    }
    input {
        display: block;
        width: 100%;
    }
</style>