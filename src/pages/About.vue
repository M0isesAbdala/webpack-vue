<template>
    <div>
        OLÁ EU SOU O SOBRE
    </div>
</template>
<script>
    export default {
        name: 'about',
        data(){
            return{
                message: 'Oi eu sou o sobre'
            }
        },
        mounted(){
            console.log(this.message);
        }
    }
</script>