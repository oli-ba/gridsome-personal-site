<template>
  <footer
    class="flex flex-col md:flex-row justify-between items-center text-colorSecondary bg-colorPrimary w-screen py-8"
  >
    <div class="mt-6 md:mt-0">
      &copy; {{ new Date().getFullYear() }} {{ $static.metadata.siteName }}.
      <span class="block md:inline">
        Made with <a href="https://gridsome.org/">Gridsome</a> 🤘
      </span>
    </div>
    <div class="w-full md:w-1/3 order-first md:order-last">
      <ul class="flex justify-between text-sm">
        <li>
          <div class="relative p-0">
            <button
              v-clipboard:copy="copyEmail"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              title="Copy my email address"
            >
              <IconEmail />
              Email Me
            </button>
            <span v-if="hasCopied" class="text-xs absolute left-0 m-auto fade-in-out" style="width: 15rem; bottom: -15px">{{message}}</span>
          </div>
          <!-- <p class="text-xs" v-if="onCopy === true">Address copied to clipboard</p> -->
          <!-- <p v-if="onError === true">Copied!</p> -->
        </li>
        <li>
          <a href="https://www.linkedin.com/in/olivierbalaguer" title="Let's connect!">
            <LinkedIn />LinkedIn
          </a>
        </li>
        <li>
          <a href title="Inspect my code">
            <Github />Github
          </a>
        </li>
        <!-- <li>
          <a href title="Soooo good">
            <Instagram />Instagram
          </a>
        </li> -->
      </ul>
    </div>
  </footer>
</template>
<style scoped>
li { @apply list-none}
footer svg {
  @apply w-6 h-6 m-auto;
}
svg path {stroke: #FFCCD5;}
.fade-in-out {
  opacity: 0;
  animation: in-out 4s ease;
}
@keyframes in-out {
  0% {opacity: 0}
  50% {opacity: 1}
  100% {opacity: 0;}
}
</style>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import IconEmail from '~/assets/svgs/send.svg?inline'
import LinkedIn from '~/assets/svgs/linkedin.svg?inline'
import Github from '~/assets/svgs/github.svg?inline'
import Instagram from '~/assets/svgs/instagram.svg?inline'

export default {
  name: "Footer",
  components: {
    IconEmail,
    LinkedIn,
    Github,
    Instagram
  },
  data() {
    return {
      copyEmail: 'oli@olivierbalaguer.com',
      message: null,
      hasCopied: false
    }
  },
  methods: {
    onCopy: function (e) {
      // console.log('You just copied: ' + e.text)
    this.message = 'Copied to clipboard'
      this.hasCopied = true
    },
    onError: function (e) {
      // console.log('Failed to copy texts')
      this.message = 'oli@olivierbalaguer.com'
    }
  }
}
</script>