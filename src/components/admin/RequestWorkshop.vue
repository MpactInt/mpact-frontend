<template>
    <div class="main-content">
        <h3>Workshop Requests</h3>
        <List></List>
    </div>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
import List from '../common/request-workshops/List.vue'
export default {
    name: 'RequestWorkshop',
    mixins: [AppMixin],
    data() {
        return {
         
        }
    },
    components: {
        List
    },
    methods: {
     
    },
    mounted() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
