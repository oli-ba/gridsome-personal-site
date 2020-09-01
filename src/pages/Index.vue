<template>
  <Layout class="bg-colorSecondary">
    <!-- <Header v-show="hasName == false" /> -->
    <Hero />
    <PreviousClients />
    <Cardwrapper />
    <Testimonial />
  </Layout>
</template>
<style>
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: theme('colors.colorPrimary');
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% { background-color: theme('colors.colorPrimary'); }
  50% { background-color: transparent; }
  99% { background-color: transparent; }
}
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
import Hero from "~/components/Hero.vue";
import Testimonial from "~/components/Testimonial.vue";
import Cardwrapper from "~/components/Cardwrapper.vue";

export default {
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
  },
  components: {
    Header,
    Hero,
    PreviousClients,
    Testimonial,
    Cardwrapper
  },
  beforeCreate() {
    // this.$store.commit('setName', this.$route.query.hello)
    if (this.$route.query.hello) {
      this.name = this.$route.query.hello;
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
    if (this.$route.query.hello) {
      this.hasName = true;
    }
  },
  data() {
    return {
      copyEmail: "oli@olivierbalaguer.com",
      hasName: false,
      name: this.$route.query.hello,
      message: null,
      hasCopied: false,
      typeValue: "",
      typeStatus: false,
      typeArray: ["Designer", "Facilitator", "Specialist"],
      typingSpeed: 125,
      erasingSpeed: 100,
      newTextDelay: 1250,
      typeArrayIndex: 0,
      charIndex: 0
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  }
};
</script>