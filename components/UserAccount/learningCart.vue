<template>
  <div class="container-fluid learning-cart">
    <div class="row wrap-row">
      <div class="col-md-4 h-100">
        <p class="content-p mb-1">School of business</p>
        <h1 class="content-h1">Front end Development</h1>
        <ul class="flex ul-list">
          <li class="mr-3" v-for="i in links" :key="i.id">
            <nuxt-link :to="i.urlLink">{{ i.name }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-md-4 flex justify-center">
        <div class="progress" data-percentage="74">
          <span class="progress-left">
            <span class="progress-bar"></span>
          </span>
          <span class="progress-right">
            <span class="progress-bar"></span>
          </span>
          <div class="progress-value">
            <div>
              74%<br />
              <span>completed</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 h-10">
        <p class="content-p my-2">Current lesson</p>
        <h2 class="content-h2">Video: Corporate Leadership</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'learningCart',
  data() {
    return {
      links: [
        {
          id: 1,
          name: 'Discussion board',
          urlLink: '#',
        },
        {
          id: 2,
          name: 'My submission',
          urlLink: '#',
        },
        {
          id: 3,
          name: 'Contact',
          urlLink: '#',
        },
      ],
    }
  },
}
</script>

<style scoped>
.learning-cart {
  background: #fff;
}
.content-p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13.7148px;
  line-height: 19px;
  color: #121212;
  mix-blend-mode: normal;
  opacity: 0.5;
}
.content-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 21.5519px;
  line-height: 29px;
  letter-spacing: -0.195926px;
  color: #121212;
}
.ul-list {
  margin-top: 2rem;
}
.ul-list a {
  text-decoration: none;
  color: #4fa0e9;
}
.wrap-row {
  padding: 1.5rem 0.5rem;
}
.content-h2 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15.6741px;
  line-height: 21px;
  letter-spacing: -0.391852px;
  color: #121212;
}
.content-p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13.7148px;
  line-height: 19px;
  color: #121212;
  mix-blend-mode: normal;
  opacity: 0.5;
  text-transform: uppercase;
}
</style>
