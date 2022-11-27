<template>
  <div class="detail-section-content-person">
    <DetailSectionLayout :poster-path="details.profilePath">

      <template #content>
        <DetailSectionContentLayoutPerson>
          <template #name>
            <BaseContentTitle :title="details.name" />
          </template>
          <template #biography>
            <BaseTextBlock :text="details.biography" />
          </template>
        </DetailSectionContentLayoutPerson>
      </template>

    </DetailSectionLayout>
  </div>
</template>
  
<script setup>
import BaseContentTitle from '../base/BaseContentTitle.vue';
import BaseTextBlock from '../base/BaseTextBlock.vue';

import DetailSectionLayout from './DetailSectionLayout.vue';
import DetailSectionContentLayoutPerson from './DetailSectionContentLayoutPerson.vue';

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
.detail-section-content-person {
  position: relative;
  z-index: 1;
}
</style>