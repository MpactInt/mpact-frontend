<template>
<div class="bg-[#F7F7F7]">
    <nav class="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
        <div class="flex flex-wrap justify-between items-center py-4 px-6">
            <div>
                <a href="#" class="flex items-center">
                    <img src="../assets/images/logo.png" class="h-8 mr-3" alt="Logo" />
                </a>
            </div>
            <div class="flex">
                <button data-collapse-toggle="mega-menu-full" type="button"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                            <router-link class="flex items-center p-2 text-gray-900 rounded-lg" to="/login">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 0C8.51067 0 5.67188 2.8388 5.67188 6.32812C5.67188 9.81745 8.51067 12.6562 12 12.6562C15.4893 12.6562 18.3281 9.81745 18.3281 6.32812C18.3281 2.8388 15.4893 0 12 0Z"
                                        fill="#090446" />
                                    <path
                                        d="M19.8734 16.7904C18.1409 15.0313 15.8442 14.0625 13.4062 14.0625H10.5938C8.15588 14.0625 5.85909 15.0313 4.12659 16.7904C2.40258 18.5409 1.45312 20.8515 1.45312 23.2969C1.45312 23.6852 1.76794 24 2.15625 24H21.8438C22.2321 24 22.5469 23.6852 22.5469 23.2969C22.5469 20.8515 21.5974 18.5409 19.8734 16.7904Z"
                                        fill="#090446" />
                                </svg>

                                <span class="flex-1 text-[#090446] ml-3 whitespace-nowrap">Login</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <div class="py-6 px-8 text-center flex flex-col items-center space-x-4">
        <p class="text-4xl text-gray-400 uppercase font-bold">
            <span class="text-[#090446]">Pricing and plans</span>
        </p>
        <div class="flex flex-wrap items-center space-x-2 my-2">
            <p>One-Time(30-day access)</p>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer" v-model="isChecked">
                <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                </div>
            </label>
            <p>Subscription Plans</p>
        </div>
    </div>

    <section id="subscription-section"  v-if="isChecked">
        <div class="text-center flex flex-col items-center">
            <h2 class="text-2xl text-[#090446] font-bold">Plans Comparison</h2>
            <div class="flex flex-wrap items-center space-x-2 my-2 pricing-section nav nav-pills ">
                <button  
                    class="b-0 flex items-center font-sixe-[20px] px-12 py-1  rounded-md  text-center text-md border border-1 border-black nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" 
                    type="button" role="tab" aria-selected="true" v-on:click="showMonthly = true">
                    Quarterly
                </button>

                <button
                    class="b-0 flex items-center font-sixe-[20px] px-12 py-1 rounded-md text-center text-md border border-1 border-black nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                    type="button" role="tab" aria-selected="false" v-on:click="showMonthly = false">
                    Yearly
                </button>
            </div>
        </div>

        <div v-if="showMonthly">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
                <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <!-- Pricing Card -->
                    <div
                        class="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 bg-white">
                        <h3 class="mb-4 text-2xl font-semibold">Gold</h3>
                        <p class="font-light text-gray-500 sm:text-lg ">Best option for HR consultants and small businesess.</p>
                        <div class="flex items-baseline my-8">
                            <span class="mr-2 text-5xl font-extrabold">$1,650</span>
                            <span class="text-gray-500 ">/quarter</span>
                        </div>

                        <router-link class="text-white bg-[#0A0446] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" to="/create-company?plan=Package-1-Basic-USD-Every-3-months&periodUnit=month&planType=Package-1-Basic">
                          Get  started
                        </router-link>

                        <!-- List -->
                        <ul role="list" class="mb-8 space-y-4 text-left my-8">
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>1 Customized Assessment</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Dedicated consulting hours (8 hrs/year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>24x7 access to learning material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>HR training material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Live workshops (4 hrs per employee/year)</span>
                            </li>
                        </ul>
                    </div>
                    <!-- Pricing Card -->
                    <div
                        class="flex flex-col p-6 mx-auto max-w-lg text-white rounded-lg border border-gray-100 shadow xl:p-8 bg-[#0A0446]">
                        <h3 class="mb-4 text-2xl font-semibold">Diamond</h3>
                        <p class="font-light text-white sm:text-lg ">Best for businesses that need more training.</p>
                        <div class="flex items-baseline my-8">
                            <span class="mr-2 text-5xl font-extrabold">$3,300</span>
                            <span class="text-white">/quarter</span>
                        </div>

                        <router-link class="text-black bg-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" to="/create-company?plan=Package-2-Enhanced-USD-Every-3-months&periodUnit=month&planType=Package-2-Enhanced">
                            Get started
                        </router-link>

                        <!-- List -->
                        <ul role="list" class="mb-8 space-y-4 text-left my-8">
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>4 Customized Assessments</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Dedicated consulting hours (16 hrs/year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>24x7 access to learning material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>HR training material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Live workshops (6 hrs per employee/year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Custom workshops (2 hrs per year)</span>
                            </li>
                        </ul>
                    </div>
                    <!-- Pricing Card -->
                    <div
                        class="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 bg-white">
                        <h3 class="mb-4 text-2xl font-semibold">Platinum</h3>
                        <p class="font-light text-gray-500 sm:text-lg ">Best for organizations seeking devoted consulting and training support.</p>
                        <div class="flex items-baseline my-8">
                            <span class="mr-2 text-5xl font-extrabold">&nbsp;</span>
                            <span class="text-gray-500 ">&nbsp;</span>
                        </div>

                        <router-link class="text-white bg-[#0A0446] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" to="/create-company?plan=Package-3-Premier-USD-Every-3-months&periodUnit=month&planType=Package-3-Premier">
                          Contact Us
                        </router-link>

                        <!-- List -->
                        <ul role="list" class="mb-8 space-y-4 text-left my-8">
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Up to 12 customized assessments</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Dedicated consulting hours (96 hrs/year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>24x7 access to learning material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>HR training material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Live workshops (12 hrs per employee/year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Custom workshops (8 hrs per year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Dedicated support team</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!showMonthly">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
                <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <!-- Pricing Card -->
                    <div
                        class="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 bg-white">
                        <h3 class="mb-4 text-2xl font-semibold">Gold</h3>
                        <p class="font-light text-gray-500 sm:text-lg ">Best option for HR consultants and small businesess.</p>
                        <div class="flex items-baseline my-8">
                            <span class="mr-2 text-5xl font-extrabold">$6,000</span>
                            <span class="text-gray-500 ">/yearly</span>
                        </div>

                        <router-link class="text-white bg-[#0A0446] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" to="/create-company?plan=Package-1-Basic-USD-Yearly&periodUnit=year&planType=Package-1-Basic">
                            Get started
                        </router-link>

                        <!-- List -->
                        <ul role="list" class="mb-8 space-y-4 text-left my-8">
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>1 Customized Assessment</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Dedicated consulting hours (8 hrs/year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>24x7 access to learning material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>HR training material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Live workshops (4 hrs per employee/year)</span>
                            </li>
                        </ul>
                    </div>
                    <!-- Pricing Card -->
                    <div
                        class="flex flex-col p-6 mx-auto max-w-lg text-white rounded-lg border border-gray-100 shadow xl:p-8 bg-[#0A0446]">
                        <h3 class="mb-4 text-2xl font-semibold">Diamond</h3>
                        <p class="font-light text-white sm:text-lg ">Best for businesses that need more training.</p>
                        <div class="flex items-baseline my-8">
                            <span class="mr-2 text-5xl font-extrabold">$12,000</span>
                            <span class="text-white">/yearly</span>
                        </div>

                        <router-link class="text-black bg-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" to="/create-company?plan=Package-2-Enhanced-USD-Yearly&periodUnit=year&planType=Package-2-Enhanced">
                            Get started
                        </router-link>

                        <!-- List -->
                        <ul role="list" class="mb-8 space-y-4 text-left my-8">
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>4 Customized Assessments</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Dedicated consulting hours (16 hrs/year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>24x7 access to learning material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>HR training material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Live workshops (6 hrs per employee/year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Custom workshops (2 hrs per year)</span>
                            </li>
                        </ul>
                    </div>
                    <!-- Pricing Card -->
                    <div
                        class="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 bg-white">
                        <h3 class="mb-4 text-2xl font-semibold">Platinum</h3>
                        <p class="font-light text-gray-500 sm:text-lg ">Best for organizations seeking devoted consulting and training support.</p>
                        <div class="flex items-baseline my-8">
                            <span class="mr-2 text-5xl font-extrabold">&nbsp;</span>
                            <span class="text-gray-500 ">&nbsp;</span>
                        </div>

                        <router-link class="text-white bg-[#0A0446] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" to="/create-company?plan=Package-3-Premier-USD-Yearly&periodUnit=year&planType=Package-3-Premier">
                          Contact Us
                        </router-link>

                        <!-- List -->
                        <ul role="list" class="mb-8 space-y-4 text-left my-8">
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Up to 12 customized assessments</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Dedicated consulting hours (96 hrs/year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>24x7 access to learning material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>HR training material</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Live workshops (12 hrs per employee/year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Custom workshops (8 hrs per year)</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                <!-- Icon -->
                                <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                        fill="#0A0446" />
                                </svg>
                                <span>Dedicated support team</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="one-time-section"  v-if="!isChecked">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
            <div class="space-y-8 sm:gap-6 xl:gap-10 lg:space-y-0">
                <!-- Pricing Card -->
                <div
                    class="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8 bg-white">
                    <div class="flex items-center space-x-8">
                        <div>

                            <!-- List -->
                            <ul role="list" class="mb-8 space-y-4 text-left my-8">
                                <li class="flex items-center space-x-3">
                                    <!-- Icon -->
                                    <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                            fill="#0A0446" />
                                    </svg>
                                    <span>Assessment Frequency 1x</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <!-- Icon -->
                                    <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                            fill="#0A0446" />
                                    </svg>
                                    <span>Individual Report</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <!-- Icon -->
                                    <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                            fill="#0A0446" />
                                    </svg>
                                    <span>Organizational Report</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <!-- Icon -->
                                    <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                            fill="#0A0446" />
                                    </svg>
                                    <span>Management Metrics Dashboard</span>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <!-- List -->
                            <ul role="list" class="mb-8 space-y-4 text-left my-8">
                                <li class="flex items-center space-x-3">
                                    <!-- Icon -->
                                    <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                            fill="#0A0446" />
                                    </svg>
                                    <span>24x7 Access to Employee Platform</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <!-- Icon -->
                                    <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                            fill="#0A0446" />
                                    </svg>
                                    <span>Onboarding Support</span>
                                </li>
                                <li class="flex items-center space-x-3">
                                    <!-- Icon -->
                                    <svg class=" w-5 h-5 " viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="16" fill="#E8EDFB" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M21.8162 12.207C22.0701 12.4737 22.0597 12.8957 21.793 13.1495L14.0893 20.4829C13.9577 20.6081 13.7808 20.6742 13.5993 20.666C13.4179 20.6577 13.2477 20.5758 13.128 20.4391L10.1651 17.0545C9.92254 16.7775 9.95052 16.3563 10.2276 16.1138C10.5046 15.8713 10.9258 15.8992 11.1683 16.1763L13.6734 19.0379L20.8737 12.1838C21.1404 11.9299 21.5624 11.9403 21.8162 12.207Z"
                                            fill="#0A0446" />
                                    </svg>
                                    <span>Resources</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <router-link class="text-white bg-[#0A0446] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" to="/create-company?plan=One-Time-Users-Plan-USD-Monthly&periodUnit=month&planType=One-Time-Users-Plan">
                    Get started
                    </router-link>
                </div>

            </div>
        </div>
    </section>

    <!-- footer-stat -->
    <FooterEmployee></FooterEmployee>
    <!-- footer-end -->
</div>
</template>

<script>
import Api from '../router/api'
import HeaderEmployee from '../components/employee/includes/Header'
import FooterEmployee from '../components/employee/includes/Footer'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
/* eslint-disable */
export default {
  name: 'Plan',
  data() {
    return {
        isChecked: true, 
        msg: 'Plan',
        plans: [],
        showMonthly: true,
        //plan carousel
        settings_shopping: {
            centerMode: false,
            dots: true,
            infinite: true,
            speed: 500,
            controls: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            // adaptiveHeight: true,
            rtl: false,
      },
    }
  },
  
  components: { HeaderEmployee, FooterEmployee,  VueSlickCarousel },
  methods: {
    getPlans: function () {
      let that = this
      Api.getPlans().then(response => {
        that.plans = response.data.res
      }
      ).catch((error) => {

      })
    },
  },
  mounted() {
    this.getPlans()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.err {
  color: red;
}
</style>
