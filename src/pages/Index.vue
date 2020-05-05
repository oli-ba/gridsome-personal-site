<template>
  <Layout class="bg-pink">
    <section class="hero text-pblue flex flex-col justify-center pb-0">
      <div class="md:w-3/5">
        <h2 v-if="name" class="font-display leading-none mb-6">
          Hello {{name}}! <br>
          I'm Oli.
        </h2>
        <h2 v-else class="font-display leading-none mb-6">
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
      <div class="lead h-48"></div>
    </section>
    <section class="clients bg-pblue text-pink">
      <h3 class="text-xl text-center font-display mb-4">Previously At</h3>
      <div class="flex flex-wrap items-stretch justify-center">
        <DYC class="pink"/>
        <VibePay class="pink"/>
        <Burberry class="pink"/>
        <Ticketmaster class="pink"/>
        <Deliveroo class="pink"/>
        <MCSaatchi class="pink"/>
        <FCC class="pink"/>
        <EEMS class="pink"/>
      </div>
    </section>
    <section class="text-pblue">
      <h3 class="text-4xl font-display mb-16">Why invest in good UX</h3>
      <div class="reasons">
        <div>
          <h4>Differentiate your product</h4>
          <p>In a noisy digital world, setting your product apart from the crowd can be difficult. Purchasing a off-the-shelf template is not the panacea for your products users.</p>
        </div>
        <div>
          <h4>Future-proof your product</h4>
          <p>It’s not a buzzword to throw around lightly. UX is important because it aims to fulfil your user’s needs by defining a clear problem with clear solution.</p>
        </div>
        <div>
          <h4>Keeps your products users happy</h4>
          <p>Remember, users don’t want a quarter inch drill, they want a quarter inch hole! Keep them happy, keep them coming back.</p>
        </div>
      </div>
    </section>
    <section class="testimonial text-pblue">
      <h3 class="text-6xl font-display mb-16">Testimonials</h3>
      <div class="testimonial__quote">
        <div>
          <g-image src="~/assets/images/cornel_lazar.jpg" alt="A picture of Cornel Lazar" quality="100" width="80" height="80" fit="contain" class="rounded-full"></g-image>
          <h4>Cornel Lazar - Growth and Brand</h4>
        </div>
        <p>I always valued his proactive and professional approach and you could always count on Olivier really wanting to deliver on a brief. His expert opinion and the professional and swift delivery of any project we worked on have been consistently outstanding. Besides, Olivier is joy to work with; always friendly and interested in keeping abreast on the latest online and design developments. I happily recommend Olivier.</p>
      </div>
      <div class="testimonial__quote">
        <div>
          <g-image src="~/assets/images/bridget_krull.jpg" alt="A picture of Bridget Krull" quality="100" width="80" height="80" fit="contain" class="rounded-full"></g-image>
          <h4>Bridget Krull - Product Manager</h4>
        </div>
        <p>I have worked with Olivier on a variety of projects over the past few years and have always been incredibly pleased with his work. His work on the redesign of one of our web products brought new life and ease of use to a critical tool for a client in Ireland. Olivier also delivered our responsive email templates for use during the Rugby World Cup, including a particular email which was highly sensitive and complex. His work is always outstanding, on point for the project brief, and delivered with integrity and professionalism. I cannot recommend Olivier enough!</p>
      </div>
    </section>
    <section class="featured-work">
      <h3 class="text-6xl text-pblue font-display mb-16">Latest Work</h3>
      <div v-for="edge in $page.work.edges" :key="edge.node.id">
        <g-link :to='edge.node.path'>
          <div class="client flex flex-col justify-center items-center h-64 bg-white rounded-md hover:shadow-xl transition-shadow duration-500 ease-in-out mb-6">
            <span class="text-2xl text-pblue font-sans">{{edge.node.title}}</span>
            <span class="text-lg text-pblue font-sans">{{edge.node.excerpt}}</span>
          </div>
        </g-link>
      </div>
    </section>
    <section class="call-out flex justify-center items-center py-16 bg-pblue text-right text-pink text-lg">
      <g-link to="/services/" class="flex items-center">
        See how I can help out
        <ArrowRight class="pink ml-4" />
      </g-link>
    </section>
  </Layout>
</template>

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
        excerpt
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

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  // data() {
  //   return {
  //     name: this.$route.query.hello
  //   }
  // },
  components: {
    DYC,
    VibePay,
    Burberry,
    Ticketmaster,
    Deliveroo,
    MCSaatchi,
    FCC,
    EEMS,
    ArrowRight
  }
}
</script>

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
      @apply p-4;
      @screen md {@apply w-4/12}
      }
    }
  .testimonial {
    &__quote {
      @apply flex;

      & p {@apply w-6/12}
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