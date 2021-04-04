<template>
  <div>
    <div class="w-full top-header flex flex-column items-center justify-center">
      <h1 class="content-h1">Payment methods</h1>
      <p class="content-p">Update your credit card information</p>
    </div>
    <div class="container-fluid">
      <!-- <div class="row row-1">
        <div class="col-md-8 offset-md-2 flex justify-center items-center py-5">
          <b-form-group
            class="checkbox-form"
            label="Payment settings:"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              class="checkbox"
              id="checkbox-group-1"
              v-model="selected"
              :options="options"
              :aria-describedby="ariaDescribedby"
              name="flavour-1"
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
      </div> -->
      <!-- <div class="row row-2">
        <div class="col-md-12 grid">
          <b-button
            class="btn-submit mt-4 mb-4 justify-self-center"
            type="submit"
            >Enter a new card</b-button
          >
        </div>
        <hr />
      </div> -->
      <div class="row row-3">
        <div class="col-md-12">
          <b-list-group v-if="cards.length" class="list-group mt-4">
            <b-list-group-item
              class="list-group-item align-items-center flex px-0"
              variant="transparent"
              v-for="(card, i) in cards"
              :key="i"
            >
              <img
                :src="imageChange(card.card_number)"
                alt="..."
                style="width: 50px"
                class="col-span-1 flex-shrink-0"
              />
              <div class="flex-grow px-4">
                <p>
                  CARD NUM: {{ card.card_number | adjustCardNum }} | EXP:
                  {{ card.expire_date }}
                </p>
                <p>HOLDER NAME: {{ card.holder_name }}</p>
              </div>
              <b-button
                @click="deleteCard(card.id)"
                v-b-modal.delete
                variant="outline-dark"
                >Delete</b-button
              >
            </b-list-group-item>
            <b-modal
              title="Pay attention:"
              class="deleteModal"
              @ok="handleDelete"
              id="delete"
            >
              <h1 style="font-size: 1.4rem; font-weight: 500">
                Are you sure to delete this card?
              </h1>
            </b-modal>
          </b-list-group>
          <div v-else>
            <h1 class="courses__container__h1 mx-2 mt-4 mb-2">
              You don't have any cards yet!
            </h1>
          </div>

          <div>
            <b-button v-b-modal.card class="btn-submit my-3" type="button"
              >Enter a new card</b-button
            >
            <b-modal
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
              id="card"
              title="Add a new card:"
            >
              <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group class="mb-3">
                  <label for="name">Holder name:</label>
                  <b-form-input
                    type="text"
                    id="name"
                    required
                    v-model="name"
                    :state="nameSate"
                    aria-describedby="name-help name-feedback"
                    placeholder="Enter your name number"
                  ></b-form-input>
                  <b-form-invalid-feedback id="name-feedback">
                    Holder name of card should be written
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="mb-3">
                  <label for="card">Card number:</label>
                  <b-form-input
                    v-mask="'#### #### #### ####'"
                    type="text"
                    id="card"
                    required
                    v-model="card"
                    :state="cardSate"
                    aria-describedby="card-help card-feedback"
                    placeholder="Enter your card number"
                  ></b-form-input>
                  <b-form-invalid-feedback id="card-feedback">
                    Make sure you have entered valid card numbers
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group>
                  <label for="exp">Expire date:</label>
                  <b-form-input
                    v-mask="'##/##'"
                    type="text"
                    id="exp"
                    v-model="expire"
                    required
                    :state="expSate"
                    aria-describedby="exp-help exp-feedback"
                    placeholder="Enter your expire date"
                  ></b-form-input>
                  <b-form-invalid-feedback id="exp-feedback">
                    Expire date should have 4 characters at least. Make sure you
                    entered valid characters
                  </b-form-invalid-feedback>
                </b-form-group>
              </form>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: '',
      name: '',
      expire: '',
      cardSate: null,
      nameSate: null,
      expSate: null,
    }
  },

  computed: {
    cards() {
      return this.$auth.user.user.card_user
    },
  },
  filters: {
    adjustCardNum(num) {
      return num.match(/.{1,4}/g).join(' ')
    },
  },

  methods: {
    imageChange(num) {
      const re = new RegExp('^(8600)', 'i')
      const match = re.test(num)
      return match
        ? require('~/assets/images/uzcard.jpg')
        : require('~/assets/images/humo.png')
    },
    checkFormValidity() {
      const re = new RegExp('^(8600|9860)', 'i')
      const newCard = this.card.slice(0)
      const newExpire = this.expire.slice(0)
      this.cardSate =
        newCard.replace(/ /g, '').length == 16 && re.test(newCard)
          ? true
          : false
      this.nameSate = this.name.length > 2 ? true : false
      this.expSate = newExpire.replace(/ /g, '').length == 5 ? true : false
      if (this.cardSate && this.nameSate && this.expSate) {
        return true
      } else {
        return false
      }
    },
    resetModal() {
      this.card = ''
      this.expire = ''
      this.name = ''
      this.cardSate = null
      this.nameSate = null
      this.expSate = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    async handleSubmit() {
      try {
        if (!this.checkFormValidity()) {
          return
        }
        const userId = this.$auth.user.user.id
        const instructorData = this.$store.state.instructorsPage.mentorData
        const resAccess = await this.$axios.post('token/', instructorData)
        if (resAccess.data.access) {
          await this.$axios.post(
            'card/card/',
            {
              card_number: this.card.replace(/ /g, ''),
              holder_name: this.name,
              expire_date: this.expire.replace(/ /g, ''),
              user: userId,
            },
            {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
            }
          )
          this.$auth.fetchUser()
        }
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('card')
        })
      } catch (err) {
        console.log(err)
      }
    },
    async handleDelete() {
      try {
        const cardId = this.$route.query.cardId
        const instructorData = this.$store.state.instructorsPage.mentorData
        const resAccess = await this.$axios.post('token/', instructorData)
        if (resAccess.data.access) {
          await this.$axios.delete(`card/card/${cardId}/`, {
            headers: { Authorization: `Bearer ${resAccess.data.access}` },
          })
          this.$auth.fetchUser()
        }
      } catch (err) {
        console.log(err)
      }
    },

    deleteCard(id) {
      this.$router.push({
        path: this.$route.path,
        query: { cardId: id },
      })
    },
  },
}
</script>

<style scoped>
.checkbox {
  width: 100%;
  border: 1px solid #333366;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  color: #333366;
}
.checkbox-form {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #333366;
  width: 100%;
}
.row-1 {
  border-bottom: 1px solid rgba(51, 51, 102, 0.5);
}
.row-2 {
  border-bottom: 1px solid rgba(51, 51, 102, 0.5);
}
.btn-submit {
  background: #5d30db;
  border-radius: 4px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
}
.list-group-item {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(51, 51, 102, 0.25);
  border-radius: 0px;
}
.top-header {
  border-bottom: 1px solid rgba(51, 51, 102, 0.5);
  min-height: 7rem;
}
.top-header .content-h1 {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  color: #333366;
}
.top-header .content-p {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #333366;
}
</style>
