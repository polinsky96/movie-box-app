<template>
  <div class="detail-section-content-movie">
    <DetailSection>
        <template v-slot:poster>
          <BaseImage :image-path="details.poster_path"/>
        </template>
        <template v-slot:title>
            {{ details.original_title }}
        </template>
        <template v-slot:content>
          <DetailSectionContent>
            <template v-slot:rating>
                <RatingBlock :score="details.vote_average"/>
            </template>
            <template v-slot:date>
                {{ details.release_date }}
            </template>
            <template v-slot:runtime>
                {{ details.runtime }}
            </template>
            <template v-slot:tagline>
                {{ details.tagline }}
            </template>
            <template v-slot:overview>
                {{ details.overview }}
            </template>
          </DetailSectionContent>
        </template>
      </DetailSection>
  </div>
</template>

<script setup>
import BaseImage from '../base/BaseImage.vue';
import DetailSection from './TheDetailSection.vue';
import DetailSectionContent from './DetailSectionContent.vue';
import RatingBlock from '../rating-block/RatingBlock.vue';

const props = defineProps({
    details: {
        type: Object,
        default: () => {
            return 
        }
    }
})
</script>