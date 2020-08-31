<template>
  <section id="latest-projects" class="body-font bg-colorSecondary text-colorPrimary py-24">
    <h3 class="text-6xl font-display text-center mb-6">Latest Projects</h3>
    <div class="container px-5 mx-auto flex flex-wrap">
      <div v-for="work in latestWork" :key="work.id" class="lg:w-2/3 mx-auto">
        <div
          :style="`background:${work.bgColor}`"
          class="flex flex-wrap w-full bg-gray-100 py-16 px-10 relative mb-4 rounded-md text-colorPrimary md:hover:shadow-xl transition-shadow duration-500 ease-in-out"
        >
          <!-- <g-image
            alt="latest project image overview"
            class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
            :src="work.image"
          /> -->
          <div class="text-center relative z-10 w-full">
            <h4 class="text-2xl font-medium title-font mb-2">{{work.title}}</h4>
            <p class="leading-relaxed text-sm md:w-45ch m-auto">{{work.description}}</p>
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      latestWork: [
        {
          title: "Making Yacht Sailing a Breeze",
          description:
            "Basic qualitative and quantitative research • User flow mapping • Wireframing • Rapid prototyping • Applying good UX practices and principles • UI design with Figma",
          url: "/making-yacht-sailing-a-breeze",
          image: "https://placehold.it/600x600"
        },
        {
          title: "Fixing a Leaking Booking System",
          description:
            "Wireframing • Information Architecture • Rapid prototyping • Applying good UX practices and principles • UI design with Figma",
          url: "/fixing-a-leaking-booking-system"
        },
        {
          title: "Making Dreams Come True",
          description: "User flow mapping • Information Architecture • Wireframing • Rapid prototyping • Applying good UX practices and principles • UI design with Figma",
          url: "/making-a-dream-come-true"
        },
        {
          title: "Turning Banking on its Head",
          description: "Wireframing • Rapid prototyping • Applying good UX practices and principles • UI design with Figma",
          url: "/turning-banking-on-its-head"
        },
      ],
    };
  },
};
</script>