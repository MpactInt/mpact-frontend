<template>
  <div class="sidebar-box">
    <div class="user-info">
      <div class="user-img"><img class="logo-img" :src="company.profile_image"></div>
      <div class="user-detail">
        <h5 class="c-name">{{ company.company_name }}</h5>
        <p class="mb-0 f-name">{{ company.first_name }} {{ company.last_name }} </p>
      </div>
    </div>
    <div class="siderbar-link">
      <ul>
        <li>
          <router-link to="/employee/dashboard">Home</router-link>
        </li>
        <li>
          <router-link to="/employee/profile">Profile</router-link>
        </li>
        <li>
          <router-link to="/employee/workshops">Workshops</router-link>
        </li>
        <li>
          <router-link to="/employee/announcements">Announcements or Updates</router-link>
        </li>
        <li>
          <router-link to="/employee/resources">Resources</router-link>
        </li>
        <li>
          <router-link to="/employee/todo">To Do</router-link>
        </li>
        <li>
          <router-link to="/employee/welcome-note">Welcome Note</router-link>
        </li>
        <li>
          <router-link to="/employee/feedback-to-company">Feedback to Company
          </router-link>
        </li>
        <li>
          <router-link to="/employee/my-learning-plan">My Learning Plan
          </router-link>
        </li>
        <li>
          <router-link to="/employee/ask-question">Ask a Question
          </router-link>
        </li>
        <li>
          <router-link to="/employee/message-my-team">Message My Team</router-link>
        </li>
        <li>
          <a href="javascript:void(0)" @click="showUserList = !showUserList">One to One Chat <i class="fa fa-angle-down"
              aria-hidden="true"></i>
          </a>
        </li>
        <li v-if="showUserList" class="manage-gap">
          <input type="text" class="form-control search" v-model="searchData.name" placeholder="Search Employees"
            @keyup="getEmployeesListChat" /><span class="search-icon"></span>
          <router-link v-for="e in empList.data" v-bind:key="e.id" :to="'/employee/one-to-one-chat/' + e.id"><img
              src="../../../assets/images/back-btn.png" alt="btn" /> {{
                  e.first_name
              }} {{ e.last_name }}
          </router-link>
        </li>
      </ul>
      <hr />
      <div class="logout-btn-box">
        <button class="logout-btn btn" @click="logout"><img src="../../../assets/images/logout.svg" alt="logout" />
          Logout
        </button>
      </div>
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
        window.localStorage.removeItem('companyData')
        this.$router.go('/login')
      }
      ).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        })
      })
    }
  },
  created() {
    if (this.isLoggedIn) {
      this.getEmployeesListChat()
    }
  },
}
</script>
