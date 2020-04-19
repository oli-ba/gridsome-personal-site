<template>
  <Layout class="bg-pink">
    <section class="hero text-pblue p-6 pb-0 pt-8 flex flex-col justify-center">
      <h2 class="font-display leading-tight text-6xl mb-4">
        UI/UX Specialist
      </h2>
      <p class="font-body text-xl mb-4">I help companies big and small create timeless digital touchpoints.
      The result: delightful experiences that leave a lasting impression.</p>
      <p class="font-body text-xl mb-8">Want to change direction, change behaviour, or change the world?</p>
      <g-link to="/process/" class="flex items-center text-lg mb-12">
        See how I can help out 
        <ArrowRight class="ml-4"/>
      </g-link>
      <div class="lead h-48"></div>
    </section>
    <section class="clients bg-pblue p-8 pt-16 pb-16 text-pink">
      <h3 class="text-xl text-center font-display mb-4">Previously At</h3>
      <div class="flex flex-wrap items-stretch justify-center">
        <DYC class="pink"/>
        <VibePay class="pink"/>
        <Burberry class="pink"/>
        <Ticketmaster class="pink"/>
        <Deliveroo class="pink"/>
        <MCSaatchi class="pink"/>
        <FCC class="pink"/>
      </div>
    </section>
    <section class="featured-work px-6 xl:px-16 py-16">
      <h3 class="text-6xl text-pblue font-display">Featured Work</h3>
    </section>
    <section class="call-out flex justify-center items-center py-16 bg-pblue text-right text-pink text-lg">
      <g-link to="/process/" class="flex items-center">
        See how I can help out
        <RightArrow class="pink" />
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
  @screen md {
    .clients svg {opacity: 0.8;}
  }
  .clients svg:hover {opacity: 1;}
  
  .lead {
    background-image: url('data:image/svg+xml;utf8,<svg width="1" height="225" viewBox="0 0 1 225" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="-2.18557e-08" x2="0.50001" y2="225" stroke="%232017CC"/></svg>') ;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    /* height: calc(100vh - 4rem); */
  }
</style>

<script>
import DYC from '~/assets/svgs/dream-yacht-charter.svg?inline'
import VibePay from '~/assets/svgs/vibe-pay.svg?inline'
import Burberry from '~/assets/svgs/burberry.svg?inline'
import Ticketmaster from '~/assets/svgs/ticketmaster.svg?inline'
import Deliveroo from '~/assets/svgs/deliveroo.svg?inline'
import MCSaatchi from '~/assets/svgs/mc-saatchi.svg?inline'
import FCC from '~/assets/svgs/future-cities-catapult.svg?inline'
import RightArrow from '~/assets/svgs/icon-arrow-right.svg?inline'
import ArrowRight from '~/assets/svgs/arrow-right'

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
    RightArrow,
    ArrowRight
  }
}
</script>