<template>
    <div class="result-list-item-person">
        <div class="result-list-item-person__wrapper">
            <BaseImage 
                :image-path="details.profile_path"
                alt="person-photo"
                class="result-list-item-person__photo"/>
            <div class="result-list-item-person__content">
                <div class="result-list-item-person__name">
                    {{ details.name }}
                </div>
                <div class="result-list-item-person__department">
                    {{ details.known_for_department }}
                </div>
                <ResultListItemPersonKnowWork 
                    :known-list="details.known_for"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseImage from '../base/BaseImage.vue';
import ResultListItemPersonKnowWork from './ResultListItemPersonKnowWork.vue';

const props = defineProps({
    details: {
        type: Object
    }
})
</script>

<style lang="scss" scoped>
.result-list-item-person {
    max-height: 150px;

    background-color: #192233;
    box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.5);
    border-radius: $card-border-radius;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    border: 2px solid #192233;

    transition: 0.3s all ease;

    @include for-size(laptop-up) {
        &:hover {
            @include accent-border;
        }
    }

    &__wrapper {
        display: flex;
    }

    &__photo {
        width: 6.25rem;
        height: 9.375rem;
        margin-right: 0.9375rem;
    }

    &__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0.625rem;
        padding-left: 0;
    }

    &__name {
        margin-bottom: 0.75rem;
    }

    &__department {
        font-weight: bold;
        margin-bottom: 0.8rem;
    }
}
</style>