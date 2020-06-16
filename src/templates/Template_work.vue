<template>
  <Layout class="bg-colorSecondary text-colorPrimary ">    
    <section class="hero flex flex-col justify-center">
      <div class="flex-inline mb-6 text-sm">
        <g-link to="/services/#work" class="cta justify-start">
        <ArrowRight class="transform -rotate-180 m-auto mr-4 scale-75"/> Back to lastest projects</g-link>
      </div>
      <div class="md:w-3/5">
        <h2 class="font-display leading-tight mb-4 mt-0">
          {{ $page.work.subtitle }}
        </h2>
        <p class="font-body text-xl mb-4">Client: {{ $page.work.title }}</p>
      </div>
      <div class="lead h-48"></div>
    </section>
    <section>
      <VueRemarkContent class="md:w-3/5" />
      <div class="flex-inline mb-6 text-sm">
        <g-link to="/services/#work" class="cta justify-start">
        <ArrowRight class="transform -rotate-180 m-auto mr-4 scale-75"/> Back to lastest projects</g-link>
      </div>
    </section>
  </Layout>
</template>

<style>
h1 {@apply text-5xl}
.g-image {@apply my-12}
h3 {@apply sticky top-0 bg-colorSecondary mt-16 mb-4}
h4 {@apply text-2xl font-bold mt-12 mb-2}
ul, ol {@apply pl-5}
li {
  list-style-type: square;
}
ol li { list-style-type: decimal;}
</style>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Work ($id: ID!) {
  work(id: $id) {
    title
    subtitle
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