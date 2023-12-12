<script setup>
import PrimaryBtn from '@/components/__common__/PrimaryBtn.vue'
</script>

<template>
  <section class="about-us" id="about-us">
    <div class="container">
      <div class="about-us-content">
        <h2>Get information about our company</h2>
        <p>
          Since our establishment in 2019, we have been dedicated to providing our customers with
          the highest quality services and tailored solutions to meet their needs.
        </p>

        <div class="buttons">
          <PrimaryBtn text="Learn more" href="/about#us" icon="fi-rr-arrow-small-right" />
          <a href="javascript:void(0)" class="tab-call-link">
            <div class="tcl-left">
              <div class="tab-call-link-icon">
                <i class="fi fi-rr-call-history"></i>
              </div>
            </div>
            <div class="tcl-right">
              <div class="tab-call-link-title">Call us now</div>
              <div class="tab-call-link-text">+12132220000</div>
            </div>
          </a>
        </div>
      </div>

      <div class="about-us-img">
        <img src="/about-min.webp" alt="About us image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  gap: 6.25rem;
  flex-wrap: wrap;
}

.about-us-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-us-img {
  flex: 1;
  position: relative;
}

.about-us-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.875rem;
  box-shadow: 15px 15px 12px #00000018;
}

.buttons {
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
  align-items: center;
}

.tab-call-link {
  text-align: left;
  display: flex;
  padding: 0.625rem;
  color: #222;
  cursor: pointer;
  gap: 0.875rem;
  align-items: center;
}

a.tab-call-link:hover {
  cursor: pointer;
}

.tab-call-link .tab-call-link-icon {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  position: relative;
  top: 0.188rem;
}

.tab-call-link .tab-call-link-title {
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: 0.313rem;
  opacity: 0.65;
}

a.tab-call-link:hover .tab-call-link-title {
  opacity: 1;
}

.tab-call-link .tab-call-link-text {
  font-weight: 500;
}

@media screen and (max-width: 1024px) {
  .container {
    gap: 0;
  }

  .about-us-content {
    margin-bottom: 2.5rem;
  }

  .about-us-img {
    min-width: 100%;
    height: auto;
  }

  .buttons {
    flex-wrap: wrap;
    gap: 0.5rem;
    row-gap: 1.5rem;
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .about-us-content {
    margin-bottom: 0;
  }

  .about-us-img {
    display: none;
  }
}
</style>
