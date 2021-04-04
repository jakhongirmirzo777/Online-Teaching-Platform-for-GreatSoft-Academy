<template>
  <div>
    <div class="w-full top-header flex flex-column items-center justify-center">
      <h1 class="content-h1">Photo</h1>
      <p class="content-p">Add a nice photo of yourself for your profile</p>
    </div>
    <div class="container-fluid">
      <div class="col-md-10 offset-md-1 photo-bar">
        <div class="inner-bar flex justify-center items-center">
          <img v-if="image" class="h-100" :src="image" alt="user image" />
          <b-avatar v-else size="11em" class="avatar-default my-3"></b-avatar>
        </div>
      </div>
      <form @submit.prevent="upload" class="col-md-10 grid offset-md-1 px-0">
        <b-form-group>
          <p class="label-file-upload mb-1">Add / Change image</p>
          <b-form-file
            id="file-small"
            class="upload-image-input"
            size="md"
            @change="valChange"
            accept=".jpeg, .jpg, .png"
            browse-text="Upload"
          ></b-form-file>
        </b-form-group>

        <b-button class="data-submit mt-2 mb-5 justify-self-end" type="submit"
          >Change Image</b-button
        >
      </form>
    </div>
  </div>
</template>

<script>
import Toast from '~/utils/toast.js'
export default {
  data() {
    return {
      uploadImage: '',
    }
  },
  mixins: [Toast],
  computed: {
    image() {
      return this.$auth.user.user.image
    },
    toastSuccess() {
      return {
        title: this.$t('toastPhotoSuccess.Title'),
        body: this.$t('toastPhotoSuccess.Body'),
      }
    },
    toastError() {
      return {
        title: this.$t('toastPhotoError.Title'),
        body: this.$t('toastPhotoError.Body'),
      }
    },
  },
  methods: {
    valChange(e) {
      this.uploadImage = e.target.files[0]
    },
    async upload() {
      try {
        if (this.uploadImage) {
          const formData = new FormData()
          formData.append('image', this.uploadImage)
          this.$store
            .dispatch('userModule/modifyUser', formData)
            .then((res) => {
              this.$auth.fetchUser()
              this.showToast(
                'success',
                this.toastSuccess.title,
                this.toastSuccess.body
              )
            })
        }
      } catch (err) {
        console.log(err)
        this.showToast('danger', this.toastError.title, this.toastError.body)
      }
    },
  },
}
</script>

<style scoped>
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
.photo-bar {
  margin-top: 5%;
  margin-bottom: 5%;
  height: 245px;
  padding: 0.8rem 1.1rem;
  background: transparent;
  border: 1px solid #333366;
  box-sizing: border-box;
}
.inner-bar {
  background: rgba(196, 196, 196, 0.15);
  width: 100%;
  height: 100%;
}
.avatar-default {
  background: #333366;
}
.label-file-upload {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #333366;
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
