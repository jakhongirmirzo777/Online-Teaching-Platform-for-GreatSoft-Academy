<template>
  <div class="header__instructor__container">
    <h1>{{ $t('instructors.Title') }}</h1>
    <p>
      {{ $t('instructors.SubTitle') }}
    </p>

    <nuxt-link
      class="header__instructor__link"
      :to="localePath(`/instructor-application`)"
      >{{ $t('instructors.Button') }}</nuxt-link
    >
  </div>
</template>

<script>
export default {}
</script>

<style></style>
