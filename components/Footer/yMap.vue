<template>
  <div class="map-yandex">
    <div class="footer-map">
      <client-only>
        <yandex-map :coords="[41.339118, 69.335715]" zoom="19.17">
          <ymap-marker
            markerId="1"
            marker-type="placemark"
            :coords="[41.339118, 69.335715]"
            hint-content="GreatSoft Software Development Company"
            :balloon="{ header: 'GreatSoft' }"
            cluster-name="1"
          ></ymap-marker>
        </yandex-map>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
