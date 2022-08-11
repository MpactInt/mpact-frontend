<template>
  <div class="mt-5">
    <div class="row mb-3">
      <div class="col-md-3">
        <select v-model="getResourceData.sortBy" class="form-control" v-on:change="getResourcesList">
          <option value="">Sort By</option>
          <option value="title">Title</option>
        </select>
      </div>
      <div class="col-md-3">
        <input type="search" v-model="getResourceData.keyword" class="form-control" placeholder="Search"
          v-on:keyup="getResourcesList" /><span class="search-icon"></span>
      </div>
      <div class="col-md-3">
        <button  v-if="user.role == 'ADMIN' || company.role == 'COMPANY_ADMIN'" class="btn btn-primary float-right" v-b-modal.add-resource-modal>Add New Resource</button>
      </div>
    </div>
    <div class="table-responsive">
    <table class="table">
      <tr>
        <th v-if="user.role == 'ADMIN'">Company Name</th>
        <th>Title</th>
        <th>Description</th>
        <th>Link</th>
        <th>File</th>
        <th>Visibility</th>
        <th v-if="user.role == 'ADMIN' || company.role == 'COMPANY_ADMIN'">Action</th>
      </tr>
      <tr v-if="resourcesLength" v-for="r in resourcesList.data" v-bind:key="r.id">
        <td  v-if="user.role == 'ADMIN'"><span v-for="c in r.company" v-bind:key="c.id">{{ c.company_name }},</span></td>
        <td>{{ r.title }}</td>
        <td>{{ r.description }}</td>
        <td><span v-if="r.link">{{ r.link }}</span><span v-if="!r.link">NA</span></td>
        <td><span v-if="r.file"><a href="javascript:void(0)"
              @click="downloadFile(r.id, r.file)">Download</a></span><span v-if="!r.file">NA</span></td>
        <td>{{ r.visibility }}</td>
        <td v-if="user.role == 'ADMIN' || company.role == 'COMPANY_ADMIN'">
          <button class="btn btn-primary" v-b-modal.update-resource-modal @click="getResource(r.id)"><i class="fa fa-pencil"></i></button>
          <button class="btn btn-danger" @click="deleteResource(r.id)"><i class="fa fa-trash"></i></button>
        </td>
      </tr>
      <tr v-if="!resourcesLength">
        <td colspan="5">No Data Found</td>
      </tr>
    </table>
    </div>
    <pagination :data="resourcesList" @pagination-change-page="getResourcesList" />

    <!--Add resource modal popup-->
    <Add :getResourcesList="getResourcesList"></Add>
    <!--Update resource modal popup-->
    <Edit :getResourcesList="getResourcesList" :resourceUpdate="resourceUpdate"></Edit>

  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import Add from '../resources/Add.vue'
import Edit from '../resources/Edit.vue'

export default {
  name: 'List',
  mixins: [AppMixin],
  components: { Add, Edit },
  data() {
    return {
      resourcesList: {},
      resourcesLength: 0,
      getResourceData: {
        'sortBy': '',
        'keyword': ''
      },
      filePath: '',
      resourceUpdate: {
        'id': '',
        'link': '',
        'company': '',
        'title': '',
        'description': '',
        'file': '',
        'visibility': '',
        'showFile': '',
        'disabled': false,
      },
    }
  },
  methods: {
    getResourcesList: function (page = 1) {
      let that = this
      Api.getResourcesList(page, that.getResourceData).then(response => {
        let that = this
        that.resourcesList = response.data.res
        that.resourcesLength = that.resourcesList.data.length
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
    downloadFile: function (id, name) {
      Api.downloadFile(id)
        .then(response => {
          let blob = new Blob([response.data])
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = name
          link.click()
        }
        ).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          });
        });
    },
    deleteResource: function (id) {
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
          Api.deleteResource(id).then(response => {
            this.$swal({
              icon: "success",
              title: "success",
              text: "Deleted Successfully",
              showConfirmButton: true
            }).then(() => {
              that.getResourcesList()
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
    getResource: function (id) {
      let that = this
      Api.getResource(id).then(response => {
        // that.$bvModal.show('update-resource-modal')
        that.resourceUpdate.id = response.data.res.id
        that.resourceUpdate.title = response.data.res.title
        that.resourceUpdate.description = response.data.res.description
        that.resourceUpdate.link = response.data.res.link == null ? '' : response.data.res.link
        that.resourceUpdate.showFile = response.data.res.file
        that.resourceUpdate.visibility = response.data.res.visibility
        that.resourceUpdate.company = response.data.res.company
        that.filePath = response.data.path
      });
    },
  },
  mounted() {
    this.getResourcesList()
    this.getCompaniesList()
  }
}
</script>
