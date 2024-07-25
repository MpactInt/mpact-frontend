<template>
    <b-modal id="update-settings-modal" size="lg" title="Update Settings" :hide-footer=hideFooter no-fade no-enforce-focus>
        <form>
            
            <div class="form-group">
                <label>Key <span class="err">*</span></label>
                <input class="form-control" type="text" v-model="settingsUpdate.key" placeholder="Key" disabled/>
            </div>
            <div class="form-group">
                <label>Value <span class="err">*</span></label>
                <textarea class="form-control" v-model="settingsUpdate.value" placeholder="Value">
                </textarea>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary" @click="updateSettings"
                    :disabled="settingsUpdate.disabled">Submit</button>
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
        'getSettingsList',
        'settingsUpdate'
    ],
    data() {
        return {
            hideFooter: true,
        }
    },
    methods: {
        updateSettings: function () { 
            let that = this;
            if (!that.settingsUpdate.key || !that.settingsUpdate.value) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required fields",
                    showConfirmButton: true
                });
            } else {
                that.settingsUpdate.disabled = true
                Api.updateSettings(that.settingsUpdate).then(response => {
                    that.settingsUpdate.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Settings updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.settingsUpdate.disabled = false
                        that.$bvModal.hide('update-settings-modal')
                        that.getSettingsList()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.settingsUpdate.disabled = false;
                    });
                });
            }
        },
    },
    mounted() {
        this.getCompaniesListMultiselect()
    }
}
</script>
