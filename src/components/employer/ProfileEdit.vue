<template>
  <div class="employer-profile-section">
    <CommonProfileEdit></CommonProfileEdit>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import CommonProfileEdit from '../common/CommonProfileEdit.vue'
export default {
  name: 'Profile',
  mixins: [AppMixin],
  components: { CommonProfileEdit },
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
