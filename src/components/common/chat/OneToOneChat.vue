<template>
  <div class="chat-div">
    <h1>Chat with {{ empChat.first_name }} {{ empChat.last_name }}</h1>
    <p class="text-center" v-if="groupData.limit < total"><button class="btn btn-primary load-more"
        @click="loadMoreMessages">Load More Messages</button></p>
    <div v-chat-scroll class="chat-gui" id="chat-gui" ref="scroll_content" style="height: 500px; overflow-y: scroll">
      <div class="chat-list" v-if="messagesList.length" v-for="m in messagesList" v-bind:key="m.id"
        v-bind:class="(authUser.emp_id == m.sender_id) ? 'text-right' : ''">
        <p>
          <img :src="imagePath + '/profile-images/' + m.profile_image" height="50px" width="50px"
            class="mr-3 border-radius-50" />
          <b>{{ m.first_name }} {{ m.last_name }}</b>
          <small class="ml-3">{{ m.created_at | fromNow }}</small>
        </p>
        <span class="ml-6" v-if="m.message_type == 'TEXT'" v-html="convertToHtml(m.content)"></span>
        <span class="ml-6" v-if="m.message_type == 'FILE'">
          <!-- <a :href="imagePath + '/chat-attachments/' + m.content" target="_blank">
            <img height="50" width="50" src="../../assets/images/file.png" /><br>
          </a> -->
          <a href="javascript:void(0)" @click="downloadAttachment(m.id, m.content, 'one')">
            <img height="50" width="50" src="../../../assets/images/file.png" /><br>
          </a>
        </span>
      </div>
      <div class="chat-list" v-if="!messagesList.length">
        <h4 class="no-msg">Start Messaging</h4>
      </div>
    </div>
    <div>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Type here" v-model="dataMsg.message"
          v-on:keyup.enter="sendOneToOneMessage" />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="$refs.file.click()"><i
              class="fa fa-paperclip"></i></button>
          <input type="file" ref="file" class="d-none" @change="sendOneToOneAttachment">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
export default {
  name: 'MessageMyTeam',
  mixins: [AppMixin],
  data() {
    return {
      messagesList: [],
      dataMsg: {
        message: '',
        rId: ''
      },
      imagePath: '',
      imageMsg: {
        file: '',
        type: 'one',
        rId: ''
      },
      groupData: {
        'limit': 10,
        'offset': 0
      },
      total: 0
    }
  },
  methods: {
    loadMoreMessages: function () {
      let that = this
      that.groupData.limit = that.groupData.limit + that.groupData.limit
      that.getOneToOneMessage()
    },
    getOneToOneMessage: function () {
      let that = this
      let id = this.$route.params.id
      Api.getOneToOneMessage(id, that.groupData).then(response => {
        that.messagesList = response.data.res
        that.imagePath = response.data.path
        that.total = response.data.total
        this.scrollToBottom()
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
    sendOneToOneMessage: function () {
      let that = this;
      if (!that.dataMsg.message) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please enter message",
          showConfirmButton: true
        });
      } else {
        that.dataMsg.rId = this.$route.params.id
        Api.sendOneToOneMessage(that.dataMsg).then(response => {
          that.dataMsg.message = ''
          that.getOneToOneMessage()
        }
        ).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.anouncements.disabled = false;
          });
        });
      }
    },
    sendOneToOneAttachment: function (e) {
      let that = this;
      that.imageMsg.rId = this.$route.params.id
      that.imageMsg.file = that.$refs.file.files[0];
      e.preventDefault();
      const formData = new FormData();
      formData.append('file', that.imageMsg.file);
      formData.append('type', that.imageMsg.type)
      formData.append('rId', that.imageMsg.rId)
      let headers = {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
      Api.sendAttachment(formData, headers, 'one').then(response => {
        that.getOneToOneMessage()
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
    scrollToEnd() {
      $(document).ready(function () {
        $('.chat-gui').animate({
          scrollTop: $('.chat-gui .chat-list:last-child').position().top
        }, 'slow');
      });
    }
  },
  created() {
    this.getAuthUser()
    this.getEmployeeChat(this.$route.params.id)
    this.getOneToOneMessage()
    console.log('chat' + this.user.id);
    window.Echo.channel('chat' + this.user.id)
      .listen('MessageSent', (e) => {
        console.log("Event calling" + 'MessageSent' + this.user.id);
        this.getOneToOneMessage();
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
