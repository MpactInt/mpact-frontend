<template>
  <div class="sidebar-box" >
    <div class="user-info">
      <div class="user-img"><img class="logo-img" :src="company.company_logo"></div>
      <div class="user-detail">
        <h5 class="c-name">{{ company.company_name }}</h5>
        <p class="mb-0 f-name">{{ company.first_name }} {{ company.last_name }} </p>
      </div>
    </div>
    <div class="siderbar-link">
      <ul>
        <li>
          <router-link to="/employer/dashboard">Home</router-link>
        </li>
        <li>
          <router-link to="/employer/profile">Profile</router-link>
        </li>
        <li>
          <router-link to="/employer/welcome-note">Welcome Note</router-link>
        </li>
        <li>
          <router-link to="/employer/team-management">Team and Organization Management</router-link>
        </li>
        <li>
          <router-link to="/employer/membership-details">Membership Details</router-link>
        </li>
        <li>
          <router-link to="/employer/resources">Resources</router-link>
        </li>
        <li>
          <router-link to="/employer/ask-question">Ask Your Care Team</router-link>
        </li>
        <li>
          <router-link to="/employer/announcements">Announcements or Updates</router-link>
        </li>
        <li>
          <router-link to="/employer/settings">Settings</router-link>
        </li>
        <li><a href="https://assessment.mpact-int.com/login" target="_blank">Assessment</a></li>
        <li>
          <router-link to="/employer/message-my-team">Message My Team</router-link>
        </li>
        <li>
          <router-link to="/employer/request-workshop">Request for Workshop</router-link>
        </li>
         <li>
          <router-link to="/employer/feedback-by-employees">Feedback by Employees</router-link>
        </li>
        <li>
          <a href="javascript:void(0)" @click="showUserList = !showUserList">One to One Chat <i class="fa fa-angle-down"
              aria-hidden="true"></i>
          </a>
        </li>
        <li v-if="showUserList"  class="manage-gap">
          <input type="text" class="form-control search" v-model="searchData.name" placeholder="Search Employees"
            @keyup="getEmployeesListChat" /><span class="search-icon"></span>
          <router-link v-for="e in empList.data" v-bind:key="e.id" :to="'/employer/one-to-one-chat/' + e.id"><img
            src="../../../assets/images/back-btn.png" alt="btn"/>{{
              e.first_name
          }} {{ e.last_name }}
          </router-link>
        </li>
      </ul>
      <hr/>
      <div class="logout-btn-box"><button class="logout-btn btn" @click="logout"><img src="../../../assets/images/logout.svg" alt="logout"/>
          Logout
        </button></div>
    </div>
  </div>
  <!-- siderbar end -->
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
export default {
  name: 'Sidebar',
  data() {
    return {
      path: '',
    }
  },
  mixins: [AppMixin],
  methods: {
 
  },
  created() {
    if (this.isLoggedIn) {
      this.getEmployeesListChat()
      this.getAuthUser()
    }
  },
}
</script>
