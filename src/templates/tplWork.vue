<template>
  <Layout class="bg-colorSecondary text-colorPrimary">
    <Header />
    <section class="hero flex flex-col justify-center pb-0">
      <div class="flex-inline mb-6 text-sm">
        <g-link to="/services/#work" class="cta justify-start">
          <ArrowRight class="transform -rotate-180 m-auto mr-4 scale-75" />Back to lastest projects
        </g-link>
      </div>
      <div class="md:w-3/5">
        <h2 class="font-display leading-tight mb-4 mt-0">{{ $page.work.title }}</h2>
        <p class="font-body text-xl mb-4">
          <strong>Client:</strong>
          {{ $page.work.client }}
        </p>
        <p class="font-body text-xl mb-4">
          <strong>Timeline:</strong>
          {{ $page.work.timeline }}
        </p>
        <p class="font-body text-xl mb-4">
          <strong>Team:</strong>
          {{ $page.work.team }}
        </p>
        <p class="font-body text-xl mb-4">{{ $page.work.overview }}</p>
      </div>
      <div class="lead h-48"></div>
    </section>
    <section class="px-0">
      <article>
        <!-- <VueRemarkContent class="md:w-3/5" /> -->
        <VueRemarkContent />
      </article>
    </section>
    <section>
      <div class="flex-inline mb-6 text-sm">
        <g-link to="/services/#work" class="cta justify-start">
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
      @apply w-3/5;
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
  .g-image {
    @apply my-12;
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
query Work ($id: ID!) {
  work(id: $id) {
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
      title: `${this.$page.work.title} - UX/UI Case Study`,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.work.metaDescription,
        },
      ],
    };
  },
  // metaInfo() {
  //   return {
  //     title: this.$page.work.title,
  //   }
  // }
};
</script>