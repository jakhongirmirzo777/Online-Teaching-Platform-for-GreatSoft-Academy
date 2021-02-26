<template>
  <div class="form__container">
    <div class="form__wrapper">
      <div class="form__content">
        <h1>Partner application</h1>
        <p class="form__content__p">
          Build skills for today, tomorrow and beyond. Education allows to
          future-proof your career.
        </p>
      </div>
      <form>
        <Input inputPlaceholder="Company Name" />
        <Input inputPlaceholder="Company work sphere " />
        <div class="inputControl__box">
          <input
            type="file"
            name="file"
            id="file"
            class="inputControl__file"
            @change="valChange"
          />
          <label for="file">
            <span>{{ label }}</span> <span>Upload file</span>
          </label>
        </div>
        <Input
          controlType="textarea"
          textPlaceholder="Why do you want to become partner with us? "
          rows="7"
        />
        <div class="form__button">
          <p class="form__content__p">
            By clicking Send, you agree to our Privacy and Policy.
          </p>
          <Button type="submit" btnStyle="controlButtonSubmit">Send</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '~/components/ControlFields/Button.vue'
import Input from '~/components/ControlFields/Input.vue'
export default {
  components: {
    Button,
    Input,
  },
  data() {
    return {
      label: 'Send your logo',
    }
  },
  methods: {
    valChange(event) {
      this.label = event.target.files[0].name
    },
  },
}
</script>

<style></style>
