<template>

  <div id="knowledge" class="section has-text-centered">

    <div class="columns">

      <div class="column is-12">
        <img src="../assets/logo.png">
      </div>

    </div>

    <div class="columns">
      <div class="column">
        <h2 class="title">I know where you were last night.</h2>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <SearchKnowledgeForm @searchingForKnowledge="searchKnowledge">
        </SearchKnowledgeForm>    
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

  export default {

    name: 'knowledge',

    data () {return {

      msg: 'I know where you were last night.',
      knowledges: []

    }},

    components: {

      SearchKnowledgeForm,
      SearchKnowledgeResults

    },

    methods: {

      searchKnowledge(knowledge) {

        this.$http.get('http://api.sabichona.dev/api/knowledges?search=' + knowledge)
        .then(response => {

          this.knowledges = response.body.data.knowledges;

        }, response => {

          this.knowledges = [];

        });

      }

    }

  }
</script>