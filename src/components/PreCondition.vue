<template>
    <div>
        <h4>Pre Condition</h4>
        <hr/>
        <input-select v-model="condition.onFail" :options="values"/>
        <input-text v-model="condition.onFailMessage" label="On Fail Message:"/>
        <hr/>
        <input-text v-model="condition.onError" label="On Error:"/>
        <input-text v-model="condition.onErrorMessage" label="On Error Message:"/>
    </div>
</template>

<script>
    import InputText from "./InputText";
    import InputSelect from "./InputSelect";

    export default {
        components: {InputSelect, InputText},
        data() {
            return {
                values: [
                    {value: 'HALT', label: 'HALT'},
                    {value: 'CONTINUE', label: 'CONTINUE'},
                    {value: 'MARK_RAN', label: 'MARK_RAN'},
                    {value: 'WARN', label: 'WARN'}
                ]
            };
        },
        props: {
            condition: Object
        }
    }
</script>

<style scoped>
    div {
        margin-left: 12px;
    }
</style>