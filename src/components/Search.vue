<template>

  <div>

   <form id="searchForm" @submit="doSearch">

     <div class="field has-addons has-addons-centered">
      <p class="control is-expanded" :class="{'is-loading': loading}">
        <input class="input" type="text" v-model="search" :placeholder="$lang.strings.please_type_here">
      </p>
      <p class="control">
        <button class="button is-info is-outlined" type="submit">
          {{ $lang.strings.search }}
        </button>
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
        search: '',
        loading: false
      }
    },

    computed: {

      ...mapGetters('location', ['hasLocation']),
      ...mapState('experience', ['sawIntro']),
      ...mapState('location', {locationUuid: 'uuid'})

    },

    methods: {

      doSearch(event) {

        this.loading = true;

        event.preventDefault();

        let location = this.locationUuid;

        this.$http.get('http://api.sabichona.dev/api/knowledges/search/'+location+'?search='+this.search)
        .then(response => {

          let state = response.body.state;

          switch(state) {

            case 'found':
              this.$emit('found', response.body);
              break;
            case 'random':
              this.$emit('random', response.body.knowledges[0]);
              break;
            case 'nothing':
              this.$emit('nothing', this.search);
              break;
            default:
              this.$emit('first');
              break;
            
          }

          this.loading = false;

        });

      }

    }

  }
</script>

<style scoped>
  
  form#searchForm {

    margin-bottom: 3em;

  }

</style>