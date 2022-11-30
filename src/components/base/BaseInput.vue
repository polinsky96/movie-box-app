<template>  
    <input 
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type" 
        :placeholder="placeholder"
        :value="modelValue"
        class="base-input"/>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },

    placeholder: {
        type: String,
        default: ''
    },

    modelValue: {
        type: [String, Number],
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.base-input {
    color: black;
}
</style>