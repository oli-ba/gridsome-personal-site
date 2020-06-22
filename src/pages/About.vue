<template>
  <Layout class="bg-colorSecondary">
    <section class="hero text-colorPrimary flex flex-col justify-start pb-0">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-3/5">
          <h2 class="font-display leading-none mb-6">
            Jack-of-all-trades, master-of-most
          </h2>
          <h2 class="font-body text-2xl md:text-3xl mb-4">
            I'm like that handy Swiss Army Knife, because even though it's useful for a wide variety of work, it spends most of its time just opening bottles.
          </h2>
          <p class="font-body text-xl mb-4">
            I’ll never forget the day my father showed me how to dial into his company’s server. I sat in amazement as a 14.4k baud modem screeched at something on the other end, I didn’t know what the hell it was, but I knew I liked it. I watched him type in commands on a telnet client to see who else in the company may have the same sure name. I just remember having an overwhelming feeling of ‘this is the shit!’. At a young age I was hogging the phone line while dabbling in chatrooms, making pages on Geocities and pimping out my Myspace page with CSS.
          </p>
          <g-link to="/hire-me/" class="cta flex items-center text-lg mb-12">
            Let's work together  
            <ArrowRight class="ml-4"/>
          </g-link>
        </div>
        <div class="p-3 px-6 order-first md:order-last">
          <g-image src="~/assets/images/olivier_balaguer.jpg" quality="100" width="300" height="300" fit="contain" class="rounded-full m-auto"></g-image>
        </div>
      </div>
      <div class="lead h-48"></div>
    </section>
    <section class="hero bg-colorPrimary text-colorSecondary flex flex-col justify-center py-32">
      <h2 class="font-display leading-tight text-4xl mb-12">Previous Experience</h2>
      <div class="flex flex-row flex-wrap">
        <div class="experience flex flex-col mb-6 pl-2 md:w-1/3" v-for="job in jobs" :key="job.id">
          <h3 class="order-2">{{job.client}}</h3>
          <h6 class="order-1 text-sm">{{job.period}}</h6>
          <h6 class="order-3 text-sm">{{job.role}}</h6>
        </div>
      </div>
    </section>

  </Layout>
</template>

<style scoped>
h3 {@apply text-xl}
.experience {
  border-left: 0.5rem solid theme('colors.colorSecondary');
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
          role: 'UI Designer (Contract)',
          period: 'Feb 2019 - Mar 2020'
        },
        {
          client: 'Vibe Pay',
          role: 'UI Designer (Contract)',
          period: 'Jul - Dec 2018'
        },
        {
          client: 'Burberry',
          role: 'Email Developer (Contract)',
          period: 'Jun 2017 - Jun 2018'
        },
        {
          client: 'Ticketmaster',
          role: 'UI Designer (Contract)',
          period: 'Nov 2016 - Apr 2017'
        },
        {
          client: 'Deliveroo',
          role: 'Email Developer (Contract)',
          period: 'Jul - Sep 2016'
        },
        {
          client: 'M&C Saatchi London',
          role: 'Email Developer (Contract)',
          period: 'Jul 2015 - Jun 2016'
        },
        {
          client: 'Future Cities Catapult',
          role: 'UI Designer (Contract)',
          period: 'Sep - Nov 2015'
        },
        {
          client: 'eBay Enterprise Marketing Solutions',
          role: 'Email Developer (Contract)',
          period: 'Mar - Jul 2015'
        },
        {
          client: 'Ticketmaster UK',
          role: 'Web Designer (Permanent)',
          period: 'Oct 2011 - Jan 2015'
        }
      ]
    }
  }
}
</script>
