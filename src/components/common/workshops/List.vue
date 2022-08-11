<template>
  <div class="mt-5">
    <div class="row mb-3">
      <div class="col-md-3">
        <select v-model="getWorkshopData.sortBy" class="form-control" v-on:change="getWorkshopsList">
          <option value="">Sort By</option>
          <option value="title">Title</option>
        </select>
      </div>
      <div class="col-md-3">
        <input type="text" v-model="getWorkshopData.keyword" class="form-control" placeholder="Search"
          v-on:keyup="getWorkshopsList" />
      </div>
      <div class="col-md-3"></div>
      <div class="col-md-3">
        <button v-if="user.role == 'ADMIN'" class="btn btn-primary float-right" v-b-modal.add-workshop-modal>Add New
          Workshop</button>
      </div>
    </div>
    <div class="table-responsive">
    <table class="table">
      <tr>
        <td v-if="user.role == 'ADMIN'">Company</td>
        <td>Image</td>
        <td>Title</td>
        <td>Description</td>
        <td>Total Hours</td>
        <td>Date</td>
        <td>Instructor</td>
        <td>Meeting Type</td>
        <td>Additional Info</td>
        <td>Action</td>
      </tr>
      <tr v-if="workshopsLength" v-for="r in workshopsList.data" v-bind:key="r.id">
        <td v-if="user.role == 'ADMIN'"><span v-for="c in r.company" v-bind:key="c.id">{{ c.company_name }},</span></td>
        <td><img :src="filePath + '/' + r.image" height="70" width="70" /></td>
        <td>{{ r.title }}</td>
        <td>{{ r.description }}</td>
        <td>{{ r.total_hours }}</td>
        <td>{{ r.date | timeStampToDate }}</td>
        <td>{{ r.instructor }}</td>
        <td>{{ r.meeting_type }}</td>
        <td><span v-html="r.additional_info"></span></td>
        <td>
          <button v-if="user.role == 'ADMIN'" class="btn btn-primary"
            @click="getCompaniesListMultiselect(); getWorkshop(r.id)"><i class="fa fa-pencil"></i></button>
          <button v-if="user.role == 'ADMIN'" class="btn btn-danger" @click="deleteWorkshop(r.id)"><i
              class="fa fa-trash"></i></button>
          <router-link v-if="user.role == 'ADMIN'" class="btn btn-primary" :to="'/admin/view-workshop/' + r.id"><i
              class="fa fa-eye"></i>
          </router-link>
          <router-link v-if="user.role != 'ADMIN'" class="btn btn-primary" :to="'/employer/view-workshop/' + r.id"><i
              class="fa fa-eye"></i>
          </router-link>
        </td>
      </tr>
      <tr v-if="!workshopsLength">
        <td colspan="5">No Data Found</td>
      </tr>
    </table>
    </div>
    <pagination :data="workshopsList" @pagination-change-page="getWorkshopsList" />
    <!--Add workshop modal popup-->
    <Add :getWorkshopsLists="getWorkshopsList"></Add>
    <Edit :getWorkshopsLists="getWorkshopsList" :workshopUpdateData="workshopUpdate"></Edit>
  </div>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import Add from '../workshops/Add'
import Edit from '../workshops/Edit.vue';

export default {
  name: 'List',
  mixins: [AppMixin],
  components: { Add, Edit },
  data() {
    return {
    }
  },
  methods: {
    deleteWorkshop: function (id) {
      let that = this
      this.$swal({
        title: 'Are you sure?',
        text: 'All the related info will be deleted, you wont be able to revert !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          Api.deleteWorkshop(id).then(response => {
            this.$swal({
              icon: "success",
              title: "success",
              text: "Deleted Successfully",
              showConfirmButton: true
            }).then(() => {
              that.getWorkshopsList()
            });
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
      })
    },
    updateWorkshop: function (e) {
      e.preventDefault()
      let that = this;
      console.log(that.workshopUpdate)
      if (!that.workshopUpdate.title || !that.workshopUpdate.description || !that.workshopUpdate.total_hours || !that.workshopUpdate.instructor || !that.workshopUpdate.date || !that.workshopUpdate.additional_info) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else {
        that.workshopUpdate.disabled = true;
        const formData = new FormData();
        formData.append('id', that.workshopUpdate.id);
        formData.append('image', that.workshopUpdate.image)
        formData.append('title', that.workshopUpdate.title)
        formData.append('description', that.workshopUpdate.description)
        formData.append('total_hours', that.workshopUpdate.total_hours)
        formData.append('instructor', that.workshopUpdate.instructor)
        formData.append('date', that.workshopUpdate.date)
        formData.append('additional_info', that.workshopUpdate.additional_info)
        formData.append('meeting_type', that.workshopUpdate.meeting_type)
        formData.append('company', JSON.stringify(that.workshopUpdate.company))
        let headers = {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
        Api.updateWorkshop(formData, headers).then(response => {
          that.workshopUpdate.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Workshop details updated successfully",
            showConfirmButton: true
          }).then(function () {
            that.workshopUpdate.disabled = false;
            that.$bvModal.hide('update-workshop-modal')
            that.getWorkshopsList()
          });
        }).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.workshopUpdate.disabled = false;
          });
        });
      }
    },
  },
  mounted() {
    this.getWorkshopsList()
    this.getCompaniesListMultiselect()
  }
}
</script>
