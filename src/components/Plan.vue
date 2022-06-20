<template>
  <section class="login-section">
    <div class="login-box">
      <div class="row">
        <div class="p-4 col-md-3 offset-md-1 login-inner mb-5 plans-inner" v-for="p in plans" v-bind:key="p.id">
          <router-link :to="'/create-company?plan=' + p.id + '&periodUnit='+p.periodUnit+'&planType='+p.itemId">
            <h5><b>{{ p.name }}</b></h5>
             <p v-html="'-> '+ p.description.replace(/(?:\r\n|\r|\n)/g, '<br /> -> ')">
              <!-- {{ p.description }} -->
            </p>
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
  name: 'Plan',
  data() {
    return {
      msg: 'Plan',
      plans: [],
    }
  },
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
