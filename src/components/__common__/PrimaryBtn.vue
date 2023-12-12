<script setup>
import { defineProps } from 'vue'

defineProps({
  text: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false
  }
})
</script>

<template>
  <a :href="href" class="btn-primary">
    {{ text }}
    <i v-if="icon" :class="icon"></i>
  </a>
</template>

<style scoped>
.btn-primary {
  background-color: var(--primary-color);
  color: #fff;
  border-radius: 0.375rem;
  padding: 0.55rem 1.25rem 0.7rem 1.25rem !important;
  transition: 0.1s background-color ease;
  text-transform: none !important;
  font-size: 0.8rem !important;
  font-weight: 500 !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: max-content;
}

.btn-primary i {
  margin-left: 0.5rem;
  margin-right: -0.25rem;
  position: relative;
  top: 0.15rem;
  font-size: 1rem;
}
</style>
