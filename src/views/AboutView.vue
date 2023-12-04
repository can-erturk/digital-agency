<script setup>
import Breadcrumbs from '@/components/__common__/Breadcrumbs.vue'
import About from '@/components/sections/__about__/About.vue'
import Contact from '@/components/sections/__about__/Contact.vue'
import Services from '@/components/sections/__about__/Services.vue'
</script>

<template>
  <Breadcrumbs title="About Us" />

  <About />
  <Services />
  <Contact />
</template>

<style scoped>
.row {
  display: flex;
  gap: 3.75rem;
  align-items: center;
}

.row > * {
  flex: 1;
  max-width: 50%;
  flex-shrink: 0;
}

.about-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.875rem;
  box-shadow: 15px 15px 12px #00000018;
}

p {
  font-size: 1.125rem;
  margin-top: 1rem;
}
</style>
