<template>
  <div class="col-md-9">
    <h1>Workshops</h1>
    <List></List>
  </div>
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
