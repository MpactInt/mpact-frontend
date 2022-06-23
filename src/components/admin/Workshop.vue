<template>
  <div class="col-md-9">
    <h1>Workshops</h1>
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
          <button class="btn btn-primary float-right" v-b-modal.add-workshop-modal>Add New Workshop</button>
        </div>
      </div>
      <table class="table">
        <tr>
          <td>Image</td>
          <td>Title</td>
          <td>Description</td>
          <td>Total Hours</td>
          <td>Date</td>
          <td>Instructor</td>
          <td>Additional Info</td>
          <td>Action</td>
        </tr>
        <tr v-if="workshopsLength" v-for="r in workshopsList" v-bind:key="r.id">
          <td><img :src="filePath + '/' + r.image" height="70" width="70" /></td>
          <td>{{ r.title }}</td>
          <td>{{ r.description }}</td>
          <td>{{ r.total_hours }}</td>
          <td>{{ r.date | timeAgo }}</td>
          <td>{{ r.instructor }}</td>
          <td><span v-html="r.additional_info"></span></td>
          <td>
            <button class="btn btn-primary" @click="getWorkshop(r.id)"><i class="fa fa-pencil"></i></button>
            <button class="btn btn-danger" @click="deleteWorkshop(r.id)"><i class="fa fa-trash"></i></button>
            <router-link class="btn btn-primary" :to="'/admin/view-workshop/' + r.id"><i class="fa fa-eye"></i>
            </router-link>
          </td>
        </tr>
        <tr v-if="!workshopsLength">
          <td colspan="5">No Data Found</td>
        </tr>
      </table>

    </div>
    <!--Add workshop modal popup-->
    <b-modal id="add-workshop-modal" title="Add New Workshop" :hide-footer=hideFooter size="lg" no-fade
      no-enforce-focus>
      <form enctype="multipart/form-data" @submit="addWorkshop">
        <div id="details">
          <div class="form-group">
            <label>Title <span class="err">*</span></label>
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="workshop.title">
          </div>
          <div class="form-group">
            <label>Description<span class="err">*</span></label>
            <textarea class="form-control" id="description" placeholder="Description"
              v-model="workshop.description"></textarea>
          </div>
          <div class="form-group">
            <label>Total Hours <span class="err">*</span></label>
            <input type="text" class="form-control" id="total_hours" placeholder="Total Hours"
              v-model="workshop.total_hours">
          </div>
          <div class="form-group">
            <label>Date <span class="err">*</span></label>
            <date-picker v-model="workshop.date" type="datetime" :use12h="format" placeholder="Date"
              :disabled-date="disabledRange"></date-picker>
          </div>
          <div class="form-group">
            <label>Instructor <span class="err">*</span></label>
            <input type="text" class="form-control" id="instructor" placeholder="Instructor"
              v-model="workshop.instructor">
          </div>
          <div class="form-group">
            <label>Additional Info<span class="err">*</span></label>
            <vue2-tinymce-editor v-model="workshop.additional_info" placeholder="Additional Info"></vue2-tinymce-editor>
          </div>
          <div class="form-group">
            <label>Upload Image <span class="err">*</span></label>
            <input type="file" class="form-control" id="image" ref="image" @change="fileOnChange">
          </div>
          <button type="submit" class="btn btn-primary" :disabled="workshop.disabled">Submit</button>
        </div>
      </form>
    </b-modal>
    <!--Update workshop modal popup-->
    <b-modal id="update-workshop-modal" title="Update Workshop" :hide-footer=hideFooter size="lg" no-fade
      no-enforce-focus>
      <form enctype="multipart/form-data" @submit="updateWorkshop">
        <div id="details">
          <div class="form-group">
            <label>Title <span class="err">*</span></label>
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="workshopUpdate.title">
          </div>
          <div class="form-group">
            <label>Description<span class="err">*</span></label>
            <textarea class="form-control" id="description" placeholder="Description"
              v-model="workshopUpdate.description"></textarea>
          </div>
          <div class="form-group">
            <label>Total Hours <span class="err">*</span></label>
            <input type="text" class="form-control" id="total_hours" placeholder="Total Hours"
              v-model="workshopUpdate.total_hours">
          </div>
          <div class="form-group">
            <label>Date <span class="err">*</span></label>
            <date-picker v-model="workshopUpdate.date" type="datetime" :use12h="format" placeholder="Date"
              :disabled-date="disabledRange"></date-picker>
          </div>
          <div class="form-group">
            <label>Instructor <span class="err">*</span></label>
            <input type="text" class="form-control" id="instructor" placeholder="Instructor"
              v-model="workshopUpdate.instructor">
          </div>
          <div class="form-group">
            <label>Additional Info<span class="err">*</span></label>
            <vue2-tinymce-editor v-model="workshopUpdate.additional_info" placeholder="Additional Info"></vue2-tinymce-editor>
          </div>
          <div class="form-group">
            <label>Upload Image <span class="err">*</span></label>
            <input type="file" class="form-control" id="imageUpdate" ref="imageUpdate" @change="fileOnChangeUpdate">
          </div>
          <button type="submit" class="btn btn-primary" :disabled="workshopUpdate.disabled">Submit</button>
        </div>
      </form>
    </b-modal>
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
      format: true,
      hideFooter: true,
      workshop: {
        'title': '',
        'description': '',
        'image': '',
        'total_hours': '',
        'date': '',
        'instructor': '',
        'additional_info': '',
        'disabled': false,
      },

      getWorkshopData: {
        'sortBy': '',
        'keyword': ''
      },
    }
  },
  methods: {
    fileOnChange: function (e) {
      this.workshop.image = this.$refs.image.files[0];
    },
    fileOnChangeUpdate: function () {
      this.workshopUpdate.image = this.$refs.imageUpdate.files[0];
    },
    addWorkshop: function (e) {
      e.preventDefault();
      let that = this;
      if (!that.workshop.title || !that.workshop.description || !that.workshop.image || !that.workshop.total_hours || !that.workshop.instructor || !that.workshop.date || !that.workshop.additional_info) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields fields",
          showConfirmButton: true
        });
      } else {
        let that = this
        that.workshop.disabled = true;
        const formData = new FormData();
        formData.append('image', that.workshop.image);
        formData.append('title', that.workshop.title)
        formData.append('description', that.workshop.description)
        formData.append('total_hours', that.workshop.total_hours)
        formData.append('instructor', that.workshop.instructor)
        formData.append('date', that.workshop.date)
        formData.append('additional_info', that.workshop.additional_info)
        let headers = {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
        Api.addWorkshop(formData, headers).then(response => {
          that.workshop.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Workshop created successfully",
            showConfirmButton: true
          }).then(function () {
            that.workshop.title = ''
            that.workshop.description = ''
            that.$refs.image.value = null;
            that.$bvModal.hide('add-workshop-modal')
            that.getWorkshopsList()
          });
        }
        ).catch((error) => {
          that.workshop.disabled = false;
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.workshop.disabled = false;
          });
        });
      }
    },
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
      if (!that.workshopUpdate.title || !that.workshopUpdate.description || !that.workshopUpdate.image || !that.workshopUpdate.total_hours || !that.workshopUpdate.instructor || !that.workshopUpdate.date || !that.workshopUpdate.additional_info) {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
