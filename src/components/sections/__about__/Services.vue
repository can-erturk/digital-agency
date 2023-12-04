<script setup>
const services = [
  {
    title: 'Financial Planning',
    description: 'We assist in aligning your finances and investments with your goals.',
    url: '/about#services',
    image: '/services/s10-min.jpg'
  },
  {
    title: 'Wealth Advisory',
    description: 'We craft personalized wealth strategies for affluent clients.',
    url: '/about#services',
    image: '/services/s5-min.jpg'
  },
  {
    title: 'Retirement Solutions',
    description: 'We help you plan your retirement. We also help you retirement income.',
    url: '/about#services',
    image: '/services/s7-min.jpg'
  }
]
</script>

<template>
  <section id="services">
    <div class="container">
      <h2>Our Services</h2>
      <p>Get information about our services.</p>

      <div class="services-list">
        <div class="service-item" v-for="service in services" :key="service.title">
          <div class="service-img">
            <img :src="service.image" :alt="service.title" />
          </div>
          <div class="content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
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

.service-item {
  /* 3.75rem comes from the gap of the .services-list */
  width: calc(33.33333% - calc(3.75rem * 2 / 3));
  text-align: left;
  border: solid 1px #d1d1d1da;
  border-radius: 1rem;
  overflow: hidden;
}

.service-item .service-img {
  width: 100%;
  height: 12.5rem;
}

.service-item .service-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-item .content {
  padding: 1.875rem 2rem;
}

.service-item .content h3 {
  margin-bottom: 1rem;
}

@media screen and (max-width: 1024px) {
  .service-item {
    /* 3.75rem comes from the gap of the .services-list */
    width: calc(50% - calc(3.75rem / 2));
  }
}

@media screen and (max-width: 1024px) {
  .services-list {
    flex-direction: column;
    gap: 1.875rem;
  }

  .service-item {
    width: 100%;
    text-align: center;
  }
}
</style>
