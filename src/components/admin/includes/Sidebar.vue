<template>
  <div class="col-md-2 sidebar">
    <div class="user-info">
      <div class="user-img"><img class="logo-img" src="../../../assets/images/user-img.png"></div>
      <div class="user-detail">
        <h5>{{ user.email }}</h5>
        <p class="mb-0">Super Admin</p>
      </div>
    </div>
    <div class="siderbar-link">
      <ul>
        <li>
          <router-link to="/admin/dashboard">Home</router-link>
        </li>
          <li>
          <router-link to="/admin/welcome-note">Welcome Note</router-link>
        </li>
        <li>
          <router-link to="/admin/steps-configuration">Steps Configuration</router-link>
        </li>
        <li>
          <router-link to="/admin/resources">Resources</router-link>
        </li>
        <li>
          <router-link to="/admin/opportunities">Opportunities</router-link>
        </li>
        <li>
          <router-link to="/admin/todo">To Do</router-link>
        </li>
          <li>
          <router-link to="/admin/workshops">Workshops</router-link>
        </li>
        <li>
          <router-link to="/admin/request-workshop">Workshop Requests</router-link>
        </li>
        <li>
          <router-link to="/admin/ask-your-care-team">Ask Your Care Team</router-link>
        </li>
        <li>
          <router-link to="/admin/companies">Companies</router-link>
        </li>
        <li>
          <router-link to="/admin/employee-profile-type">Employee Profile Type</router-link>
        </li>
        <li>
          <router-link to="/admin/popup-surveys">Popup Surveys</router-link>
        </li>
        <li>
          <router-link to="/admin/check-in-surveys">Check In Surveys</router-link>
        </li>
        <li>
          <router-link to="/admin/post-workshop-surveys">Post Workshop Surveys</router-link>
        </li>
        <li>
          <router-link to="/admin/send-email">Send Email</router-link>
        </li>
          <li>
          <router-link to="/admin/meetings">Zoom Meetings</router-link>
        </li>
      </ul>
      <div class="logout-btn-box"><button class="logout-btn btn" @click="logout">Logout</button></div>
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
    logout: function () {
      Api.logout().then(response => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('userData')
        this.$router.go('/login')
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

  },
}
</script>
