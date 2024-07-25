<template>
<section>
    <div class="w-full flex md:flex-wrap justify-between space-y-4 px-8">
        <div class="flex md:flex-wrap md:w-full justify-between items-center py-4">
            <p class="uppercase text-4xl text-gray-400 font-bold">
                <span class="text-[#090446]">{{ todoUpdate.title }}</span>
            </p>
        </div>
    </div>
    <!-- card-10 stat -->
    <div class="w-full px-8">
        <!-- card-8 stat -->
        <div class="flex p-[20px] space-x-4 border border-1 border-gray-100 rounded-[18px] bg-white">
            <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                    <div class="flex flex-wrap justify-between items-center">
                        <div>
                            <h2 class="font-bold tracking-tight">
                                <span class="text-[#BE0858]">Description:</span>
                            </h2>
                        </div>
                    </div>
                    <div class="text-sm text-justify text-gray-500" v-html="todoUpdate.description"></div>
                </div>
            </div>
        </div>
        <!-- card-8 end -->
    </div>
    <!-- card-10 end --> 
</section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'

export default {
  name: 'ViewTodo',
  mixins: [AppMixin],
  data() {
    return {

    }
  },
  methods: {
  },
  mounted() {
    this.getTodo(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
