<template>
    <p>
        <small>{{label}}</small>
    </p>
</template>

<script>
    export default {
        name: "HorizontalSeparator",
        props: {
            label: String | Number
        }
    }
</script>

<style scoped>
    p {
        border-top: 1px solid cadetblue;
        position: relative;
    }

    p small {
        position: absolute;
        top: -8px;
        left: 4px;
        padding: 0 4px;
        background-color: white;
        color: cadetblue;
    }
</style>