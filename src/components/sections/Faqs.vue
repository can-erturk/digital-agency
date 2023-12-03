<script setup>
import PrimaryBtn from '@/components/__common__/PrimaryBtn.vue'
import FaqItem from '@/components/ui/FaqItem.vue'

const faqs = [
  {
    title: 'What Payment Options are Available?',
    answer:
      'Currently, we offer various payment methods such as credit cards, PayPal, and also bank transfers.'
  },
  {
    title: 'How Can I Track the Progress of My Project?',
    answer:
      'Our clients can easily track every stage of their project through our online portal. Additionally, they receive regular updates via email regarding the progress.'
  },
  {
    title: 'What Is Your Cancellation and Refund Policy?',
    answer:
      'You can find detailed information about our cancellation and refund policy by clicking on this link. Generally, we have different policies based on the service provided.'
  },
  {
    title: 'How Is Project Pricing Determined?',
    answer:
      'Project pricing varies based on the scope and requirements. We provide customized quotes after understanding the specific needs of each project.'
  },
  {
    title: 'What Is Your Availability?',
    answer:
      'We are available 24/7 to answer your questions. You can contact us via email or phone. We will get back to you as soon as possible.'
  }
]
</script>

<template>
  <section class="faqs" id="faqs">
    <div class="container">
      <h2>Keep Answers Short</h2>
      <p>Concise responses to capture the essence of your queries.</p>
      <div class="row">
        <div class="contact">
          <h3>Have a question?</h3>
          <p>Send us a message and we will get back to you as soon as possible!</p>
          <PrimaryBtn text="Contact Us" href="/about#contact-us" />
        </div>

        <div class="faqs-list">
          <FaqItem v-for="faq in faqs" :key="faq.title" :title="faq.title" :answer="faq.answer" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faqs {
  text-align: left;
}

.faqs .row {
  display: flex;
  margin-top: 3.75rem;
  gap: 3.5rem;
}

.faqs .contact {
  width: 260px;
  flex-shrink: 0;
  text-align: left;
}

.faqs .contact h3 {
  margin-bottom: 10px;
}

.faqs .contact p {
  font-size: 1rem;
  margin-bottom: 20px;
}

.faqs .faqs-list {
  flex: 1;
  text-align: left;
}

.faqs .faqs-list .faq-item {
  border-bottom: solid 1px #d1d1d1da;
}

.faqs .faqs-list .faq-item:nth-of-type(1) {
  border-top: solid 1px #d1d1d1da;
}

@media screen and (max-width: 1024px) {
  .faqs .row {
    flex-direction: column;
    margin-top: 2.5rem;
  }

  .faqs .contact {
    display: none;
  }

  .faqs .faqs-list {
    width: 100%;
  }  
}

@media screen and (max-width: 768px) {
  .faqs .row {
    margin-top: 1.5rem;
  }
}
</style>
