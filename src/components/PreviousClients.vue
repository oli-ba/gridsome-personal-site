<template>
  <section class="clients bg-colorPrimary text-colorSecondary py-24">
    <h3 class="text-xl text-center">Previously At</h3>
    <ul class="flex flex-wrap items-stretch justify-center">
      <li class="list-none">
        <DYG class="colorSecondary" />
      </li>
      <li class="list-none">
        <VibePay class="colorSecondary" />
      </li>
      <li class="list-none">
        <Burberry class="colorSecondary" />
      </li>
      <!-- <li class="list-none">
        <LiveNation class="colorSecondary" />
      </li> -->
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
      <li class="list-none">
        <Ticketmaster class="colorSecondary" />
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
import DYG from "~/assets/svgs/dream-yacht-group.svg";
import VibePay from "~/assets/svgs/vibe-pay.svg";
import Burberry from "~/assets/svgs/burberry.svg";
import Ticketmaster from "~/assets/svgs/ticketmaster.svg";
import Deliveroo from "~/assets/svgs/deliveroo.svg";
import MCSaatchi from "~/assets/svgs/mc-saatchi.svg";
import FCC from "~/assets/svgs/future-cities-catapult.svg";
import EEMS from "~/assets/svgs/eems.svg";
import LiveNation from "~/assets/svgs/live-nation.svg";
export default {
  components: {
    DYG,
    VibePay,
    Burberry,
    Ticketmaster,
    Deliveroo,
    MCSaatchi,
    FCC,
    EEMS,
    LiveNation
  }
};
</script>