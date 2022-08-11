<template>

  <div>
    <section class="team-management-section half-cut-bg">
      <h1 class="page-title text-left">
        Team and Organization <span>Management</span>
      </h1>
      <div class="card-box">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="links">Read More <img src="../../../assets/images/arrow-right.svg" /> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <h1>Team and Organization Management</h1>
    <div class="row col-md-12">
      <div class="col-md-3">
        <router-link to="/employer/team-management/registration-link">
          <div class="icons">
            <i class="fa fa-link"></i>
            <span>Registration Link</span>
          </div>
        </router-link>
        <p>Use this link to send an invite to your team in order to expedite platform registration.</p>
      </div>
      <div class="col-md-3">
        <router-link to="/employer/team-management/employees">
          <div class="icons">
            <i class="fa fa-users"></i>
            <span>Employees</span>
          </div>
        </router-link>
        <p>
          Manage your employee list (add or delete team members). You can also monitor login activity.
        </p>
      </div>
      <div class="col-md-3">
        <router-link to="/employer/team-management/invitations">
          <div class="icons">
            <i class="fas fa-user-plus"></i>
            <span>Invitations</span>
          </div>
        </router-link>
        <p>If you have already sent a link to team members or added a new employee, use this link to monitor
outstanding invites to the platform.</p>
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
