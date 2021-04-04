<template>
  <div class="user-profile">
    <div class="w-full top-header flex flex-column items-center justify-center">
      <h1 class="content-h1">Personal profile</h1>
      <p class="content-p">Edit information about yourself</p>
    </div>
    <b-form class="data-form grid">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.first_name"
          placeholder="Name"
          :disabled="edit"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.last_name"
          placeholder="Last name"
          :disabled="edit"
        ></b-form-input>
      </b-form-group>
      <b-button
        @click="onSubmit"
        class="justify-self-end data-submit"
        type="button"
      >
        {{ edit ? 'Edit' : 'Save' }}
      </b-button>
    </b-form>
  </div>
</template>

<script>
import Toast from '~/utils/toast.js'
export default {
  mixins: [Toast],
  data() {
    return {
      form: {
        first_name: this.$auth.user.user.first_name,
        last_name: this.$auth.user.user.last_name,
      },
      edit: true,
    }
  },

  computed: {
    toastSuccess() {
      return {
        title: this.$t('toastNameSuccess.Title'),
        body: this.$t('toastNameSuccess.Body'),
      }
    },
    toastError() {
      return {
        title: this.$t('toastNameError.Title'),
        body: this.$t('toastNameError.Body'),
      }
    },
  },

  methods: {
    async onSubmit() {
      try {
        if (!this.edit) {
          this.$store
            .dispatch('userModule/modifyUser', this.form)
            .then((res) => {
              this.$auth.fetchUser()
              this.showToast(
                'success',
                this.toastSuccess.title,
                this.toastSuccess.body
              )
            })
          this.edit = true
        } else {
          this.edit = false
        }
      } catch (err) {
        console.log(err)
        this.showToast('danger', this.toastError.title, this.toastError.body)
      }
    },
  },
}
</script>
