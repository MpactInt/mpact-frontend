<template>
  <div id="app">
    <div class="app-block" v-if="isLoggedIn">
      <section class="employer-section" v-if="user.role == 'COMPANY' && company.role=='COMPANY_ADMIN'">
        <HeaderEmployer></HeaderEmployer>
        <div class="container-fluid  p-0">
          <div class="d-flex">
            <div class=" sidebar" id="employerSidebar"><SidebarEmployer v-if="isLoggedIn"></SidebarEmployer></div>
            <main class="main-col"><router-view :key="$route.fullPath" /></main>
          </div>
        </div>
        <FooterEmployer></FooterEmployer>
      </section>
      <section class="employee-section" v-if="user.role == 'COMPANY' && company.role=='COMPANY_EMP'">
        <HeaderEmployee></HeaderEmployee>
         <div class="container-fluid p-0">
          <div class="d-flex">
              <div class=" sidebar" id="navbarSupportedContent"><SidebarEmployee v-if="isLoggedIn"></SidebarEmployee></div>
              <main class="main-col"><router-view :key="$route.fullPath" /></main>
          </div>
        </div>
        <FooterEmployee></FooterEmployee>
      </section>
      <section class="admin-section" v-if="user.role == 'ADMIN'">
        <HeaderAdmin></HeaderAdmin>
        <div class="container-fluid p-0">
          <div class="d-flex">
            <div class=" sidebar" id="adminSidebar"><SidebarAdmin v-if="isLoggedIn"></SidebarAdmin></div><main class="main-col"><router-view :key="$route.fullPath" /></main></div>
        </div>
        <FooterAdmin></FooterAdmin>
      </section>
    </div>
    <div v-else>
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>
<script>
/* eslint-disable */


import HeaderEmployer from './components/employer/includes/Header'
import FooterEmployer from './components/employer/includes/Footer.vue'
import SidebarEmployer from './components/employer/includes/Sidebar.vue'

import HeaderEmployee from './components/employee/includes/Header.vue'
import FooterEmployee from './components/employee/includes/Footer.vue'
import SidebarEmployee from './components/employee/includes/Sidebar.vue'

import HeaderAdmin from './components/admin/includes/Header.vue'
import FooterAdmin from './components/admin/includes/Footer.vue'
import SidebarAdmin from './components/admin/includes/Sidebar.vue'

import AppMixin from './mixins/AppMixin'

export default {
  name: "App",
  data() {
    return {
    };
  },
  mixins: [AppMixin],
  created() {
   
  },
  components: { FooterEmployer, HeaderEmployer, SidebarEmployer, HeaderEmployee, FooterEmployee, SidebarEmployee, HeaderAdmin, FooterAdmin, SidebarAdmin }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
