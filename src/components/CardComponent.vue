<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
        <div class="card">
            <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
            <!-- <img src="http://" class="card-img-top" alt="..."> -->
            <div class="card-body bg-dark">
                <h5 class="card-title text-white">{{card.name}}</h5>
                <!-- <a href="#" class="btn btn-primary">Buy it!</a> -->
                <h6 v-if="card.archetype" class="text-white"><em>{{ card.archetype }}</em></h6>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'CardComponent',
    data() {
        return {
        }
    },
    props: ['card'],
    methods: {

    },
    components: {

    },
    mounted() {

    }
}
</script>

<style lang="scss" scoped>
.card{
    width: 100%;
}
</style>