<template>
  <div class="employee-hero-section">
    <div class="container">
      <section class="live-classe">
        <div class="container">
          <div class="row">
            <div class="col-md-6 content-middle">
              <div class="class-content">
                <h2 class="title">Workshops</h2>
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
          <!-- <div class="row row-mb" v-if="workshopsLength" v-for="w in workshopsList.data" v-bind:key="w.id">
            <div class="col-md-4">
              <div class="course-banner"><img :src="filePath + '/' + w.image" alt=""></div>
            </div>
            <div class="col-md-8">
              <div class="course-details">
                <h4 class="title">{{ w.title }}</h4>
                <div class="course-middle-details">
                  <div class="time">
                    <p>Time: <span>{{ w.total_hours }} Hour(s)</span></p>
                  </div>
                  <div class="place">
                    <p>Leader: <span>{{ w.instructor }}</span></p>
                  </div>
                </div>
                <div class="course-description">
                  <p>{{ w.description }}</p>
                </div>
                <div class="read-more">
                  <router-link :to="'/employee/workshop/' + w.id" class="btn btn-read-more">Read More</router-link>
                </div>
              </div>
            </div>
          </div>
          <pagination :data="workshopsList" @pagination-change-page="getWorkshopsList" />
          <div class="row row-mb" v-if="!workshopsLength">
            No Workshops Found
          </div> -->
          <div class="card-post" v-if="workshopsLength" v-for="w in workshopsList.data" v-bind:key="w.id">
            <div class="card-image">
              <div class="course-banner"><img :src="filePath + '/' + w.image"  alt=""></div>
            </div>
            <div class="card-content">
              <div class="course-details">
                <h4 class="title">{{ w.title }}</h4>
                <div class="course-middle-details">
                  <div class="time">
                    <p><span><i aria-hidden="true" class="fa fa-clock-o"></i></span>Time<span>{{ w.total_hours }} Hour(s)</span></p>
                  </div>
                  <div class="place">
                    <p> <span><i aria-hidden="true" class="fa fa-user-circle-o"></i></span>Leader: <span>{{ w.instructor }}</span></p>
                  </div>
                </div>
                <div class="course-description">
                  <p>{{ w.description }}</p>
                </div>
                <div class="read-more">
                  <router-link :to="'/employee/workshop/' + w.id" class="btn btn-read-more">Read More</router-link>
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
import CustomSurvey from './CustomSurvey.vue'

export default {
  name: "Workshops",
  mixins: [AppMixin],
  components: { CustomSurvey },
  data() {
    return {
    }
  },
  methods: {

  },
  created() {
    this.getWorkshopsList()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
