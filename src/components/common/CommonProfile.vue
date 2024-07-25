<template>
<section>
  <div class="py-6 px-8">
      <div class="wrap space-y-2 justify-between">
          <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
              <span class="text-[#090446]" v-if="authUser.role == 'ADMIN'">Admin</span>
              <span class="text-[#090446]" v-if="authUser.role == 'COMPANY_ADMIN'">{{ authUser.first_name }} {{ authUser.last_name }}</span>
              <span class="text-[#090446]" v-if="authUser.role == 'COMPANY_EMP'">About Me</span>
          </p>
      </div>
  </div>

  <div class="flex flex-col space-y-6 px-2 py-10 border border-1 mx-8 my-2 rounded-md">
      <div class="mx-8 px-8 py-6 border border-1 rounded-lg flex flex-wrap items-center justify-between space-y-2 px-8" v-if="authUser.role=='ADMIN'">
          <div class="flex flex-wrap items-center space-x-4" ></div>
          
          <div>
              <router-link to="/admin/edit-profile">
                <button class="flex items-center border border-1 rounded-lg px-4 py-1 border-[#0A0446] shadow">
                    <svg class="h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 4.00023H6.8C5.11984 4.00023 4.27976 4.00023 3.63803 4.32721C3.07354 4.61483 2.6146 5.07377 2.32698 5.63826C2 6.27999 2 7.12007 2 8.80023V17.2002C2 18.8804 2 19.7205 2.32698 20.3622C2.6146 20.9267 3.07354 21.3856 3.63803 21.6732C4.27976 22.0002 5.11984 22.0002 6.8 22.0002H15.2C16.8802 22.0002 17.7202 22.0002 18.362 21.6732C18.9265 21.3856 19.3854 20.9267 19.673 20.3622C20 19.7205 20 18.8804 20 17.2002V13.0002M7.99997 16.0002H9.67452C10.1637 16.0002 10.4083 16.0002 10.6385 15.945C10.8425 15.896 11.0376 15.8152 11.2166 15.7055C11.4184 15.5818 11.5914 15.4089 11.9373 15.063L21.5 5.50023C22.3284 4.6718 22.3284 3.32865 21.5 2.50023C20.6716 1.6718 19.3284 1.6718 18.5 2.50022L8.93723 12.063C8.59133 12.4089 8.41838 12.5818 8.29469 12.7837C8.18504 12.9626 8.10423 13.1577 8.05523 13.3618C7.99997 13.5919 7.99997 13.8365 7.99997 14.3257V16.0002Z"
                            stroke="#2C3E50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                    <span class="text-[#0A0446] ml-3">Edit profile</span>
                </button>
              </router-link>
          </div>
      </div>

      <div class="mx-8 flex flex-wrap justify-between items-center" v-if="authUser.role=='COMPANY_ADMIN'">
          <div class="">
              <p class="font-bold text-2xl">{{ authUser.company_name }}</p>
              <a href="" target="_blank" class="flex items-center">
                  <img class="h-3 mr-1" src="../../assets/images/web.svg">
                  <p>{{ authUser.company_domain }}</p>
              </a>
          </div>
          <div>
              <router-link to="/employer/edit-profile">
                  <button class="flex items-center border border-1 rounded-lg px-4 py-1 border-[#0A0446] shadow">
                      <svg class="h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11 4.00023H6.8C5.11984 4.00023 4.27976 4.00023 3.63803 4.32721C3.07354 4.61483 2.6146 5.07377 2.32698 5.63826C2 6.27999 2 7.12007 2 8.80023V17.2002C2 18.8804 2 19.7205 2.32698 20.3622C2.6146 20.9267 3.07354 21.3856 3.63803 21.6732C4.27976 22.0002 5.11984 22.0002 6.8 22.0002H15.2C16.8802 22.0002 17.7202 22.0002 18.362 21.6732C18.9265 21.3856 19.3854 20.9267 19.673 20.3622C20 19.7205 20 18.8804 20 17.2002V13.0002M7.99997 16.0002H9.67452C10.1637 16.0002 10.4083 16.0002 10.6385 15.945C10.8425 15.896 11.0376 15.8152 11.2166 15.7055C11.4184 15.5818 11.5914 15.4089 11.9373 15.063L21.5 5.50023C22.3284 4.6718 22.3284 3.32865 21.5 2.50023C20.6716 1.6718 19.3284 1.6718 18.5 2.50022L8.93723 12.063C8.59133 12.4089 8.41838 12.5818 8.29469 12.7837C8.18504 12.9626 8.10423 13.1577 8.05523 13.3618C7.99997 13.5919 7.99997 13.8365 7.99997 14.3257V16.0002Z"
                              stroke="#2C3E50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          </path>
                      </svg>
                      <span class="text-[#0A0446] ml-3">Edit profile</span>
                  </button>
              </router-link>
          </div>
      </div>

      <div class="mx-8 px-8 py-6 border border-1 rounded-lg flex flex-wrap items-center justify-between space-y-2 px-8" v-if="authUser.role!='ADMIN'">
          <div class="flex flex-wrap items-center space-x-4" >
              <img class="h-20 profile-img" :src="authUser.profile_image">
              <div class="flex flex-col">
                  <p class="font-bold">{{ authUser.first_name }} {{ authUser.last_name }}</p>
                  <p class="text-sm">{{ authUser.title }}</p>
                  <!--<p class="text-sm">Lakewood, CA</p>-->
              </div>
          </div>
          
          <div v-if="authUser.role=='COMPANY_EMP'">
              <router-link to="/employee/edit-profile">
                <button class="flex items-center border border-1 rounded-lg px-4 py-1 border-[#0A0446] shadow">
                    <svg class="h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 4.00023H6.8C5.11984 4.00023 4.27976 4.00023 3.63803 4.32721C3.07354 4.61483 2.6146 5.07377 2.32698 5.63826C2 6.27999 2 7.12007 2 8.80023V17.2002C2 18.8804 2 19.7205 2.32698 20.3622C2.6146 20.9267 3.07354 21.3856 3.63803 21.6732C4.27976 22.0002 5.11984 22.0002 6.8 22.0002H15.2C16.8802 22.0002 17.7202 22.0002 18.362 21.6732C18.9265 21.3856 19.3854 20.9267 19.673 20.3622C20 19.7205 20 18.8804 20 17.2002V13.0002M7.99997 16.0002H9.67452C10.1637 16.0002 10.4083 16.0002 10.6385 15.945C10.8425 15.896 11.0376 15.8152 11.2166 15.7055C11.4184 15.5818 11.5914 15.4089 11.9373 15.063L21.5 5.50023C22.3284 4.6718 22.3284 3.32865 21.5 2.50023C20.6716 1.6718 19.3284 1.6718 18.5 2.50022L8.93723 12.063C8.59133 12.4089 8.41838 12.5818 8.29469 12.7837C8.18504 12.9626 8.10423 13.1577 8.05523 13.3618C7.99997 13.5919 7.99997 13.8365 7.99997 14.3257V16.0002Z"
                            stroke="#2C3E50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                    <span class="text-[#0A0446] ml-3">Edit profile</span>
                </button>
              </router-link>
          </div>
      </div>

      <div class="mx-8 px-8 py-6 border border-1 rounded-lg items-center justify-between space-y-2 px-8">
          <p class="font-bold text-[#0A0446] ">Personal information</p>

          <div class="mt-2 grid grid-cols-2 gap-4">
              <div>
                  <p class="text-sm">First Name</p>
                  <p class="text-sm font-bold">{{ authUser.first_name }}</p>
              </div>
              <div>
                  <p class="text-sm">Last Name</p>
                  <p class="text-sm font-bold">{{ authUser.last_name }}</p>
              </div>
              <div>
                  <p class="text-sm">Email</p>
                  <p class="text-sm font-bold truncate">{{ user.email }}</p>
              </div>
              <div v-if="authUser.role == 'COMPANY_EMP'">
                  <p class="text-sm">Profile Type</p>
                  <p class="text-sm font-bold">{{ authUser.profile_type }}</p>
              </div>
              <div>
                  <p class="text-sm">Company Name</p>
                  <p class="text-sm font-bold">{{ authUser.company_name }}</p>
              </div>
              <div>
                  <p class="text-sm">Role</p>
                  <p class="text-sm font-bold">{{ authUser.role | replaceUndescore }}</p>
              </div>
              <div v-if="authUser.role == 'COMPANY_ADMIN'">
                  <p class="text-sm">Total Employees</p>
                  <p class="text-sm font-bold">{{ authUser.total_employees }}</p>
              </div>
          </div>
      </div>

      <div class="mx-8 px-8 py-6 border border-1 rounded-lg items-center justify-between space-y-2 px-8" v-if="authUser.role != 'ADMIN'">
          <p class="font-bold text-[#0A0446] ">Address</p>

          <div class="mt-2 grid grid-cols-2 gap-4">
              <div>
                  <p class="text-sm">{{ authUser.address }}</p>
                  <!--<p class="text-sm font-bold">Bangladesh</p>-->
              </div>
              <div>
                  <!--<p class="text-sm">City/State</p>
                  <p class="text-sm font-bold">Dhaka</p>-->
              </div>
              <div>
                  <!--<p class="text-sm">Postal Code</p>
                  <p class="text-sm font-bold">1207</p>-->
              </div>
          </div>
      </div>
  </div>
</section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'

export default {
  name: 'CommonProfile',
  mixins: [AppMixin],
  data() {
    return {
      hideFooter: true,
      profile: {
        profile_image: ''
      }
    }
  },
  methods: {
  },
  created() {
    this.getAuthUser()

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
