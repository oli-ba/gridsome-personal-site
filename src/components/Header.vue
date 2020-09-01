<template>
  <header aria-label="Header" class="flex flex-col md:flex-row justify-between items-start md:items-center bg-colorPrimary text-colorSecondary w-screen py-3 shadow-md">
    <h1 class="text-4xl tracking-wide">
      <g-link to="/">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="#FFCCD5"/>
      <path d="M17 36V12H26.4247C27.705 12 28.8194 12.3086 29.7678 12.9257C30.7399 13.5429 31.4868 14.3543 32.0084 15.36C32.5537 16.3657 32.8264 17.4629 32.8264 18.6514C32.8264 20.32 32.281 21.8514 31.1904 23.2457C32.0914 23.9314 32.7789 24.7543 33.2531 25.7143C33.751 26.6743 34 27.7029 34 28.8C34 29.6914 33.8222 30.56 33.4665 31.4057C33.1346 32.2514 32.6722 33.0286 32.0795 33.7371C31.4868 34.4229 30.7873 34.9714 29.9812 35.3829C29.1987 35.7943 28.3689 36 27.4916 36H17ZM20.8766 22.1829H26.318C26.7922 22.1829 27.2308 22.0114 27.6339 21.6686C28.037 21.3257 28.357 20.88 28.5941 20.3314C28.8312 19.7829 28.9498 19.2229 28.9498 18.6514C28.9498 17.8971 28.7245 17.2343 28.2741 16.6629C27.8236 16.0686 27.2071 15.7714 26.4247 15.7714H20.8766V22.1829ZM20.8766 32.2286H27.4916C27.9658 32.2286 28.3926 32.0571 28.772 31.7143C29.175 31.3714 29.4951 30.9371 29.7322 30.4114C29.993 29.8857 30.1234 29.3486 30.1234 28.8C30.1234 27.9771 29.8863 27.28 29.4121 26.7086C28.9379 26.1143 28.3333 25.8171 27.5983 25.8171H20.8766V32.2286Z" fill="#2017CC"/>
      </svg>

      <!-- {{ $static.metadata.siteName }} -->
      </g-link>
    </h1>
    <nav role="navigation" aria-label="Menu" class="flex flex-grow w-full md:w-auto">
      <ul class="flex justify-evenly md:justify-end w-full flex-grow">
        <li class="hidden"><g-link to="/">Home</g-link></li>
        <li class="list-none md:ml-12">
          <g-link to="/services/" class="btn p-2 transition-all bg-opacity-0 ease-in-out duration-200">Services &amp; Portfolio</g-link>
        </li>
        <li class="list-none md:ml-12">
          <g-link to="/about/" class="btn p-2 transition-all bg-opacity-0 ease-in-out duration-200">About Me</g-link>
        </li>
        <li class="list-none md:ml-12">
          <g-link to="/hire-me/" class="btn p-2 transition-all bg-opacity-0 ease-in-out duration-200">Get a Callback</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
nav a:hover:not(.active) {@apply bg-colorSecondary text-colorPrimary;}
nav a.active {@apply bg-colorSecondary text-colorPrimary;}
/* nav a.active::before {
  border-bottom: 2px solid theme(color.colorSecondary);
  content: '';
  position: absolute;
  height: 2px;
  width: 100%;
  bottom: 0;
} */
nav a.btn-colorSecondary.active {@apply bg-white;}
.btn {@apply text-base;}
.btn-colorPrimary {@apply text-colorSecondary bg-colorPrimary;}
.btn-colorSecondary {@apply text-colorPrimary bg-colorSecondary;}
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