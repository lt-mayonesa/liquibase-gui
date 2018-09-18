<template>
    <section class="box">
        <h3>{{header}}</h3>
        <button class="top right" @click="toggle" >{{caret}}</button>
        <div :class="{collapsed: isCollapsed}">
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Box",
        props: {
            header: String
        },
        data() {
            return {
                collapsed: true
            };
        },
        methods: {
            toggle: function () {
                this.collapsed = !this.collapsed;
            }
        },
        computed: {
            caret: function () {
                return this.collapsed ? '+' : '-';
            },
            isCollapsed: function () {
                return this.collapsed;
            }
        }
    }
</script>

<style scoped>
    section.box {
        position: relative;
        margin: 12px 0 6px;
        padding: 12px;
        border: 2px solid cadetblue;
        border-radius: 8px;
    }

    h3 {
        font-size: 12px;
        color: cadetblue;
        position: absolute;
        margin-bottom: 0;
        margin-top: 0;
        top: -8px;
        background-color: white;
        padding: 0 6px;
    }

    button {
        width: 20px;
        border: none;
        background-color: white;
        color: cadetblue;
        font-size: 14px;
        font-weight: bold;
        position: absolute;
    }

    button.top {
        top: -10px;
    }

    button.right {
        right: 10px;
    }

    button.bot {
        bottom: -10px;
    }

    button.middle {
        width: auto;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        left: 50%;
    }

    section.box div {
        overflow: hidden;
        height: auto;
        -webkit-transition: all 1s ease-in-out;
        -moz-transition: all 1s ease-in-out;
        -ms-transition: all 1s ease-in-out;
        -o-transition: all 1s ease-in-out;
        transition: all 1s ease-in-out;
    }

    section.box div.collapsed {
        height: 0;
    }
</style>