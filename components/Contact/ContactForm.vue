<template>
  <div class="contact__container">
    <form @submit.prevent="sendMessage">
      <div class="contact__input__group">
        <label class="contact__form__label" for="FlName">Your full name</label>
        <input
          class="contact__form__input"
          type="text"
          id="FlName"
          autocomplete="off"
          placeholder="Full name"
          v-model="form.full_name"
        />
      </div>
      <div class="contact__input__group">
        <label class="contact__form__label" for="tel">Phone number</label>
        <input
          class="contact__form__input"
          id="tel"
          autocomplete="off"
          v-mask="'+998 ## ### ## ##'"
          placeholder="+998 -- --- -- --"
          required
          v-model="phone_number"
        />
      </div>
      <div class="contact__input__group">
        <label class="contact__form__label" for="email">Email address</label>
        <input
          class="contact__form__input"
          type="email"
          id="email"
          autocomplete="off"
          placeholder="Your email"
          v-model="form.email"
          required
        />
      </div>
      <div class="contact__input__group">
        <label class="contact__form__label" for="textArea">Message</label>
        <textarea
          id="textArea"
          cols="30"
          rows="8"
          class="contact__form__textArea"
          placeholder="Your message starts with…"
          required
          v-model="form.message"
        ></textarea>
      </div>
      <div class="contact__input__group">
        <button type="submit" class="contact__btn">Send your Message</button>
      </div>
    </form>
  </div>
</template>

<script>
import Toast from '~/utils/toast.js'
export default {
  mixins: [Toast],
  data() {
    return {
      form: {
        full_name: '',
        email: '',
        message: '',
      },
      phone_number: '',
    }
  },
  methods: {
    sendMessage() {
      this.$store
        .dispatch('contactUs/sendMessage', {
          phone_number: this.phone_number.replace(/ /g, ''),
          ...this.form,
        })
        .then((res) => {
          this.showToast(
            'success',
            'Muvafaqiyatli',
            'Xabaringiz muvafaqiyatli yuborildi'
          )
          this.form.full_name = ''
          this.form.email = ''
          this.form.message = ''
          this.phone_number = ''
        })
    },
  },
}
</script>
