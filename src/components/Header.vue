<template>
  <header class="flex flex-col /*sticky top-0*/ z-50 md:flex-row justify-between items-start md:items-center bg-colorPrimary text-colorSecondary w-screen py-3 shadow-md">
    <h1 class="text-4xl font-display">
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </h1>
    <nav class="flex justify-between md:justify-around w-full md:w-1/2">
      <g-link to="/services/" class="btn btn-colorPrimary">How I can help</g-link>
      <g-link to="/about/" class="btn btn-colorPrimary">About Me</g-link>
      <!-- <g-link to="/case-studies/">Work I've done</g-link> -->
      <g-link to="/hire-me/" class="btn btn-colorSecondary rounded-full">Hire me</g-link>
    </nav>
  </header>
</template>

<style>
nav a.active {outline: 1px solid theme(color.colorSecondary);}
nav a.btn-colorSecondary.active {@apply bg-white}
.btn {@apply text-base}
.btn-colorPrimary {@apply text-colorSecondary bg-colorPrimary}
.btn-colorSecondary {@apply text-colorPrimary bg-colorSecondary}
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