<template>
  <div class="flex flex-col">
    <Header />
      <transition name="fade" appear>
        <main>
            <slot />
        </main>
      </transition>
    <Footer />
  </div>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang='scss'>

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

.cta {
  border: 1px solid theme('colors.colorPrimary');
  @apply w-full inline-flex items-center justify-center p-2 px-4 rounded-full font-bold transition-all text-center;
  @screen md{@apply w-auto;}
  &:hover {
    @apply bg-colorPrimary text-colorSecondary shadow-lg transition-all duration-500 ease-in-out;
    border: 1px solid theme('colors.colorPrimary');

    & svg path {fill: theme('colors.colorSecondary')}
  }
}
svg.colorSecondary path {fill: theme('colors.colorSecondary')}
section, .section, header, footer {
  @apply px-6 py-8;
  @screen md {
    @apply px-16;
  }
}
h2 {
  @apply text-5xl;
  @screen md {
    @apply text-7xl leading-tight;
  }
}
h3 {
  @apply text-4xl;
  @screen md {
    @apply text-6xl;
  }
}
p {
  @apply text-xl mb-4;
}
li {
  @apply list-disc;
}
.lead {
    background-image: url('data:image/svg+xml;utf8,<svg width="21" height="225" viewBox="0 0 21 225" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 0C20.5 22.498 0.5 22.498 0.5 44.997C0.5 67.496 20.5 67.496 20.5 89.996C20.5 112.495 0.5 112.495 0.5 134.993C0.5 157.495 20.5 157.495 20.5 179.997C20.5 202.499 0.5 202.498 0.5 225" stroke="%232017CC" stroke-miterlimit="10"/></svg>') ;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    height: 225px;
  }
</style>