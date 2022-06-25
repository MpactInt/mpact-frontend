<template>
  <div class="col-md-9 ml-4">
    <div class="row mt-5">
      <div class="col-md-3">
        <img :src="path + '/' + workshopUpdate.image" />
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-4 mt-4">
            <h1><b>{{ workshopUpdate.title }}</b></h1>
            <span>Time: {{ workshopUpdate.total_hours }} Hour(s) Leader:{{ workshopUpdate.instructor }}</span>
            <button v-if="!registered" class="btn btn-primary" @click="registerForWorkshop">Register Now</button>
            <button v-else class="btn btn-primary" disabled>Registered</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <h3>Description</h3>
      {{ workshopUpdate.description }}
    </div>
    <div class="row mt-3" v-html="workshopUpdate.additional_info">
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
import CustomSurvey from './CustomSurvey.vue'

export default {
  name: "ViewWorkshop",
  mixins: [AppMixin],
  components: { CustomSurvey },
  data() {
    return {

    }
  },
  methods: {
    registerForWorkshop: function () {
      let that = this
      Api.registerForWorkshop(that.$route.params.id).then(response => {
        this.$swal({
          icon: "success",
          title: "Success",
          text: "You have successfully registered for workshop",
          showConfirmButton: true
        });
        this.getWorkshop(this.$route.params.id)
      })
    }
  },
  created() {
    this.getWorkshop(this.$route.params.id)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
