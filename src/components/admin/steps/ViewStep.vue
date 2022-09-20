<template>

  <section class="view-step-link half-cut-bg">
    <router-link to="/admin/steps-configuration"  class="btn back">
       <!-- <button class="btn-primary"> -->
        <img src="../../../assets/images/arrow-left.svg" alt="arrow-left" /> Back
      <!-- </button> -->
    </router-link>

    <div class="row mt-5 tabs-ui">
      <div class="col-md-12 pricing-section">
        <div class="nav nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home"
            type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Overview</button>
          <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile"
            type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Guide Book</button>
          <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages"
            type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Toolkit</button>
        </div>
      </div>
      <div class="col-md-12">
        <h3 class="view-step-title">Welcome to </h3>
        <h3 class="section-title">{{ stepUpdate.title }}</h3>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <div class="mb-3">
              <p><b class="pink-color">Overview</b></p>
              <p>{{ stepUpdate.overview }}</p>
            </div>
            <div class="desc-box" v-html="stepUpdate.description"></div>
          </div>
          <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
            <p><b class="pink-color">Guide Book</b></p>
            <div class="row mt-3">
              <div class="row">
                <form @submit="uploadGuideBook" enctype="multipart/form-data">
                  <div class="form-group">
                    <label><b>Upload Guide Book</b></label>
                    <input type="file" class="form-control" id="guideBook" ref="guideBook"
                      @change="guideBookOnChange()" />
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary" :disabled="step.disabled">Upload</button>
                  </div>
                </form>
              </div>
              <div class="row mt-5">
                <h5>Uploaded Guide Book</h5>
                <embed v-if="stepUpdate.guideBook" :src="toolkitPath + '/' + stepUpdate.guideBook" width="100%" height="800px" />
                <p v-if="!stepUpdate.guideBook">Guide Book Not uploaded </p>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
             <p><b class="pink-color">Toolkit</b></p>
                <div class="row">
                <div class="col-md-6">
                  <form @submit="uploadToolkit" enctype="multipart/form-data">
                    <div class="form-group">
                      <label><b>Upload Toolkit Files</b></label>
                      <input type="file" class="form-control" id="file" ref="file" @change="fileOnChange()" />
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary" :disabled="step.disabled">Upload</button>
                    </div>
                  </form>
                </div>
                <div class="col-md-12">
                  <h5 class="page-sub-title mt-5 mb-0">Uploaded Files</h5>
                </div>
                </div>
                <div class="row mt-0 toolkit-uploaded-files">
                  <div class="col-xl-3 col-lg-4 my-3 col-md-6" v-if="stepUpdate.toolkit.length" v-for="tk in stepUpdate.toolkit" v-bind:key="tk.id">
                    <div class="Uploaded-file-box">
                      <a href="javascript:void(0)" @click="downloadToolkit(tk.id, tk.file)">
                        <i v-if="tk.type == 'png' || tk.type == 'jpg' || tk.type == 'jpeg' || tk.type == 'svg'"
                          class="fa-solid fa-file-image fa-10x"></i>
                        <i v-if="tk.type == 'pdf'" class="fa-solid fa-file-pdf fa-10x"></i>
                        <i v-if="tk.type == 'ppt' || tk.type == 'pptx'" class="fa-solid fa-file-powerpoint fa-10x"></i>
                        <i v-if="tk.type == 'doc' || tk.type == 'docx'" class="fa-solid fa-file-word fa-10x"></i>
                        <i v-if="tk.type == 'csv'" class="fa-solid fa-file-csv fa-10x"></i>
                        <i v-if="tk.type == 'xls' || tk.type == 'xlsx'" class="fa-solid fa-file-excel fa-10x"></i>
                        <br>
                        {{ tk.file | removeTimestampFromFileName }}
                      </a>
                      <i class="fa fa-trash cursor-pointer" @click="deleteToolkit(tk.id)"></i>
                    </div>
                  </div>
                </div>
                <div v-if="!stepUpdate.toolkit.length">
                  No Data Found
                </div>
          </div>
        </div>
      </div>
    </div>
    </section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'

export default {
  name: 'ViewStep',
  mixins: [AppMixin],
  data() {
    return {
      step: {
        'disabled': false,
        'file': '',
        'guideBook': ''
      }
    }
  },
  methods: {
    fileOnChange: function (e) {
      this.step.file = this.$refs.file.files[0];
    },
    guideBookOnChange: function (e) {
      this.step.guideBook = this.$refs.guideBook.files[0];
    },
    uploadToolkit: function (e) {
      e.preventDefault();
      let that = this
      const formData = new FormData();
      formData.append('file', that.step.file);
      formData.append('id', this.$route.params.id)
      that.step.disabled = true;
      let headers = {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
      Api.uploadToolkit(formData, headers).then(response => {
        this.$swal({
          icon: "success",
          title: "Success",
          text: "File Uploaded Successfully",
          showConfirmButton: true
        }).then(function () {
          that.step.disabled = false;
          that.getStep(that.$route.params.id)
          that.$refs.file.value = null;
        });
      }
      ).catch((error) => {
        that.step.disabled = false;
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
    uploadGuideBook: function (e) {
      e.preventDefault();
      let that = this
      const formData = new FormData();
      formData.append('guideBook', that.step.guideBook);
      formData.append('id', this.$route.params.id)
      that.step.disabled = true;
      let headers = {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
      Api.uploadGuideBook(formData, headers).then(response => {
        this.$swal({
          icon: "success",
          title: "Success",
          text: "Guide Book Uploaded Successfully",
          showConfirmButton: true
        }).then(function () {
          that.step.disabled = false;
          that.getStep(that.$route.params.id)
          that.$refs.guideBook.value = null;
        });
      }
      ).catch((error) => {
        that.step.disabled = false;
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
    downloadToolkit: function (id, name) {
      Api.downloadToolkit(id)
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
    deleteToolkit: function (id) {
      let that = this
      this.$swal({
        title: 'Are you sure?',
        text: 'You wont be able to revert !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          Api.deleteToolkit(id).then(response => {
            this.$swal({
              icon: "success",
              title: "success",
              text: "Deleted Successfully",
              showConfirmButton: true
            }).then(() => {
              that.getStep(that.$route.params.id)
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
  },
  mounted() {
    this.getStep(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
