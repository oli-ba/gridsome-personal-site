<template>
  <Layout class="bg-colorSecondary">
    <section class="hero text-colorPrimary flex flex-col justify-center">
      <div class="md:w-3/5">
        <h2 v-if="hasName == true" class="font-display mb-6">
          Glad you're curious {{name}}.<br>
          Here's how I can help out.
        </h2>
        <h2 v-else class="font-display mb-6">
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
      <h3 class="text-6xl text-colorPrimary font-display mb-16">Latest Projects</h3>
      <div v-for="edge in $page.work.edges" :key="edge.node.id">
        <g-link :to='edge.node.path'>
          <Project :title="edge.node.title" :subtitle="edge.node.subtitle" />
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
        subtitle
        path
        featured
      }
    }
  }
}
</page-query>

<script>
import ArrowRight from '~/assets/svgs/icon-arrow-right.svg?inline'
import Project from '~/components/Project.vue'
export default {
  components: {
    ArrowRight,
    Project
  },
  metaInfo: {
    title: 'How I can help out | Olivier Balaguer',
    meta: [
      {key: 'description', name: 'description', content: 'Olivier is a multidisciplanary designer'}
    ]
  },
  created() {
    if(localStorage.getItem('name'))
      this.hasName = true
  },
  data() {
    return {
      hasName: false,
      name: localStorage.getItem('name')
    }
  }
}
</script>
