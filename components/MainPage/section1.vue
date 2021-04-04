<template>
  <div class="container-fluid all-wrapper section-1-wrapper">
    <div class="row">
      <div class="col-md-12 col-lg-6 flex flex-column">
        <h1 class="text-h1 space-around my-14">
          {{ $t('section1.Title') }} <br />{{ $t('section1.SubTitle') }}
        </h1>
        <div class="flex justify-start">
          <div class="content">
            <h4 class="content-title">GreatSoft Academy-</h4>
            <p class="content-context">
              {{ $t('section1.ContentContext') }}
            </p>
          </div>
          <img
            src="~assets/images/background.png"
            alt="man"
            class="align-self-center man-image"
          />
        </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <form1 v-if="!$auth.loggedIn" />
      </div>
    </div>
    <div class="row flex justify-center mt-8">
      <div
        v-for="type in LangTypes"
        :key="type.id"
        class="col-md-2 col-4 flex items-center flex-col md:flex-row my-4"
      >
        <img
          :src="require(`~/assets/images/langTypes/${type.image}.png`)"
          alt="...."
          class="w-20 h-20"
        />
        <h1 class="mx-1 text-center logo-title mt-2 md:mt-0">
          {{ type.name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import form1 from '~/components/MainPage/form1'
export default {
  name: 'section1',
  components: {
    form1,
  },
  data() {
    return {
      LangTypes: [
        {
          id: 6,
          name: 'HTML 5',
          image: 'html',
        },
        {
          id: 7,
          name: 'CSS 3',
          image: 'css',
        },
        {
          id: 8,
          name: 'SASS',
          image: 'sass',
        },
        {
          id: 1,
          name: 'Python',
          image: 'python1',
        },
        {
          id: 2,
          name: 'Vue JS',
          image: 'vue',
        },
        {
          id: 4,
          name: 'Nodejs',
          image: 'node',
        },
        {
          id: 3,
          name: 'Django',
          image: 'django1',
        },
        {
          id: 5,
          name: 'Javascript',
          image: 'js',
        },
        {
          id: 11,
          name: 'Bootstrap',
          image: 'bootstrap',
        },
        {
          id: 12,
          name: 'Nuxt js',
          image: 'nuxt',
        },
        {
          id: 13,
          name: 'GoLang',
          image: 'golang',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.section-1-wrapper {
  &.all-wrapper {
    position: relative;
  }
  .logo-title {
    color: #5d30db;
    font-weight: 600;
  }
}
</style>
