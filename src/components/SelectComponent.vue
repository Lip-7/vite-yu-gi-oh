<template>
    <div class="container d-flex justify-content-center p-4">
        <form class="row row-cols-lg-auto g-3 align-items-center" @submit.prevent="$emit('searchSubmit')">
            <div class="col-12">
                <label class="visually-hidden" for="charactername">Search name</label>
                <input type="text" class="form-control" id="charactername" placeholder="Search name" v-model.trim="store.search.fname">
            </div>

            <div class="col-12">
                <label class="visually-hidden" for="searchStatus">Search status</label>
                <select class="form-select" id="searchStatus" v-model="store.search.archetype">
                    <option selected value="">Choose...</option>
                    <option :value="type" v-for="(type, index) in typeList" :key="index">{{ type }}</option>
                </select>
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Search</button>
            </div>

            <div class="col-12">
                <button type="reset" class="btn btn-primary" @click="resetSearch()">Reset</button>
            </div>
        </form>
    </div>
</template>
  
<script>
import { store } from '../data/store.js'
import axios from 'axios';
export default {
    name: 'CardComponent',
    data() {
        return {
            store,
            typeList: []
        }
    },
    methods: {
        getArchetype() {
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then(res => {
                const myArray = res.data
                this.typeList = myArray.map(type => {
                    return type.archetype_name
                })
            })
        }
    },
    components: {

    },
    mounted() {
        this.getArchetype();


    }
}
</script>
<style lang="scss" scoped>
select {
    width: 10rem;
    cursor: pointer;

    option {
        cursor: pointer;
    }
}
</style>