<template>
  <section class="testimonial bg-colorPrimary text-colorSecondary">
    <h3 class="hidden">Testimonials</h3>
    <div class="flex flex-col">
      <div class="flex-col px-6 md:px-40 py-32">
        <blockquote
          class="quote font-sans font-bold text-xl md:text-4xl leading-tight mb-12"
        >I always valued his proactive and professional approach and you could always count on Olivier really wanting to deliver on a brief. His expert opinion, professional and swift delivery of any project we worked on have been consistently outstanding.</blockquote>
        <div>
          <a href="https://cornellazar.com/" class="flex flex-row" title="Visit Cornel">
            <div>
              <g-image
                src="~/assets/images/cornel_lazar.jpg"
                alt="A picture of Cornel Lazar"
                quality="100"
                width="48"
                height="48"
                fit="contain"
                class="rounded-full"
              ></g-image>
            </div>
            <div class="px-4">
              <h4 class="text-xl font-bold">Cornel Lazar</h4>
              <div class="uppercase tracking-wide">Growth &amp; Brand</div>
            </div>
          </a>
        </div>
      </div>
      <!-- <div class="h-1 bg-colorSecondary mx-48 my-16"></div> -->
      <!--<div class="flex-col px-6 md:px-40 pb-32">
          <p class="quote border-colorPrimary font-sans font-bold text-xl md:text-4xl leading-tight">I have worked with Olivier on a variety of projects over the past few years and have always been incredibly pleased with his work. His work on the redesign of one of our web products brought new life and ease of use to a critical tool for a client in Ireland. Olivier also delivered our responsive email templates for use during the Rugby World Cup, including a particular email which was highly sensitive and complex. His work is always outstanding, on point for the project brief, and delivered with integrity and professionalism. I cannot recommend Olivier enough!</p>
          <div class="flex flex-row">
            <div>
              <g-image src="~/assets/images/bridget_krull.jpg" alt="A picture of Bridget Krull" quality="100" width="48" height="48" fit="contain" class="rounded-full"></g-image>
            </div>
            <div class="px-4">
              <h4 class="text-xl">Bridget Krull</h4>
              <div class="uppercase tracking-wide">Product Manager</div>
            </div>
          </div>
      </div>-->
    </div>
  </section>
</template>
<style lang="scss">
.quote {
  &::before {
    content: '"';
    margin-left: -0.45rem;
  }
  &::after {
    content: '"';
    margin-left: -0.05rem;
  }
}
@screen md {
  .quote::before {
    margin-left: -0.85rem;
  }
}
</style>