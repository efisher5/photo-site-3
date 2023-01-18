import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Add font-awesome icons to library
library.add(faFacebook);
library.add(faLinkedin);
library.add(faInstagram);

const app = createApp(App)
    // Can now use font-awesome-icon as a tag in HTML  
    .component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app')
