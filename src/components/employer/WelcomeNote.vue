<template>
  <div class="col-md-9">
    <h1>Welcome Note</h1>
    <p>
      {{ note.title }}
    </p>
    <p v-html="note.description"></p>
    <p>
      <img :src="note.image"/>
    </p>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'

export default {
  name: 'WelcomeNote',
  mixins: [AppMixin],
  data() {
    return {

    }
  },
  methods: {

  },
  created() {
    this.getWelcomeNote();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
