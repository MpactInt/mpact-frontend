<template>
    <b-modal id="update-tip-modal" size="lg" title="Update Tip" :hide-footer=hideFooter no-fade no-enforce-focus>
        <form>
            <div class="form-group">
                <input type="radio" id="PRIVATE" v-model="tipUpdate.tip_type" value="tip">
                <label for="PRIVATE" class="mx-2">Tip</label>
                <input type="radio" id="visibility2" v-model="tipUpdate.tip_type" value="audio">
                <label for="visibility2" class="mx-2">Audio Tip</label>
            </div>

            <div class="form-group" v-if="user.role == 'ADMIN'">
                <label>Select Category <span class="err">*</span></label>
                <multiselect v-model="tipUpdate.category" :options="categoryListMultiselect"
                    group-values="values" group-label="selectAll" :multiple="true" :group-select="true"
                    placeholder="Type to search" track-by="name" label="name">
                    <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                </multiselect>
            </div>
            <div class="form-group" v-if="user.role == 'ADMIN'">
                <label>Select Profile Type <span class="err">*</span></label>
                <multiselect v-model="tipUpdate.profile_type" :options="profileTypeListMultiselect" group-values="values"
                  group-label="selectAll" :multiple="true" :group-select="true" placeholder="Type to search" track-by="name"
                  label="name">
                  <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                </multiselect>
            </div>
            <div class="form-group">
                <label>Title <span class="err">*</span></label>
                <input class="form-control" type="text" v-model="tipUpdate.title" placeholder="Title" />
            </div>
            <div class="form-group" v-if="tipUpdate.tip_type == 'tip'">
                <label>Description <span class="err">*</span></label>
                <textarea class="form-control" v-model="tipUpdate.description" placeholder="Description">
                </textarea>
            </div>
            <div class="form-group"  v-if="tipUpdate.tip_type == 'audio'">
                <label>Audio File</label>
                <input type="file" class="form-control" id="file" ref="file" @change="fileOnChange">
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary" @click="updateTip"
                    :disabled="tipUpdate.disabled">Submit</button>
            </div>
        </form>
    </b-modal>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import { Vue2TinymceEditor } from "vue2-tinymce-editor";

export default {
    name: 'Edit',
    mixins: [AppMixin],
    props: [
        'getTipsList',
        'tipUpdate'
    ],
    data() {
        return {
            hideFooter: true,
        }
    },
    methods: {
        fileOnChange: function (e) {
            let that = this;
            this.tipUpdate.audio_file = this.$refs.file.files[0];
        },
        updateTip: function () {
            let that = this;
            if (!that.tipUpdate.title || !that.tipUpdate.category || !that.tipUpdate.profile_type) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required fields",
                    showConfirmButton: true
                });
            } else {
                that.tipUpdate.disabled = true
                const formData = new FormData();
                formData.append('id', that.tipUpdate.id);
                formData.append('tip_type', that.tipUpdate.tip_type);
                formData.append('title', that.tipUpdate.title);
                formData.append('description', that.tipUpdate.description);
                formData.append('audio_file', that.tipUpdate.audio_file);
                formData.append('category', JSON.stringify(that.tipUpdate.category));
                formData.append('profile_type', JSON.stringify(that.tipUpdate.profile_type));

                Api.updateTip(formData).then(response => { 
                    that.tipUpdate.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Tip updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.tipUpdate.disabled = false
                        that.$bvModal.hide('update-tip-modal')
                        that.getTipsList()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.tipUpdate.disabled = false;
                    });
                });
            }
        },
    },
    mounted() {
        this.getCategoriesListMultiselect()
        this.getProfileTypeListMultiselect()
    }
}
</script>
