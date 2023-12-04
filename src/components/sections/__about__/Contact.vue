<script>
export default {
  name: 'Contact'
}
</script>

<template>
  <section id="contact-us">
    <div class="container">
      <h2>Contact Us</h2>
      <p>You can contact us with any questions you may have.</p>
      <div class="contact-items">
        <!-- Address -->
        <div class="contact-item">
          <div class="contact-name">
            <i class="fi fi-rr-marker"></i>
            <h3>Address</h3>
          </div>
          <div class="contact-detail">
            <p>123 Street, City, Country</p>
          </div>
        </div>

        <!-- Phone -->
        <div class="contact-item">
          <div class="contact-name">
            <i class="fi fi-rr-phone-rotary"></i>
            <h3>Phone</h3>
          </div>
          <div class="contact-detail">
            <a href="tel:+1234567890">+1 234 567 8900</a>
          </div>
        </div>

        <!-- Email -->
        <div class="contact-item">
          <div class="contact-name">
            <i class="fi fi-rr-envelope"></i>
            <h3>Email</h3>
          </div>
          <div class="contact-detail">
            <a href="mailto:deneme@mail.com">deneme@mail.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3.75rem;
  margin-top: 3.125rem;
}

.contact-item {
  width: calc(33.33333% - calc(3.75rem * 2 / 3));
  text-align: left;
  border: solid 1px #d1d1d1da;
  border-radius: 1rem;
  padding: 1.875rem 2rem;
}

.contact-item .contact-name {
  display: flex;
  align-items: center;
}

.contact-item .contact-name i {
  margin-right: 0.5rem;
  position: relative;
  top: 2px;
}

.contact-item .contact-name h3 {
  margin: 0;
  font-size: 1.125rem;
}

.contact-item .contact-detail {
  margin-top: 0.5rem;
  font-size: 1rem;
}

@media screen and (max-width: 1024px) {
  .contact-item {
    /* 3.75rem comes from the padding of the services list */
    width: calc(50% - calc(3.75rem / 2));
  }
}

@media screen and (max-width: 768px) {
  .contact-items {
    flex-direction: column;
    gap: 1.875rem;
  }

  .contact-item {
    width: 100%;
    text-align: center;
  }

  .contact-item .contact-name {
    justify-content: center;
  }
}
</style>
