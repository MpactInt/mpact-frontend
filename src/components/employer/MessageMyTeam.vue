<template>
  <div class="col-md-9">
    <h1>Message My Team</h1>
    <MessageMyTeamVue></MessageMyTeamVue>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from'../../mixins/AppMixin'
import MessageMyTeamVue from '../common/chat/MessageMyTeam.vue'
export default {
  name: 'MessageMyTeam',
  mixins: [AppMixin],
  components:{MessageMyTeamVue},
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
