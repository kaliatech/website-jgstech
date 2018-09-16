import BootstrapVue from 'bootstrap-vue'

import Icon from 'vue-awesome/components/Icon';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(BootstrapVue)
  Vue.component('v-icon', Icon)
  //router.addRoutes([{ path: '/projects' , redirect: '/projects/'}])

}
