<template>
  <section class="admin-dashboard-hero-section" >
    <div class=" bg-[#F7F7F7]" style="width: 100%;">
        <div class="pt-6 px-8">
            <div class="flex flex-wrap space-y-2 justify-between items-center">
                <p class="uppercase text-[24px] text-gray-400 uppercase font-bold">
                    <span class="text-[#313131]">Poroject</span>
                    <span class="text-[#BE0858]">statistic</span>
                </p>
                <div class="inline-flex justify-between space-x-2">

                    <router-link class="links" :to="'/'+currentUrl+'/dashboard1/'">

                        <a href="#" class="block px-3 py-2 ml-0 leading-tight text-black rounded-md bg-[#F2F2F2] hover:bg-[#0A0446] border border-gray-300 hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </router-link>

                    <router-link class="links" :to="'/'+currentUrl+'/dashboard2/'">
                        <a href="#" class="block px-3 py-2 leading-tight text-black rounded-md bg-[#F2F2F2] hover:bg-[#0A0446] border border-gray-300 hover:text-white">
                            <span class="sr-only">Next</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </router-link>

                </div>
            </div>
        </div>
      <div class="px-8">
          <div class="flex flex-wrap justify-around items-center mt-4">
           
             <TanningHoursComplete></TanningHoursComplete>
             <ConsultingHoursUsed></ConsultingHoursUsed>
          </div>

          <div class="flex flex-wrap justify-around items-center">
             <AverageCompletedCourses/>
             <AverageCompletedCourses2/>
          </div>
      </div>
  </div>
  </section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import TanningHoursComplete from  "./TanningHoursComplete"
import ConsultingHoursUsed from  "./ConsultingHoursUsed"
import AverageCompletedCourses from  "./AverageCompletedCourses"
import AverageCompletedCourses2 from  "./AverageCompletedCourses2"


export default {
  name: 'Dashboard',
  mixins: [AppMixin],
  data() {
    return {
      currentUrl:'',
    }
  },
  components:{
    TanningHoursComplete,
    ConsultingHoursUsed,
    AverageCompletedCourses,
    AverageCompletedCourses2
  },
  methods: {

  },
  mounted() {
   
       var url = document.URL.split('/');
        this.currentUrl = url[3]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
