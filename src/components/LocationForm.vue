<template>

  <div>

    <div class="field">

      <vue-google-autocomplete 
      id="locationInput" 
      classname="input has-text-centered"
      :placeholder="$lang.strings.type_location_here"
      types="(cities)"
      v-on:placechanged="locationFound"/>

    </div>

    <br>

  </div>

</template>

<script>

  import VueGoogleAutocomplete from 'vue-google-autocomplete'

  export default {

    components: { VueGoogleAutocomplete },

    mounted() {

      if (! this.$store.getters['location/hasLocation']) {

        this.$store.commit('notification/notify', {
            content: this.$lang.strings.welcome_location,
            timeout: false
        })

      }

    },

    methods: {

     locationFound(address, location) {

      if(! this.isValid(address))
        return this.$store.commit('notification/notify', {
          content: this.$lang.errors.invalid_location,
          timeout: false
        })

      this.$store.commit('location/change', location)

      this.$store.commit('notification/notify', {
          content: this.$lang.strings.location_choosen,
          timeout: true
      })

    },

    isValid(address) {

      return address.locality && address.administrative_area_level_1 && address.country

    }

  }

}

</script>