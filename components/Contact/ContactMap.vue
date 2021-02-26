<template>
  <div class="contact__map">
    <div class="contact__map__container">
      <yMap />
    </div>
    <div class="contact__map__content">
      <h3 class="mb-2">+998991091320</h3>
      <div class="contact__map__icons mb-2">
        <h3 class="mb-1">+998991091420</h3>
        <div>
          <i class="fab fa-telegram-plane contact__map__i" />
          <i class="fab fa-facebook-square contact__map__i" />
          <i class="fab fa-instagram contact__map__i" />
        </div>
      </div>
      <div class="contact__map__copy">
        <p>greatsoftacademy_info@gmail.com</p>
        <p>Inha university in Tashkent</p>
      </div>
    </div>
  </div>
</template>

<script>
import yMap from '~/components/Footer/yMap.vue'
export default {
  components: {
    yMap,
  },
}
</script>

<style></style>
