<template>
  <div class="container mt-3">
    <p class="lead">
      Social Links
    </p>

    <div class="row">
      <div class="col-12">
        <div class="social-btns-cont">
          <a
            class="btn btn-primary"
            href="https://www.linkedin.com/in/jgsanderson/">
            <span class="icon">
              <fa :icon="['fab', 'linkedin']"/>
            </span>
            LinkedIn Profile</a>
          <a
            class="btn btn-primary"
            href="https://stackoverflow.com/users/123378/kaliatech">
            <span class="icon">
              <fa :icon="['fab', 'stack-overflow']"/>
            </span>
            StackOverflow Profile</a>
          <a
            class="btn btn-primary"
            href="https://github.com/kaliatech">
            <span class="icon">
              <fa :icon="['fab', 'github']"/>
            </span>
            GitHub Profile</a>
          <a
            class="btn btn-primary"
            href="https://www.kaliatech.com">
            <span class="icon">
              <fa :icon="['fas', 'globe']"/>
            </span>
            Personal Website</a>
        </div>
      </div>
    </div>

    <p class="lead mt-3">
      Contact Info
    </p>

    <p>
      I often work out of my home office in Raleigh, NC, traveling as needed.
    </p>

    <div class="row">
      <div class="col-12">
        email <a href="mailto:info@jgstechnical.com" title="Email Josh">info@jgstechnical.com</a> <br>
        phone +1 814.359.9317 USA <br>
      </div>
    </div>

    <div class="row">
      <div class="col-12">

        <div class="map-responsive">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1TEsi5IaoFPmjnznqwtNBm1w95vwimlqv"
            width="640"
            height="480"
            frameborder="0"
            style="border:0"
            allowfullscreen/>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'Contact | JGS Technical LLC'
    }
  }
}
</script>
<style lang="scss">
  a svg {
    margin-right: 0.5rem;
  }

  .map-responsive {
    overflow: hidden;
    padding-bottom: 480px;
    position: relative;
    height: 0;
    margin: 2rem 0;
  }

  .map-responsive iframe {
    left: 0;
    top: 0;
    width: 100%;
    position: absolute;
  }

  .social-btns-cont a.btn {
    width: 11rem;
    text-align: left;
    margin: 0 0.5rem 0.5rem 0;

  }
</style>
