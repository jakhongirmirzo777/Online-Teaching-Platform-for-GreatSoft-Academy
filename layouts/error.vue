<template>
  <div class="flex justify-center items-center error-page">
    <h1 class="content-h1">Oops, there is an error somewhere:)</h1>
  </div>
</template>

<style scoped>
.error-page {
  height: 70vh;
}
.content-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 35px;
  color: #333366;
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
