<template>
  <section class="min-h-screen flex items-stretch text-white bg-[#F7F7F7]">
        <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center rounded-tr-[45px] rounded-br-[45px]"
            style="background-image: url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);">
            <div class="absolute bg-black opacity-60 inset-0 z-0 rounded-tr-[45px] rounded-br-[45px]"></div>
            <div class="w-full px-24 z-10">
                <h1 class="text-5xl font-bold text-left tracking-wide">Inclusion</h1>
                <h1 class="text-5xl font-bold text-left tracking-wide">Connection</h1>
                <h1 class="text-5xl font-bold text-left tracking-wide">Growth</h1>
            </div>
            <div class="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                <span>
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                </span>
                <span>
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </span>
                <span>
                    <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </span>
            </div>
        </div>
        <div class="lg:w-2/3 lg:items-center w-full flex py-6 justify-center md:px-16 px-0 z-0">
            <div id="login-card" style="display: block;"  class="sm:w-2/3 lg:w-full px-2 z-20 bg-[#f3f3f366] rounded-[36px] py-[0px]">
                <div class="flex items-center justify-center">
                    <a href="#" class="flex items-center">
                        <img src="../assets/images/logo.png" class="h-24" alt="Logo" />
                    </a>
                </div>
                <div v-if="consent">
                  <h2 class="text-2xl font-bold my-4 justify-center text-center text-black">
                      <span class="text-[#090446]">Survey Consent</span>
                  </h2>
                  <p class="text-lg justify-center text-black">Mpact International Inc is a 3rd party consulting firm that has been hired to collect information about applicants for any number of roles in organizations. We do not make any hiring decisions and are not agents of the firm for which you are interviewing.</p>
                  <br />
                  <p class="text-lg justify-center text-black">This site collects the following types of data on visitors: web log files detailing pages completed and survey responses based on applicant replies. Data is shared with the hiring team of the firms who retain our services and are not shared with any other third party.</p>
                  <br />
                  <p class="text-lg justify-center text-black">Data from this survey are recorded and used by hiring firms for the purpose of understanding potential hires for their firm. The results of this data is analyzed and released to hiring firms for their use, which is not under the control of Mpact International. By participating in, and submitting, a survey you acknowledge that your answers will be recorded. Your answers are shared with the firm and will be linked to your application. </p>
                  <br />
                  <p class="text-lg justify-center text-black">I consent to participate in this survey.</p>
                  <br />
                  <a href="javascript:void(0)" class=" block w-full py-2 text-lg text-white bg-[#ab064e] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"  v-on:click="instructions = true; consent = false;">
                      I agree
                  </a>
                </div>
                <div v-if="instructions">
                  <h2 class="text-2xl font-bold my-4 justify-center text-center text-black">
                      <span class="text-[#090446]">Survey instructions</span>
                  </h2>
                  <p class="text-lg justify-center text-black">This full assessment will take about 30 minutes to complete. Please be sure you have time to complete the assessment. You are encouraged to complete this when you have time to do this in one session. We also encourage you to find a quiet place so you can concentrate on the items.</p>
                  <br />
                  <p class="text-lg justify-center text-black">Directions: The following statements concern your perception about yourself in a variety of situations. Your task is to indicate the strength of your agreement with each statement, utilizing a scale in which 1 denotes strong disagreement, 5 denotes strong agreement, and 2, 3, and 4 represent intermediate judgments. In the boxes after each statement, click a number from 1 to 5 from the following scale:</p>
                  <br />
                  <ul class="text-lg justify-center text-black">
                    <li>1. Strongly disagree</li>
                    <li>2. Disagree</li>
                    <li>3. Neither disagree nor agree</li>
                    <li>4. Agree</li>
                    <li>5. Strongly agree</li>
                  </ul>
                  <br />
                  <p class="text-lg justify-center text-black">There are no "right" or "wrong" answers, so select the number that most closely reflects you on each statement. Take your time and consider each statement carefully.</p>
                  <br />
                  <router-link class=" block w-full py-2 text-lg text-white bg-[#ab064e] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" :to="url">
                      Continue
                  </router-link>
                </div>
               
            </div>
        </div>
    </section>
</template>

<script>
import Api from '../router/api'
/* eslint-disable */
export default {
  name: 'SurveyConsent',
  data() {
    return {
      url: '',
      consent: 1,
      instructions: 0
    }
  },
  methods: {
  },
  mounted() {
    let url_token = this.$route.fullPath.split('/')[2]
    this.url = "/non-employee-survey/" + url_token
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
