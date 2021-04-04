<template>
  <div :key="update" class="courses__container">
    <div class="courses__header">
      <h1>All courses</h1>
      <button @click="addCourse">+New course</button>
    </div>
    <transition name="fadeModal">
      <div
        v-if="modalToggle"
        @click.self="modalToggle = !modalToggle"
        class="courses__modal"
      >
        <form class="courses__form" @submit.prevent="createCourse">
          <span class="form__close" @click="modalToggle = !modalToggle"
            >&times;</span
          >
          <h1>
            It's ok if you can't think of a good title now. You can change it
            later.
          </h1>
          <div class="form__group">
            <label for="title">Title:</label>
            <input
              required
              autocomplete="off"
              v-model="courseData.course_name"
              placeholder="Title"
              name="title"
              type="text"
            />
          </div>
          <div class="form__group">
            <label for="direction">Choose course's direction:</label>
            <b-form-select
              size="lg"
              class="courses__container__select"
              id="direction"
              v-model="courseData.yonalish"
              :options="options"
            ></b-form-select>
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </transition>
    <transition name="fadeModal">
      <div
        v-if="deleteToggler"
        @click.self="deleteToggler = !deleteToggler"
        class="courses__modal"
      >
        <form class="courses__form" @submit.prevent="proveDeleteCourse">
          <span class="form__close" @click="deleteToggler = !deleteToggler"
            >&times;</span
          >
          <h1>Are you sure to delete this course?</h1>
          <button type="submit">Yes</button>
          <button @click="deleteToggler = !deleteToggler">No</button>
        </form>
      </div>
    </transition>
    <div v-if="allMentorCourses != undefined">
      <div
        v-for="(course, i) in allMentorCourses"
        :key="i"
        :id="i"
        class="courses__edit"
      >
        <img src="~assets/images/laptop.png" alt="course image" />
        <div>
          <h2>
            {{ course ? course.course_name : '' }}
          </h2>
        </div>
        <div class="courses__edit__box">
          <nuxt-link
            class="courses__edit__link"
            :to="
              course
                ? localePath(`/instructor-page/courses/${course.id}`)
                : localePath(`/instructor-page/courses/`)
            "
          >
            <i class="fas fa-pencil-alt" />
          </nuxt-link>
          <i
            @click="deleteCourse(course.id)"
            class="courses__edit__delete far fa-trash-alt"
          />
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="courses__container__h1">
        You do not have any courses yet. Feel free to create your first course!
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      update: 1,
      modalToggle: false,
      deleteToggler: false,
      courseData: {
        yonalish: 'Frontend Development',
        course_name: '',
        mentors: [this.$auth.user.mentor.id],
      },
      options: [
        { value: 'Frontend Development', text: 'Frontend Development' },
        { value: 'Backend Development', text: 'Backend Development' },
        { value: 'Design (UI/UX)', text: 'UI/UX Design' },
        {
          value: 'Fullstack Web Development',
          text: 'Fullstack Web Development',
        },
        { value: 'Mobile Development', text: 'Mobile development' },
      ],
    }
  },

  methods: {
    addCourse() {
      this.modalToggle = true
    },
    createCourse() {
      this.$store
        .dispatch('instructorsPage/createCourse', this.courseData)
        .then((res) => {
          this.courseData.yonalish = 'Frontend Development'
          this.courseData.course_name = ''
          this.update++
        })
      this.modalToggle = false
    },
    deleteCourse(id) {
      this.id = id
      this.deleteToggler = true
    },
    proveDeleteCourse() {
      this.$store
        .dispatch('instructorsPage/initDeleteCourse', this.id)
        .then((res) => this.update++)
      this.id = null
      this.deleteToggler = false
    },
  },

  computed: {
    allMentorCourses() {
      return this.$store.getters['instructorsPage/getMentorCourses']
    },
  },
}
</script>

<style>
.fadeModal-enter-active,
.fadeModal-leave-active {
  transition: opacity 0.3s;
}
.fadeModal-enter,
.fadeModal-leave-to {
  opacity: 0;
}
</style>
