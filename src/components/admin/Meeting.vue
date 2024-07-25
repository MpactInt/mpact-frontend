<template>
  <section class="admin-learning-plan-section half-cut-bg">
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Workshop Archives</span>
        </p>
    </div>

    <!-- card-10 stat -->
    <div class="w-full">
        <div class="py-6 px-8">
            <div class="flex justify-between py-6">
                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="simple-search"
                            class="px-14 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                            placeholder="Search" required v-model="searchData.keyword" v-on:keyup="getMeetingsList">
                    </div>
                </form>


                <div class="flex flex-row space-x-1">
                    <button
                        class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow">

                        <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="flex-1 text-white ml-3 whitespace-nowrap" v-b-modal.add-modal>Add New Meeting</span>
                    </button>
                </div>
            </div>

            <div class="relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-center text-white">
                    <thead class="text-xs text-white bg-[#0A0446]">
                        <tr>
                            <th scope="col" class="px-6 py-4 rounded-tl-lg border-r border-gray-700">
                                Workshop Title
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Topic
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Agenda
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Type
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Duration
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Passcode
                            </th>
                            <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[#090446]">
                        <tr class="bg-white hover:bg-gray-50"  v-if="meetingsLength" v-for="r in meetingsList.data" v-bind:key="r.id">
                            <td scope="row"
                                class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                {{ r.title }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.topic }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.agenda }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                <span v-if="r.type == 1">Instant</span> <span v-else-if="r.type == 2">Scheduled</span><span v-else-if="r.type == 3">Recurring</span><span v-else>Fixed</span>
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.start_time | timeAgo }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.duration }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.passcode }}
                            </td>
                            <td
                                class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">

                                <a v-if="r.status != 'end'" class="btn btn-primary m-2" target="_blank" :href="r.start_url">
                                    <button
                                        class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2">
                                       
                                        <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">Start Meeting</span>
                                    </button>
                                </a>

                                <router-link v-if="r.status == 'end'" class="btn btn-primary m-2" :to="'/admin/meeting-recordings/' + r.meeting_id">
                                    <button
                                        class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2">
                                       
                                        <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">View Recordings</span>
                                    </button>
                                </router-link>

                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" v-if="r.status != 'end'" @click="endMeeting(r.meeting_id)">

                                    <span
                                        class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">End Meeting</span>
                                </button>

                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" v-if="r.status == 'end'" @click="sendPostWorkshopSurveyEmail(r.workshop_id)" :disabled="disabled">

                                    <span
                                        class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">Send Survey</span>
                                </button>

                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50" v-if="!meetingsLength">
                            <td scope="row" class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap"colspan="8">No Data Found</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- card-10 end -->

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
            <br>
            <input type="radio" id="on" v-model="meeting.host_video" value="1">
            <label for="on" class="mx-2">ON</label>

            <input type="radio" id="off" v-model="meeting.host_video" value="0">
            <label for="off" class="mx-2">OFF</label>
          </div>
          <div class="form-group">
            <label>Participant Video <span class="err">*</span></label>
            <br>
            <input type="radio" id="on1" v-model="meeting.participant_video" value="1">
            <label for="on1" class="mx-2">ON</label>
            <input type="radio" id="off1" v-model="meeting.participant_video" value="0">
            <label for="off1" class="mx-2">OFF</label>
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
  </section>
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
        'participant_video': '',
        'host_video': '',
        'disabled': false,
      },
      disabled: false,
      searchData: {
        'sortBy': '',
        'keyword': '',
        'sortOrder': ''
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
    endMeeting: function (id) {
      let that = this
      this.$swal({
        title: 'Are you sure?',
        text: 'You want to end this meeting',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          var data = { 'action': 'end' }
          Api.updateMeeting(id, data).then(response => {
            this.$swal({
              icon: "success",
              title: "success",
              text: "Meeting Ended Successfully",
              showConfirmButton: true
            }).then(() => {
              that.getMeetingsList()
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
    sendPostWorkshopSurveyEmail: function (id) {
      let that = this;
      Api.sendPostWorkshopSurveyEmail(id).then(response => {
        that.disabled = true;
        this.$swal({
          icon: "success",
          title: "Success",
          text: "Post Workshop Survey sent successfully",
          showConfirmButton: true
        }).then(function () {
          that.disabled = false
        });
      }).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
          that.disabled = false;
        });
      });
    },
    getMeetingsList: function (page = 1) {
      let that = this
      Api.getMeetingsList(page, that.searchData).then(response => {
        let that = this
        that.meetingsList = response.data.res
        that.meetingsLength = that.meetingsList.data.length
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
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
