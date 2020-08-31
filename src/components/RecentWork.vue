<template>
  <section class="py-16" id="latest-projects">
    <h3 class="text-6xl font-display text-center mb-6 w-full text-colorPrimary">Latest Projects</h3>
    <!-- <p class="description">Hover over a card to flip it.</p> -->
    <div class="content">
      <span v-for="work in latestWork" :key="work.id" class="card">
        <div class="front">
          <g-image
            alt="latest project image overview"
            class="w-full object-cover h-full object-center block absolute inset-0 opacity-50"
            style="mix-blend-mode: overlay"
            :src="work.image"
          />
          <h4 class="relative">{{work.title}}</h4>
        </div>
        <div class="back">
          <div>
            <p>{{work.description}}</p>
            <g-link :to="`portfolio/${work.url}`" class="cta mt-6">
                See Project
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </g-link>
          </div>
        </div>
      </span>
    </div>
  </section>
</template>
<script>
import latestWork from '@/latest_work.js'
export default {
  data() {
    return {
      latestWork
    };
  },
};
</script>
<style lang="scss">
$primary: hsl(243,80%,45%);
$primary-light: hsl(349,100%,90%);

@mixin mobile ($size: 640px) {
  @media screen and (max-width: $size) {
    @content;
  }
}

.content {
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
}

.heading {
  width: 100%;
  margin-left: 1rem;
  font-weight: 900;
  font-size: 1.618rem;
  text-transform: uppercase;
  letter-spacing: .1ch;
  line-height: 1;
  padding-bottom: .5em;
  margin-bottom: 1rem;
  position: relative;
  
  &:after {
    display: block;
    content: '';
    position: absolute;
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, adjust-hue($primary, -20deg), $primary);
    bottom: 0;
  }
}

.description {
  width: 100%;
  margin-top: 0;
  margin-left: 1rem;
  margin-bottom: 3rem;
}

.card {
  color: inherit;
  cursor: pointer;
  width: calc(50% - 2rem);
  min-width: calc(50% - 2rem);
  height: 400px;
  min-height: 400px;
  perspective: 1000px;
  margin: 1rem;
  position: relative;
  @include mobile (800px) {
    width: calc(50% - 2rem);
  }
  @include mobile (500px) {
    width: 100%;
  }
}

.front,
.back {
  display: flex;
  border-radius: 6px;
  background-position: center;
  background-size: cover;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
  // overflow: hidden;
}

.front {
  background-size: cover;
  // background-blend-mode: overlay;
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  // font-family: Poppins, sans-serif;
  &:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, adjust-hue($primary, -20deg), $primary);
    opacity: .25;
    z-index: -1;
  }
  .card:hover & {
    transform: rotateY(180deg);
  }
  .card:nth-child(even):hover & {
    transform: rotateY(-180deg);
  }
}

.back {
  background: #fff;
  transform: rotateY(-180deg);
  padding: 0 2em;
  
  .button {
    background: linear-gradient(135deg, adjust-hue($primary, -20deg), $primary);
    
    &:before {
      box-shadow: 0 0 10px 10px rgba($primary, 0.25);
    background-color: rgba($primary, 0.25);
    }
  }
  
  .card:hover & {
    transform: rotateY(0deg);
  }
  
  .card:nth-child(even) & {
    transform: rotateY(180deg);
    
  }
  
  .card:nth-child(even):hover & {
    transform: rotateY(0deg);
  }
}
</style>
