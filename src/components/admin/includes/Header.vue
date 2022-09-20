<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="javascript:void(0)"><img src="../../../assets/images/logo.png"></a>
            <button class="navbar-toggler" data-bs-target="#adminSidebar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto cutom-menu-list">
                    <!-- <li class="nav-item">
                        <a class="nav-link pd-link" href="#">Check-In</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link pd-link" href="#">Ask a question </a>
                    </li> -->
                    <li class="nav-item">
                        <b-nav-item-dropdown right no-caret>
                            <template slot="button-content">
                                <i class="py-0 fa fa-bell"></i>
                            </template>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'


export default {
    name: "Header",
    props: ['userProp'],
    data() {
        return {
            authUser: {},
            notificationList:[]
        }
    },
    mixins: [AppMixin],
    methods: {
        getAdminNotifications: function () {
            let that = this
            Api.getAdminNotifications().then(response => {
                that.notificationList = response.data.res
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
    },
    created() {
        this.authUser = this.userProp
        window.Echo.channel('notification' + this.authUser.id)
            .listen('AdminNotificationEvent', (e) => {
                console.log('Event calling' + 'MessageSent' + this.authUser.id)
                this.getAdminNotifications();
            })
    },
}
</script>