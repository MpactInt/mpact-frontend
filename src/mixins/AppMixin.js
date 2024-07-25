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
        imageShow: '',
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
      meetingRecordingsList: [],
      companiesListselect: [],
      companiesListMultiselect: [
        {
          selectAll: 'Select All',
          values: []
        }
      ],
      profileTypeListMultiselect: [
        {
          selectAll: 'Select All',
          values: []
        }
      ],
      categoryListMultiselect: [
        {
          selectAll: 'Select All',
          values: []
        }
      ],
      showUserList: true,
      showGroupList: true,
      empChat: {},
      groupChat: {},
      downloadData: {
        id: '',
        type: ''
      },
      groupSearchData: {
        'keyword': ''
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
      workshopMeetings: [],
      workshopUpdate: {
        'id': '',
        'company': '',
        'title': '',
        'description': '',
        'image': '',
        'img': '',
        'total_hours': '',
        'date': '',
        'date_time': '',
        'instructor': '',
        'additional_info': '',
        'meeting_type': '',
        'companies': '',
        'profile_type': '',
        'disabled': false,
      },
      consultinghoursUpdate: {
        'id': '',
        'company': '',
        'consulting_hours': '',
        'disabled': false,
      },
      workshopUpdateUserList: [],
      toolkitPath: '',
      todoUpdate: {
        id: '',
        company: '',
        profile_type: '',
        role: '',
        part: '',
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
      postWorkshopSurvey: {},
      postWorkshopSurveyLength: 0,
      todoList: [],
      upcomingWorkshop: [],
      upcomingWorkshopLength: 0,
      workshopList: [],
      workshopsList: {},
      workshopsListSelect: [],
      consultingHoursList: [],
      meetingsList: {},
      meetingRecordingLength: 0,
      meetingRecordingList: {},
      meetingsLength: 0,
      workshopsLength: 0,
      consultingHoursLength: 0,
      getConsultingHourData: {
        'sortBy': '',
        'keyword': '',
        'sortOrder': ''
      },
      filePath: '',
      path: '',
      registered: false,
      getWorkshopData: {
        'sortBy': '',
        'keyword': '',
        'sortOrder': ''
      },
      workshopPath: '',
      workshopsListDashboard: [],
      iframeSrc: '',
      learningPlanLength: 0,
      learningPlan: {},
      learningPlanPath: '',
      planSingle: {
        'profile_type': '',
        'title': '',
        'description': '',
        'image': '',
        'video_path': '',
        'vdo_path': '',
        'disabled': false
      },
      planFiles: [],
      messagesList: [],
      total: 0,
      imagePath: '',
      groupData: {
        'limit': 10,
        'offset': 0
      },
    }

  },
  methods: {
    logout: function () {
      Api.logout().then(response => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('userData')
        window.localStorage.removeItem('companyData')
        window.localStorage.removeItem('redirectURL')

        window.localStorage.removeItem('window-driver')

        var url = ASSESMENT_URL + 'assesment-logout';
        //alert(encodeURI(url))
        window.open(encodeURI(url))
        // this.$router.go('/login')
        window.location =  window.location.protocol + "//" + window.location.host + "/"+"login?logout=true";
        // this.$router.push({
        //   path: '/login',
        //   query: { logout: true }
        // });

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

    checkUserAuth: function () {
      let that = this
      if (localStorage.getItem("token"))
      {
        let user = localStorage.getItem("userData");
        that.user = JSON.parse(user);
        let company = localStorage.getItem("companyData");
        that.company = JSON.parse(company);
        that.isLoggedIn = true
      }
      else
      {
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
      Api.getEmployeesListChat(that.company.id, 1, that.searchData).then(response => {
        let that = this
        that.empList = response.data.res
        console.log({empList:response.data.res});
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

    truncateParagraph: function (text, size) {
      if (text.length <= size) {
        return text;
      } else {
        return text.slice(0, size) + '...';
      }
    },

    getChatGroup: function (id) {
      let that = this
      Api.getChatGroup(id).then(response => {
        that.groupChat = response.data.res
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
    openMeetingModal: function (url) {
      this.$bvModal.show('zoom-meeting-modal')
      this.iframeSrc = url
    },
    getWorkshop: function (id)
    {
      let that = this
      Api.getWorkshop(id).then(response => {
        that.$bvModal.show('update-workshop-modal')
        that.workshopUpdate.id = response.data.res.id
        that.workshopUpdate.title = response.data.res.title
        that.workshopUpdate.total_hours = response.data.res.total_hours
        that.workshopUpdate.description = response.data.res.description
        that.workshopUpdate.additional_info = response.data.res.additional_info
        that.workshopUpdate.img = response.data.res.image
        that.workshopUpdate.date = new Date(response.data.res.date)
        that.workshopUpdate.instructor = response.data.res.instructor
        that.workshopUpdate.meeting_type = response.data.res.meeting_type
        that.workshopUpdate.companies = response.data.res.company
        that.workshopUpdate.profile_type = response.data.res.profile_type
        that.workshopMeetings = response.data.res.meetings
        that.workshopPath = response.data.path
        that.workshopUpdateUserList = response.data.res.users
        that.registered = response.data.registered
      });
    },
    getConsultingHours: function (id)
    {
      let that = this
      Api.getConsultingHours(id).then(response => {
        console.log(response,"Edit Consulting Hours");
        that.$bvModal.show('update-workshop-modal')
        that.consultinghoursUpdate.id = response.data.res.id
        that.consultinghoursUpdate.company = response.data.res.company_id
        that.consultinghoursUpdate.consulting_hours = response.data.res.consulting_hour
      });
    },
    getWorkshopsListDashboard: function () {
      let that = this
      Api.getWorkshopsListDashboard().then(response => {
        let that = this
        that.workshopsListDashboard = response.data.res
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
    getWorkshopsList: function (page = 1)
    {
      let that = this
      Api.getWorkshopsList(page, that.getWorkshopData).then(response => {
        let that = this
        that.workshopsList = response.data.res
        that.workshopsLength = that.workshopsList.data.length
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
    getUpcomingWorkshop: function (page = 1)
    {
      let that = this
      Api.getUpcomingWorkshop().then(response => {
        let that = this
        that.upcomingWorkshop = response.data.res.data[0]
        //that.upcomingWorkshopLength = response.data.res.data.length
        that.upcomingWorkshopLength = response.data.res.data[0]
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
    getWorkshopsListForSelect: function ()
    {
      let that = this
      Api.getWorkshopsListForSelect().then(response => {
        let that = this
        that.workshopsListSelect = response.data.res
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
    getConsultingHoursList: function (page = 1)
    {
      let that = this
      Api.getConsultingHoursList(page, that.getConsultingHourData).then(response => {
        let that = this
        that.consultingHoursList = response.data.res
        that.consultingHoursLength = that.consultingHoursList.data.length
        console.log(that.consultingHoursLength,"getConsulting Hours List");
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
    getMeetingsList: function (page = 1) {
      let that = this
      Api.getMeetingsList(page, {}).then(response => {
        let that = this
        that.meetingsList = response.data.res
        that.meetingsLength = that.meetingsList.data.length
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
    getMeetingRecordingsList: function (id, page = 1) {
      let that = this
      Api.getMeetingRecordingsList(id, page, {}).then(response => {
        let that = this
        that.meetingRecordingsList = response.data.res.data.recording_files
        console.log(that.meetingRecordingsList)
        that.meetingRecordingLength = that.meetingRecordingsList.length
      }
      ).catch((error) => {
        // this.$swal({
        //   icon: "error",
        //   title: "error",
        //   text: "in error",
        //   showConfirmButton: true
        // });
      });

    },
    getCompaniesList: function ()
    {
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
        that.todoUpdate.company = response.data.res.company
        that.todoUpdate.profile_type = response.data.res.profile_type
        that.todoUpdate.role = response.data.res.role
        that.todoUpdate.part = response.data.res.part
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
    downloadLearningTools: function (id, file) {
      Api.downloadLearningTools(id)
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
    getPostWorkshopSurveyList: function () {
      let that = this
      Api.getPostWorkshopSurveyList().then(response => {
        that.postWorkshopSurvey = response.data.res
        that.postWorkshopSurveyLength = that.postWorkshopSurvey.data.length
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
    getTodoListDashboard: function (part) {
      let that = this
      Api.getTodoListDashboard(part).then(response => {
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
          that.section1.imageShow = response.data.res.image
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
        var h = $("#chat-gui")[0].scrollHeight
        $("#chat-gui").animate({ scrollTop: h }, 'fast')
      }, 100)
    },
    getCategoriesListMultiselect: function () {
      let that = this
      Api.getCategoriesListMultiselect().then(response => {
        let that = this
        that.categoryListMultiselect[0].values = response.data.res
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
    getProfileTypeListMultiselect: function () {
      let that = this
      Api.getProfileTypeListMultiselect().then(response => {
        let that = this
        that.profileTypeListMultiselect[0].values = response.data.res
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

    getCompaniesListMultiselect: function ()
    {
      let that = this
      Api.getCompaniesList().then(response => {
        let that = this
        that.companiesListselect = response.data.res;
        that.companiesListMultiselect[0].values = response.data.res
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
    getLearningPlanList: function (page = 1) {
      let that = this
      Api.getLearningPlanList(page).then(response => {
        that.learningPlan = response.data.res
        that.learningPlanLength = that.learningPlan.data.length
        that.learningPlanPath = response.data.path
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
    getEmpLearningPlanList: function (page = 1) {
      let that = this
      Api.getEmpLearningPlanList(page).then(response => {
        that.learningPlan = response.data.res
        that.learningPlanLength = that.learningPlan.data.length
        that.learningPlanPath = response.data.path
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
    getLearningPlanFiles: function () {
      let that = this
      Api.getLearningPlan(that.$route.params.id).then(response => {

        that.planSingle.profile_type = response.data.res.profile_type
        that.planSingle.title = response.data.res.title
        that.planSingle.description = response.data.res.description
        that.planSingle.image = response.data.res.image
        that.planSingle.part = response.data.res.part
        that.planSingle.video_path = response.data.res.video_path
        that.planSingle.vdo_path = response.data.vdo_path

        that.planFiles = response.data.res.files
        console.log(response,"getLearningPlanFiles");
        that.filePath = response.data.path
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
    downloadLearningPlanFile: function (id, file) {
      Api.downloadLearningPlanFile(id)
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
    alphabetsOnly: function (e) {
      console.log(e.target.value)
      let char = String.fromCharCode(e.keyCode); // Get the character
      if (/^[A-Za-z]+$/.test(char)) {
        return true;
      } else {
        e.preventDefault();
      }
    },
    numbersOnly: function (e) {
      console.log(e.target.value)
      let char = String.fromCharCode(e.keyCode); // Get the character
      if (/^[0-9]+$/.test(char)) {
        return true;
      } else {
        e.preventDefault();
      }
    },


    getGroupChatMessage: function () {
      let that = this
      let id = this.$route.params.id
      Api.getGroupChatMessage(id, that.groupData).then(response => {
        that.messagesList = response.data.res
        that.imagePath = response.data.path
        that.total = response.data.total
        this.scrollToBottom()
      }
      ).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        })
      })
    },
    getOneToOneMessage: function () {
      let that = this
      let id = this.$route.params.id
      Api.getOneToOneMessage(id, that.groupData).then(response => {
        that.messagesList = response.data.res
        that.imagePath = response.data.path
        that.total = response.data.total
        this.scrollToBottom()
      }
      ).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        })
      })
    },
    readGroupMessage(id) {
      Api.readGroupMessage(id).then(response => {
        this.getChatGroups();
      }
      ).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        })
      })
    },
    readOneToOneMessage(id) {
      Api.readOneToOneMessage(id).then(response => {
        this.getEmployeesListChat()
      }
      ).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        })
      })
    },
    getEmployeeChat: function (id) {
      let that = this
      Api.getEmployee(id).then(response => {
        that.empChat = response.data.res
      });
    },
    getChatGroups: function () {
      let that = this;
      Api.getChatGroups(that.groupSearchData).then(response => {
        that.chatGroups = response.data.res
        console.log({chatGroups: response.data.res})
      })
    },
    assesmentLogin: function () {
      var url = ASSESMENT_URL + 'assesment-login?';
      var c = 'id=' + this.user.assesment_id + '&email=' + this.user.email + '&name=' + this.company.company_name + '&password=' + this.user.password + '&is_academic=0';
      console.log(this.authUser.company_domain.indexOf(".edu"));
      if (this.authUser.company_domain.indexOf(".edu") > -1) {
        c = 'id=' + this.user.assesment_id + '&email=' + this.user.email + '&name=' + this.company.company_name + '&password=' + this.user.password + '&is_academic=1';
      }
      console.log(url + c);

      //window.open(encodeURI(url + c), '_blank')
      console.log(encodeURI(url + c));
      window.location = encodeURI(url + c)

      // let that = this;
      // Api.assesmentLogin().then(response => {
      //   window.open(response.data.url,'_blank')
      // })
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("userData"));
    this.checkUserAuth()
  }
}
