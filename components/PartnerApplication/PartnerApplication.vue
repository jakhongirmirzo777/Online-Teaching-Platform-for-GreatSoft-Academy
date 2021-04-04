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
      <form @submit.prevent="createPartner">
        <Input required v-model="form.name" inputPlaceholder="Company Name" />
        <Input
          required
          v-model="form.sphere"
          inputPlaceholder="Company work sphere "
        />
        <div class="inputControl__box">
          <input
            required
            type="file"
            name="file"
            id="file"
            accept=".jpg, .jpeg, .png"
            class="inputControl__file"
            @change="valChange"
          />
          <label for="file">
            <span>{{ label }}</span> <span>Upload file</span>
          </label>
        </div>
        <Input
          required
          controlType="textarea"
          v-model="form.description"
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
import Toast from '~/utils/toast.js'
import Button from '~/components/ControlFields/Button.vue'
import Input from '~/components/ControlFields/Input.vue'
export default {
  components: {
    Button,
    Input,
  },
  mixins: [Toast],
  data() {
    return {
      label: 'Send your logo',
      form: {
        name: '',
        sphere: '',
        description: '',
        file: null,
      },
    }
  },
  methods: {
    valChange(event) {
      this.label = event.target.files[0].name
      this.form.file = event.target.files[0]
    },
    async createPartner() {
      try {
        const formData = new FormData()
        formData.append('name', this.form.name)
        formData.append('sphere', this.form.sphere)
        formData.append('description', this.form.description)
        formData.append('file', this.form.file)
        await this.$axios.post('partnior/', formData).then((res) => {
          this.form.name = ''
          this.form.sphere = ''
          this.form.description = ''
          this.label = 'Send your logo'
          this.form.file = null
          this.showToast(
            'success',
            'Muvafaqiyatli',
            "Partner bo'lish muvafaqiyatli yakunlandi"
          )
        })
      } catch (err) {
        this.showToast(
          'danger',
          'Xatolik',
          "Ro'yxatdan o'tishda xatolik bor. Ma'lumotlar xato kiritilgan."
        )
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
