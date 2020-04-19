<template>
  <Layout class="bg-pink">
    <section class="hero h-full text-pblue px-6 xl:px-16 flex flex-col justify-center">
      <div class="flex">
        <h2 class="font-display leading-tight lg:text-9xl md:text-6xl sm:text-3xl">
          Global <br>Citizen
        </h2>
        <g-image src="~/assets/images/olivier_balaguer.jpg" width="300" height="300" fit="contain" class="rounded-full"></g-image>
      </div>
      <p class="font-body">I help companies big and small create timeless digital touchpoints. <br>
      The result: delightful experiences that leave a lasting impression. <br>
      Want to change direction, change behaviour, or change the world?</p>
      <div class="lead py-16"></div>
    </section>
    <section class="hero text-pblue flex flex-col justify-center">
      <h2 class="font-display leading-tight text-4xl mb-1">Previous Experience</h2>
      
      <div class v-for="job in jobs" :key="id">
        <h6>{{job.from.toISOString()}} - {{job.to.toISOString()}}</h6>
        <h3>{{job.client}}</h3>
        <h6>{{job.role | capitalize}}</h6>
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
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  data() {
    return {
      // clients,
      jobs: [
        {
          client: 'Dream Yacht Charter',
          role: 'UI Designer',
          from: new Date(2019, 1),
          to: new Date(2020, 2)
        },
        {
          client: 'Vibe Pay',
          role: 'UI Designer',
          from: new Date(2018, 6),
          to: new Date(2018, 11)
        },
        {
          client: 'Burberry',
          role: 'Email Developer',
          from: new Date(2017, 5),
          to: new Date(2018, 5)
        },
        {
          client: 'Ticketmaster',
          role: 'UI Designer',
          from: new Date(2016, 10),
          to: new Date(2017, 4)
        },
        {
          client: 'Deliveroo',
          role: 'Email Developer',
          from: new Date(2016, 6),
          to: new Date(2016, 8)
        },
        {
          client: 'M&C Saatchi London',
          role: 'Email Developer',
          from: new Date(2015, 6),
          to: new Date(2016, 5)
        },
        {
          client: 'Future Cities Catapult',
          role: 'UI Designer',
          from: new Date(2015, 9),
          to: new Date(2015, 10)
        },
        {
          client: 'eBay Enterprise Marketing Solutions',
          role: 'Email Developer',
          from: new Date(2015, 2),
          to: new Date(2015, 6)
        }
      ]
    }
  }
}
</script>
