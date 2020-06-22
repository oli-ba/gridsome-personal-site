<template>
  <section class="clients bg-colorPrimary text-colorSecondary py-32">
    <h3 class="text-xl text-center font-display mb-4">Previously At</h3>
    <ul class="flex flex-wrap items-stretch justify-center">
      <li class="list-none">
        <DYC class="colorSecondary" />
      </li>
      <li class="list-none">
        <VibePay class="colorSecondary" />
      </li>
      <li class="list-none">
        <Burberry class="colorSecondary" />
      </li>
      <li class="list-none">
        <Ticketmaster class="colorSecondary" />
      </li>
      <li class="list-none">
        <Deliveroo class="colorSecondary" />
      </li>
      <li class="list-none">
        <MCSaatchi class="colorSecondary" />
      </li>
      <li class="list-none">
        <FCC class="colorSecondary" />
      </li>
      <li class="list-none">
        <EEMS class="colorSecondary" />
      </li>
    </ul>
  </section>
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
  .clients svg {
    opacity: 0.8;
  }
}
.clients svg:hover {
  opacity: 1;
}
</style>
<script>
import DYC from "~/assets/svgs/dream-yacht-charter.svg?inline";
import VibePay from "~/assets/svgs/vibe-pay.svg?inline";
import Burberry from "~/assets/svgs/burberry.svg?inline";
import Ticketmaster from "~/assets/svgs/ticketmaster.svg?inline";
import Deliveroo from "~/assets/svgs/deliveroo.svg?inline";
import MCSaatchi from "~/assets/svgs/mc-saatchi.svg?inline";
import FCC from "~/assets/svgs/future-cities-catapult.svg?inline";
import EEMS from "~/assets/svgs/eems.svg?inline";
export default {
  components: {
    DYC,
    VibePay,
    Burberry,
    Ticketmaster,
    Deliveroo,
    MCSaatchi,
    FCC,
    EEMS
  }
};
</script>