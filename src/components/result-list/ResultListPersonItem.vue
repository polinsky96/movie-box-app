<template>
    <div class="result-list-item-person">
        <ResultListItemLayout :poster-path="details.profilePath">
            <template v-slot:content>
                <ResultListItemContentLayout>
                    <template v-slot:title>
                        <BaseContentTitle :title="details.name" />
                    </template>
                    <template v-slot:subtitle-block>
                        <ResultListItemContentSubtitlePerson>
                            <template v-slot:occupation>
                                {{ details.department }}
                            </template>
                            <template v-slot:known-for>
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