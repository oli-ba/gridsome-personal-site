<template>
  <section class="text-colorPrimary text-center py-32">
    <h3 class="text-4xl md:text-6xl text-colorPrimary font-display mb-6">Why invest in good UX?</h3>
    <div class="md:flex">
      <div class="mb-12 md:mb-0 md:w-1/3 md:px-12">
        <Doodle1 class="colorPrimary my-6 m-auto" />
        <h4 class="text-2xl font-bold mb-3">Differentiate your product</h4>
        <p>It's a noisy digital world, setting your product apart from the crowd can be difficult.</p>
      </div>
      <div class="mb-12 md:mb-0 md:w-1/3 md:px-12">
        <Doodle2 class="colorPrimary my-6 m-auto" />
        <h4 class="text-2xl font-bold mb-3">Future-proof your product</h4>
        <p>UX is not about fulfilling your needs, it's about fulfilling your user’s needs.</p>
      </div>
      <div class="mb-12 md:mb-0 md:w-1/3 md:px-12">
        <Doodle3 class="colorPrimary my-6 m-auto" />
        <h4 class="text-2xl font-bold mb-3">Delight your users</h4>
        <p>If you keep them happy, they'll keep coming back.</p>
      </div>
    </div>
  </section>
</template>
<script>
import Doodle1 from '~/assets/svgs/doodle-1.svg?inline'
import Doodle2 from '~/assets/svgs/doodle-2.svg?inline'
import Doodle3 from '~/assets/svgs/doodle-3.svg?inline'
export default {
  components: {
    Doodle1,
    Doodle2,
    Doodle3
  }
}
</script>