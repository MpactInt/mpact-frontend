<template>
    <div class="header ">
        <nav class="sticky top-0 z-50 w-full bg-white border-b border-gray-200" navbar navbar-expand-lg navbar-light>
            <div class="flex flex-wrap justify-between items-center py-4 px-6">
                <div>
                    <router-link to="/admin/dashboard"  class="flex items-center">
                        <img src="../../../assets/images/logo.png" class="h-8 mr-3" alt="Logo" />
                    </router-link>
                </div>
                <div class="flex">
                    <button data-collapse-toggle="mega-menu-full" type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mega-menu-full" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    
                    <div id="mega-menu-full"
                        class="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:justify-between">
                        <ul
                            class="flex flex-col p-4 md:p-0 mt-4 border border-blue-800 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li class="nav-item">
                                <b-nav-item-dropdown right no-caret >
                                    <template slot="button-content">
                                        <span class="notification" v-if="unseen">{{unseen}}</span>
                                        <i class="py-0 fa fa-bell" @click="readAdminNotifications"></i>
                                    </template>
                                    <div x-show="dropdownOpen" class="absolute right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-20" id="notification_hs" style="width:20rem; display:none;" >
                                        <div class="py-2">
                                            <a href="#" class="flex items-center px-4 py-3 border-b hover:bg-gray-100 -mx-2" v-for="nl in notificationList" v-bind:key="nl.id">
                                                <img class="h-8 w-8 rounded-full object-cover mx-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">
                                                <p class="text-gray-600 text-sm mx-2">
                                                    {{nl.notification}}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </b-nav-item-dropdown>
                            </li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </nav>
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
            authUser: {},
            notificationList: [],
            unseen: 0
        }
    },
    mixins: [AppMixin],
    methods: {
        getAdminNotifications: function () {
            let that = this
            Api.getAdminNotifications().then(response => {  
                that.notificationList = response.data.res
                that.unseen = response.data.unseen
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
        readAdminNotifications: function () 
        {
            $("#notification_hs").toggle(); 
            let that = this
            Api.readAdminNotifications().then(response => {
                that.unseen = 0
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
        this.getAdminNotifications();
        this.authUser = this.userProp
        window.Echo.channel('notification' + this.user.id)
            .listen('AdminNotificationEvent', (e) => {
                console.log('Event calling' + 'MessageSent' + this.user.id)
                this.getAdminNotifications();
            })
    },
}
</script>