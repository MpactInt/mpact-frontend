<template>
  <div class="col-md-9">
    <h1>Team and Organization Management</h1>
    <div class="row col-md-12">
      <div class="col-md-3">
        <router-link to="/employer/team-management/registration-link">
          <div class="icons">
            <i class="fa fa-link"></i>
            <span>Registration Link</span>
          </div>
        </router-link>
      </div>
      <div class="col-md-3">
        <router-link to="/employer/team-management/employees">
          <div class="icons">
            <i class="fa fa-users"></i>
            <span>Employees</span>
          </div>
        </router-link>
      </div>
      <div class="col-md-3">
        <router-link to="/employer/team-management/invitations">
          <div class="icons">
            <i class="fas fa-user-plus"></i>
            <span>Invitations</span>
          </div>
        </router-link>
      </div>
      <!-- <div class="col-md-3">
        <div class="icons">
          <i class="fa fa-users"></i>
          <span>Employees</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'TeamManagement',
  data() {
    return {
    }
  },
  methods: {
  
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
