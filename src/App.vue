<template>
    <div id="app">
        <div class="nav">
            <!-- <router-link to="/"> Home </router-link> -->
            <a href="#/">Home</a> |
            <a href="#/about">About</a> |
            <button v-on:click="click"> click me </button>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                mensagem: 'eu sou naveBar'
            }
        },
        mounted(){
            console.log(this.mensagem);
        },
        methods:{
            click(){
                this.$router.replace({name: 'About'});
            }
        }
    }
</script>
