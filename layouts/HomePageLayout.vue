<template>
  <div>
    <app-navbar />
    <Nuxt />
    <navbarBottom />
    <scroll-up />
  </div>
</template>

<script>
import appNavbar from '~/components/navbar/appNavbar.vue'
import navbarBottom from '~/components/Footer/navbarBottom'
export default {
  components: { appNavbar, navbarBottom },
  name: 'HomePageLayout'
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.page-leave-active,
.page-enter-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

</style>
