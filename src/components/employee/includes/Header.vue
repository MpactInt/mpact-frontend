<template>
    <div class="header ">
        <nav class="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
            <div class="flex flex-wrap justify-between items-center py-4 px-6">
                <div id="tutorial_setup_logo">
                    <router-link to="/employee/dashboard"  class="flex items-center">
                        <img :src="authUser.company_logo" v-if="authUser.company_logo" class="h-8 mr-3" alt="Logo" /> 
                        <img src="../../../assets/images/logo.png" v-else class="h-8 mr-3" alt="Logo" />
                    </router-link>
                </div>
                <div class="flex">
                    <button type="button" class="font-medium mr-10">
                        Check-In
                    </button>
                    <button type="button" class="font-medium mr-10">
                        Ask a question
                    </button>
                    <button type="button" class="font-medium mr-10" @click="handleClickEmpBtn">Site Tutorial</button>

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
                            <li class="outline outline-offset-2 outline-1 rounded">
                                <router-link to="/employee/workshops"  class="flex items-center p-2 text-gray-900 rounded-lg">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.99988 3.00061V12.9996C9.04198 12.9996 10.7811 14.2398 11.5545 15.9993H18.4452C19.2186 14.2398 20.958 12.9996 23.0001 12.9996V3.00061H6.99988ZM12 11.9994H9.99988V4.99951H12V11.9994ZM15.9999 11.9994H13.9998V6.99961H15.9999V11.9994ZM20.0001 11.9994H18V8.99941H20.0001V11.9994Z"
                                            fill="#090446" />
                                        <path
                                            d="M15 23.9994C16.6569 23.9994 18 22.6562 18 20.9994C18 19.3425 16.6569 17.9994 15 17.9994C13.3431 17.9994 12 19.3425 12 20.9994C12 22.6562 13.3431 23.9994 15 23.9994Z"
                                            fill="#090446" />
                                        <path
                                            d="M11.0001 26.9994C11.0001 25.8948 11.8956 24.9993 13.0002 24.9993H17.0001C18.1047 24.9993 18.9999 25.8948 18.9999 26.9994H11.0001Z"
                                            fill="#090446" />
                                        <path
                                            d="M23.0001 20.9994C24.657 20.9994 26.0001 19.6562 26.0001 17.9994C26.0001 16.3425 24.657 14.9994 23.0001 14.9994C21.3433 14.9994 20.0001 16.3425 20.0001 17.9994C20.0001 19.6562 21.3433 20.9994 23.0001 20.9994Z"
                                            fill="#090446" />
                                        <path
                                            d="M6.99988 20.9994C8.65673 20.9994 9.99988 19.6562 9.99988 17.9994C9.99988 16.3425 8.65673 14.9994 6.99988 14.9994C5.34302 14.9994 3.99988 16.3425 3.99988 17.9994C3.99988 19.6562 5.34302 20.9994 6.99988 20.9994Z"
                                            fill="#090446" />
                                        <path
                                            d="M10.9551 23.5806C10.7616 22.6773 9.9609 21.9993 9 21.9993H5.0001C3.8955 21.9993 3 22.8948 3 23.9994V26.9994H9C9 25.5435 9.789 24.2808 10.9551 23.5806Z"
                                            fill="#090446" />
                                        <path
                                            d="M19.0449 23.5806C19.2384 22.6773 20.0388 21.9993 21 21.9993H24.9999C26.1045 21.9993 27 22.8948 27 23.9994V26.9994H21C21 25.5435 20.211 24.2808 19.0449 23.5806Z"
                                            fill="#090446" />
                                    </svg>

                                    <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">Workshop registration</span>
                                </router-link>
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
    name: 'Header',
    props: ['userProp'],
    data() {
        return {
            authUser: {}
        }
    },
    mixins: [AppMixin],
    methods: {
        handleClickEmpBtn() 
        {
          window.localStorage.removeItem('window-driver');
          const baseUrl = window.location.origin;
          window.location.href = baseUrl+"/employee/dashboard";
        },
        logout: function () {
            Api.logout().then(response => {
                window.localStorage.removeItem('token')
                window.localStorage.removeItem('userData')
                window.localStorage.removeItem('companyData')
                this.$router.go('/login')
            }
            ).catch((error) => {
                this.$swal({
                    icon: 'error',
                    title: 'error',
                    text: error.response.data.message,
                    showConfirmButton: true
                })
            })
        }
    },
    created() {
        this.getAuthUser()
        console.log(this.userProp)
    },
}
</script>
