<template>
  <div class="employee-hero-section">
    <div class="container">
      <h1>Message My Team</h1>
      <MessageMyTeamVue></MessageMyTeamVue>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import MessageMyTeamVue from '../common/chat/MessageMyTeam.vue'
export default {
  name: 'MessageMyTeam',
  mixins: [AppMixin],
  components: { MessageMyTeamVue },
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
