<template>
  <b-navbar toggleable="md" type="dark" variant="primary">
    <b-container class="mt-0">
      <b-navbar-toggle target="nav_collapse" />

      <b-navbar-brand to="/"> jgs-technical </b-navbar-brand>

      <b-collapse id="nav_collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" exact> Home </b-nav-item>
          <b-nav-item to="/contact/"> Contact </b-nav-item>
          <b-nav-item href="https://www.kaliatech.com/"> Personal Website </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" variant="" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      routes: [],
    }
  },
  created() {
    // const currentLink = this.$page.path
    this.routes = this.$router.options.routes
  },
}
</script>
<style lang="scss"></style>
