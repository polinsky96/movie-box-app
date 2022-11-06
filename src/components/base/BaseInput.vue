<template>
    <div class="base-input">        
        <label>{{ label }}
            <input 
                @input="$emit('update:modelValue', $event.target.value)"
                :type="type" 
                :placeholder="placeholder"
                :value="modelValue"
                class="base-input__input"/>
        </label>
    </div>
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

    label: {
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
 
</style>