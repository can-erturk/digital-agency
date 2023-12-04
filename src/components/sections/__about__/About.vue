<script>
export default {
  name: 'About'
}
</script>

<template>
  <section id="us">
    <div class="container">
      <div class="row">
        <div class="about-content">
          <h2>Get to know us</h2>
          <p>
            Since our establishment in 2019, we have been dedicated to providing our customers with
            the highest quality services and tailored solutions to meet their needs.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus,
            quibusdam, quia, quae voluptatem quod.
          </p>

          <ul class="about-list">
            <li>
              <i class="fi fi-rr-check"></i>
              <span>Quality work</span>
            </li>
            <li>
              <i class="fi fi-rr-check"></i>
              <span>On time delivery</span>
            </li>
            <li>
              <i class="fi fi-rr-check"></i>
              <span>24/7 support</span>
            </li>
          </ul>
        </div>
        <div class="about-img">
          <img src="/about-min.webp" alt="About us image" />
        </div>
      </div>
    </div>
  </section>
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
  margin-top: 0.5rem;
}

p {
  font-size: 1.125rem;
  margin-top: 1rem;
}

.about-list {
  margin-top: 1.875rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-list li {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
}

.about-list li i {
  font-size: 1rem;
  margin-right: 0.5rem;
  color: var(--brand-color);
  position: relative;
  top: 0.125rem;
}

@media screen and (max-width: 1024px) {
  .row {
    flex-direction: column;
    gap: 0;
  }

  .about-content {
    margin-bottom: 2.5rem;
    min-width: 100%;
  }

  .about-list li {
    justify-content: center;
  }

  .about-img {
    min-width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 768px) {
  .about-content {
    margin-bottom: 0;
  }

  .about-img {
    display: none;
  }
}
</style>
