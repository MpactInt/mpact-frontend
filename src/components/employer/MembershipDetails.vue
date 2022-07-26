<template>
  <div class="col-md-9">
    <h1>Membership Details</h1>
    <div class="row" v-for="pd in planDetails" v-bind:key="pd.item_price_id">
      <div class="col-md-4">
        <p> Name : {{ pd.item_price_id }}<br>
          Type : {{ pd.item_type }}<br>
          Price : {{ pd.amount / 100 }}<br>
          <span v-if="pd.item_type == 'plan'">Consulting Hours Total: {{company.total_hours}}<br>
         Consulting Hours Remaining: {{company.remaining_hours}}
          </span>
        </p>
      </div>
    </div>
    <div class="row" v-if="company.plan_type!='One-Time-Users-Plan'">
      <div class="col-md-6">
        <div class="form-group">
          <label>Select Addon <span class="err">*</span></label>
          <select type="text" class="form-control" id="addon" placeholder="Addon" v-model="chargebeeUser.addon">
            <option v-for="plan in addons" v-bind:value="plan.id" v-bind:key="plan.id">{{ plan.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary" @click="selectAddon">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Api from '../../router/api'
import AppMixin from '../../mixins/AppMixin'
export default {
  name: 'MembershipDetails',
  mixins: [AppMixin],
  data() {
    return {
      subscriptionId: '',
      planDetails: [],
      addons: [],
      chargebeeUser: {
        addon: '',
        disabled: false
      }
    }
  },
  methods: {
    getPlanDetailsBySubscriptionId: function () {
      let that = this
      Api.getPlanDetailsBySubscriptionId(that.company.chargebee_subscription_id).then(response => {
        that.planDetails = response.data.res
      })
    },
    getAddons: function () {
      let that = this;
      Api.getAddons().then(response => {
        that.addons = response.data.res
      }
      ).catch((error) => {

      });
    },
    selectAddon: function () {
      let that = this;
      Api.selectAddon(that.company.chargebee_subscription_id,that.chargebeeUser).then(response => {
        this.$swal({
          icon: "success",
          title: "Success",
          text: "Addon selected successfully",
          showConfirmButton: true
        }).then(function () {
          that.chargebeeUser.disabled = false;
          that.chargebeeUser.addons = ''
          window.location = response.data.res.url
        });

      }
      ).catch((error) => {

      });
    }
  },
  mounted() {
    if (this.company.chargebee_subscription_id) {
      this.getPlanDetailsBySubscriptionId()
    }
    this.getAddons()

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
