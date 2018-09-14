<template>
    <div id="app">
        <main-nav/>
        <div>
            <h2>Change Set</h2>
            <input-number v-model="change.id" label="Id:"/>
            <input-text v-model="change.author" label="Autor (author):"/>
            <input-text v-model="change.comment" label="Comentario (comment):"/>
        </div>
        <button @click="log()">LOG</button>
    </div>
</template>

<script>
    import MainNav from './components/MainNav.vue'
    import InputText from './components/InputText.vue'
    import InputNumber from './components/InputNumber.vue'
    import {CHANGE} from './assets/change-mock'

    export default {
        name: 'app',
        data() {
            return {
                change: CHANGE
            }
        },
        methods: {
            log() {
                console.log(this.change);
            }
        },
        components: {
            InputText,
            InputNumber,
            MainNav
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
