<template>
  <div class="container-fluid">
    <div class="row flex items-center justify-center">
      <h1 class="text-center mr-2">Страница в разработке</h1>
      <fa :icon="['fas', 'tools']" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OnGoingPage',
}
</script>

<style scoped>
.container-fluid {
  min-height: 80vh;
  width: 100%;
}
.row {
  margin-top: 5%;
  font-size: 26px;
  color: grey;
}
h1 {
  font-size: 38px;
}
</style>
