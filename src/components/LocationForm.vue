<template>

  <div>

    <div class="columns">
    <div class="column is-4 is-offset-4">
        <div class="field has-addons has-addons-centered">
          <p class="control is-expanded">
            <vue-google-autocomplete 
            id="locationInput" 
            classname="input is-info has-text-centered is-small"
            :placeholder="$store.state.location.label"
            types="(cities)"
            v-on:placechanged="locationFound"/>
          </p>
          <p class="control">
            <button class="button is-outlined" v-show="canClose" @click="emitClose">
              {{ $lang.strings.close }}
            </button>
          </p>
        </div>
      </div>
    </div>

    <Notification ref="notification"/>

  </div>

</template>

<script>

  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  import Notification from './Notification'
  import { mapGetters } from 'vuex'

  export default {

    components: { VueGoogleAutocomplete, Notification },

    props: ['canClose'],

    computed: {

      ...mapGetters('location', ['hasLocation'])

    },

    methods: {

     locationFound(address, location) {

      if(! this.isValid(address))
        return this.$refs.notification.flashError(this.$lang.errors.invalid_location, 4)

      this.$store.commit('location/change', {...location, ...address})

      this.$emit('changed')

      document.getElementById('locationInput').value = "";

    },

    isValid(address) {

      return address.locality && address.administrative_area_level_1 && address.country

    },

    emitClose() {

      this.$emit('close')

    }

  }

}

</script>