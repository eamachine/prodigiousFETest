import 'chart.js'
import 'hchs-vue-charts'

import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import { Tabs, Tab } from 'vue-tabs-component'

Vue.use(VueI18n);
Vue.use(window.VueCharts);

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

const i18n = new VueI18n({
  locale: 'en'
});

new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})
