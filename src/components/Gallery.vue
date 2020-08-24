<template>
  <section class="body-font bg-colorPrimary text-colorSecondary py-24">
    <h3 class="text-6xl font-display text-center">Latest Projects</h3>
    <div class="container px-5 mx-auto flex flex-wrap">
      <div v-for="work in latestWork" class="lg:w-2/3 mx-auto" :key="work.id">
        <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 text-colorPrimary">
          <img
            alt="gallery"
            class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
            src="https://dummyimage.com/820x340"
          />
          <div class="text-center relative z-10 w-full">
            <h2 class="text-2xl font-medium title-font mb-2">{{work.title}}</h2>
            <p class="leading-relaxed">{{work.description}}</p>
            <g-link :to="work.url" class="mt-3 text-indigo-500 inline-flex items-center">
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
        { title: "Making Yacht Sailing a Breeze", description: "description", url: "/portfolio/making-yacht-sailing-a-breeze" },
        { title: "Fixing a Leaking Booking System", description: "description", url: "#" },
        { title: "Making Dreams Come True", description: "description", url: "#" },
        { title: "Turning Banking on its Head", description: "description", url: "#" },
      ],
    };
  },
};
</script>