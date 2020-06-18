<template>
  <Layout class="bg-colorSecondary text-colorPrimary ">    
    <section class="hero flex flex-col justify-center pb-0">
      <div class="flex-inline mb-6 text-sm">
        <g-link to="/services/#work" class="cta justify-start">
        <ArrowRight class="transform -rotate-180 m-auto mr-4 scale-75"/> Back to lastest projects</g-link>
      </div>
      <div class="md:w-3/5">
        <h2 class="font-display leading-tight mb-4 mt-0">
          {{ $page.work.subtitle }}
        </h2>
        <p class="font-body text-xl mb-4"><strong>Client:</strong> {{ $page.work.title }}</p>
        <p class="font-body text-xl mb-4"><strong>Timeline:</strong> {{ $page.work.timeline }}</p>
        <p class="font-body text-xl mb-4"><strong>Team:</strong> {{ $page.work.team }}</p>
        <p class="font-body text-xl mb-4">{{ $page.work.overview }}</p>
      </div>
      <div class="lead h-48"></div>
    </section>
    <section class="p-0 bg-gray-600">
      <div class="flex pt-12 text-gray-200 px-6">
        <h5 class="w-1/2 text-center">BEFORE</h5>
        <h5 class="w-1/2 text-center">AFTER</h5>
      </div>
      <g-image src="@/assets/images/projects/DYC/DYC-Homepage-Redesign.png" quality="75" width="2046" height="4300" fit="contain" class="" alt="DYC Homepage Redesign Overview"></g-image>
    </section>
    <section>
      <article>
        <VueRemarkContent class="md:w-3/5" />
      </article>
      <div class="flex-inline mb-6 text-sm">
        <g-link to="/services/#work" class="cta justify-start">
        <ArrowRight class="transform -rotate-180 m-auto mr-4 scale-75"/> Back to lastest projects</g-link>
      </div>
    </section>
  </Layout>
</template>

<style lang="scss">
article {
  h1 {@apply text-5xl;}
  .g-image {@apply my-12;}
  h3 {@apply sticky top-0 bg-colorSecondary mt-16 mb-4;}
  h4 {@apply text-2xl font-bold mt-12 mb-2;}
  ul, ol {@apply pl-5;}
  li {
    list-style-type: square;
  }
  ol li { list-style-type: decimal;}
}
</style>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Work ($id: ID!) {
  work(id: $id) {
    title
    subtitle
    timeline
    team
    overview
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