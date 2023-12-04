<script setup>
import WhyUsItem from '@/components/ui/WhyUsItem.vue'
</script>

<template>
  <section class="why-us" id="why-us">
    <div class="container">
      <h2>Why choose us?</h2>
      <p>Some reasons for why peoples choose our services.</p>

      <div class="whyus-list">
        <WhyUsItem
          icon="fi-rr-trophy-star"
          title="Experience and Expertise"
          description="Our team consists of highly skilled professionals with expertise in their respective fields."
        />
        <WhyUsItem
          icon="fi-rr-pen-nib"
          title="Customized Solutions"
          description="We offer tailor-made solutions that address your specific needs and objectives."
        />
        <WhyUsItem
          icon="fi-rr-diamond"
          title="Quality and Excellence"
          description="We strive for perfection and aim to exceed your expectations at every stage of the project."
        />
        <WhyUsItem
          icon="fi-rr-time-fast"
          title="Timely Delivery"
          description="Our efficient project management practices ensure that we deliver projects on time."
        />
        <WhyUsItem
          icon="fi-rr-user"
          title="Customer Satisfaction"
          description="Customer satisfaction is at the core of our business <br> philosophy."
        />
        <WhyUsItem
          icon="fi-rr-dollar"
          title="Competitive Pricing"
          description="We offer competitive pricing options without compromising on the quality of our services."
        />
      </div>
    </div>
  </section>
</template>

<style>
.whyus-list {
  margin-top: 4.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5.5rem;
}

@media (max-width: 1024px) {
  .whyus-list {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 2.5rem;
  }

  .whyus-list .whyus-item:is(:nth-last-of-type(1), :nth-last-of-type(2)) {
    display: none;
  }
}
</style>
