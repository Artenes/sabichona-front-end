<template>

  <div>
    
   <form>

     <div class="field has-addons has-addons-centered">
      <p class="control is-expanded">
        <input class="input" type="text" v-model="search" :placeholder="$lang.strings.please_type_here">
      </p>
      <p class="control">
        <button class="button is-info is-outlined" type="submit">{{ $lang.strings.search }}</button>
      </p>
    </div>

  </form>

</div>

</template>

<script>

  import { mapState, mapGetters } from 'vuex'

  export default {

    data() {
      return {
        search: ''
      }
    },

    computed: {

      ...mapGetters('location', ['hasLocation']),
      ...mapState('experience', ['sawIntro'])

    }

  }
</script>