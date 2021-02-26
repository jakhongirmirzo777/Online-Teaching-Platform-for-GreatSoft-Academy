<template>
  <div class="process__container">
    <div class="container-fluid process__wrapper">
      <h1>{{ $t('instructors.ApplicationProcess') }}</h1>
      <hr class="process__dotes" />
      <div class="row">
        <div class="col-lg-4">
          <div class="process__box">
            <span>1</span>
            <h3>
              {{ $t('instructors.ApplicationTitle1') }}
            </h3>
            <p>
              {{ $t('instructors.ApplicationContent1') }}
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="process__box">
            <span class="process__span">2</span>
            <h3>
              {{ $t('instructors.ApplicationTitle2') }}
            </h3>
            <p>
              {{ $t('instructors.ApplicationContent2') }}
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="process__box">
            <span>3</span>
            <h3>
              {{ $t('instructors.ApplicationTitle3') }}
            </h3>
            <p>
              {{ $t('instructors.ApplicationContent3') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
