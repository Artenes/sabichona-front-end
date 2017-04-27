<template>

  <div class="section has-text-centered">

    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        
        <!-- First captures de location -->
        <Location/>

        <!-- Second explain what this is about -->
        <Intro/>

        <!-- Finnaly show the search and creation interface -->
        <Knowledge/>

      </div>
    </div>

  </div>

</template>

<script>

  import Location from '@/components/Location'
  import Intro from '@/components/Intro'
  import Knowledge from '@/components/Knowledge'
  import { mapState, mapGetters } from 'vuex'

  export default {

    components: {

      Location, Intro, Knowledge

    },

    created() {

      this.$store.commit('location/refresh')
      this.$store.commit('experience/refresh')

    },

    computed: {

      ...mapGetters('location', ['hasLocation']),
      ...mapState('location', {location: 'label'})

    }

  }

</script>
