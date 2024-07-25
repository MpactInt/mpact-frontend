<template>
  <div>
    <section>
      <List></List>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import List from '../common/resources/List.vue'

export default {
  name: 'Resources',
  mixins: [AppMixin],
  components: { List },
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
