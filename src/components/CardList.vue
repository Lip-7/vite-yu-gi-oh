<template>
    <div class="wrapper p-4 bg-white">
        <div class="cardListHeader mb-4 bg-dark p-3">
            <h3 class=" text-white">Found tot cards</h3>
        </div>
        <div class="cardList">
            <div class="row" v-if="store.cardsList">
                <CardComponent v-for="card in store.cardsList" :card="card"/>
            </div>
        </div>
    </div>
</template>
  
<script>
import { store } from '../data/store';
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    components: {
        CardComponent,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped></style>