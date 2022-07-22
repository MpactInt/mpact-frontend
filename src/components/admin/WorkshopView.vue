<template>
  <div class="col-md-9">
    <h1>Workshops</h1>
    <div class="mt-5">
      <div class="row mb-3">
        <div class="col-md-3">
          <img :src="workshopPath + '/' + workshopUpdate.img" />
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4 mt-4">
              <h1><b>{{ workshopUpdate.title }}</b></h1>
              <span>Time: {{ workshopUpdate.total_hours }} Hour(s) Leader:{{ workshopUpdate.instructor }}</span>
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
      <h3>Registered Employees</h3>
      <table class="table">
        <tr>
          <td>Employee Name</td>
          <td>Company Name</td>
        </tr>
        <tr v-if="workshopUpdateUserList.length" v-for="r in workshopUpdateUserList" v-bind:key="r.id">
          <td>{{ r.first_name }} {{ r.last_name }}</td>
          <td>{{ r.company_name }}</td>
        </tr>
        <tr v-if="!workshopUpdateUserList.length">
          <td colspan="5">No Data Found</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { Vue2TinymceEditor } from "vue2-tinymce-editor";

export default {
  name: 'WorkshopConfiguration',
  mixins: [AppMixin],
  components: {
    Vue2TinymceEditor, DatePicker
  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    this.getWorkshop(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
