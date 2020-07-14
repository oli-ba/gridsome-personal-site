<template>
  <Layout class="bg-colorSecondary">
    <!-- <Header v-show="hasName == false" /> -->
    <section class="hero text-colorPrimary flex flex-col justify-center pb-0 h-full">
      <div class="md:pt-24 md:w-4/5">
        <p class="font-bold">&mdash; Hello <span v-show="hasName == true">{{name}},</span> I'm Oli. </p>
        <h1 class="font-display leading-tight mb-6">
          Remote UI/UX facilitator
        </h1>
        <p class="font-body text-xl mb-4 lg:w-55ch md:w-full">
          Maker of meaningful digital touchpoints. Want to change direction, change behaviour, or change the world? <span v-show="hasName == true">Then {{name}},</span> I can help out.
        </p>
        <a href="https://calendly.com/olivier-ui-ux/30min?back=0" class="cta text-colorSecondary bg-colorPrimary mt-2 mb-4 md:mr-6">Book a free 30 min one-to-one</a>
        <a href="https://www.linkedin.com/in/olivierbalaguer" class="cta mt-2 mb-4">Connect on LinkedIn</a>
        <!-- <div>
          <a href="pdfs/Olivier-Balaguer-CV-2020.pdf" download class="">Download my CV</a>
        </div> -->
        <!-- <p class="font-body text-xl mb-12 relative lg:w-65ch md:w-full">
          I'm currently refreshing the ol' site and adding new work. If you're looking for my CV, <a href="Olivier-Balaguer-CV-2020.pdf" download class="font-bold underline">you can download it here</a>. If you would like to connect you can <a href="https://www.linkedin.com/in/olivierbalaguer" class="font-bold cursor-pointer underline">find me on LinkedIn</a>, or you can <a
            v-clipboard:copy="copyEmail"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            title="copy my email to your clipboard"
            class="font-bold cursor-pointer underline"
          >
            <span v-if="hasCopied">{{ message }}</span>
            <span v-else>copy my email address</span>
          </a> and paste into your email message.  
          
          
        </p> -->
        <!-- <g-link to="/services/" class="cta flex text-lg mb-12">
          See how I can help
          <ArrowRight class="ml-4" />
        </g-link>-->
      </div>
      <div class="lead"></div>
    </section>
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
    PreviousClients,
    Testimonial
  },
  beforeCreate() {
    // this.$store.commit('setName', this.$route.query.hello)
    if (this.$route.query.hello) {
      this.name = this.$route.query.hello;
    }
  },
  created() {
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
      hasCopied: false
    };
  },
  methods: {
    onCopy: function(e) {
      this.message = "copy my email address (email copied)";
      this.hasCopied = true;
    },
    onError: function(e) {
      this.message = "email me at oli@olivierbalaguer.com";
    }
  }
};
</script>