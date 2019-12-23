import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa4'
  },
  theme: {
    themes: {
      light: {
        primary: '#07A766',
        secondary: '#efefef'
      }
    }
  }
})
