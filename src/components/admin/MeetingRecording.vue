<template>
  <div class="col-md-9">
    <MeetingRecording></MeetingRecording>
 </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { Vue2TinymceEditor } from "vue2-tinymce-editor";
import MeetingRecording from '../common/MeetingRecording.vue';
export default {
  name: 'AdminMeetingRecording',
  mixins: [AppMixin],
  components: {
    Vue2TinymceEditor, DatePicker,MeetingRecording
  },
  data() {
    return {
    }
  },
  methods: {

  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
