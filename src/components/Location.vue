<template>

  <transition name="fade">
    <div v-if="!hasLocation">

      <div class="notification">
        {{ $lang.strings.welcome_location }}
      </div>

      <img id="logo" src="../assets/logo.png">

      <vue-google-autocomplete 
      id="locationInput" 
      classname="input has-text-centered"
      :placeholder="$lang.strings.type_location_here"
      types="(cities)"
      v-on:placechanged="locationFound"/>

      <Notification ref="notification"/>

    </div>
  </transition>

</template>

<script>

  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  import Notification from './Notification'
  import { mapGetters } from 'vuex'

  export default {

    components: { VueGoogleAutocomplete, Notification },

    computed: {

      ...mapGetters('location', ['hasLocation'])

    },

    methods: {

     locationFound(address, location) {

      if(! this.isValid(address))
        return this.$refs.notification.flashError(this.$lang.errors.invalid_location, 4)

      this.$store.commit('location/change', {...location, ...address})

    },

    isValid(address) {

      return address.locality && address.administrative_area_level_1 && address.country

    }

  }

}

</script>

<style scoped>

  #locationInput{

    margin-top: 1em

  }

</style>