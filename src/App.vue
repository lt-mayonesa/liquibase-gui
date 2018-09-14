<template>
    <div id="app">
        <main-nav/>
        <div>
            <change-set :item="change" />
        </div>
        <button @click="log()">LOG</button>
    </div>
</template>

<script>
    import MainNav from './components/MainNav.vue'
    import ChangeSet from './components/ChangeSet.vue'
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
            ChangeSet,
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
