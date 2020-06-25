<template>
  <Layout class="bg-colorSecondary border-t-8 border-solid border-colorPrimary">
    <section class="hero text-colorPrimary flex flex-col justify-center pb-0 h-full">
      <div class="md:w-2/3 md:pt-24">
        <div v-if="hasName == true" class="text-2xl leading-tight mb-6">
          Hello {{name}}! I'm Olivier 👋
        </div>
        <h2 class="font-display leading-tight mb-6">
          Remotely based <em>UI/UX</em> facilitator &amp;&nbsp;developer
        </h2>
        <p class="font-body text-xl mb-4">
          I help companies big and small create timeless digital touchpoints.
          The result: delightful experiences that leave a lasting impression.
          Want to change direction, change behaviour, or change the world? I can help out.
        </p>
        <p class="font-body text-xl mb-4 relative">
          I'm currently rebuilding off the ol' site. In the meantime feel to get in touch:  
          <a
            v-clipboard:copy="copyEmail" 
            v-clipboard:success="onCopy" 
            v-clipboard:error="onError" 
            title="copy my email to your clipboard"
            class="font-bold cursor-pointer">
            <span v-if="hasCopied">{{ message }}.</span> 
            <span v-else>copy my email here.</span> 
          </a> 
          Also you can <a href="Olivier-Balaguer-CV-2020.pdf" download class="font-bold">download my CV here</a>
        </p>
        <!-- <g-link to="/services/" class="cta flex text-lg mb-12">
          See how I can help
          <ArrowRight class="ml-4" />
        </g-link> -->
      </div>
      <div class="lead"></div>
    </section>
    <PreviousClients />
    <Testimonial />
    
  </Layout>
</template>
<style>
.link::before {
  border-bottom: 10px solid rgba(255, 0, 0, 0.5);
  content: '';
  position: absolute;
  /* height: 2px; */
  width: 100%;
  bottom: 2px;
  opacity: .5;
  display: block;

}
.fade-in-out {
  opacity: 0;
  animation: in-out 3s ease;
}
@keyframes in-out {
  0% {opacity: 0}
  50% {opacity: 1;}
  100% {opacity: 0;}
}
</style>
<script>
import IconCopy from '~/assets/svgs/icon-copy.svg'
import PreviousClients from '~/components/PreviousClients.vue'
import Testimonial from '~/components/Testimonial.vue'

export default {
  metaInfo: {
    title: 'UX/UI Designer Based in London'
  },
  components: {
    PreviousClients,
    Testimonial,
    IconCopy
  },
  beforeCreate() {
    if(this.$route.query.hello) {
      localStorage.setItem('name', this.$route.query.hello)
    }
  },
  created() {
    if(localStorage.getItem('name'))
      this.hasName = true
  },
  data() {
    return {
      hasName: false,
      name: localStorage.getItem('name'),
      copyEmail: 'oli@olivierbalaguer.com',
      message: null,
      hasCopied: false
    }
  },
  methods: {
    onCopy: function (e) {
      // console.log('You just copied: ' + e.text)
    this.message = 'and paste it into your email message 🤯'
    // this.message = 'email me at oli@olivierbalaguer.com'
    this.hasCopied = true
    },
    onError: function (e) {
      // console.log('Failed to copy texts')
      this.message = 'email me at oli@olivierbalaguer.com'
    }
  }
}
</script>