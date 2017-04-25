<template>

  <div id="knowledge-creation">

   <form @submit="createKnowledge">

   <div class="field has-addons has-addons-centered">
      <p class="control">
        <input class="input" type="text" v-model="knowledgeContent" placeholder="What are you looking for?">  
      </p>
      <p class="control">
        <input class="button is-info is-outlined" type="submit" value="Search.">          
      </p>
    </div>

  </form>

</div>

</template>

<script>

  export default {

    name: 'knowledge-creation',

    data() {return {

     knowledgeContent: ''

   }},

   methods: {

     searchKnowledge(event) {

      event.preventDefault();

      this.$emit('searchingForKnowledge', this.knowledgeContent);

    }

  }

}

</script>