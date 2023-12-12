<script setup>
import { defineProps, ref, onMounted, onUnmounted } from 'vue'
import { setClose, closeAll, setMaxHeight } from '@/lib/helpers/faqItems.js'

defineProps({
  title: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
})

const open = ref(false)

// Close this item
const close = () => (open.value = false)

// Open or close this item and close all others
const toggleThis = () => {
  if (open.value) {
    closeAll()
  } else {
    closeAll()
    open.value = true
  }
}

// Save the close function
// Set max height on mount and on resize
onMounted(() => {
  setMaxHeight()
  setClose(close)

  window.addEventListener('resize', setMaxHeight)
})

// Cleanup
onUnmounted(() => {
  window.removeEventListener('resize', setMaxHeight)
})
</script>

<template>
  <div class="faq-item">
    <!-- Question -->
    <button @click="toggleThis" class="faq-question">
      <i class="fi fi-rr-interrogation"></i>
      <p class="faq-title">{{ title }}</p>
      <i :class="{ 'fi-rr-plus-small': !open, 'fi-rr-minus-small': open }"></i>
    </button>

    <!-- Answer -->
    <p :class="{ 'faq-answer': true, open: open }">
      {{ answer }}
    </p>
  </div>
</template>

<style scoped>
.faq-item {
  overflow: hidden;
}

.faq-item .faq-question {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1.35rem 0.75rem;
  width: 100%;
  background-color: transparent;
  text-align: left;
}

.faq-question i:nth-of-type(1) {
  margin-right: 0.625rem;
  position: relative;
  top: 0.145rem;
  font-size: 0.7rem;
}

.faq-question .faq-title {
  font-weight: 400;
  font-size: 1rem;
}

.faq-answer {
  font-size: 1rem;
  padding-left: 2.125rem;
  padding-right: 6rem;
  color: #333;
}

.faq-answer {
  max-height: 0;
  opacity: 0;
  pointer-events: none;
  margin-bottom: 0;
  transition: all 0.2s linear;
}

.faq-answer.open {
  opacity: 1;
  pointer-events: all;
  max-height: var(--max-height);
  visibility: visible;
  margin-bottom: 1.875rem;
}

.fi-rr-plus-small,
.fi-rr-minus-small {
  font-size: 1.125rem;
  opacity: 1;
  margin-left: auto;
}

@media screen and (max-width: 1024px) {
  .faq-item .faq-question {
    padding: 1rem 0.5rem;
  }

  .faq-question i:nth-of-type(1) {
    display: none;
  }

  .faq-answer {
    padding-right: 2.5rem;
    padding-left: 0.5rem;
  }
}
</style>
