<template>
  <div class="">
    <section class="my-learning-plan">
      <h2 class="page-title text-left mb-0  d-inline-block">My Learning <span>Plan</span> </h2>
      <h4 class="page-sub-title">This section will be the opening to the learning journey</h4>
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
      </div>
    </section>
<!--     <div class="container">
<section class="live-classe">
<div class="container">
<div class="row">
<div class="col-md-6 content-middle">
<div class="class-content">
  <h2 class="title">My Learning Plan</h2> -->
<!-- <p class="text">Browse our 100% live online classes led by top instructors and coaches. Choose from our
upcoming schedule or browse all the classes we offer.</p> -->
<!-- </div>
</div> -->
<!-- <div class="col-md-6">
<div class="classes-seminar">
<img src="../../assets/images/class-meeting.jpg" alt="">
</div>
</div> -->
<!-- </div>
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
</div> -->
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