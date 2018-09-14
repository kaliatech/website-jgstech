<template>
  <b-navbar toggleable="md" type="dark" variant="primary">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="/">jgs-technical</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item to="/" exact>Home</b-nav-item>
        <!-- <b-nav-item to="/projects/">Projects</b-nav-item> -->
        <!-- <b-nav-item href="/links/" :active="$page.path.startsWith('/links')">Links</b-nav-item> -->
        <b-nav-item href="/contact/" :active="$page.path.startsWith('/contact')">Contact</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" variant="" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

<!-- <div>
  Navbar
  <ul id="example-1">
    <li v-for="item in routes">
      {{ item.path }}
    </li>
  </ul>
</div> -->
</template>

<script>

export default {
  data () {
    return {
      routes: []
    }
  },

  components: {},

  created () {
    const currentLink = this.$page.path
    this.routes = this.$router.options.routes
  }
}
</script>
<style lang="stylus">
</style>
