<template>
  <div class="container-fluid payment-container">
    <div class="row">
      <div class="col-md-6 form-container">
        <b-button @click="changeComponent('click')"
          ><img src="~assets/svgs/click.svg" alt="click"
        /></b-button>
        <b-button @click="changeComponent('payme')">
          <img src="~assets/svgs/payme.svg" alt="click" />
        </b-button>
        <div v-if="cards.length" class="available__cards">
          <h1>Your cards:</h1>
          <div
            v-for="(card, i) in cards"
            :key="i"
            class="available__cards__single"
          >
            <img :src="imageChange(card.card_number)" alt="..." />
            <div>
              <p>CARD NUM: {{ card.card_number }}</p>
              <p>EXP: {{ card.expire_date }}</p>
              <p>HOLDER NAME: {{ card.holder_name }}</p>
            </div>
          </div>
        </div>
        <transition name="fade">
          <component
            @callNotifications="allNotifications"
            :is="currentComponent"
            :courseData="courseData"
            class="my-4"
          />
        </transition>
      </div>
      <div class="col-md-6">
        <div class="preview">
          <img class="preview__img" :src="courseData.promo_image" alt="..." />
          <div class="preview__content">
            <h1 class="mb-2">{{ courseData.course_name }}</h1>
            <p class="mb-2">{{ courseData.description }}</p>
            <p>{{ courseData.price }} UZS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import click from '@/components/Payment/click'
import payme from '@/components/Payment/payme'

export default {
  name: 'payment',
  components: {
    click,
    payme,
  },

  data() {
    return {
      currentComponent: click,
      courseData: {},
    }
  },
  created() {
    this.initCourse()
  },
  methods: {
    changeComponent(componentType) {
      this.currentComponent = componentType
    },

    async initCourse() {
      try {
        const { data } = await this.$axios.get(
          `course/${this.$route.params.id}/`,
          {
            headers: { 'Accept-Language': this.$i18n.locale },
          }
        )
        this.courseData = data
      } catch (err) {
        console.log(err)
      }
    },

    imageChange(num) {
      const re = new RegExp('^(8600)', 'i')
      const match = re.test(num)
      return match
        ? require('~/assets/images/uzcard.jpg')
        : require('~/assets/images/humo.png')
    },

    async allNotifications(creditCard) {
      try {
        const userId = this.$auth.user.user.id
        const instructorData = this.$store.state.instructorsPage.mentorData
        const resAccess = await this.$axios.post('token/', instructorData)
        if (resAccess.data.access) {
          const notification = this.$axios
            .post(
              'notif/',
              {
                name: 'buyed course',
                name_uz: this.courseData.course_name_uz,
                name_en: this.courseData.course_name_en,
                name_ru: this.courseData.course_name_ru,
                description: 'buyed course',
                description_uz: this.courseData.description_uz,
                description_en: this.courseData.description_en,
                description_ru: this.courseData.description_ru,
                user: [userId],
                time_created: new Date(),
              },
              {
                headers: { Authorization: `Bearer ${resAccess.data.access}` },
              }
            )
            .catch((err) => console.log(err))
          const purchaseHistory = this.$axios
            .post(
              'card/purchose/',
              {
                title: 'buyed course',
                title_uz: this.courseData.course_name_uz,
                title_en: this.courseData.course_name_en,
                title_ru: this.courseData.course_name_ru,
                description: 'buyed course',
                description_uz: this.courseData.description_uz,
                description_en: this.courseData.description_en,
                description_ru: this.courseData.description_ru,
                card_number: creditCard,
                user: userId,
                price: this.courseData.price,
                time_created: new Date(),
              },
              {
                headers: { Authorization: `Bearer ${resAccess.data.access}` },
              }
            )
            .catch((err) => console.log(err))

          const mylearning = this.$axios
            .post(
              'mylearning/',
              {
                courses: [this.courseData.id],
                user: userId,
              },
              {
                headers: { Authorization: `Bearer ${resAccess.data.access}` },
              }
            )
            .catch((err) => console.log(err))
          await Promise.all([mylearning, notification, purchaseHistory])
          this.$auth.fetchUser()
          this.$store.dispatch('userModule/addNotificationBadges', 1)
        }
      } catch (err) {
        console.log(err)
      }
    },
  },

  computed: {
    cards() {
      return this.$auth.user.user.card_user
    },
  },
}
</script>

<style scoped>
.payment-container {
  min-height: 80vh;
  padding: 4rem 8rem;
  background: #f3f8ff;
}
.is-active {
  background: #4d25bb;
  color: #fff;
}
.payment-title {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 100%;
  color: #333366;
}

.preview {
  display: flex;
  justify-content: space-between;
  border: 1px solid #3059b1;
  border-radius: 10px;
  padding: 1rem;
}

.preview__content {
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.preview__content h1 {
  font-size: 1.4rem;
  font-weight: 600;
}

.preview__img {
  height: 6rem;
  width: 8rem;
  border-radius: 10px;
  align-self: center;
}

.available__cards {
  margin: 2rem 0;
}

.available__cards__single {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.available__cards h1 {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333366;
}

.available__cards__single p {
  font-size: 0.8rem;
  font-weight: 600;
}

.available__cards__single img {
  margin-right: 2rem;
  height: 3rem;
  width: 5rem;
}
</style>
