<template>
  <div class="employee-hero-section">
    <div class="container">
      <h1>Welcome Note</h1>
      <p>
        {{ note.title }}
      </p>
      <p v-html="note.description"></p>
      <p>
        <img :src="note.image" />
      </p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
export default {
  name: 'WelcomeNote',
  mixins: [AppMixin],
  data() {
    return {
      note: {}
    }
  },
  methods: {
    getWelcomeNote: function () {
      let that = this
      Api.getWelcomeNote().then(response => {
        that.note = response.data.res
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        })
      });
    }
  },
  created() {
    this.getWelcomeNote();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
