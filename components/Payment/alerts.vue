<template>
  <b-alert
    class="alert-notification"
    :show="dismissCountDown"
    dismissible
    :variant="alertVariant"
    @dismissed="dismissCountDown = 0"
    @dismiss-count-down="countDownChanged"
  >
    {{ msg }}
  </b-alert>
</template>

<script>
export default {
  props: ['dismissCountDown', 'alertVariant', 'msg'],
  data() {
    return {
      //   dismissCountDown: 0,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
}
</script>

<style scoped>
.alert-notification {
  position: fixed;
  z-index: 9999;
  right: 0;
  top: 12%;
  width: 30%;
}
</style>
