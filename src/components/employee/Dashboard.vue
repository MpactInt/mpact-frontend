<template>
  <div>
    <div class="employee-hero-section">
      <div class="container">
        <div class="row content-center" v-if="section1.id">
          <div class="col-md-7">
            <div class="left-side">
              <h1 class="text-blue bold">
                <!-- Welcome to <span class="primary-text"> Your Persnalized
                  <br>Learning Journey</span> -->
                {{ section1.title }}
              </h1>
              <p class="p-text text-blue f-18">{{ section1.description }}</p>
            </div>
          </div>
          <div class="col-md-5">
            <div class="right-side">
              <div class="img-container">
                <img :src="section1.image" class="hero-img" />
                <!-- <img src="../../assets/images/hero.png" class="hero-img" alt=""> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero end -->

    <div class="learning-sention">
      <div class="container">
        <div class="row" v-if="section2.id">
          <div class="col-md-6">
            <h2 class="text-blue bold ">{{ section2.title }}</h2>
            <p class="p-text text-blue f-18">{{ section2.description }}</p>
          </div>
          <div class="col-md-6">
            <h2 class="text-blue bold mb-0">Popup Survey</h2>
            <CustomSurvey v-if="pg.length" :surveyProp="pg" :submitPopupSurvey="submitPopupSurvey"></CustomSurvey>
            <BarChart v-else :chartData="res" :question="chartData.question"></BarChart>
          </div>
        </div>
        <div class="row" v-if="section3.id">
          <div class="col-md-12 col-lg-6">
            <h2 class="text-blue bold text-big">
              <!-- Nec faucibus placerat <br>habitant vulputate <br>tortor <span class="primary-text">mauris</span>. -->
              {{ section3.title }}
            </h2>
            <p class="text-blue f-18">{{ section3.description }}</p>
            <div>
              <router-link to="/employee/my-learning-plan" class="continue-btn btn">See More</router-link>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="row">
              <div class="col-xs-6 col-md-4 col-lg-4 mb-2" v-for="img in learningPlan" v-bind:key="img.id">
                <router-link :to="'/employee/my-learning-plan/' + img.id">
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
          </div>
        </div>
      </div>
    </div>
    <!-- learnar-section- end -->

    <div class="event-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <h2 class="event-title text-blue bold">Upcoming <span class="primary-text">Workshops</span>.</h2>
            <div v-if="workshopsListDashboard.length" class="event-details" v-for="wl in workshopsListDashboard"
              v-bind:key="wl.id">
              <div class="event-date">
                <span class="text-blue">{{ wl.date | timeStampToDate }}</span>
                <!-- <sup class="text-gray">May</sup> -->
              </div>
              <div class="event-name text-light-blue "><span>{{ wl.title }}</span></div>
              <div class="event-action">
                <button v-if="!wl.registered" class="nav-link btn custom-btn" @click="registerForWorkshop(wl.id)">
                  <div class="gradient-btn">Register Now</div>
                </button>
                <button v-if="wl.registered" class="nav-link btn custom-btn">
                  <div class="gradient-btn">Registered</div>
                </button>
              </div>
            </div>
            <div v-if="!workshopsListDashboard.length">
              No data found
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="pd-left">
              <h2 class="text-blue bold mb-3"><span class="primary-text rotated">"</span>Steps to Help<span
                  class="primary-text rotated">"</span></h2>
              <div class="" v-if="todoList.length">
                <ul class="to-do-list">
                  <li v-for="todo in todoList" v-bind:key="todo.id">
                    <h5 class="text-blue">{{ todo.title }}</h5>
                    <p class="text-blue">{{ todo.description }}</p>
                  </li>
                </ul>
              </div>
              <div v-if="!todoList.length">
                No data found
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end event section -->
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
import CustomSurvey from './CustomSurvey.vue'
import BarChart from '../common/BarChart.vue'

export default {
  name: "Dashboard",
  mixins: [AppMixin],
  components: { CustomSurvey, BarChart },
  data() {
    return {
      pg: [],
      learningPlan: [],
      learningPlanPath: '',
      chartData: [],
      chartDataPer: [],
      res: []
    }
  },
  methods: {
    registerForWorkshop: function (id) {
      let that = this
      Api.registerForWorkshop(id).then(response => {
        this.$swal({
          icon: "success",
          title: "Success",
          text: "You have successfully registered for workshop",
          showConfirmButton: true
        });
        this.getWorkshopsListDashboard()
      })
    },
    getSurveyQuestionsDashboard: function () {
      let that = this;
      Api.getSurveyQuestionsDashboard().then(response => {
        this.pg = response.data.res;
        that.getChartData()
      });
    },
    submitPopupSurvey: function (survey) {
      let that = this;
      let data = JSON.stringify(survey.data, null, 3)
      this.surveyRes = JSON.parse(data)
      Api.submitPopupSurvey(this.surveyRes).then(response => {
        that.getSurveyQuestionsDashboard();

      });
    },
    getLearningPlanListDashboard: function () {
      let that = this
      Api.getLearningPlanListDashboard().then(response => {
        that.learningPlan = response.data.res
        that.learningPlanPath = response.data.path
      }).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
        });
      });
    },
    getChartData: function () {
      let that = this
      Api.getChartData().then(response => {
        that.chartData = response.data.res
        that.chartDataPer = response.data.per
        while (that.res.length > 0) {
          that.res.pop();
        }
        that.res.push([this.chartData.option_1, this.chartDataPer.per1], [this.chartData.option_2, this.chartDataPer.per2],
          [this.chartData.option_3, this.chartDataPer.per3], [this.chartData.option_4, this.chartDataPer.per4])
      }).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
        });
      });
    }
  },
  created() {
    this.getTodoListDashboard();
    this.getRequestedWorkshopListDashboard();
    this.getSection1(this.company.profile_type_id);
    this.getSection2(this.company.profile_type_id);
    this.getSection3(this.company.profile_type_id);
    this.getSurveyQuestionsDashboard();
    this.getWorkshopsListDashboard()
    this.getLearningPlanListDashboard()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.sd-page {
  padding: 0 !important;
}

.sd-root-modern {
  background: transparent !important;
}
</style>

