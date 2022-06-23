<script>
/* eslint-disable */
</script>
<template>
    <div class="main-content">
        <h3>Feedback by Employees</h3>
        <div class="row">

        </div>
        <div class="row mt-3">
            <table class="table">
                <tr>
                    <td>Employee Name</td>
                    <td>Description</td>
                </tr>
                <tr v-for="f in feedbacks.data">
                    <td><span v-if="!f.anonymous">{{ f.first_name }} {{ f.last_name }}</span><span v-if="f.anonymous">Anonymous</span></td>
                    <td>{{ f.description }}</td>
                </tr>
            </table>
            <pagination :data="feedbacks" @pagination-change-page="getFeedbackList" />
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
export default {
    name: 'FeedbackEmployee',
    mixins: [AppMixin],
    data() {
        return {
            feedbacks: {},
            feedbackLength: 0
        }
    },
    methods: {
        getFeedbackList: function (page = 1) {
            let that = this;
            Api.getFeedbackList(page).then(response => {
                that.feedbacks = response.data.res
                that.feedbackLength = that.feedbacks.data.length
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
    },
    mounted() {
        this.getFeedbackList()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
