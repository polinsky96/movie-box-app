<template>
    <div class="result-list-item-person">
        <result-list-item :poster-path="details.profile_path">
            <template v-slot:content>
                <ResultListItemContent>
                    <template v-slot:title>
                        <ResultListItemTitle :details="details" />
                    </template>
                    <template v-slot:subtitle-block>
                        <ResultListItemSubtitlePerson>
                            <template v-slot:occupation>
                                {{ details.known_for_department }}
                            </template>
                            <template v-slot:known-for>
                                <ResultListItemPersonKnowWork :known-list="details.known_for"/>
                            </template>
                        </ResultListItemSubtitlePerson>
                    </template>
                </ResultListItemContent>
            </template>
        </result-list-item>
    </div>
</template>

<script setup>
import ResultListItemPersonKnowWork from './ResultListItemPersonKnowWork.vue';
import ResultListItem from './ResultListItem.vue';
import ResultListItemContent from './ResultListItemContent.vue';
import ResultListItemTitle from './ResultListItemTitle.vue';
import ResultListItemSubtitlePerson from './ResultListItemSubtitlePerson.vue';

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
        width: 100px;
        height: 150px;
        margin-right: 15px;
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