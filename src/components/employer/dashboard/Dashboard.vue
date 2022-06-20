<template>
  <div class="main-content">
    <div class="row">
      <div class="col-lg-8">
        <div class="row step-card-section">
          <div class="col-lg-4 col-md-6 mb-3 cpd" v-for="step in stepsList" v-bind:key="step.id">
            <div class="card custom-card">
              <router-link :to="'/employer/view-step/' + step.id">
                <img class="card-img-top" :src="filePath + '/' + step.image" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title text-blue f-14">{{ step.title }}</h5>
                  <div class="progress-bar-green">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100">40%</div>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="work-progress">
          <ul class="work-progress-list">
            <p>
              <b class="mb-5">Requested Workshops </b>
              <router-link to="/employer/request-workshop">View All</router-link>
            </p>
            <li v-if="workshopList.length" v-for="wl in workshopList" v-bind:key="wl.id">
              <h5 class="text-blue">{{ wl.name }}</h5>
            </li>
            <p v-if="!workshopList.length">No Data Found</p>
          </ul>
        </div>
        <div class="work-progress">
          <ul class="work-progress-list">
            <p>
              <b class="mb-5">Recent Announcments </b>
              <router-link to="/employer/announcements">View All</router-link>
            </p>
            <li v-if="announcementsList.length" v-for="ad in announcementsList" v-bind:key="ad.id">
              <h5 class="text-blue">{{ ad.title }}</h5>
              <p class="text-blue op-7">{{ ad.description }}</p>
            </li>
            <p v-if="!announcementsList.length">No Data Found</p>
          </ul>
        </div>
      </div>
    </div>
    <div class="row pt-4 pb-5">
      <div class="col-lg-4 col-md-6 mb-3 ">
        <div class="resource-box">
          <h2 class="text-blue bold mb-2">Resources </h2>
          <router-link to="/employer/resources">View All</router-link>
          <ul v-if="resourcesList.length" class="resource-list mt-3">
            <!-- <li class="">Assignment <span class="list-icon count">7</span></li> -->
            <li v-for="rl in resourcesList" class="" v-bind:key="rl.id">{{ rl.title }}
              <span class="list-icon">
                <a href="javascript:void(0)">
                  <img src="../../../assets/images/chevron-left-icon.png">
                </a></span>
            </li>
          </ul>
          <p v-if="!resourcesList.length">No Data Found</p>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-3 ">
        <div class="resource-box">
          <!-- <p class="info-icon cursor-pointer"><img src="../../../assets/images/info-icon.png"></p> -->
          <h2 class="text-blue bold mb-3">Opportunities</h2>
          <router-link to="/employer/opportunities">View All</router-link>
          <div v-if="opprotunity.content" v-html="opprotunity.content"></div>
          <div v-if="!opprotunity.content">No Data Found</div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-3 ">
        <div class="resource-box">
          <h2 class="text-blue bold mb-3"><span class="primary-text rotated">"</span>To Do<span
              class="primary-text rotated">"</span></h2>
          <router-link to="/employer/todo">View All</router-link>
          <ul class="to-do-list"  v-if="todoList.length">
            <li v-for="todo in todoList" v-bind:key="todo.id">
              <router-link :to="'/employer/todo/'+todo.id">Item #{{todo.id}}</router-link>
              <p class="text-blue op-7">{{todo.title}}</p>
            </li>
          </ul>
          <p v-if="!todoList.length">
            No Data Found
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'

export default {
  name: 'Dashboard',
  mixins: [AppMixin],
  data() {
    return {
      resourcesList: [],
      announcementsList: [],
      stepsList: [],
      filePath: '',
      opprotunity: {
        content: ''
      }
    }
  },
  methods: {
    getOpportunityListDashboard: function () {
      let that = this
      Api.getOpportunityListDashboard(that.company.id).then(response => {
        let that = this
        that.opprotunity.content = response.data.res.content
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
    getAnnouncementsList: function () {
      let that = this
      Api.getAnnouncementsList(that.company.id).then(response => {
        let that = this
        that.announcementsList = response.data.res
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
    getStepsList: function () {
      let that = this
      Api.getStepsList(1, {}).then(response => {
        let that = this
        that.stepsList = response.data.res
        that.filePath = response.data.path
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
    getResourcesListDashboard: function () {
      let that = this
      Api.getResourcesListDashboard().then(response => {
        let that = this
        that.resourcesList = response.data.res
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
  },
  created() {
    this.getAnnouncementsList()
    this.getStepsList()
    this.getResourcesListDashboard()
    this.getOpportunityListDashboard()
    this.getTodoListDashboard()
    this.getRequestedWorkshopListDashboard()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
