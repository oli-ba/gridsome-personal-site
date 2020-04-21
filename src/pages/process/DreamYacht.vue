<template>
  <Layout class="bg-pink">
    <section class="hero text-pblue flex flex-col justify-center">
      <div class="md:w-3/5">
        <h2 class="font-display leading-tight mb-4">
          Dream Yacht *
        </h2>
        <p class="font-body text-xl mb-4">I help companies big and small create timeless digital touchpoints.
        The result: delightful experiences that leave a lasting impression.</p>
        <p class="font-body text-xl mb-8">Want to change direction, change behaviour, or change the world?</p>
        <g-link to="/process/" class="flex items-center text-lg mb-12">
          See how I can help 
          <ArrowRight class="ml-4"/>
        </g-link>
      </div>
      <div class="lead h-48"></div>
    </section>
  </Layout>
</template>

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
