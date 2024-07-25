<template>
<section>
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Settings</span>
        </p>
    </div>

    <!-- card-10 stat -->
    <div class="w-full">
        <div class="mx-5 flex flex-wrap space-x-1 items-center">
            <button
                class="m-1 flex items-center font-sixe-[20px] px-12 py-2 rounded-md bg-[#BE0858] text-white text-center text-md shadow">
                <span class="flex-1 text-white ml-3 whitespace-nowrap">
                    <router-link to="/employer/settings">Welcome Note</router-link>
                </span>
            </button>
            <button
                class="m-1 flex items-center font-sixe-[20px] px-12 py-2 mx-8 rounded-md bg-white text-black text-center text-md shadow">
                <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">
                    <router-link to="/employer/settings-logo">Change Logo</router-link>
                </span>
            </button>
            <button
                class="m-1 flex items-center font-sixe-[20px] px-12 py-2 mx-8 rounded-md bg-white text-black text-center text-md shadow">
                <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">
                    <router-link to="/employer/settings-password">Change Password</router-link>
                </span>
            </button>
        </div>
        <div class="w-full">
            <div class="p-6 flex justify-between px-8">
                <form class="w-full" @submit="addWelcomeNote" ref="addWelcomeNoteForm" enctype="multipart/form-data">
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full px-3 mb-2 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-title-1">
                                Title 
                            </label>
                            <input
                                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="welcome_note" type="text" v-model="note.title" placeholder="Title" autocomplete="off">
                            <p class="text-red-500 text-xs italic hidden">Please fill out this field.</p>
                        </div>

                    </div>

                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full">
                            <div class="w-full  px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="description">
                                    Description 
                                </label>
                                <vue2-tinymce-editor v-model="note.description" placeholder="Description"></vue2-tinymce-editor>
                            </div>
                        </div>
                        
                    </div>

                    <div class="flex items-center justify-center w-full mb-4">
                        <div class="flex flex-col w-full">
                            <p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Upload Image </p>
                            <label for="welcome_image"
                                class="flex flex-col items-center justify-center w-full h-64 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100 ">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">

                                    <svg class="w-10 h-10 mb-3 text-gray-400" viewBox="0 0 40 40" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" fill="#F5F5F5" />
                                        <path
                                            d="M31.6668 13.3335V3.3335M26.6668 8.3335H36.6668M36.6668 20.0002V28.6668C36.6668 31.4671 36.6668 32.8672 36.1219 33.9368C35.6425 34.8776 34.8776 35.6425 33.9368 36.1219C32.8672 36.6668 31.4671 36.6668 28.6668 36.6668H11.3335C8.53323 36.6668 7.1331 36.6668 6.06354 36.1219C5.12273 35.6425 4.35783 34.8776 3.87846 33.9368C3.3335 32.8672 3.3335 31.4671 3.3335 28.6668V11.3335C3.3335 8.53323 3.3335 7.1331 3.87846 6.06354C4.35783 5.12273 5.12273 4.35783 6.06354 3.87846C7.1331 3.3335 8.53323 3.3335 11.3335 3.3335H20.0002M3.5764 33.2107C4.3583 30.3978 6.93816 28.3335 10.0002 28.3335H21.6668C23.2157 28.3335 23.9901 28.3335 24.6341 28.4616C27.2787 28.9876 29.346 31.055 29.8721 33.6996C30.0002 34.3436 30.0002 35.118 30.0002 36.6668M23.3335 15.8335C23.3335 19.5154 20.3487 22.5002 16.6668 22.5002C12.9849 22.5002 10.0002 19.5154 10.0002 15.8335C10.0002 12.1516 12.9849 9.16683 16.6668 9.16683C20.3487 9.16683 23.3335 12.1516 23.3335 15.8335Z"
                                            stroke="#BE0858" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <p class="mb-2 text-sm text-gray-500 "><span class="font-semibold">Click to
                                            upload</span> or drag and drop</p>
                                    <p class="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX.
                                        800x400px)</p>
                                </div>
                            </label>
                            <input type="file" class="hidden" ref="welcome_image" id="welcome_image" @change="imageOnChange" accept=".jpg, .jpeg, .png" />
                        </div>
                    </div>
                    
                    <div class="mx-auto ">
                        <div class="form-group" v-if="note.oldImage">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >Uploaded Image </label>
                          <img :src="note.oldImage" height="70" width="70" />
                        </div>
                    </div>

                    <div class="mx-auto ">
                        <button
                            class="b-0 flex items-center font-sixe-[20px] px-12 py-2  rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black" type="submit" :disabled="note.disabled">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- card-10 end -->
</section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import axios from 'axios'
import Api from '../../router/api'
import { Vue2TinymceEditor } from "vue2-tinymce-editor";

export default {
  name: 'Settings',
  data() {
    return {
      upload: {
        'logo': '',
        'disabled': false
      }
    }
  },
  components: {
    Vue2TinymceEditor
  },
  mixins: [AppMixin],
  methods: {
    fileOnChange: function (e) {
      let that = this;
      this.upload.logo = this.$refs.logo.files[0];
    },
    imageOnChange: function (e) {
      let that = this;
      that.note.image = ''
      that.note.image = this.$refs.welcome_image.files[0];
    },
    addWelcomeNote: function (e) {
      e.preventDefault()
      let that = this;
      if (0) { //if (!that.note.title || !that.note.description || !that.note.image) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else {
        that.note.disabled = true;
        const formData = new FormData();
        formData.append('image', that.note.image);
        formData.append('title', that.note.title);
        formData.append('description', that.note.description);

        let headers = {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
        Api.addWelcomeNote(formData).then(response => {
          that.note.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Welcome note added successfully",
            showConfirmButton: true
          }).then(function () {
            that.note.disabled = false
            that.$refs.welcome_image.value = null;
            that.note.title = ''
            that.note.description = ''
            that.getWelcomeNote();
          });
        }
        ).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.note.disabled = false;
          });
        });
      }
    },

  },
  mounted() {
    this.getWelcomeNote()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
