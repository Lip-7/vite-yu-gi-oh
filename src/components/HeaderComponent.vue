<template>
    <header class=" d-flex align-items-center p-3">
        <div class="logo">
            <img src="../assets/img/Yu-Gi-Oh!.svg" alt="">
        </div>
        <div class="title">
            <h1>Yu-Gi-Oh! API</h1>
        </div>
    </header>
</template>
  
<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
header{
    .logo{
        width: 100px;
        img{
            width: 100%;
        }
    }
    .title{
        h1{
            font-size: 3.5rem;
        }
    }
}
</style>