<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content" :class="{'content-collapse':collapse}">
            <transition name="move" mode="out-in">
                <div class="home">
                    <div class="crumbs">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item><i class="el-icon-tickets"></i> {{this.$route.name}}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="container">
                        <router-view></router-view>
                        <div class="handle-box"></div>
                    </div>
                    
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import bus from '@/utils/bus';
    export default {
        data() {
            return {
                collapse: false
            }
        },
        components: {
            vHead,
            vSidebar
        },
        created() {
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>
