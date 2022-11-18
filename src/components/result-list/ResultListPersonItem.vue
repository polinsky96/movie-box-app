<template>
    <div class="result-list-item-person">
        <ResultListItemLayout :poster-path="details.profile_path">
            <template v-slot:content>
                <ResultListItemContentLayout>
                    <template v-slot:title>
                        <ResultListItemContentTitle :details="details" />
                    </template>
                    <template v-slot:subtitle-block>
                        <ResultListItemContentSubtitlePerson>
                            <template v-slot:occupation>
                                {{ details.known_for_department }}
                            </template>
                            <template v-slot:known-for>
                                <ResultListItemPersonKnowWork :known-list="details.known_for"/>
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
import ResultListItemContentTitle from './ResultListItemContentTitle.vue';
import ResultListItemContentSubtitlePerson from './ResultListItemContentSubtitlePerson.vue';

const props = defineProps({
    details: {
        type: Object
    }
})
</script>