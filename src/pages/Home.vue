<template>
    <div>
        OLÁ EU SOU A HOME
    </div>
</template>
<script>
    export default {
        name: 'home',
        data(){
            return{
                message: 'Oi eu sou a home'
            }
        },
        mounted(){
            console.log(this.message);
        }
    }
</script>