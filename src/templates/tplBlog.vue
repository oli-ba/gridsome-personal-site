<template>
  <Layout class="bg-colorSecondary">    
    <section class="hero text-colorPrimary flex flex-col justify-center">
      <div class="md:w-3/5">
        <h2 class="font-display leading-tight mb-4">
          {{ $page.blog.title }}
        </h2>
        <p class="font-body text-xl mb-4">{{ $page.blog.excerpt }}</p>
      </div>
      <VueRemarkContent class="h-full md:w-3/5" />
    </section>
  </Layout>
</template>

<style>
h1 {@apply text-5xl;}
ul {@apply pl-3;}
</style>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Blog ($id: ID!) {
  blog(id: $id) {
    title
    excerpt
  }
}
</page-query>

<script>
export default {
  
}
</script>