<template>
  <Layout class="bg-colorSecondary">
    <Header />
    <Hero />
    <PreviousClients />
    <!-- <Gallery /> -->
    <!-- <RecentWork /> -->
    <Cardwrapper />
    <Testimonial />
  </Layout>
</template>

<script>
import PreviousClients from "~/components/PreviousClients.vue";
import Header from "~/components/Header.vue";
import Testimonial from "~/components/Testimonial.vue";
import Hero from "~/components/Hero.vue";
import Gallery from "~/components/Gallery.vue";
import RecentWork from "~/components/RecentWork.vue";
import Cardwrapper from "~/components/Cardwrapper.vue";

export default {
  components: {
    Header,
    PreviousClients,
    Testimonial,
    Hero,
    Gallery,
    RecentWork,
    Cardwrapper
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