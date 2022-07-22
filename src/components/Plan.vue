<template>
  <section class="employee-section">
    <HeaderEmployee></HeaderEmployee>
    <div class="content">
      <div class="row">
        <section class="pricing-section">
          <div class="container">
            <h2 class="pricing-title">Pricing</h2>
            <div class="row">
              <div class="col-md-6 col-lg-4" v-for="p in plans" v-bind:key="p.id">
                <div class="pricing-card card-color">
                  <div class="card-type">{{ p.name }}</div>
                  <div class="card-price">Features</div>
                  <div class="user-plan">
                    <div class="info-list">
                      <ul class="list">
                        <!-- <li v-if="p.description" v-html="'->' +
                          p.description.replace(/(?:\r\n|\r|\n)/g, '<br /> -> ')"></li> -->
                           <li v-if="p.description" :inner-html.prop="p.description | replaceDescription"></li>
                      </ul>
                    </div>
                  </div>
                  <!-- <div class="info-list">
                    <lu class="list">
                      <li><i class="fa fa-check"></i>Store up to 20 songs</li>
                      <li><i class="fa fa-check"></i>Store up to 20 songs</li>
                      <li><i class="fa fa-check"></i>Store up to 20 songs</li>
                      <li><i class="fa fa-check"></i>Store up to 20 songs</li>
                      <li><i class="fa fa-check"></i>Store up to 20 songs</li>
                    </lu>
                  </div> -->
                  <router-link class="btn-pricing"
                    :to="'/create-company?plan=' + p.id + '&periodUnit=' + p.periodUnit + '&planType=' + p.itemId">Get
                    Started
                  </router-link>
                </div>
              </div>
            </div>
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
