<template>
  <section class="px-0 py-24" id="latest-projects">
    <h3 class="text-6xl font-display text-center mb-6 w-full text-colorPrimary">Latest Projects</h3>
    <div class="wrapper">
      <span v-for="work in latestWork" :key="work.id">
        <g-link :to="`portfolio/${work.url}`">
          <Card
            :data-image="work.image"
            :bgPos="work.bgPos"
          >
            <h3 slot="header">{{work.title}}</h3>
          </Card>
        </g-link>
      </span>
    </div>
  </section>
</template>
<script>
import Card from '@/components/Card'
import latestWork from '@/latest_work'
export default {
  components: {
    Card
  },
  data() {
    return {
      latestWork
    }
  }
}
</script>
