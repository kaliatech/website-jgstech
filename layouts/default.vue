<template>
  <div>
    <main-navbar />
    <main>
      <nuxt />
    </main>
    <main-footer />
  </div>
</template>
<script>
import MainNavbar from '~/components/MainNavbar'
import MainFooter from '~/components/MainFooter'

export default {
  components: { MainNavbar, MainFooter },
  head() {
    return {
      title: this.title,
      link: [
        { hid: 'fi-1', rel: 'apple-touch-icon', sizes: '180x180', href: '/i/favicons/apple-touch-icon.png' },
        { hid: 'fi-2', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/i/favicons/favicon-32x32.png' },
        { hid: 'fi-3', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/i/favicons/favicon-16x16.png' },
        { hid: 'fi-4', rel: 'manifest', href: '/i/favicons/site.webmanifest' },
      ],
    }
  },
}
</script>
<style lang="scss">
// @use 'node_modules/bootstrap/scss/mixins' as bootstrap;
// @use 'node_modules/bootstrap/scss/variables';
@use '~/assets/scss/main.scss' as main;

.header-anchor {
  display: none;
}

.bg {
  background-image: url('~assets/i/bg_main_3b.webp');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

//@include main.media-breakpoint-down(xs) {
//  .bg {
//    background-image: url('~assets/i/bg_main_inv.jpg');
//  }
//}
</style>
