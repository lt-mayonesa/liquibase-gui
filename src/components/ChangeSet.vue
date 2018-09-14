<template>
    <div>
        <h2>Change Set</h2>
        <input-number v-model="item.id" label="Id:"/>
        <input-text v-model="item.author" label="Autor (author):"/>
        <input-text v-model="item.comment" label="Comentario (comment):"/>
        <h3>Pre Conditions</h3>
        <pre-condition v-for="(condition, index) in item.preConditions" :condition="condition" :key="index" />
        <button @click="addPreCondition()">Add PreCondition</button>
    </div>
</template>
<script>
    import InputText from "./InputText";
    import InputNumber from "./InputNumber";
    import PreCondition from "./PreCondition";

    export default {
        props: {
            item: Object
        },
        methods: {
            addPreCondition() {
                this.item.preConditions.push({})
            }
        },
        components: {PreCondition, InputNumber, InputText}
    }
</script>