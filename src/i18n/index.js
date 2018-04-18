import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'HELLO WORLD'
    }
  },
  fr: {
    message: {
      hello: 'BONJOUR MONDE'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

export default i18n
