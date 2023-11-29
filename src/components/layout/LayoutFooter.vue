<template>
  <footer>
    <div class="footer-bg"></div>
    <div class="footer-content">
      <div class="container">
        <div class="footer-col company-col">
          <img src="/logo.svg" alt="" class="footer-logo">
          <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          <p><b>Hours:</b> 8:00 - 17:00, Mon - Sat</p>
        </div>
        <div class="footer-col">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Safety Center</a></li>
            <li><a href="#">Community Guidelines</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Cookies Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Law Enforcement</a></li>
          </ul>
        </div>
        <div class="footer-col newsletter-col">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <div class="newsletter">
            <input type="email" placeholder="Enter email address">
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <p>Open Source © 2023 | Powered by <a href="https://canerturk.dev">Can Erturk</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: auto;
  position: relative;
  background-color: var(--bg-darken);
  z-index: 1;
  display: flex;
  flex-direction: column;
  color: #a6b0c2;
}

.footer-content {
  flex-grow: 1;
}

.footer-bg {
  position: absolute;
  background-image: url('/footer-bg.webp');
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  mix-blend-mode: color-burn;
  opacity: .35;
  background-repeat: no-repeat;
  background-position: -280px;
  background-size: cover;
  background-size: 100% 100%;
  z-index: -1;
}

.footer a:hover {
  color: #fff;
}

.footer-content .footer-logo {
  filter: invert();
  opacity: .85;
  margin-bottom: 1.625rem;
  margin-top: .25rem;
}

.footer-content p {
  max-width: 18.75rem;
}

.footer-content p+p {
  margin-top: 1.625rem;
}

.footer-content .container {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.875rem;
}

.footer-content .footer-col {
  flex-grow: 1;
  padding: 3.25rem 0;
}

.footer-content .footer-col.compoany-col {
  flex-grow: 2;
}

.footer-col.newsletter-col {
  margin-left: 2.5rem;
}

.footer-content .footer-col h3 {
  font-size: 1.325rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: #dadbdc;
}

@media screen and (max-width: 728px) {

  .footer-content .footer-col.company-col,
  .footer-content .footer-col.newsletter-col {
    width: 100%;
    margin-left: 0;
  }

  .footer-content {
    padding: 1.75rem 0;
  }

  .footer-content .footer-col {
    padding: 1.75rem 0;
  }
}

.footer-content .footer-col ul {
  display: flex;
  flex-direction: column;
}

.footer-content .footer-col ul li a {
  display: inline-block;
  padding: .375rem 0;
}

.newsletter {
  display: flex;
  gap: .25rem;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.newsletter input {
  flex-grow: 1;
  height: 2.25rem;
  padding: .625rem 1rem;
  border-radius: .375rem;
  background-color: #dadbdc;
  min-width: 100px;
}

.newsletter button {
  height: 2.25rem;
  padding: .625rem 1rem;
  border-radius: .375rem;
  background-color: var(--brand-color);
  color: #fff;
  cursor: pointer;
}

.footer-copyright {
  padding: 1.25rem 0;
  text-align: center;
  background-color: rgba(0, 0, 0, .2);
  font-size: .875rem;
}

.footer-copyright a {
  text-decoration: underline;
}
</style>