<template>
  <b-modal
    id="modal-check-code"
    ref="modal"
    title="Insert the code "
    @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk"
  >
    <form ref="form" @submit.stop.prevent="handleSubmit">
      <b-form-group
        placeholder="enter the code"
        label-for="code-input"
        invalid-feedback="Code is required"
        :state="nameState"
      >
        <b-form-input
          id="code-input"
          v-model="code"
          :state="nameState"
          required
        ></b-form-input>
      </b-form-group>
    </form>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      code: '',
      nameState: null,
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault()
      this.handleSubmit()
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return
      }
      this.$emit('codeTransfer', this.code)
    //   this.$nextTick(() => {
    //     this.$bvModal.hide('modal-check-code')
    //   })
    },
  },
}
</script>
