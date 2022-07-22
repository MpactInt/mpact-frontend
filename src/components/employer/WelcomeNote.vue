<template>
  <div class="col-md-9">
    <h1>Welcome Note</h1>
    <div v-if="note">
      <p>
        {{ note.title }}
      </p>
      <p v-html="note.description"></p>
      <p>
        <img :src="note.image" />
      </p>
    </div>
    <div v-if="!note">
      Welcome Note not added
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
    getSingleWelcomeNoteCompany: function () {
      let that = this
      Api.getSingleWelcomeNoteCompany().then(response => {
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
    this.getSingleWelcomeNoteCompany();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
