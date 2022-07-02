<template>
  <div class="employee-hero-section">
    <div class="container">
      <section class="live-classe">
        <div class="container">
          <div class="row">
            <div class="col-md-6 content-middle">
              <div class="class-content">
                <h2 class="title">My Learning Plan</h2>
                <p class="text">Browse our 100% live online classes led by top instructors and coaches. Choose from our
                  upcoming schedule or browse all the classes we offer.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="classes-seminar">
                <img src="../../assets/images/class-meeting.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="clases-blogs">
        <div class="container">
          <div class="row row-mb" v-for="img in section3.image" v-bind:key="img.id">
            <div class="col-md-12">
              <div class="course-details">
                <h4 class="title">{{ img.image | removeTimestampFromFileName }}</h4>
                <div class="read-more">
                  <a @click="downloadLearningTools(img.id, img.image)" class="btn btn-read-more">Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
export default {
  name: 'WelcomeNote',
  mixins: [AppMixin],
  data() {
    return {
      note: {}
    }
  },
  methods: {

  },
  created() {
    this.getSection3(this.company.profile_type_id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
