<template>
  <Layout class="bg-pink">
    <section class="hero text-pblue flex flex-col justify-start pb-0">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-3/5">
          <h2 class="font-display leading-none mb-6">
            Hello World,
          </h2>
          <p class="font-body text-xl mb-4">
            Sint cillum veniam enim labore quis occaecat ad consequat duis. Anim sint veniam dolor excepteur labore cillum in reprehenderit. Ea nostrud excepteur amet dolor dolore id velit culpa anim eiusmod aliqua amet. Quis amet id ad aliquip veniam aliqua deserunt est eiusmod et esse excepteur et aute. Mollit incididunt sint aliquip aute do aliquip magna in labore esse magna. Aliquip laboris cillum mollit fugiat ad tempor laborum.
          </p>
          <p class="font-body text-xl mb-8">Want to change direction, change behaviour, or change the world?</p>
          <g-link to="/hire-me/" class="cta flex items-center text-lg mb-12">
            Hire me 
            <ArrowRight class="ml-4"/>
          </g-link>
        </div>
        <div class="p-3 px-6 order-first md:order-last">
          <g-image src="~/assets/images/olivier_balaguer.jpg" quality="100" width="300" height="300" fit="contain" class="rounded-full m-auto"></g-image>
        </div>
      </div>
      <div class="lead h-48"></div>
    </section>
    <section class="hero bg-pblue text-pink flex flex-col justify-center">
      <h2 class="font-display leading-tight text-4xl mb-12">Previous Experience</h2>
      
      <div class="experience flex flex-col mb-6 pl-2" v-for="job in jobs" :key="job.id">
        <h3 class="order-2">{{job.client}}</h3>
        <h6 class="order-1 text-sm">{{job.period}}</h6>
        <h6 class="order-3 text-sm">{{job.role}}</h6>
      </div>
    </section>

  </Layout>
</template>

<style scoped>
h3 {@apply text-xl}
.experience {
  border-left: 0.5rem solid theme('colors.pink');
}
</style>

<script>
import ArrowRight from '~/assets/svgs/icon-arrow-right.svg?inline'

export default {
  components: {
    ArrowRight
  },
  metaInfo: {
    title: 'Who am I',
    meta: [
      {key: 'description', name: 'description', content: 'Olivier is a multidisciplanary designer'}
    ]
  },
  data() {
    return {
      // clients,
      jobs: [
        {
          client: 'Dream Yacht Charter',
          role: 'UI Designer',
          period: 'Feb 2019 - Mar 2020'
        },
        {
          client: 'Vibe Pay',
          role: 'UI Designer',
          period: 'Jul - Dec 2018'
        },
        {
          client: 'Burberry',
          role: 'Email Developer',
          period: 'Jun 2017 - Jun 2018'
        },
        {
          client: 'Ticketmaster',
          role: 'UI Designer',
          period: 'Nov 2016 - Apr 2017'
        },
        {
          client: 'Deliveroo',
          role: 'Email Developer',
          period: 'Jul - Sep 2016'
        },
        {
          client: 'M&C Saatchi London',
          role: 'Email Developer',
          period: 'Jul 2015 - Jun 2016'
        },
        {
          client: 'Future Cities Catapult',
          role: 'UI Designer',
          period: 'Sep - Nov 2015'
        },
        {
          client: 'eBay Enterprise Marketing Solutions',
          role: 'Email Developer',
          period: 'Mar - Jul 2015'
        }
      ]
    }
  }
}
</script>
