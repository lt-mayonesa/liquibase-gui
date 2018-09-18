<template>
    <div ref="container">
        <textarea readonly :value="jsonOutput"></textarea>
    </div>
</template>

<script>
    export default {
        name: "PreviewArea",
        components: {
        },
        props: {
            change: Object
        },
        computed: {
            jsonOutput: function () {
                return JSON.stringify(this.change, null, 2);
            }
        }
    }
</script>

<style scoped>
    textarea {
        background: #333;
        border-color:#ccc;
        font-size: 13px;
        -webkit-box-shadow: inset 2px 2px 10px 0 rgba(0, 0, 0, 1);
        -moz-box-shadow: inset 2px 2px 10px 0 rgba(0, 0, 0, 1);
        box-shadow: inset 2px 2px 10px 0 rgba(0, 0, 0, 1);
        white-space: pre;
        color: white;
        display: block;
        width: 100%;
        margin: 0;
        height: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        resize: none;
        -webkit-transition: all 600ms;
        -moz-transition: all 600ms;
        -ms-transition: all 600ms;
        -o-transition: all 600ms;
        transition: all 600ms;
    }
</style>