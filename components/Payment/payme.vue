<template>
  <div class="payme">
    <h1 class="payme-text">Payme Payment</h1>
    <b-form @submit.prevent="PaymentProcess">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="payload.card_number"
          placeholder="Type number of credit card"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="payload.expire_date"
          placeholder="Expire date"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="info">process</b-button>
    </b-form>
    <b-form @submit.prevent="verifyCode" class="mt-6">
      <b-form-group id="input-group-5" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="code"
          placeholder="Enter the code..."
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="info">verify</b-button>
    </b-form>
    <alerts
      class="mt-5"
      :dismissCountDown="dismissCountDownTimer"
      :alertVariant="variantColor"
      :msg="alertMessage"
    />
  </div>
</template>

<script>
import alerts from './alerts.vue'
export default {
  components: { alerts },
  name: 'type-payme',
  data() {
    return {
      payload: {
        card_number: '',
        expire_date: '',
        course_id: this.$route.params.id,
      },
      code: '',
      token: '',
      dismissCountDownTimer: null,
      variantColor: '',
      alertMessage: '',
    }
  },
  methods: {
    async PaymentProcess() {
      await this.$axios
        .post('payme/makepayment/', {
          card_number: this.payload.card_number,
          expire_date: this.payload.expire_date,
          course_id: this.payload.course_id,
        })
        .then((res) => {
          console.log(res)
          this.token = res.data.token
          console.log('[TOKEN: ] ', res.data.token)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async verifyCode() {
      console.log('verification log')
      await this.$axios
        .post('payme/checkpayment/', {
          token: this.token,
          code: this.code,
          course_id: this.$route.params.id,
        })
        .then((res) => {
          console.log(res)
          this.payload.card_number = ''
          this.payload.expire_date = ''
          this.code = ''
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
.payme-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 100%;
  color: #333366;
  margin: 1rem auto;
}
form input {
  width: 60%;
  margin-right: auto;
}
</style>
