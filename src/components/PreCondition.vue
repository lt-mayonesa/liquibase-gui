<template>
    <section>
        <horizontal-separator :label="label"/>
        <div class="col2">
            <input-select v-model="condition.onFail" :options="onErrorOptions" label="On Fail:"/>
            <input-text class="full" v-model="condition.onFailMessage" label="On Fail Message:"/>
            <input-select v-model="condition.onError" :options="onErrorOptions" label="On Error:"/>
            <input-text class="full" v-model="condition.onErrorMessage" label="On Error Message:"/>
        </div>
        <div>
            <input-select v-model="condition.onUpdateSQL" :options="onUpdateOptions" label="On Update SQL:" />
        </div>
    </section>
</template>

<script>
    import InputText from "./InputText";
    import InputSelect from "./InputSelect";
    import HorizontalSeparator from "../containers/HorizontalSeparator";

    export default {
        components: {HorizontalSeparator, InputSelect, InputText},
        data() {
            return {
                onErrorOptions: [
                    {label: 'seleccionar', value: null},
                    {value: 'HALT', label: 'HALT'},
                    {value: 'CONTINUE', label: 'CONTINUE'},
                    {value: 'MARK_RAN', label: 'MARK_RAN'},
                    {value: 'WARN', label: 'WARN'}
                ],
                onUpdateOptions: [
                    {label: 'seleccionar', value: null},
                    {label: 'RUN', value: 'RUN'},
                    {label: 'FAIL', value: 'FAIL'},
                    {label: 'IGNORE', value: 'IGNORE'}
                ]
            };
        },
        props: {
            condition: Object,
            label: String | Number
        }
    }
</script>

<style scoped>
    small {

    }
</style>