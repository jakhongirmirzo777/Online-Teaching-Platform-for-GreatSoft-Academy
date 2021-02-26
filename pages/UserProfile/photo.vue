<template>
  <div>
    <div class="w-full top-header flex flex-column items-center justify-center">
      <h1 class="content-h1">{{ itemDetails.headerTitle }}</h1>
      <p class="content-p">{{ itemDetails.description }}</p>
    </div>
    <div class="container-fluid">
      <div class="col-md-10 offset-md-1 photo-bar">
        <div class="inner-bar flex justify-center items-center">
          <b-avatar size="11em" class="avatar-default my-3"></b-avatar>
        </div>
      </div>
      <div class="col-md-10 grid offset-md-1 px-0">
        <b-form-group>
          <p class="label-file-upload mb-1">Add/ Change image</p>
          <b-form-file
            id="file-small"
            class="upload-image-input"
            size="md"
          ></b-form-file>
        </b-form-group>

        <b-button class="data-submit mt-2 mb-5 justify-self-end" type="submit"
          >Change Data</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemDetails'],
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
