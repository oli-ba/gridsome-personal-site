<template>
  <Layout class="bg-colorSecondary">
    <!-- <Header v-show="hasName == false" /> -->
    <Hero />
    <PreviousClients />
    <Testimonial />
  </Layout>
</template>
<style>
.fade-in-out {
  opacity: 0;
  animation: in-out 3s ease;
}
@keyframes in-out {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
<script>
import PreviousClients from "~/components/PreviousClients.vue";
import Header from "~/components/Header.vue";
import Testimonial from "~/components/Testimonial.vue";
import Hero from "~/components/Hero.vue";

export default {
  components: {
    Header,
    PreviousClients,
    Testimonial,
    Hero
  },
  metaInfo: {
    title: "Remote UI/UX designer & developer based in London",
    link: [
      {
        rel: "canonical",
        href: "https://www.olivierbalaguer.com/"
      }
    ],
    meta: [
      {
        property: "og:title",
        content: "Olivier Balaguer"
      },
      {
        property: "og:description",
        content: "Remote UI/UX designer & developer based in London, UK"
      },
      {
        property: "og:image",
        content: "https://olivierbalaguer.com/og-image.png"
      },
      {
        property: "og:url",
        content: "https://olivierbalaguer.com"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        name: "twitter:title",
        content: "Olivier Balaguer"
      },
      {
        name: "twitter:card",
        content: "Remote UI/UX designer & developer based in London, UK"
      }
    ]
  }
};
</script>