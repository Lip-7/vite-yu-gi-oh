<template>
    <main>
        <div class="container py-4">
            <SelectComponent/>
            <CardList/>
        </div>
    </main>
</template>
  
<script>
import CardList from './CardList.vue';
import SelectComponent from './SelectComponent.vue';
export default {
    name: 'MainComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        SelectComponent,
        CardList,
    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
main{
    background-color: $bgMain;
}
</style>