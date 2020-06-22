<template>
  <section class="py-32">
    <h3 class="text-6xl text-colorPrimary font-display mb-6">Latest Projects</h3>
    <g-link>
        <div class="relative bg-white rounded-md hover:shadow-xl transition-shadow duration-500 ease-in-out mb-6 overflow-hidden h-64">
          <div class="project absolute scroll-bg"></div>
          <div class="clip-right flex flex-col relative h-full bg-colorPrimary text-white w-1/2 p-8">
            <h3 class="text-2xl md:text-4xl font-sans">test</h3>
            <!-- <span class="text-lg font-sans"><strong>Client:</strong> {{client}}</span> -->
          </div>
        </div>
      </g-link>
  </section>
</template>

<style>
  .project {
    background-color: #d2d6dc;
    height: 630%;
    width: 400%;
    top: -55%;
    left: -100%;
    background-size: 800px auto;
    background-image: url('~@/assets/images/projects/DYC-overview.jpg');
  }
  .scroll-bg {
    -webkit-animation-name:scrollLarge;
    animation-name:scrollLarge;
    -webkit-animation-duration:35s;
    animation-duration:35s;
    -webkit-animation-timing-function:linear;
    animation-timing-function:linear;
    -webkit-animation-iteration-count:infinite;
    animation-iteration-count:infinite
  }
  @-webkit-keyframes scrollLarge {
    0% {
      transform:rotate(-13deg) translateY(0)
    }
    to {
      transform:rotate(-13deg) translateY(-1278px)
    }
    }
    @keyframes scrollLarge {
    0% {
      transform:rotate(-13deg) translateY(0)
    }
    to {
      transform:rotate(-13deg) translateY(-1278px)
    }
    }
  .clip-right {
    -webkit-clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
  }
</style>