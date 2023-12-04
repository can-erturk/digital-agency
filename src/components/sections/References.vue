<script>
export default {
  name: 'References'
}
</script>

<template>
  <section class="references" id="references">
    <div class="container">
      <h3>More than 200 companies trusted us worldwide</h3>
      <div class="references-list">
        <img src="/references/logoipsum-1.svg" alt="Reference logo" />
        <img src="/references/logoipsum-2.svg" alt="Reference logo" />
        <img src="/references/logoipsum-3.svg" alt="Reference logo" />
        <img src="/references/logoipsum-4.svg" alt="Reference logo" />
        <img src="/references/logoipsum-5.svg" alt="Reference logo" />
        <img src="/references/logoipsum-6.svg" alt="Reference logo" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.references {
  padding-top: 4.5rem;
}

h3 {
  margin-bottom: 2.25rem;
}

.container {
  height: 100%;
  text-align: center;
}

.references-list {
  display: flex;
  gap: 2.625rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.references-list img {
  height: 2.25rem;
  filter: grayscale(100%);
  opacity: 0.3;
}

@media screen and (max-width: 1024px) {
  .references {
    display: none;
  }
}
</style>
