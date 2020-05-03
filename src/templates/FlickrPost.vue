<template>
  <MainLayout>
    <div>
      <b-modal v-model="modalShow" ok-only>
        <img v-bind:src="biggerUrl" class="fluid" />
      </b-modal>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-8">
          <div>
            <b-img class="fluid imgcorner" alt="Right-rounded image" v-bind:src="bigUrl" @click="modalShow = !modalShow" />
          </div>
        </div>
        <div class="col-4">
          <div class="mytitle">
            Image details
            <span class="rightalign">
              <b-button @click="moveback()"><</b-button>
            </span>
          </div>
          <div class="subtitle">
            <span class="bold">Title:</span>
            {{ $page.flickrPost.title }}
          </div>
          <div class="subtitle">
            <span class="bold">Author:</span>
            {{$page.flickrPost.context.author}}
          </div>
          <div class="subtitle">
            <span class="bold">Tags:</span>
            {{ $page.flickrPost.tags }}
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<page-query>
query allFlickrPost ($path: String!) {
  flickrPost: flickrPost (path: $path) {
    id
    title
    path
    tags
    context{
      author
      description
      media{m}
    }
  }
}
</page-query>

<script>
export default {
  props: {},
  data: function() {
    return {
      imgurl: "",
      bigUrl: " ",
      biggerUrl: " ",
      modalShow: false
    };
  },
  metaInfo() {
    return {
      title: "Details"
    };
  },
  methods: {
    convertBigImg(ext) {
      var imgUrl = this.$page.flickrPost.context.media.m;
      var le = imgUrl.length;
      var laststr = imgUrl.substr(le - 4, le);
      var fn = imgUrl.substr(0, le - 6);
      fn = fn + ext;
      return fn + laststr;
    },
    moveback() {
      window.history.back();
    }
  },
  created() {
    this.bigUrl = this.convertBigImg("_n");
    this.biggerUrl = this.convertBigImg("_z");
  }
};
</script>

<style scoped>
.mytitle {
  width: 100%;
  font-size: 14px;
  font-weight: bold;
}
.subtitle {
  width: 100%;
  font-size: 12px;
  font-weight: normal;
  padding-top: 10px;
}
.subtitle .bold {
  font-weight: bold;
}
.rightalign {
  text-align: right;
  float: right;
}

</style>