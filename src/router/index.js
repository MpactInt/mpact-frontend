/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
// import Chargebee from '@/components/Chargebee'
import CreateCompany from '@/components/CreateCompany'
import Checkout from '@/components/Checkout'
import PaymentSuccess from '@/components/PaymentSuccess'
import Registration from '@/components/Registration'
import Login from '@/components/Login'
import ForgetPassword from '@/Components/ForgetPassword'
import LogoutFromAssessment from '@/components/LogoutFromAssessment'
import Plan from '@/components/Plan'
import ResetPassword from '@/components/ResetPassword'
import CreatePassword from '@/components/CreatePassword'
import SubmitCheckInSurvey from '@/components/SubmitCheckInSurvey'
import SurveyConsent from '@/components/SurveyConsent'
import NonEmployeeSurvey from '@/components/NonEmployeeSurvey'
import SubmitPostWorkshopSurvey from '@/components/SubmitPostWorkshopSurvey'

/******Load Employer Components*********/

import AskQuestion from '@/components/employer/AskQuestion'
import WelcomeNote from '@/components/employer/WelcomeNote'
import Profile from '@/components/employer/Profile'
import ProfileEdit from '@/components/employer/ProfileEdit'
import NewDashboardEmplr from "@/components/employer/NewDashboardEmplr";
import Dashboard from '@/components/employer/dashboard/Dashboard'
import MembershipDetails from '@/components/employer/MembershipDetails'
import Resources from '@/components/employer/Resources'
import Workshop from '@/components/employer/Workshop'
import WorkshopHistory from '@/components/employer/WorkshopHistory'
import TeamManagement from '@/components/employer/team-management/TeamManagement'
import RegistrationLink from '@/components/employer/team-management/RegistrationLink'
import Employees from '@/components/employer/team-management/Employees'
import Invitations from '@/components/employer/team-management/Invitations'
import SurveyInvite from '@/components/employer/team-management/SurveyInvite'
import Announcements from '@/components/employer/Announcements'
import Settings from '@/components/employer/Settings'
import SettingsLogo from '@/components/employer/SettingsLogo'
import SettingsPassword from '@/components/employer/SettingsPassword'
import MessageMyTeam from '@/components/employer/MessageMyTeam'
import OneToOneChat from '@/components/employer/OneToOneChat'
import ChatInbox from '@/components/employer/ChatInbox'
import GroupChat from '@/components/employer/GroupChat'
import ViewStep from '@/components/employer/dashboard/ViewStep'
import Opportunity from '@/components/employer/Opportunity'
import Todo from '@/components/employer/Todo'
import ViewTodo from '@/components/employer/ViewTodo'
import RequestWorkshop from '@/components/employer/RequestWorkshop'
import FeedbackEmployee from '@/components/employer/FeedbackEmployee'
import CustomerSupport from '@/components/employer/CustomerSupport'
import AskYourCareTeam from '@/components/employer/AskYourCareTeam'
import WorkshopView from '@/components/employer/WorkshopView'
import ViewQuestion from '@/components/employer/ViewQuestion'


/********Load employee components */
import NewDashboard from "@/components/employee/NewDashboard";
import EmpDashboard from '@/components/employee/Dashboard'
import EmpProfile from '@/components/employee/Profile'
import EmpProfileEdit from '@/components/employee/ProfileEdit'
import EmpResources from '@/components/employee/Resources'
import EmpAnnouncements from '@/components/employee/Announcements'
import EmpAskQuestion from '@/components/employee/AskQuestion'
import EmpTodo from '@/components/employee/Todo'
import EmpViewTodo from '@/components/employee/ViewTodo'
import EmpRequestWorkshop from '@/components/employee/RequestWorkshop'
import EmpCompanyFeedback from '@/components/employee/CompanyFeedback'
import EmpWorkshop from '@/components/employee/Workshops'
import EmpViewWorkshop from '@/components/employee/ViewWorkshop'
import EmpMessageMyTeam from '@/components/employee/MessageMyTeam'
import EmpOneToOneChat from '@/components/employee/OneToOneChat'
import EmpGroupChat from '@/components/employee/GroupChat'
import EmpWelcomeNote from '@/components/employee/WelcomeNote'
import EmpLearningPlan from '@/components/employee/LearningPlan'
import EmpLearningPlanView from '@/components/employee/LearningPlanView'
import EmpMeetingRecording from '@/components/employee/MeetingRecording'
import EmpAskYourCareTeam from '@/components/employee/AskYourCareTeam'
import EmpCustomerSupport from '@/components/employee/CustomerSupport'
import EmpViewQuestion from '@/components/employee/ViewQuestion'


/********Load admin components */

import AdminDashboard from '@/components/admin/dashboard/Dashboard'
import AdminDashboard1 from '@/components/admin/dashboard1/Dashboard'
import AdminDashboard2 from '@/components/admin/dashboard2/Dashboard'

import AdminProfile from '@/components/admin/Profile'
import AdminProfileEdit from '@/components/admin/AdminProfileEdit'
import AdminStepConfiguration from '@/components/admin/steps/StepConfiguration'
import AdminViewStep from '@/components/admin/steps/ViewStep'
import AdminResources from '@/components/admin/Resources'
import AdminOpportunity from '@/components/admin/Opportunity'
import AdminTodo from '@/components/admin/Todo'
import AdminRequestWorkshop from '@/components/admin/RequestWorkshop'
import AdminAskYourCareTeam from '@/components/admin/AskYourCareTeam'
import AdminCompanies from '@/components/admin/Companies'
import AdminEmployeeProfileType from '@/components/admin/EmployeeProfileType'
import AdminPopupSurveys from '@/components/admin/PopupSurvey'
import AdminPopupSurveyView from '@/components/admin/PopupSurveyView'
import AdminCheckInSurveys from '@/components/admin/CheckInSurvey'
import AdminCheckInSurveyView from '@/components/admin/CheckInSurveyView'
import AdminPostWorkshopSurveys from '@/components/admin/PostWorkshopSurvey'
import AdminPostWorkshopSurveyView from '@/components/admin/PostWorkshopSurveyView'
import AdminEmployeeProfileTypeView from '@/components/admin/EmployeeProfileTypeView'
import AdminSendEmail from '@/components/admin/SendEmail'
import AdminWorkshop from '@/components/admin/Workshop'
import AdminConsultingHours from '@/components/admin/ConsultingHours'
import AdminWorkshopView from '@/components/admin/WorkshopView'
import AdminMeeting from '@/components/admin/Meeting'
import AdminMeetingRecording from '@/components/admin/MeetingRecording'
import AdminWelcomeNote from '@/components/admin/WelcomeNote'
import AdminLearningPlan from '@/components/admin/LearningPlan'
import AdminLearningPlanView from '@/components/admin/LearningPlanView'
import AdminLearningPlanResource from '@/components/admin/LearningPlanResource'
import AdminViewQuestion from '@/components/admin/ViewQuestion'
import AdminSettings from '@/components/admin/Settings'
import AdminCategories from '@/components/admin/Categories'
import AdminTips from '@/components/admin/Tips'
import MobileUsers from '@/components/admin/MobileUsers'
import PastTips from '@/components/admin/PastTips'
import OldTips from '@/components/admin/OldTips'




Vue.use(Router)



function guardMyroute(to, from, next) {
  var isAuthenticated = false
  // var backAuth = getAuthUser()
  if (localStorage.getItem('token')) {
    isAuthenticated = true
  } else {
    isAuthenticated = false
  }
  if (isAuthenticated)
  {
    next()
  } else {
    next('/login')
  }
}

function getAuthUser() {
  Api.getAuthUser().then(response => {
    let that = this
    return response.data.res
  }
  )
}

export const router = new Router({
         routes: [
           {
             path: "/",
             name: "Plan",
             component: Plan
           },
           {
             path: "/create-company",
             name: "Create Company",
             component: CreateCompany
           },
           {
             path: "/checkout/:link",
             name: "Checkout",
             component: Checkout
           },
           {
             path: "/payment-success/:link",
             name: "PaymentSuccess",
             component: PaymentSuccess
           },
           {
             path: "/registration/:link",
             name: "Employee Registration",
             component: Registration
           },
           {
             path: "/reset-password/:link",
             name: "Reset Password",
             component: ResetPassword
           },
           {
             path: "/create-password/:link",
             name: "Create Password",
             component: CreatePassword
           },
           {
             path: "/survey-consent/:link",
             name: "SurveyConsent",
             component: SurveyConsent
           },
           {
             path: "/non-employee-survey/:link",
             name: "NonEmployeeSurvey",
             component: NonEmployeeSurvey
           },
           {
             path: "/submit-checkin-survey/:link",
             name: "SubmitCheckInSurvey",
             component: SubmitCheckInSurvey
           },
           {
             path: "/submit-post-workshop-survey/:link/:w_id",
             name: "SubmitPostWorkshopSurvey",
             component: SubmitPostWorkshopSurvey
           },
           {
             path: "/login",
             name: "Login",
             component: Login
           },
           {
            path: "/forget-password",
            name: "ForgetPassword",
            component: ForgetPassword
          },
           {
             path: "/logout-from-assessment",
             name: "Logout From Assessment",
             component: LogoutFromAssessment,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: false
             }
           },


           /************************employer routes ************************/

           {
             path: "/employer/team-management",
             beforeEnter: guardMyroute,
             name: "TeamManagement",
             component: TeamManagement,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/team-management/registration-link",
             beforeEnter: guardMyroute,
             name: "RegistrationLink",
             component: RegistrationLink,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/team-management/employees",
             beforeEnter: guardMyroute,
             name: "Employees",
             component: Employees,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/team-management/invitations",
             beforeEnter: guardMyroute,
             name: "Invitations",
             component: Invitations,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/team-management/survey-invite",
             beforeEnter: guardMyroute,
             name: "SurveyInvite",
             component: SurveyInvite,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/dashboard",
             beforeEnter: guardMyroute,
             name: "Dashboard",
             component: Dashboard,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/new-dashboard",
             beforeEnter: guardMyroute,
             name: "NewDashboardEmplr",
             component: NewDashboardEmplr,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/profile",
             beforeEnter: guardMyroute,
             name: "Profile",
             component: Profile,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/edit-profile",
             beforeEnter: guardMyroute,
             name: "ProfileEdit",
             component: ProfileEdit,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/membership-details",
             beforeEnter: guardMyroute,
             name: "MembershipDetails",
             component: MembershipDetails,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/resources",
             beforeEnter: guardMyroute,
             name: "Resources",
             component: Resources,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/workshops",
             beforeEnter: guardMyroute,
             name: "Workshop",
             component: Workshop,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/workshop-history",
             beforeEnter: guardMyroute,
             name: "WorkshopHistory",
             component: WorkshopHistory,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/ask-question",
             beforeEnter: guardMyroute,
             name: "AskQuestion",
             component: AskQuestion,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/ask-your-care-team",
             beforeEnter: guardMyroute,
             name: "AskYourCareTeam",
             component: AskYourCareTeam,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/announcements",
             beforeEnter: guardMyroute,
             name: "Announcements",
             component: Announcements,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/settings",
             beforeEnter: guardMyroute,
             name: "Settings",
             component: Settings,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/settings-logo",
             beforeEnter: guardMyroute,
             name: "SettingsLogo",
             component: SettingsLogo,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/settings-password",
             beforeEnter: guardMyroute,
             name: "SettingsPassword",
             component: SettingsPassword,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/welcome-note",
             beforeEnter: guardMyroute,
             name: "WelcomeNote",
             component: WelcomeNote,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/message-my-team",
             beforeEnter: guardMyroute,
             name: "MessageMyTeam",
             component: MessageMyTeam,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/one-to-one-chat/:id",
             beforeEnter: guardMyroute,
             name: "OneToOneChat",
             component: OneToOneChat,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/one-to-one-chat",
             beforeEnter: guardMyroute,
             name: "OneToOneChat",
             component: OneToOneChat,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/group-chat/:id",
             beforeEnter: guardMyroute,
             name: "GroupChat",
             component: GroupChat,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/group-chat",
             beforeEnter: guardMyroute,
             name: "GroupChat",
             component: GroupChat,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/view-step/:id",
             beforeEnter: guardMyroute,
             name: "ViewStep",
             component: ViewStep,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/opportunities",
             beforeEnter: guardMyroute,
             name: "Opportunities",
             component: Opportunity,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/todo",
             beforeEnter: guardMyroute,
             name: "Todo",
             component: Todo,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/todo/:id",
             beforeEnter: guardMyroute,
             name: "ViewTodo",
             component: ViewTodo,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/request-workshop",
             beforeEnter: guardMyroute,
             name: "RequestWorkshop",
             component: RequestWorkshop,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/feedback-by-employees",
             beforeEnter: guardMyroute,
             name: "FeedbackEmployee",
             component: FeedbackEmployee,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/view-workshop/:id",
             beforeEnter: guardMyroute,
             name: "WorkshopView",
             component: WorkshopView,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/customer-support",
             beforeEnter: guardMyroute,
             name: "CustomerSupport",
             component: CustomerSupport,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
             path: "/employer/view-question/:id",
             beforeEnter: guardMyroute,
             name: "ViewQuestion",
             component: ViewQuestion,
             meta: {
               requiresAuth: true,
               employerAuth: true,
               employeeAuth: false,
               adminAuth: false
             }
           },
           {
            path: "/employer/employee-dashboard",
            beforeEnter: guardMyroute,
            name: "Dashboard",
            component: EmpDashboard,
            meta: {
              requiresAuth: true,
              employerAuth: true,
              employeeAuth: false,
              adminAuth: false
            }
          },
          {
            path: "/employer/my-learning-plan",
            beforeEnter: guardMyroute,
            name: "LearningPlan",
            component: EmpLearningPlan,
            meta: {
              requiresAuth: true,
              employerAuth: true,
              employeeAuth: false,
              adminAuth: false
            }
          },
          {
            path: "/employer/my-learning-plan/:id",
            beforeEnter: guardMyroute,
            name: "LearningPlanView",
            component: EmpLearningPlanView,
            meta: {
              requiresAuth: true,
              employerAuth: true,
              employeeAuth: false,
              adminAuth: false
            }
          },

           // routes for employees
           {
             path: "/employee/dashboard",
             beforeEnter: guardMyroute,
             name: "Dashboard",
             component: EmpDashboard,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/new-dashboard",
             beforeEnter: guardMyroute,
             name: "NewDashboard",
             component: NewDashboard,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/dashboard/:popup",
             beforeEnter: guardMyroute,
             name: "Dashboard",
             component: EmpDashboard,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/profile",
             beforeEnter: guardMyroute,
             name: "Profile",
             component: EmpProfile,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/edit-profile",
             beforeEnter: guardMyroute,
             name: "EmpProfileEdit",
             component: EmpProfileEdit,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/message-my-team",
             beforeEnter: guardMyroute,
             name: "MessageMyTeam",
             component: EmpMessageMyTeam,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/one-to-one-chat/:id",
             beforeEnter: guardMyroute,
             name: "OneToOneChat",
             component: EmpOneToOneChat,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/one-to-one-chat",
             beforeEnter: guardMyroute,
             name: "OneToOneChat",
             component: EmpOneToOneChat,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/group-chat/:id",
             beforeEnter: guardMyroute,
             name: "GroupChat",
             component: EmpGroupChat,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/group-chat",
             beforeEnter: guardMyroute,
             name: "GroupChat",
             component: EmpGroupChat,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/resources",
             beforeEnter: guardMyroute,
             name: "Resources",
             component: EmpResources,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/announcements",
             beforeEnter: guardMyroute,
             name: "Announcements",
             component: EmpAnnouncements,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/customer-support",
             beforeEnter: guardMyroute,
             name: "CustomerSupport",
             component: EmpCustomerSupport,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/ask-question",
             beforeEnter: guardMyroute,
             name: "AskQuestion",
             component: EmpAskQuestion,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/todo",
             beforeEnter: guardMyroute,
             name: "Todo",
             component: EmpTodo,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/todo/:id",
             beforeEnter: guardMyroute,
             name: "ViewTodo",
             component: EmpViewTodo,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/request-workshop",
             beforeEnter: guardMyroute,
             name: "RequestWorkshop",
             component: EmpRequestWorkshop,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/feedback-to-company",
             beforeEnter: guardMyroute,
             name: "CompanyFeeback",
             component: EmpCompanyFeedback,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/workshops",
             beforeEnter: guardMyroute,
             name: "Workshops",
             component: EmpWorkshop,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/workshop/:id",
             beforeEnter: guardMyroute,
             name: "ViewWorkshop",
             component: EmpViewWorkshop,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/welcome-note",
             beforeEnter: guardMyroute,
             name: "WelcomeNote",
             component: EmpWelcomeNote,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/my-learning-plan",
             beforeEnter: guardMyroute,
             name: "LearningPlan",
             component: EmpLearningPlan,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/my-learning-plan/:id",
             beforeEnter: guardMyroute,
             name: "LearningPlanView",
             component: EmpLearningPlanView,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/ask-your-care-team",
             beforeEnter: guardMyroute,
             name: "AskYourCareTeam",
             component: EmpAskYourCareTeam,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/meeting-recordings/:id",
             beforeEnter: guardMyroute,
             name: "EmpMeetingRecording",
             component: EmpMeetingRecording,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           {
             path: "/employee/view-question/:id",
             beforeEnter: guardMyroute,
             name: "ViewQuestion",
             component: EmpViewQuestion,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: true,
               adminAuth: false
             }
           },
           //routes for admin
           {
             path: "/admin/payment-success/:link",
             name: "PaymentSuccess",
             component: PaymentSuccess,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/dashboard",
             beforeEnter: guardMyroute,
             name: "Dashboard",
             component: AdminDashboard,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
            path: "/employer/dashboard1",
            beforeEnter: guardMyroute,
            name: "Dashboard1",
            component: AdminDashboard1,
            meta: {
              requiresAuth: true,
              employerAuth: true,
              employeeAuth: false,
              adminAuth: false
            }
          },
          {
            path: "/admin/dashboard2",
            beforeEnter: guardMyroute,
            name: "Dashboard2",
            component: AdminDashboard2,
            meta: {
              requiresAuth: true,
              employerAuth: false,
              employeeAuth: false,
              adminAuth: true
            }
          },
           {
             path: "/admin/profile",
             beforeEnter: guardMyroute,
             name: "Profile",
             component: AdminProfile,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/edit-profile",
             beforeEnter: guardMyroute,
             name: "AdminProfileEdit",
             component: AdminProfileEdit,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/steps-configuration",
             beforeEnter: guardMyroute,
             name: "StepConfiguration",
             component: AdminStepConfiguration,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/view-step/:id",
             beforeEnter: guardMyroute,
             name: "ViewStep",
             component: AdminViewStep,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/resources",
             beforeEnter: guardMyroute,
             name: "Resources",
             component: AdminResources,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/opportunities",
             beforeEnter: guardMyroute,
             name: "Opportunities",
             component: AdminOpportunity,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/todo",
             beforeEnter: guardMyroute,
             name: "Todo",
             component: AdminTodo,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/request-workshop",
             beforeEnter: guardMyroute,
             name: "RequestWorkshop",
             component: AdminRequestWorkshop,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/ask-your-care-team",
             beforeEnter: guardMyroute,
             name: "AskYourCareTeam",
             component: AdminAskYourCareTeam,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/companies",
             beforeEnter: guardMyroute,
             name: "Companies",
             component: AdminCompanies,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/employee-profile-type",
             beforeEnter: guardMyroute,
             name: "EmployeeProfileType",
             component: AdminEmployeeProfileType,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/employee-profile-type/:id",
             beforeEnter: guardMyroute,
             name: "EmployeeProfileTypeView",
             component: AdminEmployeeProfileTypeView,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/popup-surveys",
             beforeEnter: guardMyroute,
             name: "PopupSurveys",
             component: AdminPopupSurveys,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/popup-survey/:id",
             beforeEnter: guardMyroute,
             name: "ViewPopupSurvey",
             component: AdminPopupSurveyView,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/check-in-surveys",
             beforeEnter: guardMyroute,
             name: "CheckInSurveys",
             component: AdminCheckInSurveys,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/check-in-survey/:id",
             beforeEnter: guardMyroute,
             name: "ViewCheckInSurvey",
             component: AdminCheckInSurveyView,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/post-workshop-surveys",
             beforeEnter: guardMyroute,
             name: "PostWorkshopSurvey",
             component: AdminPostWorkshopSurveys,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/post-workshop-survey/:id",
             beforeEnter: guardMyroute,
             name: "PostWorkshopSurveyView",
             component: AdminPostWorkshopSurveyView,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/send-email",
             beforeEnter: guardMyroute,
             name: "SendEmail",
             component: AdminSendEmail,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/workshops",
             beforeEnter: guardMyroute,
             name: "AdminWorkshop",
             component: AdminWorkshop,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/view-workshop/:id",
             beforeEnter: guardMyroute,
             name: "AdminWorkshopView",
             component: AdminWorkshopView,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
            path: "/admin/consulting-hour",
            beforeEnter: guardMyroute,
            name: "AdminConsultingHours",
            component: AdminConsultingHours,
            meta: {
              requiresAuth: true,
              employerAuth: false,
              employeeAuth: false,
              adminAuth: true
            }
          },
           {
             path: "/admin/meetings",
             beforeEnter: guardMyroute,
             name: "AdminMeeting",
             component: AdminMeeting,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/meeting-recordings/:id",
             beforeEnter: guardMyroute,
             name: "AdminMeetingRecording",
             component: AdminMeetingRecording,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/checkout/:link",
             beforeEnter: guardMyroute,
             name: "Checkout",
             component: Checkout,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/welcome-note",
             beforeEnter: guardMyroute,
             name: "WelcomeNote",
             component: AdminWelcomeNote,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/learning-plan",
             beforeEnter: guardMyroute,
             name: "AdminLearningPlan",
             component: AdminLearningPlan,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/learning-plan/:id",
             beforeEnter: guardMyroute,
             name: "AdminLearningPlanView",
             component: AdminLearningPlanView,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/learning-plan-resources",
             beforeEnter: guardMyroute,
             name: "AdminLearningPlanResource",
             component: AdminLearningPlanResource,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/view-question/:id",
             beforeEnter: guardMyroute,
             name: "ViewQuestion",
             component: AdminViewQuestion,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/settings",
             beforeEnter: guardMyroute,
             name: "Settings",
             component: AdminSettings,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/categories",
             beforeEnter: guardMyroute,
             name: "Categories",
             component: AdminCategories,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/tips",
             beforeEnter: guardMyroute,
             name: "Tips",
             component: AdminTips,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/mobile-users",
             beforeEnter: guardMyroute,
             name: "MobileUsers",
             component: MobileUsers,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/past_tips",
             beforeEnter: guardMyroute,
             name: "PastTips",
             component: PastTips,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           },
           {
             path: "/admin/old_tips",
             beforeEnter: guardMyroute,
             name: "OldTips",
             component: OldTips,
             meta: {
               requiresAuth: true,
               employerAuth: false,
               employeeAuth: false,
               adminAuth: true
             }
           }
         ],
         mode: "history",
         base: "/"
       });

router.beforeEach((to, from, next) => {



  if (to.meta.requiresAuth) {
    var token = localStorage.getItem('token')
    if (token) {
      localStorage.removeItem('redirectURL');
      var user = localStorage.getItem('userData')
      var company = localStorage.getItem('companyData')
      var c = JSON.parse(company)
      var u = JSON.parse(user)
      if (to.meta.employerAuth) {
        if (u.role == "COMPANY" && c.role == "COMPANY_ADMIN") {
          next()
        } else {
          console.log(u);
          if (u.role == "COMPANY" && c.role == "COMPANY_EMP") {
            next('employee/dashboard')
          } else {
            next('admin/dashboard')
          }
        }
      } else if (to.meta.employeeAuth) {
        if (u.role == "COMPANY" && c.role == "COMPANY_EMP") {
          next()
        } else {
          if (u.role == "COMPANY" && c.role == "COMPANY_ADMIN") {
            next('employer/dashboard')
          } else {
            next('admin/dashboard')
          }
        }
      } else if (to.meta.adminAuth) {
        if (u.role == "ADMIN") {
          next()
        } else {
          if (u.role == "COMPANY" && c.role == "COMPANY_ADMIN") {
            next('employer/dashboard')
          } else {
            next('employee/dashboard')
          }
        }
      } else {
        next()
      }
    } else {
      console.log("in else");

      if(!from.name){
        localStorage.setItem('redirectURL', to.fullPath);
      }
      console.log({to, from, next})

      next()
    }
  } else {
    var token = localStorage.getItem('token')
    if (token) {
      var user = localStorage.getItem('userData')
      var company = localStorage.getItem('companyData')
      var c = JSON.parse(company)
      var u = JSON.parse(user)

      if (u.role == "COMPANY" && c.role == "COMPANY_EMP") {
        next('employee/dashboard')
      }
      else if (u.role == "COMPANY" && c.role == "COMPANY_ADMIN") {
        next('employer/dashboard')
      }
      else {
        next('admin/dashboard')
      }
    } else {
      next();
    }
  }
})
