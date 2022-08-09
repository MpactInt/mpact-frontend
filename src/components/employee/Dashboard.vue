<template>
  <div class="">
    <section class="employee-dashboard-hero-section">
      <h2  class="page-title mb-0 text-left  d-inline-block">About the <span class="yello-color">Program</span></h2>
      <h4  class="page-sub-title">This section will be the opening to the learning journey</h4>
      <img src="../../assets/images/about-frame.svg" class="hero-img" alt="">
    </section>
    <section class="employee-dashboard-section">
      <h2  class="page-title mb-0 text-left  d-inline-block">This <span >section</span>text</h2>
      <h4  class="page-sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id quam ut dui tristique semper.</h4>
    </section>
    <section class="employee-dashboard-popup-survey">
      <h2  class="page-title mb-0 text-left  d-inline-block">Popup <span >Survey</span></h2>
      <h4  class="page-sub-title">This section will be the opening to the learning journey</h4>
      <div class="popup-survey-box">
        <h4>1. How are you feeling today?</h4>
        <input class="inp-cbx" id="morning" type="checkbox"/>
        <label class="cbx" for="morning"><span> <svg width="12px" height="10px"> <use xlink:href="#check"></use> </svg></span><span>Good</span> <img src="../../assets/images/good.png" alt="reaction" /> </label>
        <input class="inp-cbx" id="noon" type="checkbox"/>
        <label class="cbx" for="noon"><span> <svg width="12px" height="10px"> <use xlink:href="#check"></use> </svg></span><span>Better</span> <img src="../../assets/images/better.png" alt="reaction" /></label>
        <input class="inp-cbx" id="afternoon" type="checkbox"/>
        <label class="cbx" for="afternoon"><span> <svg width="12px" height="10px"> <use xlink:href="#check"></use> </svg></span><span>Best</span><img src="../../assets/images/best.png" alt="reaction" /></label>
        <input class="inp-cbx" id="evening" type="checkbox" />
        <label class="cbx" for="evening"><span> <svg width="12px" height="10px"> <use xlink:href="#check"></use> </svg></span><span>Not Well</span><img src="../../assets/images/not-well.png" alt="reaction" /></label>
      </div>
    </section>
    <section class="my-learning-plan home-learning-bg">
      <h2 class="page-title text-left mb-0  d-inline-block">Learning <span class="yello-color">About Self</span> </h2>
      <h4 class="page-sub-title">This section will have all of the learning.</h4>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img src="https://freedesignfile.com/upload/2017/08/teamwork-Stock-Photo-01.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="links">Read More <img src="../../assets/images/arrow-right.svg" /> </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img src="https://p6x6j4d5.rocketcdn.me/wp-content/uploads/2017/08/Fotolia_106861962_Subscription_Monthly_M.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="links">Read More <img src="../../assets/images/arrow-right.svg" /> </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img src="https://media.istockphoto.com/photos/two-male-colleagues-fighting-in-office-picture-id1013419500?k=20&m=1013419500&s=612x612&w=0&h=G2XjoLUohDjvFCwIi5olRB_VfV2zp2QwyLN_qOhW8Lo=" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="links">Read More <img src="../../assets/images/arrow-right.svg" /> </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img src="https://thumbs.dreamstime.com/b/coworkers-laughing-joking-around-coworkers-laughing-joking-around-business-meeting-going-well-happy-workplace-picture-183061820.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="links">Read More <img src="../../assets/images/arrow-right.svg" /> </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <img src="https://freedesignfile.com/upload/2017/08/teamwork-Stock-Photo-01.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="links">Read More <img src="../../assets/images/arrow-right.svg" /> </a>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <a href="#" class="btn my-4">See More</a>
        </div>
      </div>
    </section>
    <section class="upcoming-workshops">
       <h2 class="page-title text-left   d-inline-block">Upcoming  <span class="white-color">Workshops</span> </h2>
       <div class="workshops-slider">
            <!-- Swiper -->
            <div class="swiper mySwiper">
              <div class="swiper-wrapper">
                <div class="swiper-slide">

                  <img src="../../assets/images/workshop.jpg" class="w-100 workshops-img" alt="workshops image" />
                  <h3 class="section-title mt-4 mb-2">Overcoming Imposter Syndrome</h3>

                  <div class="d-flex flex-wrap">
                    <span> <img src="../../assets/images/clock.svg" class="icon" alt="workshops image" /> Time.5 Hour(s)</span>
                    <span> <img src="../../assets/images/avtar.svg" class="icon" alt="workshops image" /> Leader: Dr. Maisha Cobb</span>
                  </div>

                  <a href="#" class="btn gradient-color-btn mt-4 mb-5">Registered</a>
                </div>
                <div class="swiper-slide">

                  <img src="../../assets/images/workshop.jpg" class="w-100 workshops-img" alt="workshops image" />
                  <h3 class="section-title mt-4 mb-2">Overcoming Imposter Syndrome</h3>

                  <div class="d-flex flex-wrap">
                    <span> <img src="../../assets/images/clock.svg" class="icon" alt="workshops image" /> Time.5 Hour(s)</span>
                    <span> <img src="../../assets/images/avtar.svg" class="icon" alt="workshops image" /> Leader: Dr. Maisha Cobb</span>
                  </div>

                  <a href="#" class="btn gradient-color-btn mt-4 mb-5">Registered</a>
                </div>

              </div>
            </div>
      </div>
    </section>
    <section class="steps-to-help">
       <h2 class="page-title text-left   d-inline-block">"Steps to <span class="white-color">Help"</span> </h2>

       <div class="steps-box">
         <div class="steps-count">
           Test <span>01</span>
         </div>
         <div class="pera">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id quam ut dui tristique semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id quam ut dui tristique semper.</p>
         </div>
       </div>
       <div class="steps-box">
         <div class="steps-count">
           To Do <span>01</span>
         </div>
         <div class="pera">
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id quam ut dui tristique semper.</p>
         </div>
       </div>


      <a href="#" class="btn mt-4 mb-5">View All</a>
     </section>
    <!-- <div class="employee-hero-section ">
<div class="container">
<div class="row content-center" v-if="section1.id">
<div class="col-md-7">
<div class="left-side">
  <h1 class="text-blue bold"> -->
<!-- Welcome to <span class="primary-text"> Your Persnalized
  <br>Learning Journey</span> -->
<!--  {{ section1.title }}
</h1>
<p class="p-text text-blue f-18">{{ section1.description }}</p>
</div>
</div>
<div class="col-md-5">
<div class="right-side">
<div class="img-container">
  <img :src="section1.image" class="hero-img" /> -->
  <!-- <img src="../../assets/images/hero.png" class="hero-img" alt=""> -->
<!-- </div>
</div>
</div>
</div>
</div>
</div> -->
<!-- Hero end -->
<!--  <div class="learning-sention">
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
  <h2 class="text-blue bold text-big"> -->
    <!-- Nec faucibus placerat <br>habitant vulputate <br>tortor <span class="primary-text">mauris</span>. -->
<!--    {{ section3.title }}
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
</div> -->
<!-- learnar-section- end -->
<!--  <div class="event-section">
<div class="container">
<div class="row">
<div class="col-md-12 col-lg-6">
<h2 class="event-title text-blue bold">Upcoming <span class="primary-text">Workshops</span>.</h2>
<div v-if="workshopsListDashboard.length" class="event-details" v-for="wl in workshopsListDashboard"
v-bind:key="wl.id">
<div class="event-date">
  <span class="text-blue">{{ wl.date | timeStampToDate }}</span> -->
  <!-- <sup class="text-gray">May</sup> -->
<!-- </div>
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
</div> -->
<!-- end event section -->
</div>
</template>
<script>/* eslint-disable */
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
  // var swiper = new Swiper(".mySwiper", {});
   
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

