<template>
    <div class="container">
        <div class="header">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <router-link class="navbar-brand" to="/employee/dashboard"><img src="../../../assets/images/logo.png">
                </router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto cutom-menu-list">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/employee/welcome-note">Welcome Note</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link pd-link" to="/employee/profile">Profile</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link pd-link" to="/employee/feedback-to-company">Feedback to Company
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link pd-link" to="/employee/my-learning-plan">My Learning Plan
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link pd-link" to="/employee/ask-question">Ask a Question
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link btn custom-btn" to="/employee/workshops">
                                <div class="gradient-btn">Register for a Workshop</div>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <b-dropdown id="dropdown-1" size="lg" variant="link" no-caret>
                                <template #button-content>
                                    <div class="avtar">
                                        <img src="../../../assets/images/profile-img.jpg" alt="user-image">
                                    </div>
                                </template>
                                <b-dropdown-item to="/employee/announcements">Announcements or Updates</b-dropdown-item>
                                <b-dropdown-item to="/employee/resources">Resources</b-dropdown-item>
                                <b-dropdown-item to="/employee/message-my-team">Message My Team</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item @click="logout">Logout</b-dropdown-item>
                            </b-dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'

export default {
    name: "Header",
    props: ['userProp'],
    data() {
        return {
            authUser: {}
        }
    },
    mixins: [AppMixin],
    methods: {
        logout: function () {
            Api.logout().then(response => {
                window.localStorage.removeItem('token')
                window.localStorage.removeItem('userData')
                window.localStorage.removeItem('companyData')
                this.$router.go('/login')
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
    },
    created() {
        this.authUser = this.userProp
        console.log(this.userProp)
    },
}
</script>