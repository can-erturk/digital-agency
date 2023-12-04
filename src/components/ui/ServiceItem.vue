<script setup>
import { defineProps } from 'vue'

defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <a class="service-item" :href="service.url">
    <img :src="service.image" :alt="service.title" />

    <h3>{{ service.title }}</h3>

    <span class="learn-more">
      <span>Learn More</span>
      <i class="fi fi-rr-arrow-right"></i>
    </span>
  </a>
</template>

<style scoped>
.service-item,
.service-item * {
  text-decoration: none;
}

.service-item {
  /* 3.75rem comes from the gap of the services list */
  width: calc(33.33333% - calc(3.75rem * 2 / 3));
  text-align: left;
  transition: all 0.1s ease-in-out;
}

.service-item:hover {
  transform: scale(1.05);
}

.service-item img {
  width: 100%;
  margin: 0 auto;
  border-radius: 0.75rem;
  transition: all 0.1s ease-in-out;
}

.service-item:hover img {
  box-shadow: 0 0 25px #00000020;
}

.service-item h3 {
  margin-top: 0.75rem;
  margin-bottom: 0.5rem;
}

.service-item .learn-more {
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  color: var(--text-light);
}

.service-item .learn-more i {
  position: relative;
  top: 0.188rem;
  margin-left: 0.313rem;
}

@media screen and (max-width: 1024px) {
  .service-item {
    /* 3.75rem comes from the gap of the services list */
    width: calc(50% - calc(3.75rem / 2));
  }
}

@media (max-width: 1024px) {
  .service-item {
    width: 100%;
    text-align: center;
  }
  .service-item .learn-more {
    justify-content: center;
  }
}
</style>
