<template>
  <div class="container-fluid section-5">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-h1 my-4">{{ $t('section5.Title') }}</h1>
      </div>
    </div>
    <div v-if="courses.length === 0" class="row">
      <h1 class="ml-4 text-gray-400">No courses exist</h1>
    </div>
    <div class="row" v-else>
      <div
        class="col-md-4"
        v-for="course in courses
          .filter((item) => item.is_checked === true)
          .slice(0, 6)"
        :key="course.id"
      >
        <div class="cart grid hover:shadow-lg">
          <img
            :src="course.icon"
            class="justify-self-center w-20 h-20 mb-4"
            alt="..."
          />
          <h2 class="text-h2 mb-2 md:text-center sm:text-center">
            {{ course.course_name }}
          </h2>

          <p class="text-paragraph text-justify">
            {{
              course.description
                ? course.description.split(' ').slice(0, 20).join(' ') + '....'
                : ''
            }}
          </p>
        </div>
      </div>
    </div>
    <div class="row flex justify-end">
      <button
        @click="routeChange"
        class="btn btn-know-more px-4 py-2.5 flex items-center"
      >
        {{ $t('section5.Btn') }}
        <b-icon
          icon="arrow-right"
          animation="cylon"
          font-scale="1"
          class="ml-3"
          variant="white"
        ></b-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['courses'],
  methods: {
    routeChange() {
      this.$router.push(this.localePath({ name: 'courses' }))
    },
  },
  computed: {},
}
</script>
