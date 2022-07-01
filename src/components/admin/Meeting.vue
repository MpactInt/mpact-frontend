<template>
  <div class="col-md-9">
    <h1>Meetings</h1>
    <div class="mt-5">
      <div class="row mb-3">
        <div class="col-md-3">
          <!-- <select v-model="getWorkshopData.sortBy" class="form-control" v-on:change="getWorkshopsList">
            <option value="">Sort By</option>
            <option value="title">Title</option>
          </select> -->
        </div>
        <div class="col-md-3">
          <!-- <input type="text" v-model="getWorkshopData.keyword" class="form-control" placeholder="Search"
            v-on:keyup="getWorkshopsList" /> -->
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <button class="btn btn-primary float-right" v-b-modal.add-modal>Add New Meeting</button>
        </div>
      </div>
      <table class="table">
        <tr>
          <td>Workshop Title</td>
          <td>Topic</td>
          <td>Agenda</td>
          <td>Type</td>
          <td>Date</td>
          <td>Duration</td>
          <td>Passcode</td>
          <td>Action</td>
        </tr>
        <tr v-if="meetingsLength" v-for="r in meetingsList.data" v-bind:key="r.id">
          <td>{{ r.title }}</td>
          <td>{{ r.topic }}</td>
          <td>{{ r.agenda }}</td>
          <td><span v-if="r.type == 1">Instant</span> <span v-else-if="r.type == 2">Scheduled</span><span v-else-if="r.type == 3">Recurring</span><span v-else>Fixed</span></td>
          <td>{{ r.start_time | timeAgo }}</td>
          <td>{{ r.duration }}</td>
          <td>{{r.passcode}}</td>
          <td>
            <!-- <button class="btn btn-primary" @click="getWorkshop(r.id)"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-danger" @click="deleteWorkshop(r.id)"><i class="fa fa-trash"></i></button> -->
            <a class="btn btn-primary" target="_blank" :href="r.start_url">Start Meeting</a>
            <router-link class="btn btn-primary" :to="'/admin/meeting-recordings/'+r.meeting_id">View Recordings</router-link>
          </td>
        </tr>
        <tr v-if="!meetingsLength">
          <td colspan="5">No Data Found</td>
        </tr>
      </table>

    </div>
    <!--Add meeting modal popup-->
    <b-modal id="add-modal" title="Add New Meeting" :hide-footer=hideFooter size="lg" no-fade no-enforce-focus>
      <form>
        <div id="details">
          <div class="form-group">
            <label>Select Workshop <span class="err">*</span></label>
            <select class="form-control" v-model="meeting.workshop_id">
              <option v-for="m in workshopsListSelect" v-bind:key="m.id" :value="m.id">
                {{ m.title }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Topic <span class="err">*</span></label>
            <input type="text" class="form-control" id="title" placeholder="Topic" v-model="meeting.topic">
          </div>
          <div class="form-group">
            <label>Agenda<span class="err">*</span></label>
            <textarea class="form-control" id="description" placeholder="Agenda" v-model="meeting.agenda"></textarea>
          </div>
          <div class="form-group">
            <label>Select Meeting Type <span class="err">*</span></label>
            <select class="form-control" v-model="meeting.type">
              <option value="1">Instant</option>
              <option value="2">Schedule</option>
              <option value="3">Recurring</option>
              <option value="8">Fixed Recurring</option>
            </select>
          </div>
          <div class="form-group">
            <label>Duration <span class="err">*</span></label>
            <input type="text" class="form-control" id="duration" placeholder="Duration" v-model="meeting.duration">
          </div>
          <div class="form-group">
            <label>Host Video <span class="err">*</span></label>
            <input type="radio" v-model="meeting.host_video" value="1">ON
            <input type="radio" v-model="meeting.host_video" value="0">OFF
          </div>
          <div class="form-group">
            <label>Participant Video <span class="err">*</span></label>
            <input type="radio" v-model="meeting.participant_video" value="1">ON
            <input type="radio" v-model="meeting.participant_video" value="0">OFF
          </div>
          <div class="form-group">
            <label>Date <span class="err">*</span></label>
            <date-picker v-model="meeting.date" type="datetime" :use12h="format" placeholder="Date"
              :disabled-date="disabledRange"></date-picker>
          </div>
          <button type="button" @click="addMeeting" class="btn btn-primary" :disabled="meeting.disabled">Submit</button>
        </div>
      </form>
    </b-modal>
    <!--Update meeting modal popup-->
    <b-modal id="update-modal" title="Update Workshop" :hide-footer=hideFooter size="lg" no-fade no-enforce-focus>

    </b-modal>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { Vue2TinymceEditor } from "vue2-tinymce-editor";

export default {
  name: 'WorkshopConfiguration',
  mixins: [AppMixin],
  components: {
    Vue2TinymceEditor, DatePicker
  },
  data() {
    return {
      format: true,
      hideFooter: true,
      meeting: {
        'workshop_id': '',
        'topic': '',
        'agenda': '',
        'type': '',
        'date': '',
        'duration': '',
        'participant_video':'',
        'host_video':'',
        'disabled': false,
      },

      getWorkshopData: {
        'sortBy': '',
        'keyword': ''
      },
    }
  },
  methods: {
    addMeeting: function (e) {
      let that = this;
      console.log(that.meeting)
      if (!that.meeting.workshop_id || !that.meeting.topic || !that.meeting.agenda || !that.meeting.duration || !that.meeting.type || !that.meeting.date || that.meeting.host_video == '' || that.meeting.participant_video == '') {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields fields",
          showConfirmButton: true
        });
      } else {
        let that = this
        that.meeting.disabled = true
        Api.addMeeting(that.meeting).then(response => {
          that.meeting.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Meeting created successfully",
            showConfirmButton: true
          }).then(function () {
            that.meeting.workshop_id = ''
            that.meeting.topic = ''
            that.meeting.agenda = ''
            that.meeting.date = ''
            that.meeting.type = ''
            that.meeting.duration = ''
            that.$bvModal.hide('add-modal')
            that.getMeetingsList()
          });
        }
        ).catch((error) => {
          that.meeting.disabled = false;
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.meeting.disabled = false;
          });
        });
      }
    },
    deleteWorkshop: function (id) {
      let that = this
      this.$swal({
        title: 'Are you sure?',
        text: 'All the related info will be deleted, you wont be able to revert !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          Api.deleteWorkshop(id).then(response => {
            this.$swal({
              icon: "success",
              title: "success",
              text: "Deleted Successfully",
              showConfirmButton: true
            }).then(() => {
              that.getWorkshopsList()
            });
          }
          ).catch((error) => {
            this.$swal({
              icon: "error",
              title: "error",
              text: error.response.data.message,
              showConfirmButton: true
            });
          });
        }
      })
    },
    updateWorkshop: function (e) {
      e.preventDefault()
      let that = this;
      console.log(that.meetingUpdate)
      if (!that.meetingUpdate.title || !that.meetingUpdate.description || !that.meetingUpdate.image || !that.meetingUpdate.total_hours || !that.meetingUpdate.instructor || !that.meetingUpdate.date || !that.meetingUpdate.additional_info) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else {
        that.meetingUpdate.disabled = true;
        const formData = new FormData();
        formData.append('id', that.meetingUpdate.id);
        formData.append('image', that.meetingUpdate.image)
        formData.append('title', that.meetingUpdate.title)
        formData.append('description', that.meetingUpdate.description)
        formData.append('total_hours', that.meetingUpdate.total_hours)
        formData.append('instructor', that.meetingUpdate.instructor)
        formData.append('date', that.meetingUpdate.date)
        formData.append('additional_info', that.meetingUpdate.additional_info)
        let headers = {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
        Api.updateWorkshop(formData, headers).then(response => {
          that.meetingUpdate.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Workshop details updated successfully",
            showConfirmButton: true
          }).then(function () {
            that.meetingUpdate.disabled = false;
            that.$bvModal.hide('update-modal')
            that.getWorkshopsList()
          });
        }).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.meetingUpdate.disabled = false;
          });
        });
      }
    },
  },
  mounted() {
    this.getMeetingsList()
    this.getWorkshopsListForSelect()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
