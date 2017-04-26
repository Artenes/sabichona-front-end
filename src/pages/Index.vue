<template>

  <div class="section has-text-centered">

    <div class="columns">
      <div class="column is-half is-offset-one-quarter">

        <div class="columns logo-row">
          <div class="column"><Notification/></div>
          <div class="column is-half">
            <img id="logo" src="../assets/logo.png">
            <div v-show="hasLocation">
              <h1 class="title">{{ $lang.strings.app_name }}</h1>
              <h2 class="subtitle">{{ $lang.strings.app_description }}</h2>  
              <p>{{ location }}</p>
            </div>
          </div>
          <div class="column"></div>
        </div>
        
        <LocationForm v-show="!hasLocation"/>

        <SearchKnowledgeForm @searchingForKnowledge="searchKnowledge" v-show="hasLocation"/>

      </div>
    </div>

    <div class="columns">
      <div class="column">

        <SearchKnowledgeResults/>

      </div>
    </div>

  </div>

</template>

<script>

  import Notification from '@/components/Notification'
  import LocationForm from '@/components/LocationForm'
  import SearchKnowledgeForm from '@/components/SearchKnowledgeForm'
  import SearchKnowledgeResults from '@/components/SearchKnowledgeResults'
  import CreateKnowledgeForm from '@/components/CreateKnowledgeForm'
  import { mapState, mapGetters } from 'vuex'

  export default {

    created() {

      this.$store.commit('location/refresh')

    },

    computed: {

      ...mapGetters('location', ['hasLocation']),
      ...mapState('location', {location: 'label'})

    },

    components: {

      Notification,
      LocationForm,
      SearchKnowledgeForm,
      SearchKnowledgeResults,
      CreateKnowledgeForm

    },

    methods: {

      searchKnowledge(knowledge) {

        console.log('fuck')

        locationStorage.commit('set', knowledge)

        return

        this.knowledges = [];

        this.$http.get('http://api.sabichona.dev/api/knowledges?search=' + knowledge)
        .then(response => {

          this.knowledges = response.body.data.knowledges;

        });

      }

    }

  }
</script>