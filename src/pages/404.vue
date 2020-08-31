<template>
  <section class="hero h-screen text-colorSecondary px-16 flex flex-col justify-center">
    <p>404 Not Found</p>
    <h2 class="font-display mleading-tight lg:text-9xl md:text-6xl text-3xl mb-6">
      This is the end, my only friend the end...
    </h2>
    <g-link to="/" class="font-bold flex items-center mb-6">
      Take me Home
      <ArrowRight class="ml-4" />
    </g-link>
    <g-link to="/#latest-projects" class="font-bold flex items-center">
      Take me to Latest Projects
      <ArrowRight class="ml-4" />
    </g-link>
  </section>
</template>
<style scoped>
svg path {fill: theme('colors.colorSecondary');}
</style>
<script>
import ArrowRight from '~/assets/svgs/icon-arrow-right.svg?inline'
export default {
  components: {
    ArrowRight
  }
}
</script>