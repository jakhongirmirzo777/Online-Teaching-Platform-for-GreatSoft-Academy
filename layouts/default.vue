<template>
  <div>
    <appNavbar />
    <Nuxt />
    <appFooter />
    <scroll-up />
  </div>
</template>

<script>
import appNavbar from '~/components/navbar/appNavbar'
import appFooter from '~/components/Footer/appFooter'
export default {
  components: {
    appNavbar,
    appFooter,
  },
  data() {
    return {}
  },
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

.fade-enter-active {
  transition: all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.fade-enter {
  opacity: 0;
  margin-left: 90px;
}
.fade-leave-active {
  transition: all 0.01s cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 0;
  margin-left: -100px;
}
</style>
