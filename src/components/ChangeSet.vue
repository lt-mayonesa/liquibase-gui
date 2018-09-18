<template>
    <div>
        <h2>Change Set</h2>
        <input-number v-model="item.id" label="Id:"/>
        <input-text v-model="item.author" label="Autor (author):"/>
        <input-text v-model="item.comment" label="Comentario (comment):"/>
        <box header="Pre Conditions">
            <pre-condition v-for="(condition, index) in item.preConditions" :condition="condition" :key="index" :label="index" />
            <button class="bot middle" @click="addPreCondition()">add</button>
        </box>
        <box header="Changes">

        </box>
    </div>
</template>

<script>
    import Box from '../containers/Box'
    import InputText from "./InputText"
    import InputNumber from "./InputNumber"
    import PreCondition from "./PreCondition"

    export default {
        props: {
            item: Object
        },
        methods: {
            addPreCondition() {
                this.item.preConditions.push({})
            }
        },
        components: {Box, PreCondition, InputNumber, InputText}
    }
</script>