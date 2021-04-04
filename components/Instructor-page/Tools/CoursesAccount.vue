<template>
  <div :key="update" class="tools__profile">
    <div class="tools__profile__wrapper">
      <h1>Account</h1>
      <h3>Edit your account settings and change your password here.</h3>
    </div>
    <div class="tools__profile__wrapper">
      <form @submit.prevent="getCode">
        <div class="landPage__group" role="group">
          <label class="landPage__label tools__account__label" for="number"
            >Your current phone number:</label
          >
          <b-form-input
            id="number"
            class="landPage__input"
            :placeholder="
              mentorData ? mentorData[0].user.split(' ').slice(2).join(' ') : ''
            "
            disabled
          ></b-form-input>
        </div>
        <div class="landPage__group" role="group">
          <label class="landPage__label tools__account__label" for="newNumber"
            >If you want to change your phone number write it here:</label
          >
          <b-form-input
            id="newNumber"
            class="landPage__input"
            placeholder="Enter new number"
            type="number"
            v-model="form.phone_number"
            required
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group landPage__btn" role="group">
          <b-button type="submit" size="md" variant="primary"
            >Change phone number</b-button
          >
        </div>
        <check-code @codeTransfer="checkCode" />
      </form>
    </div>
    <div class="tools__profile__wrapper">
      <form @submit.prevent="getPasswordCode">
        <div class="landPage__group" role="group">
          <label class="landPage__label tools__account__label" for="password"
            >If you want to change your password write it here:</label
          >
          <b-form-input
            id="password"
            class="landPage__input"
            placeholder="Enter current password"
            type="password"
            v-model="resetPassword.currentPassword"
            required
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="Enter new password"
            type="password"
            v-model="resetPassword.password"
            required
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="Re-enter new password"
            type="password"
            v-model="resetPassword.reEnterPassword"
            required
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group landPage__btn" role="group">
          <b-button type="submit" size="md" variant="primary"
            >Change password</b-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Toast from '~/utils/toast.js'
import checkCode from '~/components/Sign/checkCode'
export default {
  components: {
    checkCode,
  },
  mixins: [Toast],
  props: ['mentorData'],
  data() {
    return {
      update: 1,
      changePhone: false,
      changePassword: false,
      form: {
        phone_number: '',
        token: '',
        password: this.$store.state.instructorsPage.mentorData.password,
      },
      resetPassword: {
        phone_number: this.$store.state.instructorsPage.mentorData.phone_number,
        token: '',
        currentPassword: '',
        password: '',
        reEnterPassword: '',
      },
    }
  },
  created() {
    this.update++
  },
  methods: {
    async getCode() {
      try {
        this.changePhone = true
        this.changePassword = false
        const instructorData = this.$store.state.instructorsPage.mentorData
        const resAccess = await this.$axios.post('token/', instructorData)
        if (resAccess.data.access) {
          await this.$axios
            .post(
              'user/send/code/',
              {
                phone_number: this.form.phone_number,
              },
              {
                headers: { Authorization: `Bearer ${resAccess.data.access}` },
              }
            )
            .then((res) => {
              console.log('[Sent code]', res.data.code)
              this.$nextTick(() => {
                this.$bvModal.show('modal-check-code')
              })
            })
        }
      } catch (err) {
        this.showToast('danger', 'Xatolik', 'Raqam xato kiritilgan')
        console.log(err)
      }
    },

    async getPasswordCode() {
      try {
        this.changePassword = true
        this.changePhone = false
        if (
          this.resetPassword.currentPassword ==
            this.$store.state.instructorsPage.mentorData.password &&
          this.resetPassword.password == this.resetPassword.reEnterPassword
        ) {
          const instructorData = this.$store.state.instructorsPage.mentorData
          const resAccess = await this.$axios.post('token/', instructorData)
          if (resAccess.data.access) {
            await this.$axios
              .post(
                'user/password/code/',
                {
                  phone_number: this.resetPassword.phone_number,
                },
                {
                  headers: { Authorization: `Bearer ${resAccess.data.access}` },
                }
              )
              .then((res) => {
                console.log('[Sent code]', res.data.code)
                this.$nextTick(() => {
                  this.$bvModal.show('modal-check-code')
                })
              })
          }
        } else {
          this.showToast(
            'danger',
            'Xatolik',
            'Passwordlar bir biriga mos kelmayapti'
          )
        }
      } catch (err) {
        console.log(err)
      }
    },

    async checkCode(payload) {
      try {
        if (this.changePhone) {
          await this.$axios
            .post('user/check/code/', {
              phone_number: this.form.phone_number,
              code: payload,
            })
            .then((res) => {
              this.form.token = res.data.token
            })
          if (this.form.token != '' && this.form.token != null) {
            await this.$axios.post('user/phonenumber/reset/', this.form)
            this.$auth.logout()
            this.$store.dispatch('instructorsPage/clearPhoneNumber')
            this.$store.dispatch('instructorsPage/clearMentorProfile')
            this.$store.dispatch('instructorsPage/initPhoneNumber', this.form)
            await this.$auth.loginWith('local', {
              data: this.form,
            })
            this.form.phone_number = ''
            this.form.token = ''
            this.$store.dispatch('instructorsTools/initMentorProfile')
            this.$nextTick(() => {
              this.$bvModal.hide('modal-check-code')
            })
            this.showToast(
              'success',
              'Muvafaqiyatli',
              "Raqam muvafaqiyatli o'zgartirildi"
            )
          }
          this.changePhone = false
          this.$forceUpdate()
        } else if (this.changePassword) {
          await this.$axios
            .post('user/check/code/', {
              phone_number: this.resetPassword.phone_number,
              code: payload,
            })
            .then((res) => {
              this.resetPassword.token = res.data.token
            })
          if (
            this.resetPassword.token != '' &&
            this.resetPassword.token != null
          ) {
            await this.$axios.post('user/password/reset/', this.resetPassword)
            this.$auth.logout()
            this.$store.dispatch('instructorsPage/clearPhoneNumber')
            this.$store.dispatch('instructorsPage/clearMentorProfile')
            this.$store.dispatch(
              'instructorsPage/initPhoneNumber',
              this.resetPassword
            )
            await this.$auth.loginWith('local', {
              data: this.resetPassword,
            })
            this.resetPassword.currentPassword = ''
            this.resetPassword.password = ''
            this.resetPassword.reEnterPassword = ''
            this.resetPassword.token = ''
            this.$store.dispatch('instructorsTools/initMentorProfile')
            this.$nextTick(() => {
              this.$bvModal.hide('modal-check-code')
            })
            this.showToast(
              'success',
              'Muvafaqiyatli',
              "Password muvafaqiyatli o'zgartirildi"
            )
          }
          this.changePassword = false
          this.$forceUpdate()
        }
      } catch (err) {
        this.showToast('danger', 'Xatolik', 'Kod xato terilgan')
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
