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
  components: {MainNavbar, MainFooter},
  head () {
    return {
      title: this.title,
      link: [
        { hid: 'fi-1', rel: 'apple-touch-icon', href:'/i/favicons/apple-icon-180x180.png'},
        { hid: 'fi-2', rel: 'icon', href:'/i/favicons/android-icon-192x192.png'},
        { hid: 'fi-3', rel: 'icon', href:'/i/favicons/favicon-96x96.png'}
      ]
    }
  }
}
</script>
<style lang="scss">
  @import '~/assets/scss/main.scss';

  .header-anchor {
    display: none;
  }

  .bg {
    background-image: url("~assets/i/bg_main.jpg");
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @include media-breakpoint-down(xs) {
    .bg {
      background-image: url("~assets/i/bg_main_inv.jpg");
    }
  }
</style>
