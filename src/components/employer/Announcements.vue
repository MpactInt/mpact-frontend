<template>
<div>
  <div class="w-full flex md:flex-wrap justify-between space-y-4 px-8">
    <div class="flex md:flex-wrap md:w-full justify-between items-center py-4">
        <p class="uppercase text-[44px] text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Announcements</span>
        </p>
        <form v-if="company.role=='COMPANY_EMP'">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                <input type="text" id="simple-search"
                    class="px-14 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Search" required>
            </div>
        </form>
    </div>
  </div>
  <List></List>
</div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import List from '../common/announcements/List.vue'

export default {
  name: 'AnnouncementList',
  mixins: [AppMixin],
  components:{List},
  data() {
    return {
   
    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
