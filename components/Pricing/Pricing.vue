<template>
  <div class="pricing__container">
    <div class="pricing__box">
      <h1 class="mb-6">{{ $t('plans.Heading') }}</h1>
    </div>
    <div class="container-fluid">
      <div class="row pricing__row">
        <div
          v-for="(card, index) in $t('plans.Cards')"
          :key="index"
          class="col-lg-4"
        >
          <div
            class="pricing__card"
            :class="{ pricing__active__card: index == 1 }"
          >
            <div class="pricing__tarif">
              <i18n tag="h2" :path="card.tarif"></i18n>
            </div>
            <div class="pricing__content">
              <i18n tag="p" :path="card.content"></i18n>
            </div>
            <div class="pricing__price">
              <i18n tag="span" :path="card.sign"></i18n>
              <i18n tag="span" :path="card.mainPrice"></i18n>
              <i18n tag="span" :path="card.duration"></i18n>
              <i18n tag="span" :path="card.subPrice"></i18n>
            </div>
            <div class="pricing__button__box">
              <i18n
                tag="nuxt-link"
                :path="card.button"
                to="/"
                class="pricing__button"
                :class="{ pricing__active__button: index == 1 }"
              ></i18n>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-4"
          v-for="(detail, index) in $t('plans.Details')"
          :key="index"
        >
          <div class="pricing__details__box">
            <i18n tag="h3" :path="detail.title"></i18n>
            <ul class="pricing__details__list">
              <li class="pricing__details__item">
                <i class="fas fa-check check" />
                <i18n :path="detail.content1"></i18n>
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check" />
                <i18n :path="detail.content2"></i18n>
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check" />
                <i18n :path="detail.content3"></i18n>
              </li>
              <li class="pricing__details__item">
                <i class="fas fa-check check" />
                <i18n :path="detail.content4"></i18n>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
}
</script>
