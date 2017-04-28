<template>

  <div v-show="hasLocation && sawIntro">
    
    <Navigation
      @changeLocation="changeLocation"
    />

    <img id="logo" src="../assets/logo.png">
    <h1 class="title">{{ $lang.strings.app_name }}</h1>
    <h2 class="subtitle">{{ $lang.strings.app_description }}</h2>
    <LocationForm/>
    
    <Search/>



  </div>

</template>

<script>

  import Navigation from '@/components/Navigation'
  import Search from '@/components/Search'
  import LocationForm from '@/components/LocationForm'
  import { mapState, mapGetters } from 'vuex'

  export default {

    data(){
      return {
        isChangingLocation: false
      }
    },

    components: { Navigation, Search, LocationForm},

    computed: {

      ...mapState('location', ['label']),
      ...mapGetters('location', ['hasLocation']),
      ...mapState('experience', ['sawIntro'])

    },

    methods: {

      changeLocation(){
        this.isChangingLocation = !this.isChangingLocation;
      }

    }

  }

</script>

<style scoped>
  
  #location {

    margin-bottom: 2em;

  }

</style>