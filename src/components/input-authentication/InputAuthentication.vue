<template>
    <div
      class="input-authentication"
      :class="{ 'has-error': !!errorMessage, success: meta.valid }">
        <label
          :for="name"
          class="input-authentication__label">{{
          label
          }}</label>
        <input
          :name="name"
          :id="name"
          :type="type"
          :value="inputValue"
          :placeholder="placeholder"
          @input="handleChange"
          @blur="handleBlur" 
          class="input-authentication__input"/>

        <p
          class="input-authentication__help-message"
          v-show="errorMessage || meta.valid">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
    type: {
        type: String,
        default: 'text',
    },
    value: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: '',
    },
});

const name = toRef(props, 'name');

const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
    meta,
} = useField(name, undefined, {
    initialValue: props.value,
});
</script>

<style lang="scss" scoped>
$error-color: #f23648;
$error-bg-color: #fddfe2;
$success-color: #21a67a;
$success-bg-color: #e0eee4;

.input-authentication {
    position: relative;
    width: 100%;
   
    &__label {
        display: block;
        width: 100%;
        margin-bottom: 0.25rem;
    }

    &__input {
        width: 100%;
        padding: 0.625rem 0.625rem;
        
        color: $font-dark-color;

        background-color: #f2f5f7;
        
        border-radius: 5px;
        border: 2px solid transparent;
        
        outline: none;
        transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
            background-color 0.3s ease-in-out;

        &:focus {
            border-color: $accent-color;
        }
    }

    &__help-message {
        position: absolute;
        bottom: calc(-1.5 * 1em);
        left: 0;
        
        margin: 0;
        
        font-size: 14px;
    }

}

.input-authentication.has-error input {
    background-color: $error-bg-color;
    color: $error-color;
}

.input-authentication.has-error input:focus {
    border-color: $error-color;
}

.input-authentication.has-error .input-authentication__help-message {
    color: $error-color;
}

.input-authentication.success input {
    background-color: $success-bg-color;
    color: $success-color;
}

.input-authentication.success input:focus {
    border-color: $success-color;
}
</style>
