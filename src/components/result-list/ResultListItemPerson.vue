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