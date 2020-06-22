<template>
  <header aria-label="Header" class="flex flex-col md:flex-row justify-between items-start md:items-center bg-colorPrimary text-colorSecondary w-screen py-3 shadow-md">
    <h1 class="text-4xl font-display tracking-wide">
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </h1>
    <nav role="navigation" aria-label="Menu" class="flex flex-grow">
      <ul class="flex justify-between md:justify-around w-full flex-grow">
        <li class="hidden"><g-link to="/">Home</g-link></li>
        <li class="list-none"><g-link to="/services/" class="btn">Services</g-link></li>
        <li class="list-none"><g-link to="/portfolio/" class="btn">Portfolio</g-link></li>
        <li class="list-none"><g-link to="/about/" class="btn">About Me</g-link></li>
        <li class="list-none"><g-link to="/hire-me/" class="btn">Work with me</g-link></li>
      </ul>
    </nav>
  </header>
</template>

<style>
/* header {height: 56px} */
nav a {position: relative;}
nav a.active::before {
  border-bottom: 2px solid theme(color.colorSecondary);
  content: '';
  position: absolute;
  height: 2px;
  width: 100%;
  /* background-color: theme(color.colorSecondary); */
  bottom: 0;
}
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
      sessionStorage.setItem('name', this.$route.query.hello)
    }
  }
}
</script>