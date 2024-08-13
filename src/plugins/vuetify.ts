
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify)

// const opts = {
  
// }

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.shades.white, 
        secondary: colors.red.lighten4, 
        accent: colors.indigo.base, 
      },
    },
  },
})