<template>
  <div class="employee-hero-section">
    <div class="container">
      <section class="team-section">
        <div class="container">
          <div class="team-card-post">
            <div class="team-card-image">
              <div class="course-banner"><img :src="workshopPath + '/' + workshopUpdate.img" alt=""></div>
            </div>
            <div class="team-card-content">
              <div class="course-details">
                <h4 class="title">{{ workshopUpdate.title }}</h4>
                <div class="course-middle-details">
                  <div class="time">
                    <p><span><i aria-hidden="true" class="fa fa-clock-o"></i></span>Time: <span>{{
                        workshopUpdate.total_hours
                    }} Hour(s)</span></p>
                  </div>
                  <div class="place">
                    <p> <span><i aria-hidden="true" class="fa fa-user-circle-o"></i></span>Leader: <span>{{
                        workshopUpdate.instructor
                    }}</span></p>
                  </div>
                </div>
                <div class="read-more">
                  <a v-if="!registered" class="btn btn-read-more" @click="registerForWorkshop">Register
                    Now</a>
                  <a v-else class="btn btn-read-more" disabled>Registered</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End team section -->
      <section class="team-post-description">
        <div class="container">
          <div class="article-information">
            <h3 class="post-title">Description</h3>
            <p class="post-description">{{ workshopUpdate.description }}</p>

          </div>
          <div class="content-refrence">
            <h3 class="post-title">Additional Information</h3>
            <p class="post-description" v-html="workshopUpdate.additional_info"></p>
          </div>
        </div>
      </section>
      <section class="team-post-description">
        <div class="container">
          <div class="row" v-if="registered">
            <h2>Meetings</h2>
            <table class="table">
              <tr>
                <td>Topic</td>
                <td>Agenda</td>
                <td>Type</td>
                <td>Date</td>
                <td>Duration</td>
                <td>Passcode</td>
                <td>Action</td>
              </tr>
              <tr v-if="workshopMeetings.length" v-for="r in workshopMeetings" v-bind:key="r.id">
                <td>{{ r.topic }}</td>
                <td>{{ r.agenda }}</td>
                <td><span v-if="r.type == 1">Instant</span> <span v-else-if="r.type == 2">Scheduled</span><span
                    v-else-if="r.type == 3">Recurring</span><span v-else>Fixed</span></td>
                <td>{{ r.start_time | timeAgo }}</td>
                <td>{{ r.duration }}</td>
                <td>{{ r.passcode }}</td>
                <td>
                  <!-- <button class="btn btn-primary" @click="getWorkshop(r.id)"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-danger" @click="deleteWorkshop(r.id)"><i class="fa fa-trash"></i></button> -->
                  <a v-if="r.status != 'end'" class="btn btn-primary" target="_blank" :href="r.join_url">Join Meeting</a>
                  <router-link v-if="r.status == 'end'" class="btn btn-primary" :to="'/admin/meeting-recordings/' + r.meeting_id">View Recordings
                  </router-link>
                </td>
              </tr>
              <tr v-if="!workshopMeetings.length">
                <td colspan="5">No Data Found</td>
              </tr>
            </table>
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
  name: "ViewWorkshop",
  mixins: [AppMixin],
  components: { CustomSurvey },
  data() {
    return {

    }
  },
  methods: {
    registerForWorkshop: function () {
      let that = this
      Api.registerForWorkshop(that.$route.params.id).then(response => {
        this.$swal({
          icon: "success",
          title: "Success",
          text: "You have successfully registered for workshop",
          showConfirmButton: true
        });
        this.getWorkshop(this.$route.params.id)
      })
    }
  },
  created() {
    this.getWorkshop(this.$route.params.id)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
