<template>
  <div class="instructors__content">
    <h2>{{ $t('instructors.ResponsibilitiesList') }}</h2>
    <ul>
      <li
        v-for="(li, index) in $t('instructors.ResponsibilitiesItems')"
        :key="index"
      >
        <i18n :path="li" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
