<template>
    <select name="filter" id="filter" class="form-select">
        <!-- <option :value="'prova'" v-for="type in typeList">{{'prova'}}</option> -->
        <option value="prova">prova</option>
        <option value="prova">prova</option>
        <option value="prova">prova</option>
    </select>
</template>
  
<script>
export default {
    name: 'CardComponent',
    data() {
        return {
            typeList: []
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
select{
    width: 10rem;
    cursor: pointer;
    option{
        cursor: pointer;
    }
}
</style>