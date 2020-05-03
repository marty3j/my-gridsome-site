<template>
  <div class="layout">
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/team/">Team</g-link>
      </nav>
    </header> -->




    <div class="container">
      <div class="row">
          <div class="col-lg-3 col-xs-12 mynavpad">
          
  
            <div class="mynav">
              <div class="p-2"><b-button href="/">All</b-button></div>
              <div class="p-2"><b-button  href="/cats">Cats</b-button></div>
              <div class="p-2"><b-button  href="/cars">Cars</b-button></div>
              <div class="p-2"><b-button  href="/dogs">Dogs</b-button></div>
            </div>


          </div>

          <div class="col-lg-9 col-xs-12">
            <!-- <div class="d-flex flex-wrap"> -->
              <!-- <div class="img" style="background-color: blue; width: 50px;">test</div>
              <div class="img"  style="background-color: blue; width: 50px;">test</div>
              <div class="img"  style="background-color: blue; width: 50px;">test</div>
              <div class="img"  style="background-color: blue; width: 50px;">test</div>
              <div class="img"  style="background-color: blue; width: 50px;">test</div>
              <div class="img"  style="background-color: blue; width: 50px;">test</div>
              <div class="img"  style="background-color: blue; width: 50px;">test</div> -->
              <slot/>
            <!-- </div> -->
          </div>
      </div>
    </div>



  </div>
</template>

<script>





</script>


export default {
  
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.img{
  min-width: 100px;
  min-height: 100px;
  margin:10px;
}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  line-height: 1.5;
  margin-top:10px !important;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
      padding: 20px;
    border: 2px solid dimgray;

}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
.mynav{
  border: 1px solid gray;
}
.mynavpad{
  padding-bottom: 10px;
}

</style>
