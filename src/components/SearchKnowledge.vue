<template>

  <div id="knowledge" class="section has-text-centered">

    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <img src="../assets/logo.png">
        <h1 class="title is-1">Omniverse.</h1>
        <h2 class="subtitle">Know what they all know.</h2>
        <SearchKnowledgeForm @searchingForKnowledge="searchKnowledge">
        </SearchKnowledgeForm>
        <br>
        <div class="columns">
          <div class="column">
            <button class="button is-danger is-outlined is-fullwidth">
              Show knowledge.
            </button>
          </div>
          <div class="column">
            <button class="button is-warning is-outlined is-fullwidth">
              Random knowledge.
            </button>
          </div>
          <div class="column">
            <button class="button is-success is-outlined is-fullwidth">
              What should I know.
            </button>
          </div>
        </div>
        
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <SearchKnowledgeResults :results="knowledges">
        </SearchKnowledgeResults>
      </div>
    </div>

  </div>

</template>

<script>

  import SearchKnowledgeForm from './SearchKnowledgeForm'
  import SearchKnowledgeResults from './SearchKnowledgeResults'
  import CreateKnowledgeForm from './CreateKnowledgeForm'

  export default {

    name: 'knowledge',

    data () {return {

      msg: 'I know where you were last night.',
      knowledges: []

    }},

    components: {

      SearchKnowledgeForm,
      SearchKnowledgeResults,
      CreateKnowledgeForm

    },

    methods: {

      searchKnowledge(knowledge) {

        this.knowledges = [];

        this.$http.get('http://api.sabichona.dev/api/knowledges?search=' + knowledge)
        .then(response => {

          this.knowledges = response.body.data.knowledges;

        });

      }

    }

  }
</script>