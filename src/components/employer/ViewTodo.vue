<template>
  <div class="col-md-9">
    <router-link to="/employer/todo">
      <button class="btn-primary">
        <i class="fa fa-arrow-left white"></i>
      </button>
    </router-link>
    <div class="row mt-5">
     <h4>{{todoUpdate.title}}</h4>
     <p>{{todoUpdate.description}}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'

export default {
  name: 'ViewTodo',
  mixins: [AppMixin],
  data() {
    return {
     
    }
  },
  methods: {
  },
  mounted() {
    this.getTodo(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
