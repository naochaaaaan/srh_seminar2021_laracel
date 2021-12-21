import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTyperPlugin from 'vue-typer'
import smoothScroll from 'vue-smoothscroll'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faCoffee,
    faHandshake,
    faCode,
    faUserCircle,
    faHammer,
    faPen,
    faSchool,
    faSearch,
    faEnvelope,
    faMapMarkerAlt,
    faGlobe,
    faBlog,
    faBirthdayCake,
    faImage,
    faArchive,
    faToolbox,
    faFileCode,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faHtml5, faCss3Alt, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
    faCoffee,
    faHandshake,
    faCode,
    faUserCircle,
    faHammer,
    faPen,
    faSchool,
    faSearch,
    faTwitter,
    faGithub,
    faEnvelope,
    faMapMarkerAlt,
    faGlobe,
    faBlog,
    faBirthdayCake,
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faImage,
    faToolbox,
    faArchive,
    faFileCode,
    faChevronUp,
)
import navbar from './components/navbar.vue'
import { Slide } from 'vue-burger-menu'
import { ScaleDown } from 'vue-burger-menu'
import { ScaleRotate } from 'vue-burger-menu'
import HomeComponent from './components/Home.vue'
import FooterComponent from './components/Footer.vue'
import SendaiComponent from './components/01_sendai.vue'
import NiigataComponent from './components/02_niigata.vue'
import MiyazakiComponent from './components/03_miyazaki.vue'
import NagoyaComponent from './components/04_nagoya.vue'
import SapporoComponent from './components/05_sapporo.vue'
import FukuokaComponent from './components/06_fukuoka.vue'

require('./bootstrap')

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('navbar', navbar)
Vue.component('slide', Slide)
Vue.component('footer-component', FooterComponent)

Vue.component('home-component', HomeComponent)
Vue.component('sendai-component', SendaiComponent)
Vue.component('niigata-component', NiigataComponent)
Vue.component('miyazaki-component', MiyazakiComponent)
Vue.component('nagoya-component', NagoyaComponent)
Vue.component('sapporo-component', SapporoComponent)
Vue.component('fukuoka-component', FukuokaComponent)

Vue.use(VueTyperPlugin)
Vue.use(VueRouter)
Vue.use(smoothScroll)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: HomeComponent },
        { path: '/sendai', name: 'sendai', component: SendaiComponent },
        { path: '/niigata', name: 'niigata', component: NiigataComponent },
        { path: '/miyazaki', name: 'miyazaki', component: MiyazakiComponent },
        { path: '/nagoya', name: 'nagoya', component: NagoyaComponent },
        { path: '/sapporo', name: 'sapporo', component: SapporoComponent },
        { path: '/fukuoka', name: 'fukuoka', component: FukuokaComponent },
    ],
})

const app = new Vue({
    el: '#app',
    navbar,
    FooterComponent,
    router,
    data() {
        return {
            scrollY: 0,
        }
    },
    computed: {
        isShow() {
            return this.scrollY > 200 ? true : false
        },
    },
    mounted() {
        // スクロールを取得
        window.addEventListener('scroll', this.onScroll)
        window.addEventListener('load', () => {
            this.onScroll()
        })
    },

    methods: {
        clickSmoothScroll(x) {
            event.preventDefault()
            this.$SmoothScroll(document.querySelector(x), 800, null, null, 'y')
        },
        // スクロール値の取得
        onScroll() {
            this.scrollY = window.pageYOffset
        },
    },
})
