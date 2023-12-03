<script setup>
import ServiceItem from '@/components/ui/ServiceItem.vue'

const services = [
  {
    title: 'Financial Planning',
    url: '/about#services',
    image: '/services/s10-min.jpg'
  },
  {
    title: 'Wealth Advisory',
    url: '/about#services',
    image: '/services/s5-min.jpg'
  },
  {
    title: 'Retirement Solutions',
    url: '/about#services',
    image: '/services/s7-min.jpg'
  }
]
</script>

<template>
  <section class="services" id="services">
    <div class="container">
      <h2>Our services</h2>
      <p>Comprehensive services to meet your needs.</p>

      <div class="services-list">
        <ServiceItem v-for="service in services" :key="service.title" :service="service" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.75rem;
  margin-top: 3.125rem;
}

@media screen and (max-width: 768px) {
  .services-list {
    flex-direction: column;
    gap: 1.875rem;
  }
}
</style>
