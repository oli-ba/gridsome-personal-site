<template>
  <Layout class="bg-colorSecondary text-colorPrimary">
    <Header />
    <section class="flex flex-col justify-center pb-0 relative">
      <div class="flex-inline mb-6 text-sm">
        <g-link to="/#latest-projects" class="inline-flex justify-start font-bold">
          <ArrowRight class="transform -rotate-180 m-auto mr-4 scale-75" />Back to lastest projects
        </g-link>
      </div>
      <!-- <g-image :src="require('!!assets-loader!@projects/' + $page.portfolio.overviewImage)" quality="65" width="2046" height="4300" fit="contain" style="margin-top:0" alt="DYC Homepage Redesign Overview" /> -->
      <h2 class="font-display leading-tight mb-4 mt-0 md:text-9xl md:w-3/4">{{ $page.portfolio.title }}</h2>
      <div class="md:w-2/3">
        <p class="font-body text-xl mb-4">
          <strong>Client:</strong>
          {{ $page.portfolio.client }}
        </p>
        <p class="font-body text-xl mb-4">
          <strong>Timeline:</strong>
          {{ $page.portfolio.timeline }}
        </p>
        <p class="font-body text-xl mb-4">
          <strong>Team:</strong>
          {{ $page.portfolio.team }}
        </p>
        <p class="font-body text-xl mb-4">{{ $page.portfolio.overview }}</p>
      </div>
    </section>
    <section class="flex flex-col justify-center pb-0 relative px-0">
      <article>
        <!-- <VueRemarkContent class="md:w-3/5" /> -->
        <VueRemarkContent />
      </article>
      <div class="flex-inline mb-6 text-sm p-16">
        <g-link to="/#latest-projects" class="inline-flex justify-start font-bold">
          <ArrowRight class="transform -rotate-180 m-auto mr-4 scale-75" />Back to lastest projects
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<style lang="scss">
article {
  p {
    @screen md {
      @apply w-1/2;
    }
  }
  h1,
  h2,
  h3,
  h4,
  p {
    @apply px-6;
    @screen md {
      @apply px-16;
    }
  }
  ul {
    @apply ml-6;
    @screen md {
      @apply ml-16;
    }
  }
  h1 {
    @apply text-5xl;
  }
  h3 {
    @apply bg-colorSecondary mt-16 mb-4 w-full font-display;
  }
  h4 {
    @apply text-2xl font-bold mt-12 mb-2;
  }
  ul,
  ol {
    @apply pl-5;
  }
  li {
    list-style-type: square;
  }
  ol li {
    list-style-type: decimal;
  }
}
</style>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Portfolio ($id: ID!) {
  portfolio(id: $id) {
    client
    title
    metaDescription
    timeline
    team
    overview
    overviewImage
  }
}
</page-query>

<script>
import Header from "~/components/Header"
import ArrowRight from "~/assets/svgs/icon-arrow-right.svg"
export default {
  components: {
    ArrowRight,
    Header
  },
  metaInfo() {
    return {
      title: `${this.$page.portfolio.title} - UX/UI Case Study`,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.portfolio.metaDescription,
        },
      ],
    };
  }
};
</script>