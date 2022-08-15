<template>
  <section class="employee-learning-plan-view-section half-cut-bg">
    <div class="row align-items-center">
      <div class="col-md-4 my-3">
        <div class="color-border">
          <img :src="planSingle.image" class="w-100"  style="height: 250px;" alt="">
        </div>
      </div>
      <div class="col-md-8 my-3">
        <h2 class="page-title text-left my-0  d-inline-block">{{ planSingle.title }}</h2>
        <p class="page-sub-title mb-0">{{ planSingle.description }}</p>
      </div>
    </div>
    <div class="row">

      <div class="col-md-4 my-3" v-if="planFiles.length" v-for="w in planFiles" v-bind:key="w.id">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ w.title }}</h5>
            <p class="card-text">{{ w.description }}</p>
            <a class="btn btn-read-more" @click="downloadLearningPlanFile(w.id, w.image)">Download File</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'

export default {
  name: 'WelcomeNote',
  mixins: [AppMixin],
  data () {
    return {
      note: {},
    }
  },
  methods: {},
  created () {
    this.getLearningPlanFiles()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
