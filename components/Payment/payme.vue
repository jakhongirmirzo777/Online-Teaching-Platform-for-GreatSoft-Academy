<template>
  <div class="payme">
    <h1 class="payme-text">Payme Payment</h1>
    <b-form @submit.prevent="PaymentProcess">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-mask="'#### #### #### ####'"
          v-model="card_number"
          placeholder="Type number of credit card"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-mask="'##/##'"
          v-model="expire_date"
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
          placeholder="Enter the code"
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
import Toast from '~/utils/toast.js'
import alerts from './alerts.vue'
export default {
  components: { alerts },
  mixins: [Toast],
  name: 'type-payme',
  data() {
    return {
      card_number: '',
      expire_date: '',
      course_id: this.$route.params.id,
      code: '',
      token: '',
      dismissCountDownTimer: null,
      variantColor: '',
      alertMessage: '',
    }
  },
  methods: {
    async PaymentProcess() {
      const re = new RegExp('^(8600|9860)', 'i')
      const valid =
        re.test(this.card_number.replace(/ /g, '')) &&
        this.card_number.replace(/ /g, '').length == 16
          ? true
          : false
      if (valid) {
        await this.$axios
          .post('payme/makepayment/', {
            card_number: this.card_number.replace(/ /g, ''),
            expire_date: this.expire_date.replace('/', ''),
            course_id: this.course_id,
          })
          .then((res) => {
            this.token = res.data.token
          })
          .catch((err) => {
            if (err.response.data.error.error.code == -31303) {
              this.showToast(
                'danger',
                'Xatolik',
                "To'lov o'tmadi. Kartada yetarli mablag' mavjud emas"
              )
            } else {
              this.showToast(
                'danger',
                'Xatolik',
                'Xato karta raqamai kiritilgan. Kartangiz raqami va yaroqlilik muddati togriligiga ishonch hosil qiling'
              )
            }
            console.log(err)
          })
      } else {
        this.showToast(
          'info',
          'Xatolik',
          "Mavjud bo'lmagan karta raqami kiritilgan. Kartangiz raqami togriligiga ishonch hosil qiling"
        )
      }
    },
    async verifyCode() {
      await this.$axios
        .post('payme/checkpayment/', {
          token: this.token,
          code: this.code,
          course_id: this.$route.params.id,
        })
        .then((res) => {
          this.callNotifications()
          this.card_number = ''
          this.expire_date = ''
          this.code = ''
        })
        .catch((err) => {
          if (err.response.data.error.code == -32602) {
            this.showToast(
              'danger',
              'Xatolik',
              "To'lov o'tmadi. Kod sms xato kiritilgan"
            )
          }
          console.log(err)
        })
    },
    callNotifications() {
      this.$emit('callNotifications', this.card_number.replace(/ /g, ''))
    },
  },
}
</script>

<style scoped>
.payme-text {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 100%;
  color: #333366;
  margin: 1rem auto;
}
form input {
  width: 60%;
  margin-right: auto;
}
</style>
