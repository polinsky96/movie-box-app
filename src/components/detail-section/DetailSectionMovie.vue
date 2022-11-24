<template>
  <div class="detail-section-content-movie">
      <DetailSectionLayout 
        :poster-path="details.posterPath"
        class="detail-section-content-movie__backdrop">
        <template #content>
          <DetailSectionContentLayout>
            <template #title>
                <BaseContentTitle :title="details.title" />
            </template>
            <template #rating>
                <RatingBlock :rating="details.rating"/>
            </template>
            <template #date>
                <BaseContentDate :date="details.releaseDate" />
            </template>
            <template #runtime>
                <BaseContentRuntime :runtime="details.runtime"/>
            </template>
            <template #tagline>
                {{ details.tagline }}
            </template>
            <template #overview>
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

const props = defineProps({
    details: {
        type: Object,
        default: () => {
            return {}
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