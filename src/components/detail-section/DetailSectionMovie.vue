<template>
  <div class="detail-section-content-movie">
      <DetailSectionBackdrop :backdrop-path="details.backdrop_path" />
      <DetailSectionLayout 
        :poster-path="details.poster_path"
        class="detail-section-content-movie__backdrop">
        <template v-slot:content>
          <DetailSectionContentLayout>
            <template v-slot:title>
                <BaseContentTitle :details="details" />
            </template>
            <template v-slot:rating>
                <RatingBlock :score="details.vote_average"/>
            </template>
            <template v-slot:date>
                <BaseContentDate :details="details" />
            </template>
            <template v-slot:runtime>
                <BaseContentRuntime :runtime="details.runtime"/>
            </template>
            <template v-slot:tagline>
                {{ details.tagline }}
            </template>
            <template v-slot:overview>
                {{ details.overview }}
            </template>
          </DetailSectionContentLayout>
        </template>

      </DetailSectionLayout>
  </div>
</template>

<script setup>
import BaseContentTitle from '../base/BaseContentTitle.vue';
import BaseContentDate from '../base/BaseContentDate.vue';
import BaseContentRuntime from '../base/BaseContentRuntime.vue';
import RatingBlock from '../rating-block/RatingBlock.vue';

import DetailSectionLayout from './DetailSectionLayout.vue';
import DetailSectionContentLayout from './DetailSectionContentLayout.vue';
import DetailSectionBackdrop from './DetailSectionBackdrop.vue';

const props = defineProps({
    details: {
        type: Object,
        default: () => {
            return 
        }
    }
})
</script>

<style lang="scss" scoped>
.detail-section-content-movie {
    position: relative;
    z-index: 1;
}
</style>