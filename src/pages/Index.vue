<template>
  <MainLayout>
    <div class="d-flex flex-wrap">
      <div v-for="post in $page.allFlickrPost.edges" :key="post.id">
        <div class="img">
        <g-link :to="post.node.path">
          <b-img class="imgcornerthumbnail" thumbnail v-bind:src="post.node.context.media.m" :key="post.id"  />
        </g-link>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<page-query>
query  {
  allFlickrPost 
  {
    edges{
      node{
        title
        id
        tags
        path
				context{
          author,
          media{
            m
            }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  props:{
    // sear: String
  },
  data () {
    return {
      message: 'Try change me!',
      sear : "cat"
    }
  },
  methods: {
    onClick () {
      this.sear = "cat"
      console.log(this.sear) 
      this.message = 'Here you go :)'
    }
  }
}
</script>
<style>
.home-links a {
  margin-right: 1rem;
}
.img a img{
  max-width: 100px;
}

</style>
