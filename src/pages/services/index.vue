<template>
  <Layout class="bg-pink">
    <section class="hero text-pblue flex flex-col justify-center">
      <div class="md:w-3/5">
        <h2 class="font-display leading-none mb-6">
          How I can help&nbsp;out
        </h2>
        <p class="font-body text-xl mb-4">I help companies big and small create timeless digital touchpoints.
        The result: delightful experiences that leave a lasting impression.</p>
        <p class="font-body text-xl mb-8">Want to change direction, change behaviour, or change the world?</p>
        <g-link to="/process/" class="cta flex items-center text-lg mb-12">
          Find out  
          <ArrowRight class="ml-4"/>
        </g-link>
      </div>
      <div class="lead h-48"></div>
    </section>
    <section class="featured-work" id="work">
      <h3 class="text-6xl text-pblue font-display mb-16">Latest Work</h3>
      <div v-for="edge in $page.work.edges" :key="edge.node.id">
        <g-link :to='edge.node.path'>
          <div class="client flex flex-col justify-center items-center h-64 bg-white rounded-md hover:shadow-xl transition-shadow duration-500 ease-in-out mb-6">
            <span class="text-2xl text-pblue font-sans">{{edge.node.title}}</span>
            <span class="text-lg text-pblue font-sans">{{edge.node.excerpt}}</span>
          </div>
        </g-link>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Work {
  work:allWork(
    sortBy: "title", 
    order: ASC,
    filter: {featured: {eq: true}}) {
    edges{
      node {
        id
        title
        excerpt
        path
        featured
      }
    }
  }
}
</page-query>

<script>
import ArrowRight from '~/assets/svgs/icon-arrow-right.svg?inline'
export default {
  components: {
    ArrowRight
  },
  metaInfo: {
    title: 'How I can help out | Olivier Balaguer',
    meta: [
      {key: 'description', name: 'description', content: 'Olivier is a multidisciplanary designer'}
    ]
  }
}
</script>
