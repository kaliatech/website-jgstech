<template>
  <div>
    <b-jumbotron
      header="jgs-technical"
      lead="Practical application of technology and innovation."
      text-variant="light"
      fluid
      class="bg"
    >
      <p>
        JGS Technical LLC is a small consultancy owned by Josh Sanderson, specializing in the design and implementation
        of computer software and hardware solutions.
      </p>
    </b-jumbotron>
    <!-- <div class="container">
            <b-btn variant="primary" href="#">More Info</b-btn>
          </div> -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- <p class="lead text-center">
            Skills
          </p> -->
          <h4>Expertise</h4>
          <hr />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4 box-shadow">
            <h5 class="card-title">Programming</h5>
            <div class="card-body">
              <!-- <img class="card-img-top" data-src="holder.js/100px50?theme=thumb&bg=2C4256&fg=eceeef&font=sans-serif&text=Programming" alt="Programming"> -->
              <div class="card-text">
                <ul>
                  <li>Web Apps</li>
                  <li>Android Apps</li>
                  <li>Desktop Apps</li>
                  <li>Cloud Architectures</li>
                </ul>
              </div>
              <!-- <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div> -->
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card mb-4 box-shadow">
            <h5 class="card-title">Systems</h5>
            <div class="card-body">
              <div class="card-text">
                <ul>
                  <li>IoT Platforms</li>
                  <li>Embedded Micros</li>
                  <li>Sensors & Motion Control</li>
                  <li>Graphics and Visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card mb-4 box-shadow">
            <h5 class="card-title">Solutions</h5>
            <div class="card-body">
              <div class="card-text">
                <ul>
                  <li>Architecture & Design</li>
                  <li>Prototyping</li>
                  <li>Security Reviews</li>
                  <li>Team Coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <!-- <p class="lead text-center">
            Experience
          </p> -->
          <h4 class="mt-2">
            Experience
            <small class="text-muted">projects, clients, &amp; employers</small>
          </h4>
          <hr />
        </div>
      </div>

      <!-- <div class="row">
        <div v-for='c in companies' class="col-md-4">

          <div class="card mb-4 box-shadow">
            <h5 class="card-title"><a :href="c.url"><img :src="$withBase('/i/' + c.img)" :height="c.imgH" :title="c.title"/></a></h5>
            <div class="card-body">
              <hr/>
              <p>{{c.descr}}
              </p>
            </div>
          </div>
        </div>
      </div> -->

      <div class="row">
        <div v-for="c in companies" :key="c.url" class="col-md-6 col-lg-4">
          <div class="experience-card">
            <div style="height: 40px; display: table-cell; vertical-align: middle">
              <a :href="c.url"><img :src="'/i/' + c.img" :height="c.imgH" :title="c.title" /></a>
            </div>
            <hr />
            <p>
              {{ c.descr }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      companies: [
        {
          title: 'Audible',
          url: 'https://audible.com',
          descr:
            'Technical lead on multiple confidential projects as a member of the Advanced Technology Group. Became an employee when company I cofounded with three colleagues was acquired in 2014.',
          img: 'logo-audible.png',
          imgH: 40,
        },
        {
          title: 'RaceHero.io',
          url: 'https://racehero.io',
          descr:
            'Primary developer of new program for acquiring and aggregating real-time race data from race track timing systems and sending it to RaceHero.io backend.',
          img: 'logo-racehero-inv.svg',
          imgH: 35,
        },
        {
          title: 'KCF Technologies Research',
          url: 'https://www.kcftech.com/research/',
          descr:
            'Development of visualization and GUI control apps for internal research projects, often involving embedded systems brokering wireless sensor data.',
          img: 'logo-kcftech-inv.png',
          imgH: 40,
        },
        {
          title: 'Online registration and event management service for motorsport events powered by MotorsportReg.com',
          url: 'https://motorsportreg.com',
          descr:
            'Creation of complex dynamic financial reports for customers and integration of affiliate ecommerce programs.',
          img: 'logo-msr.png',
          imgH: 31,
        },
        {
          title: 'Smart Diagnostics by KCF',
          url: 'https://www.kcftech.com/smartdiagnostics/',
          descr:
            'Development of browser based 2D visualizations, manipulation of maps for wireless vibration sensor placements, and integration of large scale time-series database.',
          img: 'logo-smartdiagnostics.png',
          imgH: 31,
        },
        {
          title: 'Rooftop Media',
          url:
            'https://uk.reuters.com/article/uk-amazon-com-media-rooftop-exclusive/exclusive-amazon-buys-comedy-service-rooftop-media-to-expand-digital-content-idUKKBN0IG1XY20141027',
          descr:
            'Cofounder, sometimes CTO, and tech lead for what became the largest provider of original comedy based content. Developed all infrastructure and custom systems related to the business. Acquired in 2014 by Audible/Amazon.',
          img: 'logo-rooftop-inv.png',
          imgH: 37,
        },
        {
          title: 'Minitab',
          url: 'https://minitab.com',
          descr:
            'Web development for global CMS driven website, including custom video players and animations for marketing pieces.',
          img: 'logo-minitab.svg',
          imgH: 25,
        },
        {
          title: 'Flight Regression',
          url: 'https://flightregression.com',
          descr: 'Research and experiments showing ways to visualize general aviation accident data.',
          img: 'logo-flightregression.png',
          imgH: 33,
        },
        {
          title: 'Avsafe',
          url: 'https://avsafe.com/',
          descr:
            'Presentations for reconstructing general aviation accidents, often for legal proceedings. Required development of programs to analyze raw RADAR data.',
          img: 'logo-avsafe.png',
          imgH: 37,
        },
        {
          title: 'Docfinity',
          url: 'https://docfinity.com',
          descr:
            'Software architect, and later consultant, for multi-platform enterprise document and image management product.',
          img: 'logo-docfinity-inv.png',
          imgH: 37,
        },
        {
          title: 'Sony Online Entertainment',
          url: 'https://en.wikipedia.org/wiki/Daybreak_Game_Company',
          descr: 'Short duration lead server engineer for a triple-A MMO game title.',
          img: 'logo-sony2.png',
          imgH: 40,
        },
        {
          title: 'IconMedialab ATG',
          url: 'http://www.iconmedialab.se/',
          descr:
            'Team lead in premiere digital media agency during the dot com era, building everything from websites to in-store systems and multimedia displays.',
          img: 'logo-iconmedialab2.svg',
          imgH: 25,
        },
      ],
    }
  },
  head() {
    return {
      title: 'JGS Technical LLC',
    }
  },
  mounted() {
    // Holder.run({
    //   images: document.getElementsByTagName('img')
    // })
  },
}
</script>
<style lang="scss">
@import '~/assets/scss/main.scss';

html {
  background-color: #cdd6e7;
}

div.theme-container {
  background-color: #cdd6e7;
}

div.card-body {
  color: #2c4256;
  padding: 0.25em;
  // background-color: transparent;
}

div.card {
  background-color: rgb(252, 253, 255);
  @include border-radius(0.25rem);
}

.card-text {
  color: #212529;
}

div.experience-card {
  margin-bottom: 2.5rem;
  // background-color: #e1ebff;
  background-color: rgb(252, 253, 255);
  padding: 1rem 1.5rem;
  height: 13rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  @include border-radius(0.25rem);
}

.card-title {
  background-color: #2c4256;
  color: #eceeef;
  padding: 0.5rem;
  text-align: left;
  @include border-radius-top(0.25rem);
}

.jumbotron {
  margin-bottom: 1em;
}
</style>
