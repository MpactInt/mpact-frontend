<template>
  <div class="employee-hero-section">
    <div class="container">
      <section class="live-classe">
        <div class="container">
          <div class="row">
            <div class="col-md-6 content-middle">
              <div class="class-content">
                <h2 class="title">{{planSingle.title}}</h2>
                <p class="text">{{planSingle.description}}</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="classes-seminar">
                <img :src="planSingle.image" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="clases-blogs">
        <div class="container">
          <div class="card-post" v-if="planFiles.length" v-for="w in planFiles" v-bind:key="w.id">
            <!-- <div class="card-image">
              <div class="course-banner"><img :src="filePath + '/' + w.image"  alt=""></div>
            </div> -->
            <div class="card-content">
              <div class="course-details">
                <h4 class="title">{{ w.title }}</h4>
                <div class="course-description">
                  <p>{{ w.description }}</p>
                </div>
                <div class="read-more">
                  <a class="btn btn-read-more" @click="downloadLearningPlanFile(w.id, w.image)">Download File</a>
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
      note: {},
    }
  },
  methods: {

  },
  created() {
    this.getLearningPlanFiles()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
