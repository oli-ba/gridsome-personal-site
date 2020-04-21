<template>
  <header class="flex flex-col md:flex-row justify-between items-start md:items-center bg-pblue text-pink w-screen h-24 py-3">
    <h1 class="text-4xl">
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </h1>
    <nav class="flex justify-between md:justify-around w-full md:w-1/2">
      <g-link to="/process/">How I can help</g-link>
      <g-link to="/about/">About Me</g-link>
      <!-- <g-link to="/case-studies/">Work I've done</g-link> -->
      <g-link to="/hire-me/">Hire me</g-link>
    </nav>
  </header>
</template>

<style>
nav a.active {
  border-bottom: 2px solid theme(color.pink);
}
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
  name: 'Header'
}
</script>