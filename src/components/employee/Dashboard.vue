<template>
  <div>
    <div class="employee-hero-section">
      <div class="container">
        <div class="row content-center">
          <CustomSurvey v-if="pg.length" :surveyProp="pg" :submitPopupSurvey="submitPopupSurvey"></CustomSurvey>
        </div>
        <div class="row content-center">
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
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-blue bold ">{{ section2.title }}</h2>
            <p class="p-text text-blue f-18">{{ section2.description }}</p>
          </div>
        </div>
        <div class="row">
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
              <div class="col-xs-6 col-md-4 col-lg-4 mb-2" v-for="img in section3.image" v-bind:key="img.id">
                <div class="overlay">
                  <img :src="section3.path + '/' + img.image" />
                  <div class="overlay-content">
                    <h5 class="text-overlay">Morbi gravida turpis <br>fames nama.</h5>
                    <p class="overlay-description text-blue">Diam non vestibulum, netus <br> facilisis nunc
                      quis vitae praesent <br> odio.</p>
                  </div>
                </div>
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
            <div class="event-details" v-for="wl in workshopsListDashboard" v-bind:key="wl.id">
              <div class="event-date">
                <span class="text-blue">{{wl.date|timeStampToDate}}</span>
                <!-- <sup class="text-gray">May</sup> -->
              </div>
              <div class="event-name text-light-blue "><span>{{wl.title}}</span></div>
              <div class="event-action">
                <a class="nav-link btn custom-btn" href="#">
                  <div class="gradient-btn">Register Now</div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="pd-left">
              <h2 class="text-blue bold mb-3"><span class="primary-text rotated">"</span>Steps to Help<span
                  class="primary-text rotated">"</span></h2>
              <div class="">

                <ul class="to-do-list">
                  <li  v-for="todo in todoList" v-bind:key="todo.id">
                    <h5 class="text-blue">{{todo.title}}</h5>
                    <p class="text-blue">{{todo.description}}</p>
                  </li>
                </ul>
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

export default {
  name: "Dashboard",
  mixins: [AppMixin],
  components: { CustomSurvey },
  data() {
    return {
      pg: [],
    }
  },
  methods: {
    getSurveyQuestionsDashboard: function () {
      Api.getSurveyQuestionsDashboard().then(response => {
        this.pg = response.data.res;
      });
    },
    submitPopupSurvey: function (survey) {
      let data = JSON.stringify(survey.data, null, 3)
      this.surveyRes = JSON.parse(data)
      Api.submitPopupSurvey(this.surveyRes).then(response => {

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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
