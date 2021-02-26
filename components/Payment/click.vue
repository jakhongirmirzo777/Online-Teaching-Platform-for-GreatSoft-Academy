<template>
  <div class="click">
    <h1 class="click-text">Click Payment</h1>
    <b-form @submit.prevent="PaymentProcess">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.creditCard"
          placeholder="Type number of credit card"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.expireDate"
          placeholder="Expire date"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="info">process</b-button>
    </b-form>
    <b-form @submit.prevent="verifyToken" class="mt-6">
      <b-form-group id="input-group-888" label-for="input-888">
        <b-form-input
          id="input-888"
          v-model="payload.code"
          placeholder="Code sms"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="info">verify</b-button>
    </b-form>
    <alerts
      :dismissCountDown="dismissCountDownTimer"
      :alertVariant="variantColor"
      class="mt-5"
      :msg="alertMessage"
    />
  </div>
</template>

<script>
import alerts from './alerts.vue'
export default {
  components: { alerts },
  name: 'type-click',
  data() {
    return {
      dismissCountDownTimer: null,
      variantColor: null,
      alertMessage: '',
      form: {
        creditCard: '',
        expireDate: '',
      },
      payload: {
        card_token: '',
        code: '',
        course_id: this.$route.params.id,
      },
    }
  },
  methods: {
    async PaymentProcess() {
      await this.$axios
        .post('click/cardtoken/', {
          card_number: this.form.creditCard,
          expire_date: this.form.expireDate,
          course_id: this.$route.params.id,
        })
        .then((res) => {
          this.payload.card_token = res.data.response.card_token
        })
        .catch((err) => console.log(err))
    },
    async verifyToken() {
      await this.$axios
        .post('click/verifytoken/', this.payload)
        .then((res) => {
          this.dismissCountDownTimer = 5
          this.variantColor = 'success'
          this.alertMessage = 'Payment has been successfull'

          console.log(res)
          this.form.creditCard = ''
          this.form.expireDate = ''
          this.payload.code = ''
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>
.click-text {
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
