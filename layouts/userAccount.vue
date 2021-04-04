<template>
  <div style="min-height: 100vh; height: 100%">
    <Nuxt />
    <scroll-up />
  </div>
</template>

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
