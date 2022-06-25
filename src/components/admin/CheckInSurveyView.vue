<template>
    <div class="col-md-9">
        <router-link to="/admin/popup-surveys">
            <button class="btn-primary">
                <i class="fa fa-arrow-left white"></i>
            </button>
        </router-link>
        <h3>Check In Survey Answers</h3>
        <label>{{ survey.question }}</label>
        <div class="row mt-3">
            <table class="table">
                <tr>
                    <td>Company Name</td>
                    <td>Employee Name</td>
                    <td>Answer</td>
                </tr>
                <tr v-if="checkInSurveyLength" v-for="p in checkInSurvey.data" v-bind:key="p.id">
                    <td>{{ p.company_name }}</td>
                    <td>{{ p.first_name }} {{ p.last_name }}</td>
                    <td>{{ p.answer }}</td>
                </tr>
                <tr v-if="!checkInSurveyLength">
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
export default {
    name: 'PopupSurveyView',
    mixins: [AppMixin],
    data() {
        return {
            checkInSurvey: {},
            checkInSurveyLength: 0,
            survey: {}
        }
    },
    components: {
    },
    methods: {
        getCheckInSurvey: function (id) {
            let that = this
            Api.getCheckInSurvey(id).then(response => {
                that.survey = response.data.res
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
        getCheckInSurveyAnswerList: function (id) {
            let that = this
            Api.getCheckInSurveyAnswerList(id).then(response => {
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

        }
    },
    mounted() {
        this.getCheckInSurvey(this.$route.params.id)
        this.getCheckInSurveyAnswerList(this.$route.params.id)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
