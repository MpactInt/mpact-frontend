<template>
<section>
    <div class="px-6 flex lg:flex-row flex-wrap justify-end space-x-2">
        <div class="lg:w-[68%] w-full">
            <div class="mb-4 border-b border-gray-200">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" role="tablist">  
                    <li v-for="(tab, index) in tabs" :key="tab.id" class="mr-2" role="presentation">
                        <button :class="['inline-block p-4 border-b-2 rounded-t-lg', { 'border-transparent': active_tab !== tab.id, 'hover:text-gray-600 hover:border-gray-300': active_tab !== tab.id }]" @click="selectTab(tab.id)">
                            {{ tab.name }}
                        </button>
                    </li>
                </ul>
            </div>

            <component :is="currentComponent" v-bind="componentProps" /> 
        </div>
        <div class="lg:w-[30%] w-full">
             <div class="my-4 bg-white border border-gray-200 rounded-[20px] shadow text-black mt-[4.5rem] m-2 p-2" v-if="upcomingWorkshopLength">
                <!-- upcoming workshops -->
                <UpcomingWorkshops :timeStampToDateOnly="timeStampToDateOnly" :filePath="filePath" :upcomingWorkshop="upcomingWorkshop" :currentUrl="currentUrl" :upcomingWorkshopLength="upcomingWorkshopLength" @registerForWorkshop="registerForWorkshop"/>
            </div>

            <!-- Announcements -->
            <Announcements :announcementsList="announcementsList" :currentUrl="currentUrl" id="tutorial_setup_emp_announcements"/>

            <!-- chats -->
            <Chats :chatList="chatList" :currentUrl="currentUrl" id="tutorial_setup_emp_chat"/>
        </div>
    </div>

    <b-modal id="popup-survey-modal" title="Popup Survey" @hide="hidePopupSurvey">
        <CustomSurvey v-if="pg.length" :surveyProp="pg" :submitPopupSurvey="submitPopupSurvey" />
        <BarChart v-else :chartData="res" :question="chartData.question" />
    </b-modal>
</section>
</template>

<script>
/* eslint-disable */
import AppMixin from "../../mixins/AppMixin";
import Api from "../../router/api";
import CustomSurvey from "./CustomSurvey.vue";
import BarChart from "../common/BarChart.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import RecentSectionVue from "../common/RecentSection.vue";
import Part1 from "./dashboard/part1.vue";
import Part2 from "./dashboard/part2.vue";
import Part3 from "./dashboard/part3.vue";
import Part4 from "./dashboard/part4.vue";
import General from "./dashboard/general.vue";
import Announcements from "./dashboard/sidebar/Announcements.vue";
import Chats from "./dashboard/sidebar/Chats.vue";
import UpcomingWorkshops from "./dashboard/sidebar/UpcomingWorkshops.vue";

export default {
    name: "Dashboard",
    mixins: [AppMixin],
    components: {
        CustomSurvey,
        BarChart,
        VueSlickCarousel,
        RecentSectionVue,
        Part1,
        Part2,
        Part3,
        Part4,
        General,
        Announcements,
        Chats,
        UpcomingWorkshops
    },
    data() {
        return {
            pg: [],
            learningPlan: [],
            learningPlanPath: "",
            chartData: [],
            chartDataPer: [],
            res: [],
            currentUrl: '',
            announcementsList: [],
            chatList: [],
            personalizedTipsList: [],
            part_percentage:0,
            active_tab: 1,
            timeStampToTimeOnly: '',
            timeStampToDateOnly: '',
            overallPercentUser:'',
            tabs: [
                {
                    id: 1,
                    name: 'Part 1'
                },
                {
                    id: 2,
                    name: 'Part 2'
                },
                {
                    id: 3,
                    name: 'Part 3'
                },
                {
                    id: 4,
                    name: 'Part 4'
                },
                {
                    id: 5,
                    name: 'General'
                },
            ],
            componentMapping: {
                1: 'Part1',
                2: 'Part2',
                3: 'Part3',
                4: 'Part4',
                5: 'General',
            },
            tab_disabled: [false, true, true, true],

        };
    },
    computed: {
        currentComponent() {
            return this.componentMapping[this.active_tab];
        },
        componentProps()
        {
            // Define component props based on active tab or other data
            return {
                todoList: this.todoList,
                personalizedTipsList: this.personalizedTipsList,
                overallPercentUser:this.overallPercentUser,
                learningPlan: this.learningPlan,
                section3: this.section3,
                currentUrl: this.currentUrl,
                learningPlanPath: this.learningPlanPath,
                chartData: this.chartData,
                chartDataPer: this.chartDataPer,
                res: this.res,
                pg: this.pg,
                truncateParagraph: this.truncateParagraph,
                timeStampToTimeOnly: this.timeStampToTimeOnly,
                part_percentage:this.part_percentage,
            };
        },
    },
    methods: {

        initDriver()   
    {
        // Run Api

        const user_data = window.localStorage.getItem('userData');
        Api.setDashboardStatusUpdate(user_data)
            .then(response => {
                console.log(response, "Get Dashboard data"); // Log response for debugging
            })
            .catch(error => {
                console.error("Error in API call:", error); // Log any errors that occur
            });

        // Run Api
        const driver = window.driver.js.driver;

        const driverObj = driver({
          showProgress: true,
          steps: [
        { popover: { title: 'Welcome Tutorial', description: 'Welcome to Mpact International. This tutorial will walk you through the key features of the site.' } },
        { element: '#tutorial_setup_logo', popover: { title: 'Return Home', description: 'Use this icon anytime you want to return to the home page.' } },
        { element: '#tutorial_setup_logout', popover: { title: 'Logout', description: 'Use this to logout of the site, but don’t worry if you forget you will automatically be logged out after being idle for 60 minutes' } },
        { element: '#tutorial_setup_learning_progress', popover: { title: 'Learning Progress', description: 'This section tracks your learning and benchmarks you against others in your organization. To advance through Parts 1-4 you must complete 70% of the learning in each prior section.' } },
        { element: '#tutorial_setup_learning', popover: { title: 'Learning', description: 'This section shows the most recent learning modules available to you.' } },
        { element: '#tutorial_setup_emp_announcements', popover: { title: 'Announcements', description: 'Check for announcements from your company administrator.' } },
        { element: '#tutorial_setup_emp_chat', popover: { title: 'Chat', description: 'Use the right toolbar or the left navigation menu to chat with colleagues. Use chat to send messages to individuals or to a group you create.' } },
        { element: '#tutorial_setup_assessment', popover: { title: 'Assessment', description: 'Visit the assessment to complete your personal profile and the assessment questions. Get your personalized report on your preferred interaction style.' } },
        { element: '#tutorial_setup_emp_pertips', popover: { title: 'Personalized Tips', description: 'Recommendations for ways you can enhance your connection, communication, and interactions with others. These tips are based on your interaction profile.' } },
        { element: '#tutorial_setup_emp_todo', popover: { title: 'To Do', description: 'Periodically, we will provide you with activities to do. Check here for those.' } },
        { element: '#tutorial_setup_workshops', popover: { title: 'Workshops', description: 'Visit workshops to register for upcoming sessions of live workshops.'} },
        { element: '#tutorial_setup_feedback-team', popover: { title: 'Feedback to your team', description: 'You can send direct and anonymous feedback to your company administrator in this section. Click anonymous if you choose to not share your name.' } },
          ]
        });

        driverObj.drive();
      
    },

        selectTab: function (id) 
        {
            if (id == 5) {
                this.active_tab = id;
                this.getLearningPlanListDashboard('general');
                this.getTodoListDashboard('general');
                this.getPartPercentage('general');
            }
            else
            {
                var prev_id = id - 1;
                var that = this;
              
                if (prev_id == 0) 
                {

                    this.active_tab = id;
                    this.getLearningPlanListDashboard(`part${id}`);
                    this.getTodoListDashboard(`part${id}`);
                    this.getPartPercentage(`part${id}`);
                } 
                else 
                {

                    this.shouldGoNextTab(`part${prev_id}`, (e) => {

                        if (e.data.result) {
                            that.active_tab = id;
                            that.getLearningPlanListDashboard(`part${id}`);
                            
                            that.getTodoListDashboard(`part${id}`);
                            that.getPartPercentage(`part${id}`);
                        } else {
                            that.$swal({
                                icon: "info",
                                title: "Info",
                                text: `To access this section, complete at least 60% of the learning in Part ${prev_id}. Your progress matters—finish the required steps to unlock this part and delve further into your learning experience.`,
                                showConfirmButton: true
                            });
                        }
                    })

                }
            }

        },

        registerForWorkshop: function (id) {
            let that = this;
            Api.registerForWorkshop(id).then(response => {
                this.$swal({
                    icon: "success",
                    title: "Success",
                    text: "You have successfully registered for workshop",
                    showConfirmButton: true
                });
                this.getWorkshopsListDashboard();
            });
        },
        getSurveyQuestionsDashboard: function () {
            let that = this;
            Api.getSurveyQuestionsDashboard().then(response => {
                this.pg = response.data.res;
                that.getChartData();
            });
        },
        submitPopupSurvey: function (survey) {
            let that = this;
            let data = JSON.stringify(survey.data, null, 3);
            this.surveyRes = JSON.parse(data);
            Api.submitPopupSurvey(this.surveyRes).then(response => {
                that.getSurveyQuestionsDashboard();
            });
        },
        getLearningPlanListDashboard: function (part) 
        {
            let that = this;
            console.log({
                r: "runing"
            });
            Api.getLearningPlanListDashboard(part)
                .then(response => {
                    console.log({
                        response
                    });
                    that.learningPlan = response.data.res;
                    that.learningPlanPath = response.data.path;
                })
                .catch(error => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {});
                });
        },
        shouldGoNextTab: function (part, fn = null) {
            let that = this;

            return Api.shouldGoNextTab({
                    part
                })
                .then(response => {
                    console.log(response);
                    fn(response);
                })
                .catch(error => {
                    console.log(error)
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response ? error.response.data.message : 'Unknow Error',
                        showConfirmButton: true
                    }).then(function () {});
                });
        },
        getChartData: function () {
            let that = this;
            Api.getChartData()
                .then(response => {
                    that.chartData = response.data.res;
                    that.chartDataPer = response.data.per;
                    while (that.res.length > 0) {
                        that.res.pop();
                    }
                    that.res.push(
                        [this.chartData.option_1, this.chartDataPer.per1],
                        [this.chartData.option_2, this.chartDataPer.per2],
                        [this.chartData.option_3, this.chartDataPer.per3],
                        [this.chartData.option_4, this.chartDataPer.per4]
                    );
                })
                .catch(error => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {});
                });
        },
        getRecentAnnouncementsList: function () {
            let that = this
            Api.getRecentAnnouncementsList(that.company.id).then(response => {
                let that = this
                that.announcementsList = response.data.res
            }).catch((error) => {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: error.response.data.message,
                    showConfirmButton: true
                });
            });
        },
        getRecentChatList: function () {
            let that = this
            Api.getRecentChatList(that.company.id).then(response => {
                let that = this
                that.chatList = response.data.res
            }).catch((error) => {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: error.response.data.message,
                    showConfirmButton: true
                });
            });
        },
        getPersonalizedTips: function () {
            let that = this
            Api.getPersonalizedTips().then(response => {
                let that = this
                that.personalizedTipsList = response.data.res;
               
            }).catch((error) => {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: error.response.data.message,
                    showConfirmButton: true
                });
            });
        },
        getPartPercentage: function (part) 
        {
            let that = this
            Api.getPartPercentage({part}).then(response => {
                let that = this
                that.part_percentage = Math.round(response.data.part_percentage);
                that.overallPercentUser = response.data.overallPercentUser.toFixed(1);
                console.log({overallPercentUser: that.overallPercentUser})
            }).catch((error) => {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: error.response.data.message,
                    showConfirmButton: true
                });
            });
        },
        
        showPopUpSurveyModal() 
        {
                    const lastCalled = localStorage.getItem('popUpSurveyLastCalled');
                    const currentTime = new Date().getTime();

                    if (!lastCalled || (currentTime - lastCalled) > 86400000) {
                        this.$root.$emit('bv::show::modal', 'popup-survey-modal');
                    
                    }
        },

        hidePopupSurvey(e) 
        {
            const currentTime = new Date().getTime();
              localStorage.setItem('popUpSurveyLastCalled', currentTime);
        },

        // 
        fnTimeStampToTimeOnly: function (timestamp) 
        {
            const date = new Date(timestamp);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            // Format the timṭe value
            this.timeStampToTimeOnly = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        },
        fnTimeStampToDateOnly: function (timestamp) {
            const date = new Date(timestamp);

            // Extract year, month, and day components from the date
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed, so adding 1
            const day = date.getDate().toString().padStart(2, '0');

            // Format the date value
            this.timeStampToDateOnly = `${year}-${month}-${day}`; // Format: YYYY-MM-DD

            return formattedDate;
        },

    },
    created() 
    {
        var url = document.URL.split('/');
        this.currentUrl = url[3]
        this.getTodoListDashboard('part1');
        this.getRequestedWorkshopListDashboard();
        this.getSection1(this.company.profile_type_id);
        this.getSection2(this.company.profile_type_id); 
        this.getSection3(this.company.profile_type_id);
        this.getSurveyQuestionsDashboard();
        this.getWorkshopsListDashboard();
        this.getLearningPlanListDashboard('part1');
        this.getRecentAnnouncementsList();
        this.getRecentChatList();
        this.getUpcomingWorkshop();
        this.getPersonalizedTips();
        this.getPartPercentage("part1");
        this.fnTimeStampToTimeOnly()
    },
    mounted() 
    {
         if (window.localStorage.getItem('window-driver') === null) 
        {
            window.localStorage.setItem('window-driver', 'window.driver');
            this.initDriver();
        }

        if (this.$route.params.popup == 'pop-up-survey') 
        {
            //this.showPopUpSurveyModal();
        }
    }
};
// var swiper = new Swiper(".mySwiper", {});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.sd-page {
    padding: 0 !important;
}

.sd-root-modern {
    background: transparent !important;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
