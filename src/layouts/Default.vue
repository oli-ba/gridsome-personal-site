<template>
  <div class="flex flex-col">
    <!-- <Header /> -->
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
  @apply w-full inline-flex items-center justify-center p-2 px-8 rounded-full font-bold transition-all text-center;
  @screen md{@apply w-auto;}
  &:hover {
    @apply bg-colorPrimary text-colorSecondary shadow-lg transition-all duration-500 ease-in-out;
    border: 1px solid theme('colors.colorPrimary');

    & svg path {fill: theme('colors.colorSecondary')}
  }
}
svg.colorSecondary path {fill: theme('colors.colorSecondary')}
section, .section, header, footer {
  @apply px-4 py-8;
  @screen md {
    @apply px-16;
  }
}
h1 {
  @apply text-5xl;
  @screen lg {
    @apply text-6xl leading-tight;
  }
}
h2 {
  @apply text-4xl;
  @screen md {
    @apply text-5xl leading-tight;
  }
}
h3 {
  @apply text-3xl;
  @screen md {
    @apply text-3xl;
  }
}
p {
  @apply text-xl mb-4;
}
li {
  @apply list-disc;
}
.lead {
    /*background-image: url('data:image/svg+xml;utf8,<svg width="21" height="225" viewBox="0 0 21 225" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 0C20.5 22.498 0.5 22.498 0.5 44.997C0.5 67.496 20.5 67.496 20.5 89.996C20.5 112.495 0.5 112.495 0.5 134.993C0.5 157.495 20.5 157.495 20.5 179.997C20.5 202.499 0.5 202.498 0.5 225" stroke="%232017CC" stroke-miterlimit="10"/></svg>') ;*/
    background-image: url('data:image/svg+xml;utf8,<svg width="30" height="200" viewBox="0 0 30 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.6364 0C28.6364 24.999 1.36365 24.999 1.36365 49.998C1.36365 74.996 28.6364 74.996 28.6364 99.994C28.6364 124.996 1.36365 124.996 1.36365 149.997C1.36365 174.999 28.6364 174.999 28.6364 200" stroke="%232017CC" stroke-miterlimit="10"/></svg>') ;
    background-repeat: repeat-y;
    // background-position-x: center;
    // background-position-y: bottom;
    height: 200px;
    animation: 10s wave linear infinite;
    &::before {
      content:"";
      background:linear-gradient(0deg, rgba(255,204,213,0) 25%, rgba(255,204,213,1) 75%);
      height:100%;
      width:100%;
      display: block;
    }
  }
@keyframes wave {
	0% {
		background-position: center 0;
	}
	100% {
		background-position: center -200px;
	}
}
</style>