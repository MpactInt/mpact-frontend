<template>
  <section>
    <div>
      <div class="py-6 space-y-2 px-8">
          <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
              <span class="text-[#0A0446]">Welcome from Mpact</span>
          </p>
          <p class="text-[#0A0446]">Hello Employees</p>
          <p class="text-[#0A0446] font-semibold">Welcome to the Mpact Platform. Here you will learn valuable information about teaming and creating a culture that drives inclusion, connection, and growth. Please begin by taking the assessment.</p>
      </div>
    </div>

    <div class="px-8 my-16">
      <div>
          <p class="uppercase my-4 text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
              <span class="text-[#0A0446] uppercase">{{ note.title }}</span>
          </p>
          <p v-html="note.description"></p>
          <div class="my-4" v-if="note.image">          
              <img class="w-full rounded-md h-auto rounded-lg" :src="note.image" alt="image">
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
  name: 'WelcomeNote',
  mixins: [AppMixin],
  data() {
    return {
      note: {}
    }
  },
  methods: {
    getWelcomeNote: function () {
      let that = this
      Api.getWelcomeNote().then(response => {
        that.note = response.data.res
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        })
      });
    }
  },
  created() {
    this.getWelcomeNote();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
