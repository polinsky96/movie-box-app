<template>
    <div class="input-authentication">
        <label 
            v-show="id" 
            :for="id"
            class="input-authentication__label">
            {{ label }}:</label>
            <BaseInput 
                @input="$emit('update:modelValue', $event.target.value)"
                v-model="modelValue"
                :type="type"
                :placeholder="placeholder"
                :id="id" 
                :class="{ 'input--error': isError }"
                class="input-authentication__input"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '../base/BaseInput.vue';

const props = defineProps({
    id: {
        type: [String, null],
        default: null
    },

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

    isError: {
        type: Boolean,
        default: false
    }
})

const modelValue = ref();
</script>

<style lang="scss" scoped>
.input-authentication {
    &__label {
        display: block;
        margin-bottom: 0.3rem;
    }
    
    &__input {
        width: 100%;
        padding: 10px;
        
        color: $font-dark-color;

        background-color: #f5f5f5;

        border: 3px solid #f5f5f5;
        border-radius: 5px;
        outline: none;

        &:focus {
            border-color: $accent-color;
        }
    }
}

.input--error {
    border: 3px solid rgb(230, 48, 48);
}
</style>