<template> 
  <section class="employee-section pettern-bg">
    <HeaderEmployee></HeaderEmployee>
    <div class="container">
      <div class="row">
        <section class="pricing-section">
          <div class="container">
            <h2 class="page-title">Pricing and <span>Plans</span></h2>



        <div class="nav  nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#One-Time"
            type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">One-Time (30-day access)</button>
          <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#Subscriptions-plans"
            type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Subscriptions plans</button>
        </div>

<div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="One-Time" role="tabpanel" aria-labelledby="One-Time">
           

            <div class="row">
              <div class="col-md-6">
                <h3 class="section-title">Plan Features</h3>
              </div>
              <div class="col-md-6 d-flex flex-wrap">
                
                <div class="custom-radio-btn ml-auto mb-3">
                      <input type="radio" id="Monthly" name="radio-group" checked>
                      <label for="Monthly">Monthly</label>
                </div>
                <div class="custom-radio-btn ml-4  mb-3">
                      <input type="radio" id="Yearly" name="radio-group" checked>
                      <label for="Yearly">Yearly</label>
                </div>
              </div>
            </div>



            <div class="row">
              <div class="col-md-12">
                
                <div class="pricing-box">
                  
                  <div class="row">


                    <div class="col-md-6">
                        <div class="pricing-text">
                          <p class="w-100">Assessment Frequency</p>
                           <p>1x</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pricing-text">
                        <p class="w-100">24x7 Access to Employee Platform</p> 
                        <img src="../assets/images/check.svg" alt="check icon" />
                      </div>
                    </div>

                    
                    <div class="col-md-6">
                        <div class="pricing-text">
                          <p class="w-100">Assessment Customization</p>
                        <img src="../assets/images/cross.svg" alt="check icon" />
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pricing-text">
                        <p class="w-100">Guided Leader Transformation Journey</p> 
                        <img src="../assets/images/cross.svg" alt="check icon" />
                      </div>
                    </div>

                    
                    <div class="col-md-6">
                        <div class="pricing-text">
                          <p class="w-100">Individual Report</p>
                        <img src="../assets/images/check.svg" alt="check icon" />
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pricing-text">
                        <p class="w-100">Profile Based Employee Learning Journey</p> 
                        <img src="../assets/images/cross.svg" alt="check icon" />
                      </div>
                    </div>

                    
                    <div class="col-md-6">
                        <div class="pricing-text">
                          <p class="w-100">Organizational Report and Management Metrics Dashboard</p>
                        <img src="../assets/images/check.svg" alt="check icon" />
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pricing-text">
                        <p class="w-100">Resources</p> 
                        <img src="../assets/images/cross.svg" alt="check icon" />
                      </div>
                    </div>


                    
                    <div class="col-md-6">
                        <div class="pricing-text">
                          <p class="w-100">Onboarding Support</p>
                        <img src="../assets/images/check.svg" alt="check icon" />
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pricing-text">
                        <p class="w-100">Custom Workshops (Yearly)</p> 
                        <img src="../assets/images/cross.svg" alt="check icon" />
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="pricing-text">
                          <p class="w-100">Custom Report</p>
                        <img src="../assets/images/cross.svg" alt="check icon" />
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pricing-text">
                        <p class="w-100">Attend Live Workshops (Per Year Member)</p> 
                        <img src="../assets/images/cross.svg" alt="check icon" />
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="pricing-text">
                          <p class="w-100">Dedicated Organizational Consulting( Yearly)</p>
                        <img src="../assets/images/cross.svg" alt="check icon" />
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pricing-text">
                        <p class="w-100">Team Announcements Messaging</p> 
                        <img src="../assets/images/cross.svg" alt="check icon" />
                      </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="pricing-text">
                          <p class="w-100">Cognitive Dynamism Platform Features</p>
                        <img src="../assets/images/cross.svg" alt="check icon" />
                        </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pricing-text">
                        <p class="w-100">Team Announcements Messaging</p> 
                        <img src="../assets/images/cross.svg" alt="check icon" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="pricing-text">
                        <p class="w-100">24x7 Access to Employer Platform</p> 
                        <img src="../assets/images/cross.svg" alt="check icon" />
                      </div>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="Subscriptions-plans" role="tabpanel" aria-labelledby="Subscriptions-plans"> dfg </div>
        </div>





<!-- 
            <div class="row">
              <div class="col-md-6 col-lg-4" v-for="p in plans" v-bind:key="p.id">
                <div class="pricing-card card-color">
                  <div class="card-type">{{ p.name }}</div>
                  <div class="card-price">Features</div>
                  <div class="user-plan">
                    <div class="info-list">
                      <ul class="list"> -->
                        <!-- <li v-if="p.description" v-html="'->' +
                          p.description.replace(/(?:\r\n|\r|\n)/g, '<br /> -> ')"></li> -->
                           <!-- <li v-if="p.description" :inner-html.prop="p.description | replaceDescription"></li>
                      </ul>
                    </div>
                  </div> -->
                  <!-- <div class="info-list">
                    <lu class="list">
                      <li><i class="fa fa-check"></i>Store up to 20 songs</li>
                      <li><i class="fa fa-check"></i>Store up to 20 songs</li>
                      <li><i class="fa fa-check"></i>Store up to 20 songs</li>
                      <li><i class="fa fa-check"></i>Store up to 20 songs</li>
                      <li><i class="fa fa-check"></i>Store up to 20 songs</li>
                    </lu>
                  </div> -->
                 <!--  <router-link class="btn-pricing"
                    :to="'/create-company?plan=' + p.id + '&periodUnit=' + p.periodUnit + '&planType=' + p.itemId">Get
                    Started
                  </router-link>
                </div>
              </div>
            </div> -->




          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import Api from '../router/api'
import HeaderEmployee from '../components/employee/includes/Header'

/* eslint-disable */
export default {
  name: 'Plan',
  data() {
    return {
      msg: 'Plan',
      plans: [],
    }
  },
  components: { HeaderEmployee },
  methods: {
    getPlans: function () {
      let that = this;
      Api.getPlans().then(response => {
        that.plans = response.data.res
      }
      ).catch((error) => {

      });
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
