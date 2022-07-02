<template>
  <div class="employee-hero-section">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-3">
          <img :src="workshopPath + '/' + workshopUpdate.img" />
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4 mt-4">
              <h1><b>{{ workshopUpdate.title }}</b></h1>
              <span>Time: {{ workshopUpdate.total_hours }} Hour(s) Leader:{{ workshopUpdate.instructor }}</span>
              <button v-if="!registered" class="btn btn-primary" @click="registerForWorkshop">Register Now</button>
              <button v-else class="btn btn-primary" disabled>Registered</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <h3>Description</h3>
        {{ workshopUpdate.description }}
      </div>
      <div class="row mt-3" v-html="workshopUpdate.additional_info">
      </div>
      <div class="row">
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
          <td><span v-if="r.type == 1">Instant</span> <span v-else-if="r.type == 2">Scheduled</span><span v-else-if="r.type == 3">Recurring</span><span v-else>Fixed</span></td>
          <td>{{ r.start_time | timeAgo }}</td>
          <td>{{ r.duration }}</td>
          <td>{{r.passcode}}</td>
          <td>
            <!-- <button class="btn btn-primary" @click="getWorkshop(r.id)"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-danger" @click="deleteWorkshop(r.id)"><i class="fa fa-trash"></i></button> -->
            <a class="btn btn-primary" target="_blank" :href="r.join_url">Join Meeting</a>
            <router-link class="btn btn-primary" :to="'/admin/meeting-recordings/'+r.meeting_id">View Recordings</router-link>
          </td>
        </tr>
        <tr v-if="!workshopMeetings.length">
          <td colspan="5">No Data Found</td>
        </tr>
      </table>
      </div>
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
