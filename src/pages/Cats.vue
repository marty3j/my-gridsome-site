<template>
  <MainLayout>
    <div class="d-flex flex-wrap">
      <div v-for="post in $page.allFlickrPost.edges" :key="post.id">
        <div class="img">
        <g-link :to="post.node.path">
          <b-img  class="imgcornerthumbnail" thumbnail v-bind:src="post.node.context.media.m" :key="post.id" />
        </g-link>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<page-query>
query{
  allFlickrPost (filter:{tags:{regex:"cat"}}) {
    edges{
      node{
        title
        id
        path
        tags
	context{
          author,
          description
          media{m}
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Cats Page'
  }
}
</script>
<style>
.img a img{
  max-width: 100px;
}
</style>