<template>
  <div>
    <Header />
    <slot />
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
svg.pink path {fill: theme('colors.pink')}
/* section {@apply px-6 xl:px-16 py-16;} */
section, header, footer {
  @apply px-6 py-16;
  @screen md {
    @apply px-16
  }
}
h2 {
  @apply text-6xl;
  @screen md {
    @apply text-8xl
  }
}
.lead {
    background-image: url('data:image/svg+xml;utf8,<svg width="1" height="225" viewBox="0 0 1 225" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="-2.18557e-08" x2="0.50001" y2="225" stroke="%232017CC"/></svg>') ;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: bottom;
    /* height: calc(100vh - 4rem); */
  }
</style>