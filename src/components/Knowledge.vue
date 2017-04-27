<template>

  <div v-show="hasLocation && sawIntro">
    
    <img id="logo" src="../assets/logo.png">
    <h1 class="title">{{ $lang.strings.app_name }}</h1>
    <h2 class="subtitle">{{ $lang.strings.app_description }}</h2>
    <span id="location" class="tag is-info">{{ label }}</span>
    
    <Search/>

  </div>

</template>

<script>

  import Search from '@/components/Search'
  import { mapState, mapGetters } from 'vuex'

  export default {

    components: { Search },

    computed: {

      ...mapState('location', ['label']),
      ...mapGetters('location', ['hasLocation']),
      ...mapState('experience', ['sawIntro'])

    }

  }

</script>

<style scoped>
  
  #location {

    margin-bottom: 2em;

  }

</style>