<template>
  <Layout class="bg-colorSecondary">
    <Hero />
    <PreviousClients />
    <Services />
    <Testimonial />
    <LatestWork />

    <section class="call-out flex justify-center items-center py-16 bg-colorPrimary text-right text-colorSecondary text-lg">
      <g-link to="/services/" class="flex items-center">
        See how I can help out
        <ArrowRight class="colorSecondary ml-4" />
      </g-link>
    </section>
  </Layout>
</template>

<style lang='scss' scoped>
    
  /* a:hover {
    border-bottom: none;

    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23ff9800' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
    background-position: 0 100%;
    background-size: auto 6px;
    background-repeat: repeat-x;
    text-decoration: none;
  } */
 
</style>



<script>
import ArrowRight from '~/assets/svgs/icon-arrow-right.svg'
import Hero from '~/components/Hero.vue'
import PreviousClients from '~/components/PreviousClients.vue'
import Services from '~/components/Services.vue'
import Testimonial from '~/components/Testimonial.vue'
import LatestWork from '~/components/LatestWork.vue'
// import Quote from '~/assets/svgs/quote.svg'
// import { store } from '~/main'

// localStorage.setItem('name', this.$route.query.hello)
export default {
  metaInfo: {
    title: 'Hello, world!'
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
  components: {
    Hero,
    PreviousClients,
    Services,
    Testimonial,
    LatestWork,
    ArrowRight
  }
}
</script>