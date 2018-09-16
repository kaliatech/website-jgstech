<template>
 <div class="theme-container">
  <Navbar/>
  <component class="main-content" :is="layout"/>
  <global-footer/>
 </div>
</template>
<script>
import Vue from 'vue'
import Navbar from './Navbar.vue'
import LayoutHome from './LayoutHome'
import LayoutProject from './LayoutProject'

import 'vue-awesome/icons/brands/github'
import 'vue-awesome/icons/globe'
import 'vue-awesome/icons/brands/linkedin'
import 'vue-awesome/icons/brands/twitter'
import 'vue-awesome/icons/brands/stack-overflow'

export default {
  components: { Navbar, LayoutHome, LayoutProject},
  created () {
      // this.$router.beforeEach((to, from, next) => {
      //   if (!/(\/|\.html)$/.test(to.path)) {
      //     next(Object.assign({}, to, {
      //       path: to.path + '/index.html'
      //     }))
      //   } else {
      //     next()
      //   }
      // })
  },
  computed: {
    layout () {
      const { path } = this.$page
      if (path === '/') {
        return 'LayoutHome'
      }
      else {
        return 'LayoutProject'
      }
    }
  }
}
</script>

<style lang="scss">
  $font-size-base: 0.8rem;

  $theme-colors: (
    "primary": #2c4256
  );

  @import 'node_modules/bootstrap/scss/bootstrap.scss';

  #app {
  }

  .header-anchor {
    display:none;
  }

  .bg {
      background-image: url("/i/bg_main.jpg");
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }

  @include media-breakpoint-down(xs) {
    .bg {
        background-image: url("/i/bg_main_inv.jpg");
    }
  }

</style>
