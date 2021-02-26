<template>
  <div class="tools__profile">
    <div class="tools__profile__wrapper">
      <h1>Account</h1>
      <h3>Edit your account settings and change your password here.</h3>
    </div>
    <div class="tools__profile__wrapper">
      <form @submit.prevent="changeNumber">
        <div class="landPage__group" role="group">
          <label class="landPage__label tools__account__label" for="number"
            >Your current phone number:</label
          >
          <b-form-input
            id="number"
            class="landPage__input"
            v-model="oldNumber"
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
            v-model="newNumber"
            required
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group landPage__btn" role="group">
          <b-button type="submit" size="md" variant="primary"
            >Change phone number</b-button
          >
        </div>
      </form>
    </div>
    <div class="tools__profile__wrapper">
      <form>
        <div class="landPage__group" role="group">
          <label class="landPage__label tools__account__label" for="password"
            >If you want to change your password write it here:</label
          >
          <b-form-input
            id="password"
            class="landPage__input"
            placeholder="Enter current password"
            type="password"
            required
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="Enter new password"
            type="password"
            required
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="Re-enter new password"
            type="password"
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
export default {
  data() {
    return {
      oldNumber: this.$auth.user.mentor.user.split(' ')[2],
      newNumber: '',
    }
  },
  methods: {
    changeNumber() {
      this.$store
        .dispatch('instructorsTools/changePhoneNumber', this.newNumber)
        .then((res) => {
          this.newNumber = ''
          this.$router.go()
        })
    },
  },
}
</script>

<style></style>
