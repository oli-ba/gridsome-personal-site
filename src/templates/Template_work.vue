<template>
  <Layout class="bg-pink text-pblue ">    
    <section class="hero flex flex-col justify-center">
      <div class="flex-inline mb-6">
        <g-link to="/services/#work" class="cta justify-start">
        <ArrowRight class="transform -rotate-180 m-auto mr-4"/> Back to lastest work</g-link>
      </div>
      <div class="md:w-3/5">
        <h2 class="font-display leading-tight mb-4">
          {{ $page.work.title }}
        </h2>
        <p class="font-body text-xl mb-4">{{ $page.work.excerpt }}</p>
      </div>
      <div class="lead h-48"></div>
    </section>
    <section>
      <VueRemarkContent class="md:w-3/5" />
    </section>
  </Layout>
</template>

<style>
h1 {@apply text-5xl}
h3, .g-image {@apply mt-12}
ul {@apply pl-3}
</style>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Work ($id: ID!) {
  work(id: $id) {
    title
    excerpt
  }
}
</page-query>

<script>
import ArrowRight from '~/assets/svgs/icon-arrow-right.svg?inline'
export default {
  components: {
    ArrowRight
  }
}
</script>