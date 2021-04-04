<template>
  <div :key="updateKey" class="coursesField">
    <!-- ////////////////////////////////// -->
    <div
      v-if="deleteTogglerSection"
      @click.self="deleteTogglerSection = !deleteTogglerSection"
      class="courses__modal"
    >
      <form class="courses__form" @submit.prevent="proveDeleteSection">
        <span
          class="form__close"
          @click="deleteTogglerSection = !deleteTogglerSection"
          >&times;</span
        >
        <h1>
          Are you sure to delete this section? Notice that all data of this
          section will be deleted.
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
    <!-- /////////////////////// -->
    <div
      v-if="deleteTogglerLecture"
      @click.self="deleteTogglerLecture = !deleteTogglerLecture"
      class="courses__modal"
    >
      <form class="courses__form" @submit.prevent="proveDeleteLecture">
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

    <!-- ////////////////////////////////// -->
    <div class="coursesField__buttons">
      <button @click="showSection">+</button>
    </div>
    <!-- ////////////////////////////////// -->

    <div v-if="sectionToggler" class="coursesField__section">
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

    <!-- ////////////////////////////////// -->

    <div
      v-for="(item, indexOfSections) in courseCurriculum"
      :key="indexOfSections"
    >
      <div class="coursesField__section">
        <div class="coursesField__data">
          <div>
            <h3>
              Section {{ indexOfSections + 1 }}: {{ item.section.sec_title }}
              <i
                @click="editSectionToggler(indexOfSections)"
                class="fas fa-pencil-alt icon"
              />
              <i
                @click="deleteSection(item.section.id)"
                class="far fa-trash-alt icon"
              />
            </h3>
            <div v-if="courseArr.sectionEditArray[indexOfSections]">
              <form
                class="coursesField__form__edit"
                @submit.prevent="editSection(item.section.id)"
              >
                <div class="coursesField__group mb-3">
                  <input
                    v-model="editSectionName"
                    autocomplete="off"
                    placeholder="Edit the Title"
                    type="text"
                  />
                </div>
                <button class="save" type="submit">Save</button>
                <button
                  @click="editSectionTogglerHide"
                  style="background-color: #aa2b1d"
                  class="save"
                  type="button"
                >
                  Leave
                </button>
              </form>
            </div>
          </div>
          <ul>
            <li
              v-for="(lecture, indexOfLectures) in item.lectures"
              :key="indexOfLectures"
            >
              <div>
                Lecture {{ indexOfLectures + 1 }}: {{ lecture.name }}
                <i class="far fa-file-alt icon" />
                <i
                  @click="editLectureToggler(indexOfSections, indexOfLectures)"
                  class="fas fa-pencil-alt icon"
                />
                <i
                  @click="deleteLecture(lecture.id)"
                  class="far fa-trash-alt icon"
                />
              </div>
              <div
                v-if="
                  courseArr.lectureEditArray[indexOfSections].lectureArr[
                    indexOfLectures
                  ]
                "
              >
                <form
                  class="coursesField__form__edit"
                  @submit.prevent="editLecture(lecture.id)"
                >
                  <div class="coursesField__form">
                    <div class="coursesField__group">
                      <input
                        v-model="editLectureName"
                        autocomplete="off"
                        type="text"
                        placeholder="Change the Title"
                        class="coursesField__input__edit"
                      />
                    </div>
                    <div class="coursesField__group">
                      <input
                        @change="valChangeOfLectures"
                        class="coursesField__file"
                        id="file3"
                        accept=".doc, .pdf, .mp4, .mkv"
                        type="file"
                      />
                      <label for="file3" class="coursesField__input__edit">
                        <span>
                          {{
                            editLectureLabelShow
                              ? lecture.file_name
                              : editLectureLabel
                          }} </span
                        ><span>Upload file</span>
                      </label>
                      <div
                        class="coursesField__progress__edit"
                        :class="{
                          coursesField__progress__edit__show: progressShow2,
                        }"
                      >
                        <a-progress
                          :percent="progressValue2"
                          :show-info="false"
                          :stroke-color="{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                          }"
                          :strokeWidth="43"
                          status="active"
                        />
                      </div>
                    </div>
                  </div>
                  <button class="save" type="submit">Save</button>
                  <button
                    style="background-color: #aa2b1d"
                    @click="hideLectureToggler"
                    class="save"
                  >
                    Leave
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div
          v-if="courseArr.lectureAddArray[indexOfSections]"
          class="coursesField__lecture"
        >
          <form @submit.prevent="addLectureData(item.section.id)">
            <div class="coursesField__form">
              <div class="coursesField__group">
                <label for="lecture">New lecture:</label>
                <input
                  autocomplete="off"
                  type="text"
                  id="lecture"
                  v-model="lectureName"
                  required
                  placeholder="Enter a Title"
                />
              </div>
              <div class="coursesField__group">
                <h3>Lecture content:</h3>
                <input
                  @change="valChangeAddLecture"
                  class="coursesField__file"
                  id="file2"
                  type="file"
                  accept=".doc, .pdf, .mp4, .mkv"
                  required
                />
                <label for="file2">
                  <span>{{ label }}</span
                  ><span>Upload file</span>
                </label>
                <div
                  class="coursesField__progress__add"
                  :class="{ coursesField__progress__add__show: progressShow1 }"
                >
                  <a-progress
                    :percent="progressValue1"
                    :show-info="false"
                    :stroke-color="{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }"
                    :strokeWidth="37"
                    status="active"
                  />
                </div>
              </div>
            </div>
            <button class="save" type="submit">+Add lecture</button>
          </form>
        </div>
        <button @click="showLecture(indexOfSections)" class="lecture">+</button>
        <button
          style="background-color: #aa2b1d"
          @click="hideLecture"
          class="lecture"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courseData: {
      type: Object,
    },
    courseCurriculum: {
      type: Array,
    },
    courseArr: {
      type: Object,
    },
  },
  data() {
    return {
      updateKey: 0,
      sectionToggler: false,
      deleteTogglerLecture: false,
      deleteTogglerSection: false,
      sectionName: '',
      lectureName: '',
      label: 'File/Video',
      file: null,
      fileName: '',
      editSectionName: '',
      editLectureName: '',
      editLectureLabelShow: true,
      editLectureLabel: 'File/Video',
      editLectureFile: null,
      deleteSectionId: null,
      deleteLectureId: null,
      progressShow1: false,
      progressValue1: 0,
      progressShow2: false,
      progressValue2: 0,
    }
  },

  methods: {
    showSection() {
      this.sectionToggler = !this.sectionToggler
    },

    addSectionName() {
      this.$store.dispatch('instructorsCurriculum/addSection', {
        secName: this.sectionName,
        courseId: this.$route.params.id,
      })
      this.sectionName = ''
      this.sectionToggler = false
    },

    editSectionToggler(index) {
      const length = this.courseArr.sectionEditArray.length
      this.courseArr.sectionEditArray.splice(0, length, false)
      this.courseArr.sectionEditArray[index] = !this.courseArr.sectionEditArray[
        index
      ]
      this.editSectionName = ''
      this.updateKey += 1
    },

    editSectionTogglerHide() {
      const length = this.courseArr.sectionEditArray.length
      this.courseArr.sectionEditArray.splice(0, length, false)
      this.updateKey += 1
    },

    editSection(id) {
      const secTitle = this.editSectionName
      if (secTitle !== '') {
        this.$store.dispatch('instructorsCurriculum/editSection', {
          courseId: this.$route.params.id,
          sectionId: id,
          newTitle: secTitle,
        })
      }
    },

    showLecture(index) {
      const length = this.courseArr.lectureAddArray.length
      this.courseArr.lectureAddArray.splice(0, length, false)
      this.courseArr.lectureAddArray[index] = !this.courseArr.lectureAddArray[
        index
      ]
      this.lectureName = ''
      this.label = 'File/Video'
      this.file = ''
      this.updateKey += 1
    },

    hideLecture() {
      const length = this.courseArr.lectureAddArray.length
      this.courseArr.lectureAddArray.splice(0, length, false)
      this.updateKey += 1
    },

    valChangeAddLecture(e) {
      this.label = e.target.files[0].name
      this.file = e.target.files[0]
      this.fileName = e.target.files[0].name
    },

    async addLectureData(id) {
      try {
        const instructorCredentials = this.$store.state.instructorsPage
          .mentorData
        const courseId = this.$route.params.id
        const formData = new FormData()
        formData.append('name', this.lectureName)
        formData.append('file', this.file)
        formData.append('file_name', this.fileName)
        formData.append('sections', [id])
        this.progressShow1 = true
        const resAccess = await this.$axios.post(
          'token/',
          instructorCredentials
        )
        if (resAccess.data.access) {
          const resLecture = this.$axios.post('course/lecture/', formData, {
            headers: { Authorization: `Bearer ${resAccess.data.access}` },
            onUploadProgress: (uploadEvent) => {
              this.progressValue1 = Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              )
            },
          })
          const resCourse = this.$axios.get(`course/${courseId}/`, {
            headers: {
              Authorization: `Bearer ${resAccess.data.access}`,
            },
          })
          await Promise.all([resLecture, resCourse]).then((results) => {
            const [result1, result2] = results
            this.$axios.patch(
              `course/${courseId}/`,
              {
                lectures: [...result2.data.lectures, result1.data.id],
              },
              {
                headers: {
                  Authorization: `Bearer ${resAccess.data.access}`,
                },
              }
            )
          })
        }
        this.$store.dispatch('instructorsCurriculum/initAllSections', courseId)
        this.progressShow1 = false
        this.progressValue1 = 0
        this.updateKey++
      } catch (err) {
        console.log(err)
      }
    },

    editLectureToggler(iS, iL) {
      for (let i = 0; i < this.courseArr.lectureEditArray.length; i++) {
        const length = this.courseArr.lectureEditArray[i].lectureArr.length
        this.courseArr.lectureEditArray[i].lectureArr.splice(0, length, false)
      }
      this.courseArr.lectureEditArray[iS].lectureArr[iL] = !this.courseArr
        .lectureEditArray[iS].lectureArr[iL]
      this.editLectureName = ''
      this.editLectureFile = ''
      this.editLectureLabel = 'File/Video'
      this.editLectureLabelShow = true
      this.updateKey++
    },

    hideLectureToggler() {
      for (let i = 0; i < this.courseArr.lectureEditArray.length; i++) {
        const length = this.courseArr.lectureEditArray[i].lectureArr.length
        this.courseArr.lectureEditArray[i].lectureArr.splice(0, length, false)
      }
      this.updateKey++
    },

    valChangeOfLectures(e) {
      this.editLectureLabelShow = false
      this.editLectureLabel = e.target.files[0].name
      this.editLectureFile = e.target.files[0]
    },

    async editLecture(id) {
      try {
        this.progressShow2 = true
        const instructorCredentials = this.$store.state.instructorsPage
          .mentorData
        const courseId = this.$route.params.id
        const name = this.editLectureName
        const file = this.editLectureFile
        const fileName = this.editLectureLabel
        if (name !== '' || file !== '') {
          const formData = new FormData()
          if (name !== '') {
            formData.append('name', name)
          }
          if (file !== '') {
            formData.append('file', file)
            formData.append('file_name', fileName)
          }
          const resAccess = await this.$axios.post(
            'token/',
            instructorCredentials
          )
          if (resAccess.data.access) {
            const { data } = await this.$axios.patch(
              `course/lecture/${id}/`,
              formData,
              {
                headers: { Authorization: `Bearer ${resAccess.data.access}` },
                onUploadProgress: (uploadEvent) => {
                  this.progressValue2 = Math.round(
                    (uploadEvent.loaded / uploadEvent.total) * 100
                  )
                },
              }
            )
          }
          this.$store.dispatch(
            'instructorsCurriculum/initAllSections',
            courseId
          )
          this.progressShow2 = false
          this.progressValue2 = 0
        }
      } catch (err) {
        console.log(err)
      }
    },

    deleteSection(id) {
      this.deleteTogglerLecture = false
      this.deleteTogglerSection = !this.deleteTogglerSection
      this.deleteSectionId = id
    },

    proveDeleteSection() {
      this.$store.dispatch('instructorsCurriculum/deleteSection', {
        courseId: this.$route.params.id,
        sectionId: this.deleteSectionId,
      })
      this.deleteSectionId = null
      this.deleteTogglerSection = false
    },

    deleteLecture(id) {
      this.deleteTogglerSection = false
      this.deleteTogglerLecture = !this.deleteTogglerLecture
      this.deleteLectureId = id
    },

    proveDeleteLecture() {
      this.$store.dispatch('instructorsCurriculum/deleteLecture', {
        courseId: this.$route.params.id,
        lectureId: this.deleteLectureId,
      })
      this.deleteLectureId = null
      this.deleteTogglerLecture = false
    },
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
