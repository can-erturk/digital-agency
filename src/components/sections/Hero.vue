
<script setup>
import LinkBtn from '../__common__/PrimaryBtn.vue'
</script>

<template>
  <div class="hero">
    <div class="container">

      <div class="hero-content">
        <h1>Transforming Ideas into Reality</h1>
        <p>Enable highly motivating non-cash micropayments and offer in-demand prepaid solutions.</p>
        <LinkBtn text="See More" href="/" icon="fi-rr-arrow-small-right" />
        <LinkBtn text="Our Services" href="/" icon="fi-rr-arrow-small-right" />
      </div>

      <img src="/hero-image.webp" alt="hero image" class="hero-img" />

    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 43.75rem;
  background: linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary));
  display: flex;
  flex-direction: column;
  background-size: auto 100%;
  background-position: left bottom;
  max-width: 100vw;
  overflow: hidden;
  position: relative;
  padding-top: 6rem;
}

.btn-primary {
  margin-bottom: 10px;
}

.btn-primary+.btn-primary {
  margin-left: 0.625rem;
  background-color: transparent;
  color: black;
}

.container {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero-content {
  max-width: 37.5rem;
  position: relative;
}

.hero-content h1 {
  font-weight: 500;
  letter-spacing: -0.03rem;
  max-width: 31.25rem;
}

.hero-content p {
  display: block;
  margin-top: 1rem;
  margin-bottom: 2.25rem;
  opacity: 1;
  font-size: 1.125rem;
  max-width: 27.5rem;
}

.hero-img {
  width: 23.5rem;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 3.75rem;
}

@media screen and (max-width: 1024px) {
  .hero {
    height: 37.5rem;
    text-align: center;
    padding-bottom: 2.75rem;
  }

  .hero-content h1,
  .hero-content p {
    max-width: none;
  }

  .container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .hero-img {
    display: none;
  }
}

@media screen and (max-width: 640px) {
  .hero {
    padding-top: 5rem;
  }
}
</style>
