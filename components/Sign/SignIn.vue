<template>
  <div class="form__container">
    <div class="container form__switch__container">
      <div class="row">
        <div class="col-lg-12 form__switch__box">
          SIGN IN TO GREATSOFT ACADEMY
        </div>
      </div>
    </div>
    <div class="form__wrapper">
      <div class="form__content">
        <h1>Log in to your account</h1>
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
            Sign in with Google
          </button>
          <button>
            <img
              src="~/assets/images/form/facebook.png"
              alt="google"
              class="form__search__img"
            />
            Sign in with Facebook
          </button>
        </div>
        <div class="form__line">
          <span></span>
          or
          <span></span>
        </div>
      </div>
      <form @submit.prevent="userLogin">
        <Input
          type="text"
          :mask="true"
          inputPlaceholder="Phone number"
          v-model="phone_number"
        />
        <Input type="password" inputPlaceholder="Password" v-model="password" />
        <div class="form__button">
          <Button
            type="submit"
            @click="userLogin"
            btnStyle="controlButtonSubmit"
            >Sign in</Button
          >
          <h4>
            Forgot your password?
            <nuxt-link :to="localePath('/auth/reset')"
              >Click here to reset your password</nuxt-link
            >
          </h4>
          <div class="form__line">
            <span></span>
            or
            <span></span>
          </div>
          <h4>Sign in with your organization</h4>
          <nuxt-link to="/auth/signUp" class="form__link"
            >Not a member yet! Sign up for free</nuxt-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Toast from '~/utils/toast.js'
import Input from '~/components/ControlFields/Input'
import Button from '../ControlFields/Button.vue'

export default {
  props: {},
  mixins: [Toast],
  components: {
    Input,
    Button,
  },
  data() {
    return {
      password: '',
      phone_number: '',
    }
  },
  methods: {
    async userLogin() {
      await this.$auth
        .loginWith('local', {
          data: {
            phone_number: this.phone_number.replace(/ /g, ''),
            password: this.password,
          },
        })
        .then((res) => {
          this.$store.dispatch('instructorsPage/initPhoneNumber', {
            phone_number: this.phone_number.replace(/ /g, ''),
            password: this.password,
          })
          this.$router.push(this.localePath({ name: 'index' }))
          this.showToast(
            'success',
            'Muvafaqiyatli',
            'Akkountga kirish muvafaqiyatli yakunlandi'
          )
        })
        .catch((err) => {
          this.showToast(
            'danger',
            'Xatolik',
            'Akkountga kirishda xatolik bor. Raqam yoki parol xato kiritilgan.'
          )
        })
    },
  },
}
</script>
