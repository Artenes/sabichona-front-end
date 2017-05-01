<template>

  <div>

    <div class="knowledge card" v-for="knowledge in knowledges">

      <header class="card-header">
        <div class="media card-header-title">
          <div class="media-left">
            <a :href="knowledge.user.profile">
              <figure class="image is-48x48">
                <img class="user-profile" :src="knowledge.user.picture" alt="Image">
              </figure>
            </a>
          </div>
          <div class="media-content">
            <p class="title is-4"><a :href="knowledge.user.profile">{{ knowledge.user.name }}.</a></p>
            <p class="subtitle is-6">{{ $lang.strings.showed_me }} {{ knowledge.created_at }}.</p>
          </div>
        </div>
      </header>

      <div class="card-image" v-show="knowledge.image">
        <figure class="image is-1080by1080">
          <img :src="knowledge.image" alt="Image">
        </figure>
      </div>

      <div class="card-content">

        <div class="content has-text-left">

          <span v-html="knowledge.content" class="knowledge-content"></span>

          <span v-show="knowledge.attachment" class="knowledge-attachment">
            <a class="download-attachment button is-fullwidth is-info is-outlined" :href="knowledge.attachment" target="_blank">
              {{ $lang.strings.download_attachment }}
            </a>
          </span>

        </div>

      </div>

      <footer class="card-footer">

        <span class="card-footer-item useless">
          {{ knowledge.useless }} <br>
          {{$lang.strings.useless}}
        </span>
        <p class="card-footer-item useful">
          {{ knowledge.useful }} <br>
          {{$lang.strings.useful}}
        </p>
        <p class="card-footer-item share">
          {{ knowledge.share }} <br>
          {{$lang.strings.share}}
        </p>

      </footer>

    </div>

    <button class="button is-fullwidth is-info is-outlined" v-show="hasMore" @click="more(pagination.next_page_url)" :class="{'is-loading': loading}">
      {{ $lang.strings.please_show_more }}
    </button>

  </div>

</template>

<script>

  export default {

    props: ['knowledges', 'pagination'],
    data() {
      return {
        loading: false
      }
    },
    computed: {
      hasMore() {
        return this.pagination.next_page_url;
      }
    },
    methods: {
      more(url) {
        this.loading = true;
        this.$http.get(url)
        .then(response => {
          this.$emit('more', response.body.knowledges, response.body);
          this.loading = false;
        });
      }
    }

  }
</script>

<style scoped>

  .knowledge {
    margin-bottom: 3em;
  }

  .time {
    display: block;
  }

  .knowledge-content {
    display: block;
  }

  .knowledge-attachment {
    margin-top: 2em;
    display: block;
  }

  .user-profile {
    border-radius: 2em;
  }

  .useless:hover {
    background-color: #ff3d3d;
    color: white;
    cursor: pointer;
  }

  .useful:hover {
    background-color: #08ce0b;
    color: white;
    cursor: pointer;
  }

  .share:hover {
    background-color: #1237bc;
    color: white;
    cursor: pointer;
  }

</style>