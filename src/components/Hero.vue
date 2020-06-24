<template>
  <section class="hero text-colorPrimary flex flex-col justify-center pb-0 h-full">
    <div class="md:w-2/3 md:pt-24">
      <h2 v-if="hasName == true" class="font-display leading-tight mb-6">
        Hello {{name}}!
        <br />I'm Oli, UI/UX specialist.
      </h2>
      <h2
        v-else
        class="font-display leading-tight mb-6"
      >London based UI/UX facilitator &amp;&nbsp;developer</h2>
      <p class="font-body text-xl mb-4">
        I help companies big and small create timeless digital touchpoints.
        The result: delightful experiences that leave a lasting impression.
      </p>
      <p
        class="font-body text-xl mb-8"
      >Want to change direction, change behaviour, or change the world?</p>
      <g-link to="/services/" class="cta flex text-lg mb-12">
        See how I can help
        <ArrowRight class="ml-4" />
      </g-link>
    </div>
    <div class="lead"></div>
  </section>
</template>
<script>
import ArrowRight from '~/assets/svgs/icon-arrow-right.svg'
export default {
  components: {
    ArrowRight
  },
  created() {
    if(sessionStorage.getItem('name'))
      this.hasName = true
  },
  data() {
    return {
      hasName: false,
      name: sessionStorage.getItem('name')
    }
  },
}
</script>