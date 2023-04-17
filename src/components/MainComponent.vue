<template>
    <main>
        <div class="container py-4">
            <SelectComponent/>
            
        </div>
    </main>
</template>
  
<script>
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