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
            :placeholder="getName ? getName.fName : ''"
            v-model="firstName"
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
            :placeholder="getName ? getName.lName : ''"
            v-model="lastName"
            :disabled="!lName"
            trim
          ></b-form-input>
          <i
            @click="enableLName"
            class="fas fa-pencil-alt tools__profile__icon"
          />
        </div>
        <div class="landPage__group landPage__btn" role="group">
          <b-button
            style="margin-right: 3rem"
            type="submit"
            size="md"
            variant="primary"
            >Change data</b-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mentorData'],
  data() {
    return {
      firstName: '',
      lastName: '',
      fName: false,
      lName: false,
    }
  },

  computed: {
    getName() {
      if (this.mentorData) {
        const data = this.mentorData[0].user
        return {
          fName: !this.fName
            ? data.split(' ').slice(0, 1).join(' ')
            : 'Enter your first name',
          lName: !this.lName
            ? data.split(' ').slice(1, 2).join(' ')
            : 'Enter your last name',
        }
      }
    },
  },

  methods: {
    enableFName() {
      this.fName = !this.fName
    },
    enableLName() {
      this.lName = !this.lName
    },
    changeName() {
      if (this.mentorData) {
        const data = this.mentorData[0].user
        const phoneNumber = data.split(' ').slice(2).join(' ')
        if (this.firstName == '') {
          const newFirstName = data.split(' ').slice(0, 1).join(' ')
          const mentorFullName = `${newFirstName} ${this.lastName} ${phoneNumber}`
          this.$store.dispatch(
            'instructorsTools/changeMentorName',
            mentorFullName
          )
          this.lastName = ''
          this.lName = false
        } else if (this.lastName == '') {
          const newLastName = data.split(' ').slice(1, 2).join(' ')
          const mentorFullName = `${this.firstName} ${newLastName} ${phoneNumber}`
          this.$store.dispatch(
            'instructorsTools/changeMentorName',
            mentorFullName
          )
          this.firstName = ''
          this.fName = false
        } else if (this.lastName != '' && this.firstName != '') {
          const mentorFullName = `${this.firstName} ${this.lastName} ${phoneNumber}`
          this.$store.dispatch(
            'instructorsTools/changeMentorName',
            mentorFullName
          )
          this.firstName = ''
          this.lastName = ''
          this.fName = false
          this.lName = false
        }
      }
    },
  },
}
</script>

<style></style>
