<script setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="whyus-item">
    <div class="whyus-item-icon">
      <i :class="icon"></i>
    </div>
    <div class="whyus-item-content">
      <h3>{{ title }}</h3>
      <p v-html="description"></p>
    </div>
  </div>
</template>

<style scoped>
.whyus-item {
  display: flex;
}

.whyus-item-icon {
  font-size: 1.75rem;
  margin-right: 1.5rem;
  color: var(--primary-color);
  position: relative;
  top: 0.375rem;
}

.whyus-item-content {
  flex: 1;
}

.whyus-item-content h3 {
  margin-bottom: 0.875rem;
}

.whyus-item-content p {
  line-clamp: 3;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

@media (max-width: 768px) {
  .whyus-item {
    flex-direction: column;
  }

  .whyus-item-icon {
    margin-right: 0;
    margin-bottom: 1.5rem;
  }
}
</style>
