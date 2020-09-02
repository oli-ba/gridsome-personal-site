<template>
  <section class="px-0 py-24" id="latest-projects">
    <h3 class="text-6xl font-display text-center mb-6 w-full text-colorPrimary">Latest Projects</h3>
    <intersect @enter.once="staggerClientList">
      <div ref="wrapper" class="wrapper">
          <span v-for="work in latestWork" :key="work.id" class="wrapper__card">
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
    </intersect>
  </section>
</template>
<script>
import Card from '@/components/Card'
import latestWork from '@/latest_work'
import { TweenMax, Power3 } from 'gsap/all'
import Intersect from 'vue-intersect'
export default {
  components: {
    Card,
    Intersect
  },
  data() {
    return {
      latestWork
    }
  },
  methods: {
    staggerClientList({ delay = 0.15 }) {
      this.$nextTick(() => {
        const els = [...this.$refs.wrapper.querySelectorAll('.wrapper__card')]
        TweenMax.staggerFromTo(
          els,
          0.3,
          {
            opacity: 0
          },
          {
            delay,
            opacity: 1,
            ease: Power3.easeOut,
            stagger: 0.1
          }
        )
      })
    }
  }
}
</script>
