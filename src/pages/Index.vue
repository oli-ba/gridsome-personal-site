<template>
  <Layout class="bg-colorSecondary">
    <section class="hero text-colorPrimary flex flex-col justify-center pb-0 h-screen">
      <div class="md:w-2/3 md:pt-24">
        <h2 v-if="hasName == true" class="font-display mb-6">
          Hello {{name}}! <br>
          I'm Oli, UI/UX specialist.
        </h2>
        <h2 v-else class="font-display leading-tight mb-6">
          UI/UX Specialist
        </h2>
        <p class="font-body text-xl mb-4">I help companies big and small create timeless digital touchpoints.
        The result: delightful experiences that leave a lasting impression.</p>
        <p class="font-body text-xl mb-8">Want to change direction, change behaviour, or change the world?</p>
        <g-link to="/services/" class="cta flex items-center text-lg mb-12">
          See how I can help 
          <ArrowRight class="ml-4"/>
        </g-link>
      </div>
      <div class="lead h-full"></div>
    </section>
    <section class="clients bg-colorPrimary text-colorSecondary py-32">
      <h3 class="text-xl text-center font-display mb-4">Previously At</h3>
      <div class="flex flex-wrap items-stretch justify-center">
        <DYC class="colorSecondary"/>
        <VibePay class="colorSecondary"/>
        <Burberry class="colorSecondary"/>
        <Ticketmaster class="colorSecondary"/>
        <Deliveroo class="colorSecondary"/>
        <MCSaatchi class="colorSecondary"/>
        <FCC class="colorSecondary"/>
        <EEMS class="colorSecondary"/>
      </div>
    </section>

    <section class="text-colorPrimary text-center py-32">
      <h3 class="text-4xl font-display mb-6">Why invest in good UX</h3>
      <div class="reasons">
        <div class="mb-12">
          <Doodle1 class="colorPrimary mb-6 m-auto"/>
          <h4>Differentiate your product</h4>
          <p>In a noisy digital world, setting your product apart from the crowd can be difficult.</p>
        </div>
        <div class="mb-12">
          <Doodle2 class="colorPrimary mb-6 m-auto"/>
          <h4>Future-proof your product</h4>
          <p>UX is important because it aims to fulfil your user’s needs.</p>
        </div>
        <div class="mb-12">
          <Doodle3 class="colorPrimary mb-6 m-auto"/>
          <h4>Delight your users</h4>
          <p>If you keep them happy, they'll keep coming back.</p>
        </div>
      </div>
    </section>

    <section class="testimonial text-colorPrimary">
      <h3 class="text-4xl font-display mb-6">Testimonials</h3>
      <div class="flex-col md:w-3/5 mb-16">
        <p class="italic border-l-8 px-4 border-colorPrimary">I always valued his proactive and professional approach and you could always count on Olivier really wanting to deliver on a brief. His expert opinion and the professional and swift delivery of any project we worked on have been consistently outstanding. <!--Besides, Olivier is joy to work with; always friendly and interested in keeping abreast on the latest online and design developments. I happily recommend Olivier.--></p>
        <div class="flex flex-row">
          <div>
            <g-image src="~/assets/images/cornel_lazar.jpg" alt="A picture of Cornel Lazar" quality="100" width="48" height="48" fit="contain" class="rounded-full"></g-image>
          </div>
          <div class="px-4">
            <h4 class="text-xl">Cornel Lazar</h4>
            <div>Marketing Director</div>
          </div>
        </div>
      </div>
      <div class="flex-col md:w-3/5">
        <p class="italic border-l-8 px-4 border-colorPrimary"><!--I have worked with Olivier on a variety of projects over the past few years and have always been incredibly pleased with his work. His work on the redesign of one of our web products brought new life and ease of use to a critical tool for a client in Ireland. Olivier also delivered our responsive email templates for use during the Rugby World Cup, including a particular email which was highly sensitive and complex.--> His work is always outstanding, on point for the project brief, and delivered with integrity and professionalism. I cannot recommend Olivier enough!</p>
        <div class="flex flex-row">
          <div>
            <g-image src="~/assets/images/bridget_krull.jpg" alt="A picture of Bridget Krull" quality="100" width="48" height="48" fit="contain" class="rounded-full"></g-image>
          </div>
          <div class="px-4">
            <h4 class="text-xl">Bridget Krull</h4>
            <div>Product Manager</div>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-work">
      <h3 class="text-6xl text-colorPrimary font-display mb-6">Latest Projects</h3>
      <div v-for="edge in $page.work.edges" :key="edge.node.id">
        <g-link :to='edge.node.path'>
          <Project :title="edge.node.title" :subtitle="edge.node.subtitle" />
        </g-link>
      </div>
    </section>
    <section class="call-out flex justify-center items-center py-16 bg-colorPrimary text-right text-colorSecondary text-lg">
      <g-link to="/services/" class="flex items-center">
        See how I can help out
        <ArrowRight class="colorSecondary ml-4" />
      </g-link>
    </section>
  </Layout>
</template>

<style lang='scss' scoped>
  .clients svg {
    width: 110px;
    height: 75px;
    margin: 1rem;
    opacity: 1;
    transition: opacity 0.25s ease-in;
  }
  .reasons {
    @apply flex flex-col;
    @screen md {@apply flex-row}
    & h4 {
      @apply text-2xl font-bold;
      }
    & div {
      @apply pr-4;
      @screen md {@apply w-4/12}
      }
    }
  .testimonial {
    &__quote {
      @apply flex;

      & p {
        @apply w-6/12;}
    }
  }
  /* a:hover {
    border-bottom: none;

    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23ff9800' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
    background-position: 0 100%;
    background-size: auto 6px;
    background-repeat: repeat-x;
    text-decoration: none;
  } */
  @screen md {
    .clients svg {opacity: 0.8;}
  }
  .clients svg:hover {opacity: 1;}
</style>

<page-query>
query Work {
  work:allWork(
    sortBy: "title", 
    order: ASC,
    filter: {featured: {eq: true}}) {
    edges{
      node {
        id
        title
        subtitle
        path
        featured
      }
    }
  }
}
</page-query>

<script>
import DYC from '~/assets/svgs/dream-yacht-charter.svg?inline'
import VibePay from '~/assets/svgs/vibe-pay.svg?inline'
import Burberry from '~/assets/svgs/burberry.svg?inline'
import Ticketmaster from '~/assets/svgs/ticketmaster.svg?inline'
import Deliveroo from '~/assets/svgs/deliveroo.svg?inline'
import MCSaatchi from '~/assets/svgs/mc-saatchi.svg?inline'
import FCC from '~/assets/svgs/future-cities-catapult.svg?inline'
import EEMS from '~/assets/svgs/eems.svg?inline'
import ArrowRight from '~/assets/svgs/icon-arrow-right.svg?inline'
import Doodle1 from '~/assets/svgs/doodle-1.svg?inline'
import Doodle2 from '~/assets/svgs/doodle-2.svg?inline'
import Doodle3 from '~/assets/svgs/doodle-3.svg?inline'
import Project from '~/components/Project.vue'
// import Quote from '~/assets/svgs/quote.svg'
import { store } from '~/main'

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
    DYC,
    VibePay,
    Burberry,
    Ticketmaster,
    Deliveroo,
    MCSaatchi,
    FCC,
    EEMS,
    ArrowRight,
    Project,
    Doodle1,
    Doodle2,
    Doodle3
  }
}
</script>