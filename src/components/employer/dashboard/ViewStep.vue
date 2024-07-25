<template>
<section>
    <div>
        <div class="py-6 text-center px-8 space-y-1">
            <p class="bg-center text-[#0A0446] uppercase font-bold">
                Welcome To
            </p>
            <p class="text-3xl font-bold text-[#0A0446]">{{ stepUpdate.title }}</p>
        </div>

        <ul class="mx-5 flex flex-wrap space-x-1 items-center justify-center pb-6 nav nav-pills" id="myTab"
            data-tabs-toggle="#myTabContent" role="tablist">
            <li role="presentation">

                <button 
                    class="b-0 flex items-center font-sixe-[20px] px-12 py-1  rounded-md  text-center text-md border border-1 border-black nav-link active"
                    id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home"
                    type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" v-on:click="stepTab = 1">Overview</button>
            </li>
            <li role="presentation">
                <button 
                    class="b-0 flex items-center font-sixe-[20px] px-12 py-1 rounded-md text-center text-md border border-1 border-black nav-link"
                    id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile"
                    type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" v-on:click="stepTab = 2">Guide Book</button>
            </li>
            <li role="presentation">
                <button 
                    class="b-0 flex items-center font-sixe-[20px] px-12 py-1 rounded-md text-center text-md border border-1 border-black nav-link"
                    id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages"
                    type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" v-on:click="stepTab = 3">Toolkit</button>
            </li>
        </ul>
    </div>

    <div id="myTabContent">
        <div id="overview" role="tabpanel" aria-labelledby="overview-tab" class="flex flex-col px-8" v-if="stepTab == 1">
            <div class="my-3 space-y-1">
                <p class="text-xl font-bold ">Overview</p>
                <p class="leading-7">{{ stepUpdate.overview }}</p>
            </div>

            <div class="my-3 space-y-1" v-html="stepUpdate.description"> </div>
        </div>

        <div id="book" role="tabpanel" aria-labelledby="book-tab" class="flex flex-col p-8" v-if="stepTab == 2">
            <embed v-if="stepUpdate.guideBook" :src="toolkitPath + '/' + stepUpdate.guideBook" width="100%" height="2100px" />
            <p v-if="!stepUpdate.guideBook">Guide Book Not uploaded </p>
        </div>

        <div id="toolkit" role="tabpanel" aria-labelledby="toolkit-tab" class="flex flex-col px-8" v-if="stepTab == 3">
            <div class="my-3 space-y-1">
                <p class="text-xl font-bold">Uploaded Files</p>
            </div>

            <div class="space-y-2">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <!-- card-0 stat -->
                    <div
                        class="flex flex-col justify-between max-w-full bg-[#E7EAEC] border border-gray-200 rounded-lg shadow text-[#0A0446]" v-if="stepUpdate.toolkit.length" v-for="w in stepUpdate.toolkit" v-bind:key="w.id">

                        <div class="p-[15px]">
                            <a href="#">
                                <h5 class="mt-2 text-2xl font-semibold tracking-tight">{{ w.title }}</h5>
                            </a>
                            <p class="mt-2 text-sm text-gray-500">
                                {{ w.description }}
                            </p>
                        </div>
                        <div class="my-4 rounded">
                            <a @click="downloadToolkit(w.id, w.file)">
                                <button
                                    class="flex items-center font-sixe-[14px] px-8 py-2 mx-4 rounded-md bg-[#0A0446] text-white text-center text-md">
                                    Download File
                                    <svg class="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3" stroke="white"
                                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div class="" v-if="!stepUpdate.toolkit.length">
                          No file uploaded
                    </div
                    <!-- card-0 end -->
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'

export default {
  name: 'ViewStep',
  mixins: [AppMixin],
  data() {
    return {
        stepTab: 1,
        step: {
            'disabled': false,
            'file': ''
        }
    }
  },
  methods: {
    downloadToolkit: function (id, name) {
      Api.downloadToolkit(id)
        .then(response => {
          let blob = new Blob([response.data])
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = name
          link.click()
        }
        ).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          });
        });
    },
  },
  mounted() {
    this.getStep(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
