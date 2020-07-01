<template>
  <Layout class="bg-colorSecondary border-t-8 border-solid border-colorPrimary">
    <section class="hero text-colorPrimary flex flex-col justify-center pb-0 h-full">
      <div class="md:w-2/3 md:pt-24">
        <h2 class="font-display leading-tight mb-6">
          Remotely based
          UI/UX facilitator &amp;&nbsp;developer
        </h2>
        <p class="font-body text-xl mb-4">
          <span v-show="hasName == true">Hello {{name}} 👋, I'm Olivier.</span>I help companies big and small create timeless digital touchpoints.
          The result? Delightful experiences that leave a lasting impression.
          Want to change direction, change behaviour, or change the world? I can help out.
        </p>
        <p class="font-body text-xl mb-12 relative">
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
          
          
        </p>
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
import IconCopy from "~/assets/svgs/icon-copy.svg";
import PreviousClients from "~/components/PreviousClients.vue";
import Testimonial from "~/components/Testimonial.vue";

export default {
  metaInfo: {
    title: "UX/UI Designer Based in London | Olivier Balaguer",
    link: [
      {
        rel: "canonical",
        href: "https://olivierbalaguer.com/"
      }
    ],
    meta: [
      {
        property: "og:title",
        content: "Olivier Balaguer"
      },
      {
        property: "og:description",
        content: "Remote UI/UX facilitator & developer based in London, UK"
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
        content: "Remote UI/UX facilitator & developer based in London, UK"
      }
    ]
  },
  components: {
    PreviousClients,
    Testimonial,
    IconCopy
  },
  beforeCreate() {
    // this.$store.commit('setName', this.$route.query.hello)
    if (this.$route.query.hello) {
      this.name = this.$route.query.hello;
      // this.hasName = true
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