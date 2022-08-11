<template>
  <section class="employee-announcements-section half-cut-bg">
    <div class="container">
      <h1 class="page-title mt-0 text-left">Announcements</h1>
      <List></List>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import List from '../common/announcements/List.vue'

export default {
  name: 'AnnouncementList',
  mixins: [AppMixin],
  components: {List},
  data () {
    return {}
  },
  methods: {},
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
