import { createApp } from 'vue'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedinIn, faGithub, faCodepen, faBehance } from '@fortawesome/free-brands-svg-icons'
 
library.add(faLinkedinIn, faGithub, faCodepen, faBehance)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');