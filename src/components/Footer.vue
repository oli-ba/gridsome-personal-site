<template>
  <footer
    class="flex flex-col md:flex-row justify-between items-center text-colorSecondary bg-colorPrimary w-screen py-8"
  >
    <div class="mt-6 md:mt-0">&copy; {{ new Date().getFullYear() }} {{ $static.metadata.siteName }}.</div>
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
              <IconEmail />Copy email
            </button>
            <span
              v-if="hasCopied"
              class="text-xs absolute left-0 m-auto fade-in-out"
              style="width: 15rem; bottom: -15px"
            >{{message}}</span>
          </div>
        </li>
        <li>
          <a
            href="https://static.olivierbalaguer.com/pdfs/Olivier-Balaguer-CV-2020.pdf"
            download
            title="Download my CV"
          >
            <CV />CV
          </a>
        </li>
        <li>
          <a
            href="https://static.olivierbalaguer.com/pdfs/OB-Latest-Projects-Portfolio-2020.pdf"
            download
            title="See my latest projects"
          >
            <Portfolio />Portfolio
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/olivierbalaguer" title="Let's connect!">
            <LinkedIn />LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/oli-ba" title="Fork my site">
            <Github />Github
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang='scss' scoped>
li {
  @apply list-none transition-opacity duration-300;
  @screen md {
    @apply opacity-75;
  }
}
li:hover {
  @apply opacity-100;
}
footer svg {
  @apply w-6 h-6 m-auto;
}
svg path {
  stroke: #ffccd5;
}
.fade-in-out {
  opacity: 0;
  animation: in-out 4s ease;
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
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import IconEmail from "~/assets/svgs/send.svg?inline";
import LinkedIn from "~/assets/svgs/linkedin.svg?inline";
import Github from "~/assets/svgs/github.svg?inline";
import Instagram from "~/assets/svgs/instagram.svg?inline";
import CV from "~/assets/svgs/icon-cv.svg?inline";
import Portfolio from "~/assets/svgs/icon-book.svg?inline";

export default {
  name: "Footer",
  components: {
    IconEmail,
    LinkedIn,
    Github,
    Instagram,
    CV,
    Portfolio,
  },
  data() {
    return {
      copyEmail: "oli@olivierbalaguer.com",
      message: null,
      hasCopied: false,
    };
  },
  methods: {
    onCopy: function (e) {
      // console.log('You just copied: ' + e.text)
      this.message = "Copied to clipboard";
      this.hasCopied = true;
    },
    onError: function (e) {
      // console.log('Failed to copy texts')
      this.message = "oli@olivierbalaguer.com";
    },
  },
};
</script>