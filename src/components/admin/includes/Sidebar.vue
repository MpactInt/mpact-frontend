<template>
  <div class="sidebar-box">
    <div class=" user-info">
      <div class="user-img"><img class="logo-img" :src="authUser.profile_image"></div>
      <div class="user-detail">
        <h5 class="c-name">{{ authUser.email }}</h5>
        <p class="mb-0 f-name">Super Admin</p>
      </div>
    </div>
    <div class="siderbar-link">
      <ul>
        <li>
          <router-link to="/admin/dashboard" :class="{ 'menu-highlight': isCurrentPath('/admin/dashboard') }">Home</router-link>
        </li>
        <li>
          <router-link to="/admin/profile" :class="{ 'menu-highlight': isCurrentPath('/admin/profile') }">Profile</router-link>
        </li>
        <li>
          <router-link to="/admin/welcome-note" :class="{ 'menu-highlight': isCurrentPath('/admin/welcome-note') }">Welcome Note</router-link>
        </li>
        <li>
          <router-link to="/admin/steps-configuration" :class="{ 'menu-highlight': isCurrentPath('/admin/steps-configuration') }">Steps Configuration</router-link>
        </li>
        <li>
          <router-link to="/admin/resources" :class="{ 'menu-highlight': isCurrentPath('/admin/resources') }">Resources</router-link>
        </li>
        <li>
          <router-link to="/admin/opportunities" :class="{ 'menu-highlight': isCurrentPath('/admin/opportunities') }">Opportunities</router-link>
        </li>
        <li>
          <router-link to="/admin/todo" :class="{ 'menu-highlight': isCurrentPath('/admin/todo') }">To Do</router-link>
        </li>
        <li>
          <router-link to="/admin/workshops" :class="{ 'menu-highlight': isCurrentPath('/admin/workshops') }">Workshops</router-link>
        </li>
        <li>
          <router-link to="/admin/request-workshop" :class="{ 'menu-highlight': isCurrentPath('/admin/request-workshop') }">Workshop Requests</router-link>
        </li>
        <li>
          <router-link to="/admin/ask-your-care-team" :class="{ 'menu-highlight': isCurrentPath('/admin/ask-your-care-team') }">Client Support</router-link>
        </li>
        <li>
          <router-link to="/admin/companies" :class="{ 'menu-highlight': isCurrentPath('/employer/companies') }">Companies</router-link>
        </li>
        <li>
          <router-link to="/admin/employee-profile-type" :class="{ 'menu-highlight': isCurrentPath('/admin/employee-profile-type') }">Employee Profile Type</router-link>
        </li>
        <li>
          <router-link to="/admin/learning-plan" :class="{ 'menu-highlight': isCurrentPath('/admin/learning-plan') }">Learning Plan</router-link>
        </li>
        <li>
          <router-link to="/admin/learning-plan-resources" :class="{ 'menu-highlight': isCurrentPath('/admin/learning-plan-resources') }">Learning Plan Resources</router-link>
        </li>
        <li>
          <router-link to="/admin/popup-surveys" :class="{ 'menu-highlight': isCurrentPath('/admin/popup-surveys') }">Popup Surveys</router-link>
        </li>
        <li>
          <router-link to="/admin/check-in-surveys" :class="{ 'menu-highlight': isCurrentPath('/admin/check-in-surveys') }">Check-In Surveys</router-link>
        </li>
        <li>
          <router-link to="/admin/post-workshop-surveys" :class="{ 'menu-highlight': isCurrentPath('/admin/post-workshop-surveys') }">Post Workshop Surveys</router-link>
        </li>
        <!-- <li>
          <router-link to="/admin/send-email" :class="{ 'menu-highlight': isCurrentPath('/admin/send-email') }">Send Email</router-link>
        </li> -->
        <li>
          <router-link to="/admin/meetings" :class="{ 'menu-highlight': isCurrentPath('/admin/meetings') }">Workshop Meeting Time</router-link>
        </li>
      </ul>

      <hr />
      <div class="logout-btn-box">
        <button class="logout-btn btn" @click="logout"><img src="../../../assets/images/logout.svg" alt="logout" />
          Logout
        </button>
      </div>
      <!-- <div class="logout-btn-box"><button class="logout-btn btn" @click="logout">Logout</button></div>-->
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
      path: ''
    }
  },
  mixins: [AppMixin],
  methods: {
    isCurrentPath(path) {
      return this.$route.path === path;
    }
  },
  created() {
    this.getAuthUser()

  },
}
</script>