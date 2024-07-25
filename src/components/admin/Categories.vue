<template>
    <section>
        <List></List>
  </section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import List from '../common/categories/List.vue'

export default {
  name: 'Categories',
  mixins: [AppMixin],
  components:{List},
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
