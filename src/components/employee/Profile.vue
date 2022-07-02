<template>
  <div class="employee-hero-section">
    <div class="container">
      <!-- <h1 class="text-blue bold">Feeback to comapny admin</h1> -->
        <CommonProfile></CommonProfile>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import CommonProfile from '../common/CommonProfile.vue'
export default {
  name: 'Profile',
  mixins: [AppMixin],
  components: { CommonProfile },
  data() {
    return {

    }
  },
  methods: {

  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
