<template>
  <div class="click">
    <h1 class="click-text">Click Payment</h1>
    <b-form @submit.prevent="PaymentProcess">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-mask="'#### #### #### ####'"
          v-model="creditCard"
          placeholder="Type number of credit card"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-mask="'##/##'"
          v-model="expireDate"
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
import Toast from '~/utils/toast.js'
import alerts from './alerts.vue'
export default {
  components: { alerts },
  name: 'type-click',
  mixins: [Toast],
  data() {
    return {
      dismissCountDownTimer: null,
      variantColor: null,
      alertMessage: '',
      creditCard: '',
      expireDate: '',
      payload: {
        card_token: '',
        code: '',
        course_id: this.$route.params.id,
      },
    }
  },
  methods: {
    async PaymentProcess() {
      const re = new RegExp('^(8600|9860)', 'i')
      const valid =
        re.test(this.creditCard.replace(/ /g, '')) &&
        this.creditCard.replace(/ /g, '').length == 16
          ? true
          : false
      if (valid) {
        await this.$axios
          .post('click/cardtoken/', {
            card_number: this.creditCard.replace(/ /g, ''),
            expire_date: this.expireDate.replace('/', ''),
            course_id: this.$route.params.id,
          })
          .then((res) => {
            this.payload.card_token = res.data.response.card_token
          })
          .catch((err) => {
            this.showToast(
              'danger',
              'Xatolik',
              'Xato karta raqamai kiritilgan. Kartangiz raqami va yaroqlilik muddati togriligiga ishonch hosil qiling'
            )
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
    async verifyToken() {
      await this.$axios
        .post('click/verifytoken/', this.payload)
        .then((res) => {
          this.callNotifications()
          this.dismissCountDownTimer = 5
          this.variantColor = 'success'
          this.alertMessage = 'Payment has been successfull'
          console.log('dfdf', res)
          this.creditCard = ''
          this.expireDate = ''
          this.payload.code = ''
        })
        .catch((err) => {
          if (err.response.data.response.error_code == -300) {
            this.showToast(
              'danger',
              'Xatolik',
              "To'lov o'tmadi. Kod sms xato kiritilgan"
            )
          } else if (err.response.data.response.error_code == -5017) {
            this.showToast(
              'danger',
              'Xatolik',
              "To'lov o'tmadi. Kartada yetarli mablag' mavjud emas"
            )
          }
          console.log(err)
        })
    },

    callNotifications() {
      this.$emit('callNotifications', this.creditCard.replace(/ /g, ''))
    },
  },
}
</script>

<style scoped>
.click-text {
  font-family: Roboto;
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
