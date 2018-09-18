<template>
    <div id="app">
        <div class="container">
            <main-nav class="col nav" />
            <change-set class="col form" :item="change"/>
            <preview-area class="col preview" :change="change"/>
        </div>
    </div>
</template>

<script>
    import MainNav from './components/MainNav.vue'
    import ChangeSet from './components/ChangeSet.vue'
    import PreviewArea from "./components/PreviewArea";

    import 'normalize.css'

    import {CHANGE} from './assets/change-mock'

    export default {
        name: 'app',
        data() {
            return {
                change: CHANGE
            }
        },
        methods: {
            download() {
                var a = document.createElement("a");
                var file = new Blob([JSON.stringify(this.change, null, '\t')], {type: 'application/json'});
                a.href = URL.createObjectURL(file);
                a.download = 'change-set.json';
                a.click();
            }
        },
        components: {
            PreviewArea,
            ChangeSet,
            MainNav
        }
    }
</script>

<style>
    body {
        margin: 0;
    }

    textarea, select, input, button {
        outline: none;
    }

    #app {
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .container {

    }

    .col {
        position: absolute;
        width: 50%;
        height: 100%;
        overflow-y: auto;
        padding: 10px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        top: 0;
    }

    .col.nav {
        left: 0;
        width: 20%;
    }

    .col.form {
        left: 20%;
    }

    .col.preview {
        padding: 0;
        right: 0;
        width: 30%;
    }

    .col2 {
        column-count: 2;
    }

    label {
        display: block;
        margin-bottom: 6px;
        margin-left: 18px;
        font-size: 12px;
    }

    input {
        display: block;
        box-sizing: border-box;
        width: 50%;
        border: none;
        font-size: 18px;
        padding: 8px 16px;
        border-radius: 50px;
        background-color: #f3f3f3;
    }

    input.full {
        width: 100%;
    }

    input:focus {
        background-color: #f0f0f0;
    }

    input:hover {
        background-color: #eee;
    }

    select {
        display: block;
        background-color: #f3f3f3;
        width: 100%;
        border: none;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        padding: 8px 16px;
        font-size: 18px;
    }

    select:focus {
        background-color: #f0f0f0;
    }

    select:hover {
        background-color: #eee;
    }
</style>
