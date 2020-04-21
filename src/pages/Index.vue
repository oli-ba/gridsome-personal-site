<template>
  <Layout class="bg-pink">
    <section class="hero text-pblue flex flex-col justify-center pb-0">
      <div class="md:w-3/5">
        <h2 class="font-display leading-tight mb-4">
          UI/UX Specialist
        </h2>
        <p class="font-body text-xl mb-4">I help companies big and small create timeless digital touchpoints.
        The result: delightful experiences that leave a lasting impression.</p>
        <p class="font-body text-xl mb-8">Want to change direction, change behaviour, or change the world?</p>
        <g-link to="/process/" class="flex items-center text-lg mb-12">
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
    <section class="featured-work">
      <h3 class="text-6xl text-pblue font-display mb-16">Latest Work</h3>
      <g-link to="/process/dream-yacht">
        <div class="flex justify-center items-center h-64 bg-white rounded-md hover:shadow-xl transition-shadow duration-500 ease-in-out">
          <span class="text-2xl text-pblue font-sans">Dream Yacht</span>
        </div>
      </g-link>
    </section>
    <section class="call-out flex justify-center items-center py-16 bg-pblue text-right text-pink text-lg">
      <g-link to="/process/" class="flex items-center">
        See how I can help out
        <ArrowRight class="pink ml-4" />
      </g-link>
    </section>
  </Layout>
</template>

<style scoped>
  .clients svg {
    width: 110px;
    height: 75px;
    margin: 1rem;
    opacity: 1;
    transition: opacity 0.25s ease-in;
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