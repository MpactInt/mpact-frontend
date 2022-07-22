<template>
  <div class="employee-hero-section">
    <div class="container">
      <section class="live-classe">
        <div class="container">
          <div class="row">
            <div class="col-md-6 content-middle">
              <div class="class-content">
                <h2 class="title">My Learning Plan</h2>
                <!-- <p class="text">Browse our 100% live online classes led by top instructors and coaches. Choose from our
                  upcoming schedule or browse all the classes we offer.</p> -->
              </div>
            </div>
            <!-- <div class="col-md-6">
              <div class="classes-seminar">
                <img src="../../assets/images/class-meeting.jpg" alt="">
              </div>
            </div> -->
          </div>
        </div>
      </section>
      <section class="clases-blogs">
        <div class="container">
          <div class="col-md-12 col-lg-6">
            <div class="row" v-if="learningPlanLength">
              <div class="col-xs-6 col-md-4 col-lg-4 mb-2" v-for="img in learningPlan.data" v-bind:key="img.id">
              <router-link :to="'/employee/my-learning-plan/'+img.id">
                <div class="overlay">
                  <img :src="learningPlanPath + '/' + img.image" />
                  <div class="overlay-content">
                    <h5 class="text-overlay">{{ img.title }}</h5>
                    <p class="overlay-description text-blue">{{ img.description }}</p>
                  </div>
                </div>
                </router-link>
              </div>
            </div>
             <div class="row" v-if="!learningPlanLength">
            No data found
            </div>
            <pagination :data="learningPlan" @pagination-change-page="getLearningPlanList" />
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
    this.getLearningPlanList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
