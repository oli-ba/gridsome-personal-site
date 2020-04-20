<template>
  <Layout class="bg-pink">
    <section class="hero text-pblue p-6 pb-0 pt-8 flex flex-col justify-center">
      <div class="w-3/5">
        <h2 class="font-display leading-tight text-8xl mb-4">
          Hello World,
        </h2>
        <p class="font-body text-xl mb-4">I help companies big and small create timeless digital touchpoints.
        The result: delightful experiences that leave a lasting impression.</p>
        <p class="font-body text-xl mb-8">Want to change direction, change behaviour, or change the world?</p>
        <g-link to="/process/" class="flex items-center text-lg mb-12">
          See how I can help out 
          <ArrowRight class="ml-4"/>
        </g-link>
        <div class="lead h-48"></div>
      </div>
      <div>
        
      </div>
    </section>
    <section class="hero bg-pblue text-pink flex flex-col justify-center">
      <h2 class="font-display leading-tight text-4xl mb-1">Previous Experience</h2>
      
      <div class v-for="job in jobs" :key="id">
        <h6>{{job.period}}</h6>
        <h3>{{job.client}}</h3>
        <h6>{{job.role}}</h6>
      </div>
    </section>

  </Layout>
</template>

<script>
export default {
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
