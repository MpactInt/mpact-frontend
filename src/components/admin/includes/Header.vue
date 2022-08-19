<template>
    <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="javascript:void(0)"><img src="../../../assets/images/logo.png"></a>
            <button class="navbar-toggler" data-bs-target="#adminSidebar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto cutom-menu-list">
                    <li class="nav-item">
                        <a class="nav-link pd-link" href="#">Check-In</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link pd-link" href="#">Ask a question </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn custom-btn" href="#">
                            <div class="gradient-btn">Register for a workshop</div>
                        </a>
                    </li>
                </ul>
            </div> -->
        </nav>
    </div>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'


export default {
    name: "Header",
    props:['userProp'],
    data() {
        return {
            authUser:{}
        }
    },
    mixins: [AppMixin],
    methods: {
       
    },
    created() {
        this.authUser = this.userProp
    },
}
</script>