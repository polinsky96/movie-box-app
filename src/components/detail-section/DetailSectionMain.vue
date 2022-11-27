<template>
  <div class="detail-section-content-main">
      <DetailSectionLayout :poster-path="details.posterPath">

        <template #content>
          <DetailSectionContentLayout>
            <template #title>
                <BaseContentTitle :title="details.title" />
            </template>
            <template #genres-list>
                <BaseGenreList :genres-list="details.genres"/>
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
            <template  #tagline>
                {{ details.tagline }}
            </template>
            <template #overview>
                <BaseTextBlock :text="details.overview" />
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
import BaseGenreList from '../base/BaseGenreList.vue';
import BaseTextBlock from '../base/BaseTextBlock.vue';
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
.detail-section-content-main {
    position: relative;
    z-index: 1;
}
</style>