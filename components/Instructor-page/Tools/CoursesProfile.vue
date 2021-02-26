<template>
  <div class="tools__profile">
    <div class="tools__profile__wrapper">
      <h1>Instructor profile</h1>
      <h3>Add information about yourself</h3>
    </div>
    <div class="tools__profile__wrapper">
      <form @submit.prevent="changeName">
        <div class="landPage__group d-flex align-items-center" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="First Name"
            v-model="firstName"
            required
            :disabled="!fName"
            trim
          ></b-form-input>
          <i
            @click="enableFName"
            class="fas fa-pencil-alt tools__profile__icon"
          />
        </div>
        <div class="landPage__group d-flex align-items-center" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="Last name"
            v-model="lastName"
            required
            :disabled="!lName"
            trim
          ></b-form-input>
          <i
            @click="enableLName"
            class="fas fa-pencil-alt tools__profile__icon"
          />
        </div>
        <div class="landPage__group landPage__btn" role="group">
          <b-button type="submit" size="md" variant="primary"
            >Change data</b-button
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
      firstName: '',
      lastName: '',
      fName: false,
      lName: false,
    }
  },
  created() {
    this.name()
  },
  methods: {
    enableFName() {
      this.fName = true
    },
    enableLName() {
      this.lName = true
    },
    name() {
      this.firstName = this.$auth.user.mentor.user.split(' ')[0]
      this.lastName = this.$auth.user.mentor.user.split(' ')[1]
    },
    changeName() {
      const mentorFullName = this.firstName + ' ' + this.lastName
      this.$store.dispatch('instructorsTools/changeMentorName', mentorFullName)
    },
  },
}
</script>

<style></style>
