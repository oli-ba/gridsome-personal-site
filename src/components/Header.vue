<template>
  <header class="flex flex-col /*sticky top-0*/ z-50 md:flex-row justify-between items-start md:items-center bg-pblue text-pink w-screen py-3 shadow-md">
    <h1 class="text-4xl font-display">
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </h1>
    <nav class="flex justify-between md:justify-around w-full md:w-1/2">
      <g-link to="/services/" class="btn btn-pblue">How I can help</g-link>
      <g-link to="/about/" class="btn btn-pblue">About Me</g-link>
      <!-- <g-link to="/case-studies/">Work I've done</g-link> -->
      <g-link to="/hire-me/" class="btn btn-pink rounded-full">Hire me</g-link>
    </nav>
  </header>
</template>

<style>
nav a.active {outline: 1px solid theme(color.pink);}
nav a.btn-pink.active {@apply bg-white}
.btn {@apply text-base p-2 px-4}
.btn-pblue {@apply text-pink bg-pblue}
.btn-pink {@apply text-pblue bg-pink}
</style>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>

export default {
  name: 'Header',
  beforeCreate() {
    if(this.$route.query.hello) {
      localStorage.setItem('name', this.$route.query.hello)
    }
  }
}
</script>