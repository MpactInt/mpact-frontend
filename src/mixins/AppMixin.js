/* eslint-disable */
import Api from '../router/api'

export default {
  name: 'AppMixin',
  data() {
    return {
      section1: {
        id: '',
        profileType: '',
        title: '',
        description: '',
        image: '',
        disabled: false
      },
      section2: {
        id: '',
        profileType: '',
        title: '',
        description: '',
        disabled: false
      },
      section3: {
        id: '',
        profileType: '',
        title: '',
        description: '',
        image: [],
        path: '',
        disabled: false
      },
      isLoggedIn: false,
      user: {},
      company: {},
      authUser: {},
      employerDetails: {},
      searchData: {
        'name': ''
      },
      empList: [],
      companiesList: [],
      showUserList: false,
      empChat: {},
      downloadData: {
        id: '',
        type: ''
      },
      note: {
        'title': '',
        'description': '',
        'image': '',
        'oldImage': '',
        'disabled': false
      },
      stepUpdate: {
        'id': '',
        'title': '',
        'overview': '',
        'description': '',
        'image': '',
        'disabled': false,
        'toolkit': [],
        'guideBook': ''
      },
      workshopUpdate:{
        'id':'',
        'title': '',
        'description': '',
        'image': '',
        'total_hours': '',
        'date': '',
        'instructor': '',
        'additional_info': '',
        'disabled': false,
      },
      toolkitPath: '',
      todoUpdate: {
        id: '',
        company: '',
        title: '',
        description: '',
        status: '',
        disabled: false
      },
      companyData: {},
      profileType: [],
      popupSurvey: {},
      popupSurveyLength: 0,
      checkInSurvey: {},
      checkInSurveyLength: 0,
      todoList: [],
      workshopList: [],
      workshopsList: {},
      workshopsLength: 0,
      filePath: '',
      path:'',
      registered:false
    }
  },
  methods: {
    checkUserAuth: function () {
      let that = this
      if (localStorage.getItem("token")) {
        let user = localStorage.getItem("userData");
        that.user = JSON.parse(user);
        let company = localStorage.getItem("companyData");
        that.company = JSON.parse(company);
        that.isLoggedIn = true
      }
      else {
        that.isLoggedIn = false
      }
    },
    getAuthUser: function () {
      Api.getAuthUser().then(response => {
        let that = this
        that.authUser = response.data.res
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
    getEmployeeRegistrationLink: function () {
      Api.getEmployeeRegistrationLink().then(response => {
        let that = this
        that.employerDetails = response.data.res
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
    getEmployeesListChat: function () {
      let that = this
      Api.getEmployeesList(that.company.id, 1, that.searchData).then(response => {
        let that = this
        that.empList = response.data.res
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
    getEmployeeChat: function (id) {
      let that = this
      Api.getEmployee(id).then(response => {
        that.empChat = response.data.res
      });
    },
    convertToHtml: function (value) {
      var urlRegex = /(https?:\/\/[^\s]+)/g;
      return value.replace(urlRegex, function (url) {
        return '<a href="' + url + '" target="_blank">' + url + '</a>';
      })
    },
    downloadAttachment: function (id, name, type) {
      let that = this
      that.downloadData.id = id
      that.downloadData.type = type
      Api.downloadAttachment(that.downloadData)
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
    getWelcomeNote: function () {
      let that = this
      Api.getWelcomeNote().then(response => {
        that.note.title = response.data.res.title
        that.note.description = response.data.res.description
        that.note.image = response.data.res.image
        that.note.oldImage = response.data.res.image
      });
    },
    getStep: function (id) {
      let that = this
      Api.getStep(id).then(response => {
        that.$bvModal.show('update-step-modal')
        that.stepUpdate.id = response.data.res.id
        that.stepUpdate.title = response.data.res.title
        that.stepUpdate.overview = response.data.res.overview
        that.stepUpdate.description = response.data.res.description
        that.stepUpdate.toolkit = response.data.res.toolkit
        that.stepUpdate.image = response.data.res.image
        that.stepUpdate.guideBook = response.data.res.guide_book
        that.toolkitPath = response.data.toolkitPath
      });
    },
    getWorkshop: function (id) {
      let that = this
      Api.getWorkshop(id).then(response => {
        that.$bvModal.show('update-workshop-modal')
        that.workshopUpdate.id = response.data.res.id
        that.workshopUpdate.title = response.data.res.title
        that.workshopUpdate.total_hours = response.data.res.total_hours
        that.workshopUpdate.description = response.data.res.description
        that.workshopUpdate.additional_info = response.data.res.additional_info
        that.workshopUpdate.image = response.data.res.image
        that.workshopUpdate.date = response.data.res.date
        that.workshopUpdate.instructor = response.data.res.instructor
        that.path = response.data.path
        that.registered = response.data.registered
      });
    },
    getWorkshopsList: function (page = 1) {
      let that = this
      Api.getWorkshopsList(page, {}).then(response => {
        let that = this
        that.workshopsList = response.data.res
        that.workshopsLength = that.workshopsList.length
        that.filePath = response.data.path
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
    getCompaniesList: function () {
      let that = this
      Api.getCompaniesList().then(response => {
        let that = this
        that.companiesList = response.data.res
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
    getTodo: function (id) {
      let that = this;
      Api.getTodo(id).then(response => {
        that.todoUpdate.id = response.data.res.id
        that.todoUpdate.company = response.data.res.company_id
        that.todoUpdate.title = response.data.res.title
        that.todoUpdate.description = response.data.res.description
        that.todoUpdate.status = response.data.res.status
        that.$bvModal.show('update-todo-modal')
      }).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
    disabledRange: function (date) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date < today;
    },
    getCompanyDetails: function (link) {
      let that = this;
      Api.getCompanyDetails(link).then(response => {
        // console.log(response.data.res);
        that.companyData = response.data.res
        console.log(that.companyData)
      }
      ).catch((error) => {

      });
    },
    downloadProfileTypeFile: function (id, file) {
      Api.downloadProfileTypeFile(id)
        .then(response => {
          let blob = new Blob([response.data])
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = file
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
    getProfileTypeList: function () {
      let that = this
      Api.getProfileTypeList().then(response => {
        that.profileType = response.data.res
      }).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
        });
      });
    },
    getPopupSurveyList: function () {
      let that = this
      Api.getPopupSurveyList().then(response => {
        that.popupSurvey = response.data.res
        that.popupSurveyLength = that.popupSurvey.data.length
      }).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
        });
      });
    },
    getCheckInSurveyList: function () {
      let that = this
      Api.getCheckInSurveyList().then(response => {
        that.checkInSurvey = response.data.res
        that.checkInSurveyLength = that.checkInSurvey.data.length
      }).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
        });
      });
    },
    getTodoListDashboard: function () {
      let that = this
      Api.getTodoListDashboard().then(response => {
        let that = this
        that.todoList = response.data.res
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
    getRequestedWorkshopListDashboard: function () {
      let that = this
      Api.getRequestedWorkshopListDashboard().then(response => {
        let that = this
        that.workshopList = response.data.res
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
    getSection1: function (id = null) {
      if (!id) {
        id = this.$route.params.id
      }
      let that = this
      Api.getSection1(id).then(response => {
        if (response.data.res) {
          that.section1.id = response.data.res.id
          that.section1.title = response.data.res.title
          that.section1.description = response.data.res.description
          that.section1.image = response.data.res.image
        }
      })
    },
    getSection2: function (id = null) {
      if (!id) {
        id = this.$route.params.id
      }
      let that = this
      Api.getSection2(id).then(response => {
        if (response.data.res) {
          that.section2.id = response.data.res.id
          that.section2.title = response.data.res.title
          that.section2.description = response.data.res.description
        }
      })
    },
    getSection3: function (id = null) {
      if (!id) {
        id = this.$route.params.id
      }
      let that = this
      Api.getSection3(id).then(response => {
        if (response.data.res) {
          that.section3.id = response.data.res.id
          that.section3.title = response.data.res.title
          that.section3.description = response.data.res.description
          that.section3.image = response.data.res.images
          that.section3.path = response.data.res.path
        }
      })
    },
    scrollToBottom() {
      setTimeout(function () {
        const container = $("#chat-gui");
        console.log(container)
        var h = $("#chat-gui")[0].scrollHeight
        $("#chat-gui").animate({ scrollTop: h },'fast')
      }, 100)
    }
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("userData"));
    this.checkUserAuth()
  }
}