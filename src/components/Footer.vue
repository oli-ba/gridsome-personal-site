<template>
  <footer
    class="flex flex-col md:flex-row justify-between items-center bg-pink text-pblue px-6 xl:px-16 w-screen"
  >
    <div class="p-4">&copy; {{ new Date().getFullYear() }} {{ $static.metadata.siteName }}.</div>
    <div class="w-full md:w-1/3 order-first md:order-last p-4">
      <ul class="flex justify-between text-sm">
        <li>
          <button
            v-clipboard:copy="copyEmail"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
            title="Copy my email address"
          >
            <IconEmail />Email Me
          </button>
          <p class="text-xs absolute m-auto">{{message}}</p>
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
        <li>
          <a href title="Soooo good">
            <Instagram />Instagram
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style scoped>
footer svg {
  @apply w-6 h-6 m-auto;
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
      message: null
    }
  },
  methods: {
    onCopy: function (e) {
      // console.log('You just copied: ' + e.text)
      this.message = 'Copied to clipboard'
    },
    onError: function (e) {
      // console.log('Failed to copy texts')
      this.message = 'oli@olivierbalaguer.com'
    }
  }
}
</script>