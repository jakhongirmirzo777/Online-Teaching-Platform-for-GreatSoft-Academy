<template>
  <div>
    <appNavbar />
    <div class="myLearningSingle">
      <div class="myLearningSingle__wrapper">
        <div class="myLearningSingle__video">
          <video
            v-if="showLecture"
            oncontextmenu="return false"
            controlsList="nodownload"
            class="learningVideo__video"
            controls
            :src="src"
          ></video>
          <div v-else class="learningVideo__file">
            <h1>
              This lecture is a file not a video. <br />
              You can download it by clicking download button.
            </h1>
            <a :href="src" :download="downloadName">Download</a>
          </div>
        </div>
        <div class="myLearningSingle__description">
          <div class="myLearningSingle__description__box">
            <h1>{{ course.course_name }}</h1>
            <div>
              <p>{{ mentor }} kursi</p>
              <span> <strong>21.03.2021</strong> </span>
            </div>
          </div>
          <div class="myLearningSingle__description__box">
            <h1>{{ course.course_name }}</h1>
            <p>{{ course.description }}</p>
          </div>
          <div class="myLearningSingle__description__box">
            <h1>Instruktor</h1>
            <div>
              <img
                v-if="mentorImage"
                :src="mentorImage"
                alt="instructor photo"
              />
              <b-avatar style="margin: 0" v-else size="8rem" />
              <div>
                <h4>{{ mentor }}</h4>
                <p>GreatSoft Academy</p>
              </div>
            </div>
          </div>
        </div>
        <div class="myLearningSingle__list__show">
          <div class="myLearningSingle__list__title">
            <h2>Course content</h2>
            <span> {{ totalLectures }} ta lektsiya </span>
          </div>
          <div
            class="myLearningSingle__list__toggler"
            v-for="(item, i) in courseData"
            :key="i"
          >
            <b-button v-b-toggle="`collapse-${i}`">
              <h3>Section {{ i + 1 }}: {{ item.section.sec_title }}</h3>
              <i
                class="fas fa-chevron-right when-closed myLearningSingle__list__icon"
              />
              <i
                class="fas fa-chevron-down when-open myLearningSingle__list__icon"
              />
            </b-button>
            <b-collapse :id="`collapse-${i}`">
              <b-card>
                <div
                  @click="changeLecture(lecture)"
                  class="myLearningSingle__list__content"
                  :class="{
                    myLearningSingle__list__content__active:
                      $route.query.lecture == lecture.id,
                  }"
                  v-for="(lecture, index) in item.lectures"
                  :key="index"
                >
                  <i v-if="document(lecture.file_name)" class="fas fa-video" />
                  <i v-else class="fas fa-file-alt" /> {{ lecture.name }}
                </div>
              </b-card>
            </b-collapse>
          </div>
        </div>
      </div>
      <div
        :class="{ myLearningSingle__list__scroll: scroll }"
        class="myLearningSingle__list myLearningSingle__list__hide"
      >
        <div class="myLearningSingle__list__title">
          <h2>Course content</h2>
          <span> {{ totalLectures }} ta lektsiya </span>
        </div>
        <div
          class="myLearningSingle__list__toggler"
          v-for="(item, i) in courseData"
          :key="i"
        >
          <b-button v-b-toggle="`collapse-${i}`">
            <h3>Section {{ i + 1 }}: {{ item.section.sec_title }}</h3>
            <i
              class="fas fa-chevron-right when-closed myLearningSingle__list__icon"
            />
            <i
              class="fas fa-chevron-down when-open myLearningSingle__list__icon"
            />
          </b-button>
          <b-collapse :id="`collapse-${i}`">
            <b-card>
              <div
                @click="changeLecture(lecture)"
                class="myLearningSingle__list__content"
                :class="{
                  myLearningSingle__list__content__active:
                    $route.query.lecture == lecture.id,
                }"
                v-for="(lecture, index) in item.lectures"
                :key="index"
              >
                <i v-if="document(lecture.file_name)" class="fas fa-video" />
                <i v-else class="fas fa-file-alt" /> {{ lecture.name }}
              </div>
            </b-card>
          </b-collapse>
        </div>
      </div>
    </div>
    <!-- <appFooter /> -->
  </div>
</template>
<script>
import appNavbar from '~/components/navbar/appNavbar'
// import appFooter from '~/components/footer/appFooter'
export default {
  components: { appNavbar },
  data() {
    return {
      scroll: false,
    }
  },
  async asyncData({ $axios, params, store }) {
    try {
      const userCredentials = store.state.instructorsPage.mentorData
      const resAccess = await $axios
        .post('token/', userCredentials)
        .catch((err) => console.log(err))
      const token = resAccess.data.access

      if (token) {
        const allSections = $axios
          .get('course/section/', {
            headers: {
              'Accept-Language': store.$i18n.locale,
              Authorization: `Bearer ${token}`,
            },
          })
          .catch((err) => console.log(err))
        const allLectures = $axios
          .get('course/lecture/', {
            headers: {
              'Accept-Language': store.$i18n.locale,
              Authorization: `Bearer ${token}`,
            },
          })
          .catch((err) => console.log(err))
        const singleCourse = $axios
          .get(`course/${params.id}/`, {
            headers: { 'Accept-Language': store.$i18n.locale },
            Authorization: `Bearer ${token}`,
          })
          .catch((err) => console.log(err))
        const [result1, result2, result3] = await Promise.all([
          allSections,
          allLectures,
          singleCourse,
        ])
        const sections = result1.data
        const lectures = result2.data
        const course = result3.data

        if (sections && lectures && course) {
          const filteredSections = []
          const filteredLectures = []
          for (let i = 0; i < course.sections.length; i++) {
            const data = sections.filter(
              (item) => item.id == course.sections[i]
            )
            filteredSections.push(data[0])
          }
          for (let i = 0; i < course.lectures.length; i++) {
            const data = lectures.filter(
              (item) => item.id == course.lectures[i]
            )
            filteredLectures.push(data[0])
          }
          const courseData = []
          for (let i = 0; i < filteredSections.length; i++) {
            const data = filteredLectures.filter(
              (item) => item.sections[0] == filteredSections[i].id
            )
            const finalData = {
              section: filteredSections[i],
              lectures: data.sort((a, b) => a.id - b.id),
            }
            courseData.push(finalData)
          }
          const sortedCourseData = courseData.sort(
            (a, b) => a.section.id - b.section.id
          )
          let totalLectures = []
          for (let i = 0; i < sortedCourseData.length; i++) {
            totalLectures.push(sortedCourseData[i].lectures.length)
          }

          return {
            courseData: sortedCourseData,
            course: course,
            src: sortedCourseData[0].lectures[0].file,
            showLecture: /(.mp4|.mkv)$/.test(
              sortedCourseData[0].lectures[0].file_name
            ),
            downloadName: sortedCourseData[0].lectures[0].file_name,
            query: sortedCourseData[0].lectures[0].id,
            totalLectures: totalLectures.reduce((acc, cur) => acc + cur),
          }
        } else {
          return {
            courseData: [],
            course: [],
            src: '',
            showLecture: false,
            downloadName: '',
            query: '',
            totalLectures: null,
          }
        }
      }
    } catch (err) {
      console.log(err)
    }
  },

  created() {
    this.$router.push({
      path: this.$route.path,
      query: { lecture: this.query },
    })
  },

  methods: {
    scrollListener(e) {
      this.scroll = window.scrollY > 50 ? true : false
    },

    document(type) {
      return /(.mp4|.mkv)$/.test(type)
    },

    changeLecture(lecture) {
      this.showLecture = /(.mp4|.mkv)$/.test(lecture.file_name)
      this.downloadName = lecture.name
      this.src = lecture.file
      this.$router.push({
        path: this.$route.path,
        query: { lecture: lecture.id },
      })
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  computed: {
    mentor() {
      console.log(this.$store.getters['mentorModule/getMentors'])
      return this.$store.getters['mentorModule/getMentors']
        .filter((mentorId) => this.course.mentors[0] == mentorId.id)[0]
        .user.split(' ')
        .slice(0, 2)
        .join(' ')
    },
    mentorImage() {
      return this.$store.getters['mentorModule/getMentors'].filter(
        (mentorId) => this.course.mentors[0] == mentorId.id
      )[0].image
    },
  },
}
</script>

<style></style>
