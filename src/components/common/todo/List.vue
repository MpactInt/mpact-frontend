<template>
    <div class="mt-3">
        <div class="row">
            <div class="col-md-3">
                <select v-model="getTodoData.sortBy" class="form-control" v-on:change="getTodoList">
                    <option value="">Sort By</option>
                    <option value="title">Title</option>
                </select>
            </div>
            <div class="col-md-3">
                <input type="text" v-model="getTodoData.keyword" class="form-control" placeholder="Search"
                    v-on:keyup="getTodoList" />
            </div>
            <div class="col-md-3">
            </div>
            <div class="col-md-3" v-if="user.role == 'ADMIN'">
                <button class="btn btn-primary float-right" v-b-modal.add-todo-modal>Add New Todo</button>
            </div>
        </div>
        <div class="row mt-3">
            <table class="table">
                <tr>
                    <td v-if="user.role == 'ADMIN'">Company Name</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
                <tr v-if="todosLength" v-for="r in todos.data" v-bind:key="r.id">
                    <td v-if="user.role == 'ADMIN'"><span v-for="c in r.company" v-bind:key="c.id">{{ c.company_name }},</span></td>
                    <td>{{ r.title }}</td>
                    <td>{{ r.description }}</td>
                    <td>{{ r.status }}</td>
                    <td>
                        <button v-if="user.role == 'ADMIN'" class="btn btn-primary" @click="getTodo(r.id)"><i
                                class="fa fa-pencil"></i></button>
                        <button v-if="user.role == 'ADMIN'" class="btn btn-danger" @click="deleteTodo(r.id)"><i
                                class="fa fa-trash"></i></button>
                        <button v-if="user.role != 'ADMIN' && r.status == 'NEW' && company.role=='COMPANY_ADMIN'" class="btn btn-primary" @click="completeTodo(r.id)"><i
                                class="fa fa-check"></i></button>
                         <router-link v-if="user.role!='ADMIN'" class="btn btn-primary" :to="'/employer/todo/'+r.id"><i
                                class="fa fa-eye"></i></router-link>
                    </td>
                </tr>
                <tr v-if="!todosLength">
                    <td colspan="5">No Data Found</td>
                </tr>
            </table>
            <pagination :data="todos" @pagination-change-page="getTodoList" />
        </div>
        <!--Add resource modal popup-->
        <Add :getTodoList="getTodoList"></Add>
        <!--Update resource modal popup-->
        <Edit :getTodoList="getTodoList" :todoUpdate="todoUpdate"></Edit>
    </div>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import Add from '../todo/Add.vue'
import Edit from '../todo/Edit.vue'

export default {
    name: 'List',
    mixins: [AppMixin],
    components: { Add, Edit },
    data() {
        return {
            todos: {
            },
            getTodoData: {
                sortBy: '',
                keyword: ''
            },
            todosLength: ''
        }
    },
    methods: {
        deleteTodo: function (id) {
            let that = this
            this.$swal({
                title: 'Are you sure?',
                text: 'All the related info will be deleted, you wont be able to revert !',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.value) {
                    Api.deleteTodo(id).then(response => {
                        this.$swal({
                            icon: "success",
                            title: "Success",
                            text: "Todo deleted successfully",
                            showConfirmButton: true
                        }).then(function () {
                            that.getTodoList()
                        });
                    }).catch((error) => {
                        this.$swal({
                            icon: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        }).then(function () {
                            that.todo.disabled = false;
                        });
                    });
                }
            });
        },
        completeTodo: function (id) {
            let that = this
            this.$swal({
                title: 'Are you sure?',
                text: 'Ypou want to mark this todo as complete!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.value) {
                    Api.completeTodo(id).then(response => {
                        this.$swal({
                            icon: "success",
                            title: "Success",
                            text: "Todo completed successfully",
                            showConfirmButton: true
                        }).then(function () {
                            that.getTodoList()
                        });
                    }).catch((error) => {
                        this.$swal({
                            icon: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        }).then(function () {
                            that.todo.disabled = false;
                        });
                    });
                }
            });
        },
        getTodoList: function (page = 1) {
            let that = this;
            Api.getTodoList(that.getTodoData,page).then(response => {
                that.todos = response.data.res
                that.todosLength = that.todos.data.length
            }).catch((error) => {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: error.response.data.message,
                    showConfirmButton: true
                }).then(function () {
                    that.todo.disabled = false;
                });
            });
        },
    },
    mounted() {
        this.getTodoList()
    }
}
</script>
