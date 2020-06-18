<template>
  <Layout class="bg-colorSecondary">
    <section class="hero text-colorPrimary flex flex-col justify-center pb-0">
      <div class="md:w-3/5">
        <h3 v-if="hasName == true" class="font-display leading-tight mb-6">
          {{name}}, seen enough? Let's work together
        </h3>
        <h2 v-else class="font-display leading-none mb-6">
          Let's work together
        </h2>
        <p class="font-body text-xl mb-4">
          Magna elit adipisicing mollit culpa. Reprehenderit exercitation veniam pariatur enim cupidatat pariatur enim excepteur culpa proident nisi. Nisi sit ipsum est laborum ipsum excepteur ullamco consectetur adipisicing labore aliquip cupidatat enim. Aliqua adipisicing ullamco aliquip excepteur fugiat nisi laborum laborum qui aute ut est. Labore exercitation ut duis aliquip non incididunt magna Lorem ea officia in magna.
        </p>
        <p class="font-body text-xl mb-8">Want to change direction, change behaviour, or change the world?</p>
        <g-link to="/process/" class="cta flex items-center text-lg mb-12">
          See how I can help you out 
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
    title: 'Get in touch'
  },
  data() {
    return {
      name: localStorage.getItem('name')
    }
  }
}
</script>
