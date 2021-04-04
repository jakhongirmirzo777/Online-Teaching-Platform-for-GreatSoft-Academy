<template>
  <div class="form__container">
    <div class="form__wrapper">
      <div class="form__content">
        <h1>Create your free account</h1>
        <p class="form__content__p">
          Build skills for today, tomorrow and beyond. Education allows to
          future-proof your career.
        </p>
        <div class="form__search">
          <button>
            <img
              class="form__search__img"
              src="~/assets/images/form/google.png"
              alt="google"
            />
            Sign up with Google
          </button>
          <button>
            <img
              src="~/assets/images/form/facebook.png"
              alt="google"
              class="form__search__img"
            />
            Sign up with Facebook
          </button>
        </div>
        <div class="form__line">
          <span></span>
          or
          <span></span>
        </div>
      </div>
      <form @submit.prevent="getCode">
        <Input inputPlaceholder="First Name" v-model="form.first_name" />
        <Input inputPlaceholder="Last Name" v-model="form.last_name" />
        <Input
          type="tel"
          :mask="true"
          inputPlaceholder="Phone number"
          v-model="phone_number"
        />
        <Input
          type="password"
          inputPlaceholder="Password"
          v-model="form.password"
        />
        <div class="form__button">
          <p class="form__content__p">
            By clicking Sign Up, you agree to GreatSoft Academy's Terms of
            Service & Privacy Policy.
          </p>
          <Button type="submit" @click="getCode" btnStyle="controlButtonSubmit"
            >Continue</Button
          >
        </div>
      </form>
      <check-code @codeTransfer="checkCode" />
    </div>
  </div>
</template>

<script>
import Button from '../ControlFields/Button.vue'
import Input from '~/components/ControlFields/Input'
import Toast from '~/utils/toast.js'
import checkCode from '~/components/Sign/checkCode'
export default {
  components: { Button, Input, checkCode },
  mixins: [Toast],
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        password: '',
        token: '',
      },
      phone_number: '',
      code: null,
    }
  },

  methods: {
    async getCode() {
      await this.$axios
        .post('user/send/code/', {
          phone_number: this.phone_number.replace(/ /g, ''),
        })
        .then((res) => {
          console.log('[Sent code]', res.data.code)
          this.$nextTick(() => {
            this.$bvModal.show('modal-check-code')
          })
        })
        .catch((err) => {
          this.showToast('danger', 'Xatolik', "Anketa to'gri to'ldirilmagan")
        })
    },
    async checkCode(payload) {
      await this.$axios
        .post('user/check/code/', {
          phone_number: this.phone_number.replace(/ /g, ''),
          code: payload,
        })
        .then((res) => {
          this.form.token = res.data.token
        })
        .catch((err) => {
          console.log(err)
          this.showToast('danger', 'Xatolik', 'Kod xato terilgan')
        })

      if (this.form.token != '' && this.form.token != null) {
        await this.$axios
          .post('user/', {
            phone_number: this.phone_number.replace(/ /g, ''),
            ...this.form,
          })
          .then((res) => {
            this.$auth.loginWith('local', {
              data: {
                phone_number: this.phone_number.replace(/ /g, ''),
                ...this.form,
              },
            })
            this.$store.dispatch('instructorsPage/initPhoneNumber', {
              phone_number: this.phone_number.replace(/ /g, ''),
              password: this.form.password,
            })
            this.$router.push(this.localePath({ name: 'index' }))
            this.$store.dispatch('course/initToastShow', true)
          })
          .catch((err) => console.log('[USER ERROR]', err))
        this.form = {
          first_name: '',
          last_name: '',
          password: '',
          token: '',
        }
        this.phone_number = ''
      }
      this.$nextTick(() => {
        this.$bvModal.hide('modal-check-code')
      })
    },
  },
}
</script>
