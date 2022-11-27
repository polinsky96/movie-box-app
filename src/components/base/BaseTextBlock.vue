<template>
  <div class="base-text-block">
    <div 
      :class="{ 'paragraph--trim': isTrimText }" 
      class="base-text-block__paragraph-wrapper">
      <p 
        v-for="(paragraph, idx) in getParagraphs" 
        :key="idx" class="base-text-block__paragraph">
        {{ paragraph }}
      </p>
      <div class="base-text-block__hidden-paragraph">
        <p 
          v-for="(paragraph, idx) in getParagraphs" 
          :key="idx">
          {{ paragraph }}
        </p>
      </div>
    </div>
    <button
      v-show="isHiddenParagraph" 
      @click="changeTrimText"
      class="base-text-block__button">
      {{ isTrimText ? 'Read More &gt;' : 'Hide text'}}
    </button>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, watch } from "vue"

const props = defineProps({
  text: {
    type: String,
    default: ''
  }
})

const isTrimText = ref(true);
let isHiddenParagraph = ref(false);

const changeTrimText = () => {
  isTrimText.value = !isTrimText.value;
}

const getParagraphs = computed(() => {
  return props.text.split('\n\n');
})

const updateHiddenParagraph = async () => {
  await nextTick()

  const visibleText = document.querySelector('.base-text-block__paragraph-wrapper');
  const hiddenText = document.querySelector('.base-text-block__hidden-paragraph');

  if (hiddenText.offsetHeight > visibleText.offsetHeight) {
    isHiddenParagraph.value = true;
  } else {
    isHiddenParagraph.value = false;
  }
}

watch(
  () => props.text,
  updateHiddenParagraph
)

window.addEventListener('resize', updateHiddenParagraph);
</script>

<style lang="scss" scoped>
.base-text-block {
  position: relative;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  &__paragraph {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  &__button {
    @include reset-style-button;

    align-self: flex-end;

    color: $accent-color;
  }

  &__hidden-paragraph {
    position: absolute;
    z-index: -99;
    top: 0;

    opacity: 0;
  }
}

.paragraph--trim {
  @include overflow-text-for-rows(10);
}
</style>