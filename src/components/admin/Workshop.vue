<template>
  <section class="admin-workshops-section half-cut-bg">
    <List></List>
  </section>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import List from '../common/workshops/List.vue'
export default {
  name: 'WorkshopConfiguration',
  mixins: [AppMixin],
  components: {
    List
  },
  data() {
    return {

    }
  },
  methods: {


  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
