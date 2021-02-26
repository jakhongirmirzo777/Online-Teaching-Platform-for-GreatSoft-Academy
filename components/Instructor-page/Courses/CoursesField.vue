<template>
  <div class="coursesField">
    <div class="coursesField__buttons">
      <button @click="showSection">+</button>
    </div>
    <div v-for="(item, i) in 5" :key="i">
      <div v-if="sectionToggler" class="coursesField__section">
        <div v-if="sectionNameToggler">
          <div class="coursesField__data">
            <div>
              <h3>
                Section 1: {{ sectionName }}
                <i @click="editSection" class="fas fa-pencil-alt icon" />
                <i @click="deleteSection" class="far fa-trash-alt icon" />
              </h3>
              <div v-if="editSectionToggler">
                <form class="coursesField__form__edit" @submit.prevent="dsds">
                  <div class="coursesField__group mb-3">
                    <input
                      autocomplete="off"
                      placeholder="Edit the Title"
                      type="text"
                    />
                  </div>
                  <button class="save" type="submit">Save</button>
                </form>
              </div>
              <div
                v-if="deleteTogglerSection"
                @click.self="deleteTogglerSection = !deleteTogglerSection"
                class="courses__modal"
              >
                <form class="courses__form" @submit.prevent="proveDeleteCourse">
                  <span
                    class="form__close"
                    @click="deleteTogglerSection = !deleteTogglerSection"
                    >&times;</span
                  >
                  <h1>
                    Are you sure to delete this section? Notice that all data of
                    this section will be deleted.
                  </h1>
                  <button class="approve" type="submit">Yes</button>
                  <button
                    class="disapprove"
                    @click="deleteTogglerSection = !deleteTogglerSection"
                  >
                    No
                  </button>
                </form>
              </div>
            </div>
            <ul v-if="lectureNameToggler">
              <!-- lecture should be lopped here -->
              <li>
                <div>
                  Lecture 1: {{ lectureName }}
                  <i @click="editLecture" class="fas fa-pencil-alt icon" />
                  <i @click="deleteLecture" class="far fa-trash-alt icon" />
                </div>
                <div v-if="editLectureToggler">
                  <form
                    class="coursesField__form__edit"
                    @submit.prevent="editLecture"
                  >
                    <div class="coursesField__form">
                      <div class="coursesField__group">
                        <input
                          autocomplete="off"
                          type="text"
                          placeholder="Change the Title"
                          class="coursesField__input__edit"
                        />
                      </div>
                      <div class="coursesField__group">
                        <input
                          @change="sd"
                          class="coursesField__file"
                          id="file3"
                          type="file"
                        />
                        <label for="file3" class="coursesField__input__edit">
                          <span>smth</span><span>Upload file</span>
                        </label>
                      </div>
                    </div>
                    <button class="save" type="submit">Save</button>
                  </form>
                </div>
                <div
                  v-if="deleteTogglerLecture"
                  @click.self="deleteTogglerLecture = !deleteTogglerLecture"
                  class="courses__modal"
                >
                  <form
                    class="courses__form"
                    @submit.prevent="proveDeleteCourse"
                  >
                    <span
                      class="form__close"
                      @click="deleteTogglerLecture = !deleteTogglerLecture"
                      >&times;</span
                    >
                    <h1>Are you sure to delete this lecture?</h1>
                    <button class="approve" type="submit">Yes</button>
                    <button
                      class="disapprove"
                      @click="deleteTogglerLecture = !deleteTogglerLecture"
                    >
                      No
                    </button>
                  </form>
                </div>
              </li>
            </ul>
          </div>
          <div v-if="lectureToggler" class="coursesField__lecture">
            <form @submit.prevent="addLectureData">
              <div class="coursesField__form">
                <div class="coursesField__group">
                  <label for="lecture">New lecture:</label>
                  <input
                    autocomplete="off"
                    type="text"
                    id="lecture"
                    v-model="lectureName"
                    placeholder="Enter a Title"
                  />
                </div>
                <div class="coursesField__group">
                  <h3>Lecture content:</h3>
                  <input
                    @change="valChange"
                    class="coursesField__file"
                    id="file2"
                    type="file"
                  />
                  <label for="file2">
                    <span>{{ label }}</span
                    ><span>Upload file</span>
                  </label>
                </div>
              </div>
              <button class="save" type="submit">+Add lecture</button>
            </form>
          </div>
          <button @click="showLecture" class="lecture">+</button>
        </div>
        <div v-if="!sectionNameToggler">
          <form @submit.prevent="addSectionName">
            <div class="coursesField__group mb-3">
              <label for="title">New section</label>
              <input
                autocomplete="off"
                required
                id="title"
                v-model="sectionName"
                placeholder="Enter a Title"
                type="text"
              />
            </div>
            <button class="save" type="submit">+Add section</button>
          </form>
        </div>
      </div>
    </div>
    <h1>{{ courseData }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    courseData: {
      type: Object,
    },
  },
  data() {
    return {
      sectionToggler: false,
      lectureToggler: false,
      sectionNameToggler: false,
      lectureNameToggler: false,
      editLectureToggler: false,
      editSectionToggler: false,
      deleteTogglerLecture: false,
      deleteTogglerSection: false,
      label: 'Video / File',
      sectionName: '',
      lectureName: '',
    }
  },

  created() {},

  methods: {
    valChange(e) {
      this.label = e.target.files[0].name
    },

    showSection() {
      this.sectionToggler = true
    },

    showLecture() {
      this.lectureToggler = true
    },

    addSectionName() {
      this.sectionNameToggler = true
    },

    addLectureData() {
      this.lectureToggler = false
      this.lectureNameToggler = true
    },

    editLecture() {
      this.editLectureToggler = !this.editLectureToggler
    },

    editSection() {
      this.editSectionToggler = !this.editSectionToggler
    },

    deleteLecture() {
      this.deleteTogglerSection = false
      this.deleteTogglerLecture = !this.deleteTogglerLecture
    },

    deleteSection() {
      this.deleteTogglerLecture = false
      this.deleteTogglerSection = !this.deleteTogglerSection
    },
  },

  computed: {
    courseDe,
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.approve {
  background-color: #e12e2e !important;
}
.disapprove {
  background-color: #35953d !important;
}
</style>
