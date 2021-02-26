<template>
  <div class="container-fluid section-3">
    <h1 class="header-title mb-10">
      {{ $t('section3.Header') }}
    </h1>
    <div class="row py-4" data-aos="fade-down" data-aos-delay="100">
      <div class="col-md-2 flex justify-center items-center">
        <div class="circle">
          <div class="inner-set">1</div>
        </div>
      </div>
      <div class="col-md-4 my-6 flex justify-center items-center">
        <img class="image" src="~assets/images/iMac1.png" alt="..." />
      </div>
      <div class="col-md-6 px-5">
        <h1 class="text-h1 text-left mb-2">{{ $t('section3.Title1') }}</h1>
        <p class="text-paragraph">
          {{ $t('section3.Content1') }}
        </p>
      </div>
    </div>
    <div class="row py-4" data-aos="fade-down" data-aos-delay="200">
      <div class="col-md-2 flex justify-center items-center">
        <div class="circle">
          <div class="inner-set">2</div>
        </div>
      </div>
      <div class="col-md-4 my-6 flex justify-center items-center">
        <img class="image" src="~assets/images/iMac2.png" alt="..." />
      </div>
      <div class="col-md-6 px-5">
        <h1 class="text-h1 text-left mb-2">{{ $t('section3.Title2') }}</h1>
        <p class="text-paragraph">
          {{ $t('section3.Content2') }}
        </p>
      </div>
    </div>
    <div class="row py-4" data-aos="fade-down" data-aos-delay="300">
      <div class="col-md-2 flex justify-center items-center">
        <div class="circle">
          <div class="inner-set">3</div>
        </div>
      </div>
      <div class="col-md-4 my-6 flex justify-center items-center">
        <img class="image" src="~assets/images/iMac1.png" alt="..." />
      </div>
      <div class="col-md-6 px-5">
        <h1 class="text-h1 text-left mb-2">{{ $t('section3.Title3') }}</h1>
        <p class="text-paragraph">
          {{ $t('section3.Content3') }}
        </p>
      </div>
    </div>
    <div class="row py-4" data-aos="fade-down" data-aos-delay="400">
      <div class="col-md-2 flex justify-center items-center">
        <div class="circle">
          <div class="inner-set">4</div>
        </div>
      </div>
      <div class="col-md-4 my-6 flex justify-center items-center">
        <img class="image" src="~assets/images/iMac2.png" alt="..." />
      </div>
      <div class="col-md-6 px-5">
        <h1 class="text-h1 text-left mb-2">{{ $t('section3.Title4') }}</h1>
        <p class="text-paragraph">
          {{ $t('section3.Content4') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section3',
  data() {
    return {}
  },
}
</script>
