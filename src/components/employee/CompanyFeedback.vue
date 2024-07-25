<template>
  <section>
      <div class="py-6 px-8">
          <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
              <span class="text-[#090446]">Feedback to company admin</span>
          </p>
          
      </div>

      <div class="px-8 py-6 border-2 mx-8 my-6 rounded-[18px] bg-white">
          <div>
              <p class="my-6">Please share your feedback with us.</p>

              <form class="items-center">

                  <div class="relative w-full space-y-4">

                      <textarea rows="6"
                          class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Feedback to company admin..." id="ask-question" v-model="feedback.description"></textarea>
                      <input
                          class="relative float-left h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                          type="checkbox" name="flexRadioDefault" id="radioDefault01" v-model="feedback.anonymous"/>
                      <label class="mx-2 inline-block hover:cursor-pointer" for="radioDefault01">
                          Anonymous
                      </label>

                      <button
                          class="b-0 flex items-center font-sixe-[20px] px-12 py-1  rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black" type="button" :disabled="feedback.disabled" @click="submitCompanyFeedback">
                          Submit
                      </button>
                  </div>
              </form>
          </div>
      </div>

  </section>
</template>

<script>
/* eslint-disable */
import Api from '../../router/api'
export default {
  name: 'CompanyFeedback',
  data() {
    return {
      feedback: {
        description: '',
        anonymous: '',
        disabled: false
      }
    }
  },
  methods: {
    submitCompanyFeedback: function () {
      let that = this
      if (!that.feedback.description) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        })
      } else {
        that.feedback.disabled = true
        Api.submitCompanyFeedback(that.feedback).then(response => {
          that.feedback.disabled = false
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Submitted successfully",
            showConfirmButton: true
          }).then(function () {
            that.feedback.disabled = false
            that.feedback.description = ''
            that.feedback.anonymous = ''
          });
        })
      }
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
