<template>
    <div class="result-list-item-person">
        <ResultListItemLayout :poster-path="details.profilePath">
            <template #content>
                <ResultListItemContentLayout>
                    <template #title>
                        <BaseContentTitle :title="details.name" />
                    </template>
                    <template #subtitle-block>
                        <ResultListItemContentSubtitlePerson>
                            <template #occupation>
                                {{ details.department }}
                            </template>
                            <template #known-for>
                                <ResultListItemPersonKnowWork :known-list="details.knownFor"/>
                            </template>
                        </ResultListItemContentSubtitlePerson>
                    </template>
                </ResultListItemContentLayout>
            </template>
        </ResultListItemLayout>
    </div>
</template>

<script setup>
import ResultListItemPersonKnowWork from './ResultListItemPersonKnowWork.vue';
import ResultListItemLayout from './ResultListItemLayout.vue';
import ResultListItemContentLayout from './ResultListItemContentLayout.vue';
import BaseContentTitle from '../base/BaseContentTitle.vue';
import ResultListItemContentSubtitlePerson from './ResultListItemContentSubtitlePerson.vue';

const props = defineProps({
    details: {
        type: Object
    }
})
</script>