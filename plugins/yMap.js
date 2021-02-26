import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: '9d62b7d1-e0e9-49a4-bf39-47c77e54535e',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
}

Vue.use(YmapPlugin, settings)
