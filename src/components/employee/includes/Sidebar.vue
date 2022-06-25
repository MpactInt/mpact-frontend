<template>
  <div class="col-md-2 sidebar">
    <div class="user-info">
      <div class="user-img"><img class="logo-img" :src="company.company_logo"></div>
      <div class="user-detail">
        <h5>{{ company.company_name }}</h5>
        <p class="mb-0">{{ company.first_name }} {{ company.last_name }} </p>
      </div>
    </div>
    <div class="siderbar-link">
      <ul>
        <!-- <li><a href="#">Profile</a></li>
        <li><a href="#">Step-by-Step Transformation</a></li>
        <li><a href="#">My Organization</a></li>
        <li><a href="#">My Membership </a></li>
        <li><a href="#">Request Support</a></li>
        <li><a href="#">Request Workshop</a></li>
        <li><a href="#">Ask Your Care Team</a></li>
        <li><a href="#">Our Assessment</a></li>
        <li><a href="#">Message My Team</a></li>
        <li><a href="#">Customer Support</a></li> -->
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
          <router-link to="/employee/message-my-team">Message My Team</router-link>
        </li>
        <li>
          <a href="javascript:void(0)" @click="showUserList = !showUserList">One to One Chat <i class="fa fa-angle-down"
              aria-hidden="true"></i>
          </a>
        </li>
        <li v-if="showUserList">
          <input type="text" class="form-control" v-model="searchData.name" placeholder="Search Employees"
            @keyup="getEmployeesListChat" />
          <router-link v-for="e in empList.data" v-bind:key="e.id" :to="'/employee/one-to-one-chat/' + e.id">{{
              e.first_name
          }} {{ e.last_name }}
          </router-link>
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
        window.localStorage.removeItem('companyData')
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
    if (this.isLoggedIn) {
      this.getEmployeesListChat()
    }
  },
}
</script>
