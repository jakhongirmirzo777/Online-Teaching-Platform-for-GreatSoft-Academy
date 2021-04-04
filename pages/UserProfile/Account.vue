<template>
  <div>
    <div
      class="w-full top-header flex flex-column items-center justify-center px-4"
    >
      <h1 class="content-h1">Account</h1>
      <p class="content-p">
        Edit your account settings and change your password here.
      </p>
    </div>
    <div class="container-fluid">
      <div class="row row-1 py-3">
        <div class="col-md-10 offset-md-1 grid">
          <b-form @submit.prevent="getCode">
            <b-form-group id="input-group-1" label-for="input-1">
              <label
                class="landPage__label tools__account__label"
                for="password"
                >Your current phone number:</label
              >
              <b-form-input
                class="input-item"
                id="input-1"
                v-model="userData.phone_number"
                disabled
                type="tel"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <label
                class="landPage__label tools__account__label"
                for="password"
                >If you want to change your phone number write it here:</label
              >
              <b-form-input
                class="input-item"
                type="tel"
                id="input-2"
                v-model="form.phone_number"
                placeholder="Enter a new phone number"
                required
              ></b-form-input>
            </b-form-group>
            <div class="w-100 d-flex justify-end">
              <b-button class="data-submit mb-4" type="submit"
                >Change phone number</b-button
              >
            </div>
          </b-form>
        </div>
      </div>
      <div class="row pt-4">
        <div class="col-md-10 offset-md-1 grid">
          <b-form @submit.prevent="getPasswordCode">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                class="input-item"
                id="input-1"
                v-model="resetPassword.currentPassword"
                type="password"
                placeholder="Enter your current password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                class="input-item"
                type="password"
                id="input-2"
                v-model="resetPassword.password"
                placeholder="Enter your new password"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                class="input-item"
                type="password"
                id="input-2"
                v-model="resetPassword.reEnterPassword"
                placeholder="Re-enter your new password"
                required
              ></b-form-input>
            </b-form-group>
            <div class="w-100 d-flex justify-end">
              <b-button type="submit" class="data-submit mb-4"
                >Change password</b-button
              >
            </div>
          </b-form>
        </div>
      </div>
      <check-code @codeTransfer="checkCode" />
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
  data() {
    return {
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
  computed: {
    userData() {
      return this.$auth.user.user
    },
  },

  updated() {
    this.form.password = this.$store.state.instructorsPage.mentorData.password
    this.resetPassword.phone_number = this.$store.state.instructorsPage.mentorData.phone_number
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
            this.$store.dispatch('instructorsPage/clearPhoneNumber')
            this.$store.dispatch('instructorsPage/initPhoneNumber', this.form)
            this.$auth.fetchUser()
            this.form.phone_number = ''
            this.form.token = ''
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
            this.$store.dispatch('instructorsPage/clearPhoneNumber')
            this.$store.dispatch(
              'instructorsPage/initPhoneNumber',
              this.resetPassword
            )
            this.$auth.fetchUser()
            this.resetPassword.currentPassword = ''
            this.resetPassword.password = ''
            this.resetPassword.reEnterPassword = ''
            this.resetPassword.token = ''
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
          // this.$forceUpdate()
        }
      } catch (err) {
        this.showToast('danger', 'Xatolik', 'Kod xato terilgan')
        console.log(err)
      }
    },
  },
}
</script>

<style scoped>
.input-item {
  background: transparent;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: rgba(51, 51, 102, 0.5);
  border: 1px solid #333366;
  box-sizing: border-box;
}
.row-1 {
  border-bottom: 1px solid rgba(51, 51, 102, 0.5);
}
.data-submit {
  background: #5d30db;
  border-radius: 4px;
  color: white;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
}
.top-header {
  border-bottom: 1px solid rgba(51, 51, 102, 0.5);
  min-height: 7rem;
}
.top-header .content-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  color: #333366;
}
.top-header .content-p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #333366;
}
</style>
