<template>
    <b-modal id="add-tip-modal" size="lg" title="Add New Tip" :hide-footer=hideFooter no-fade no-enforce-focus>
        <form>
            <div class="form-group">
                <input type="radio" id="PRIVATE" v-model="tip.tip_type" value="tip">
                <label for="PRIVATE" class="mx-2">Tip</label>
                <input type="radio" id="visibility2" v-model="tip.tip_type" value="audio">
                <label for="visibility2" class="mx-2">Audio Tip</label>
            </div>

            <div class="form-group">
                <label>Select Category <span class="err">*</span></label>
                <multiselect v-model="tip.category" :options="categoryListMultiselect" group-values="values"
                    group-label="selectAll" :multiple="true" :group-select="true" placeholder="Type to search"
                    track-by="name" label="name">
                    <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                </multiselect>
            </div>
            <div class="form-group" v-if="user.role == 'ADMIN'">
                <label>Select Profile Type <span class="err">*</span></label>
                <multiselect v-model="tip.profile_type" :options="profileTypeListMultiselect" group-values="values"
                  group-label="selectAll" :multiple="true" :group-select="true" placeholder="Type to search" track-by="name"
                  label="name">
                  <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                </multiselect>
            </div>
            <div class="form-group">
                <label>Title <span class="err">*</span> </label>
                <input class="form-control" type="text" v-model="tip.title" placeholder="Title" />
            </div>
            <div class="form-group" v-if="tip.tip_type == 'tip'">
                <label>Description <span class="err">*</span></label>
                <textarea class="form-control" v-model="tip.description" placeholder="Description">
                        </textarea>
            </div>
            <div class="form-group"  v-if="tip.tip_type == 'audio'">
                <label>Audio File</label>
                <input type="file" class="form-control" id="file" ref="file" @change="fileOnChange">
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary" @click="addTip" :disabled="tip.disabled">Submit</button>
            </div>
        </form>
    </b-modal>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'

export default {
    name: 'Add',
    mixins: [AppMixin],
    props: {
        getTipsList: {
            type: Function
        }
    },
    data() {
        return {
            hideFooter: true,
            tip: {
                tip_type: 'tip',
                category: '',
                profile_type: '',
                title: '',
                description: '',
                audio_file: '',
                disabled: false
            },
        }
    },
    methods: {
        fileOnChange: function (e) {
            let that = this;
            this.tip.audio_file = this.$refs.file.files[0];
        },
        addTip: function () {
            let that = this;
            if (!that.tip.title || !that.tip.category || !that.tip.profile_type) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required fields",
                    showConfirmButton: true
                })
            } else { 
                that.tip.disabled = true;
                const formData = new FormData();
                formData.append('tip_type', that.tip.tip_type);
                formData.append('title', that.tip.title);
                formData.append('description', that.tip.description);
                formData.append('audio_file', that.tip.audio_file);
                formData.append('category', JSON.stringify(that.tip.category));
                formData.append('profile_type', JSON.stringify(that.tip.profile_type));

                Api.addTip(formData).then(response => {
                    that.tip.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Tip added successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.tip.disabled = false
                        that.tip.title = ''
                        that.tip.description = ''
                        that.tip.category = ''
                        that.tip.profile_type = ''
                        that.$bvModal.hide('add-tip-modal')
                        that.$refs.file.value = null;
                        that.getTipsList()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.tip.disabled = false;
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
