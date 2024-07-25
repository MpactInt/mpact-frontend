<template>
<div class="flex flex-row space-x-4 w-full px-8">
    <div class="px-4 p-8 bg-white my-4 rounded-lg shadow">
        <div class="my-4">
            <p class="text-4xl text-[#BE0858] uppercase font-bold">Chats</p>
        </div>
        <div class="space-y-2 my-4">
            <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="simple-search" class="px-14 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search Employees" required v-model="searchData.name" @keyup="getEmployeesListChat">
                </div>
            </form>
            <div class="flex flex-row space-x-2">
                <router-link :to="'/' + currentUrl + '/one-to-one-chat'">
                    <button class="flex items-center font-sixe-[20px] px-4 py-1 rounded-md bg-[#0A0446] text-white text-center text-md shadow">
                        Inbox
                    </button>
                </router-link>
                <router-link :to="'/' + currentUrl + '/group-chat'">
                    <button class="flex items-center font-sixe-[20px] px-4 py-1 rounded-md bg-white text-black text-center text-md shadow">
                        Groups
                    </button>
                </router-link>
            </div>
        </div>
        <hr class="my-2">
        <ul class="max-w-full space-y-6">
            <li class="m-1 p-2 rounded-lg hover:bg-white" v-for="e in empList.data" v-bind:key="e.id">
                <router-link :to="'/' + currentUrl + '/one-to-one-chat/' + e.id" @click.native="readOneToOneMessage(e.id)">
                    <div class="flex items-center lg:space-x-2 md:space-y-1">
                        <div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" />

                        </div>
                        <div>
                            <p class="text-md font-medium truncate">
                                {{ e.first_name}} {{ e.last_name }}
                                <span class="px-[6px] text-white pb-[2px] rounded-full bg-[#BE0858]" v-if="e.new_message.length">{{e.new_message.length}}</span>
                            </p>
                            <p class="text-sm  font-medium text-justify truncate">
                                {{e.last_content}}
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base text-gray-900 mt-[-2rem]">
                            {{ e.last_created_at | fromNow }}
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
    <div class="bg-white my-4 rounded-lg shadow w-full">
        <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen" v-if="this.$route.params.id">
            <div class="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
                <div class="relative flex flex-wrap items-center space-x-4">
                    <div class="relative">
                        <span class="absolute text-green-500 right-0 bottom-0">
                            <svg width="20" height="20">
                                <circle cx="8" cy="8" r="8" fill="currentColor"></circle>
                            </svg>
                        </span>
                        <img :src="imagePath + '/profile-images/' + empChat.profile_image" alt="" class="w-10 sm:w-16 h-10 sm:h-16 rounded-full">
                    </div>
                    <div class="flex flex-col leading-tight">
                        <div class="text-2xl mt-1 flex items-center">
                            <span class="mr-3 text-2xl text-[#0A0446] font-bold">{{ empChat.first_name }} {{ empChat.last_name }}</span>
                        </div>
                        <span class="text-lg text-gray-600"></span>
                    </div>
                </div>
            </div>

            <div id="chat-gui" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch chat-gui" v-chat-scroll>
                <p class="text-center" v-if="groupData.limit < total">
                    <button class="btn btn-primary load-more" @click="loadMoreMessages">Load More Messages
                    </button>
                </p>
                <div class="chat-message chat-list" v-if="messagesList.length" v-for="m in messagesList" v-bind:key="m.id">
                    <div class="flex items-end" v-if="authUser.emp_id != m.sender_id">
                        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                            <div v-if="m.message_type == 'TEXT'">
                                <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-[#F1F1F1] text-gray-600" v-html="convertToHtml(m.content)"></span>
                                <span class="message-time">{{ m.created_at | fromNow }}</span>
                            </div>
                            <div class="message-bubble" v-if="m.message_type == 'FILE'">
                                <a href="javascript:void(0)" @click="downloadAttachment(m.id, m.content, 'one')">
                                    <img height="50" width="50" src="../../../assets/images/file.png" /><br><span class="message-time">{{ m.created_at | fromNow }}</span>
                                </a>
                            </div>
                        </div>
                        <img class="w-6 h-6 rounded-full order-1" :src="imagePath + '/profile-images/' + m.profile_image" alt="image">
                    </div>

                    <div class="flex items-end justify-end" v-else>
                        <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                            <div v-if="m.message_type == 'TEXT'">
                                <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white" v-html="convertToHtml(m.content)"></span>
                                <span class="message-time">{{ m.created_at | fromNow }}</span>
                            </div>
                            <div class="message-bubble" v-if="m.message_type == 'FILE'">
                                <a href="javascript:void(0)" @click="downloadAttachment(m.id, m.content, 'one')">
                                    <img height="50" width="50" src="../../../assets/images/file.png" /><br><span class="message-time">{{ m.created_at | fromNow }}</span>
                                </a>
                            </div>
                        </div>
                        <img :src="imagePath + '/profile-images/' + m.profile_image" alt="My profile" class="w-6 h-6 rounded-full order-2">
                    </div>

                </div>
            </div>

            <div class="pt-4 mb-2 sm:mb-0">
                <div class="relative flex">

                    <textarea type="text" placeholder="Write your message!" class="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-100 rounded-md py-3 items-center" v-model="dataMsg.message" v-on:keyup.enter="sendOneToOneMessage"></textarea>
                    <div class="absolute right-2 items-center inset-y-0 hidden sm:flex">

                        <button type="button" class="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-[#F1F1F1] focus:outline-none" @click="$refs.file.click()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6 text-gray-600">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13">
                                </path>
                            </svg>
                        </button>
                        <input type="file" ref="file" class="hidden" @change="sendOneToOneAttachment">

                        <button type="button" class="inline-flex items-center justify-center rounded-lg px-4 py-2 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none" @click="sendOneToOneMessage">
                            <span class="font-bold">Send</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-6 w-6 ml-2 transform rotate-90">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
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
            dataMsg: {
                message: '',
                rId: ''
            },
            imageMsg: {
                file: '',
                type: 'one',
                rId: ''
            },
            currentUrl: '',
        }
    },
    methods: {
        loadMoreMessages: function () {
            let that = this
            that.groupData.limit = that.groupData.limit + that.groupData.limit
            that.getOneToOneMessage()
        },
        sendOneToOneMessage: function () {
            let that = this
            if (!that.dataMsg.message) {
                this.$swal({
                    icon: 'error',
                    title: 'error',
                    text: 'Please enter message',
                    showConfirmButton: true
                })
            } else {
                that.dataMsg.rId = this.$route.params.id
                Api.sendOneToOneMessage(that.dataMsg).then(response => {
                    that.dataMsg.message = ''
                    that.getOneToOneMessage()
                    that.getEmployeesListChat()
                }).catch((error) => {
                    this.$swal({
                        icon: 'error',
                        title: 'error',
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.anouncements.disabled = false
                    })
                })
            }
        },
        sendOneToOneAttachment: function (e) {
            let that = this
            that.imageMsg.rId = this.$route.params.id
            that.imageMsg.file = that.$refs.file.files[0]
            e.preventDefault()
            const formData = new FormData()
            formData.append('file', that.imageMsg.file)
            formData.append('type', that.imageMsg.type)
            formData.append('rId', that.imageMsg.rId)
            let headers = {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
            }
            Api.sendAttachment(formData, headers, 'one').then(response => {
                that.getOneToOneMessage();
                that.getEmployeesListChat();
            }).catch((error) => {
                this.$swal({
                    icon: 'error',
                    title: 'error',
                    text: error.response.data.message,
                    showConfirmButton: true
                })
            })
        },
        scrollToEnd() {
            $(document).ready(function () {
                $('.chat-gui').animate({
                    scrollTop: $('.chat-gui .chat-list:last-child').position().top
                }, 'slow')
            })
        },

    },
    created() {
        var url = document.URL.split('/');
        this.currentUrl = url[3]

        this.getEmployeesListChat()
        this.getAuthUser()
        this.getEmployeeChat(this.$route.params.id)
        this.getOneToOneMessage()
        if (this.$route.name == 'OneToOneChat') {
            window.Echo.channel('chat' + this.user.id)
                .listen('MessageSent', (e) => {
                    console.log(e)
                    // this.getOneToOneMessage()
                    this.messagesList.push({
                        'id': e.messageSent.id,
                        'content': e.messageSent.content,
                        'message_type': e.messageSent.message_type,
                        'first_name': e.first_name,
                        'last_name': e.last_name,
                        'profile_image': e.profile_image,
                        'created_at': e.messageSent.created_at
                    })
                });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
