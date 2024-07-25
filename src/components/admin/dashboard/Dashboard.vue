<template>
  <section class="admin-dashboard-hero-section" >
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Dashboard</span>
        </p>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'

export default {
  name: 'Dashboard',
  mixins: [AppMixin],
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
