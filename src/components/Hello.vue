<template id="app">
  <div id="fullpage">
    <div class="section">
      <video loop id="introVid" class="absolute-center" poster="/static/assets/images/coffee.jpg" x-webkit-airplay="deny" data-autoplay muted>
        <source data-src="https://s3-us-west-1.amazonaws.com/blackfieldmedia/intro-vid.mp4">
      </video>
    </div>
    <div id="section-1" class="section">
      <div class="container">
        <div class="palm-left"></div>
        <div class="palm-right"></div>
        <div class="section-text">
          <h2>SACRAMENTO ZOO</h2>
          <p>Producing video that shows the beauty and enjoyment felt at the Sacramento Zoo was an exciting project that we loved being involved in.</p>
        </div>
        <div class="section-image">
          <video loop id="zooVid" poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77682/red-panda-intro.jpg" x-webkit-airplay="deny" data-autoplay>
            <source data-src="https://s3-us-west-1.amazonaws.com/blackfieldmedia/zoo-intro-min.mp4">
          </video>

        </div>
      </div>
    </div>
    <div id="section-2" class="section">
      <div class="container">
        <div class="section-text">
          <h2>SACRAMENTO <span>JET CENTER</span></h2>
          <p>Sharp responsive web design with photos that compliment the feel Sacramento Jet Center desired to convey.</p>
        </div>
        <div class="section-image">
          <img src="/static/assets/images/screen-mockups.png">
        </div>
      </div>
    </div>
    <div id="section-3" class="section">
      <div class="grundge"></div>
      <div class="skrim"></div>
      <div class="container">
        <div class="section-text">
          <h2>BARDIS HOMES</h2>
          <p>Bardis social</p>
        </div>
        <div class="section-image">
          <p class="lady-bosses"><firstletter>#</firstletter>BADASS LADYBOSSES</p>
        </div>
      </div>
    </div>
    <div id="section-4" class="section">
      <div class="container">
        <div class="section-text">
          <h2>KRU RESTAURANT</h2>
          <p>In collaboration with Position Interactive, we created video for that made Kru look like the best sushi experience available. Which it is.</p>
        </div>
        <div class="section-image">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77682/kru.jpg">
        </div>
      </div>
    </div>
    <div id="section-5" class="section">
      <div class="parallax-image"></div>
      <div class="honeycomb"></div>
      <div class="newsletter">
        <div class="display-wrapper">
          <h3>GET THE LATEST</h3>
          <div class="dotted" style="display: block; height: 0; width: 111px; margin: 50px auto; opacity: .8;"></div>
          <div class="open-input" style="margin: 50px auto 0;">
            <input id="email" type="text" placeholder="EMAIL">
            <input type="submit" value="SIGN UP">
          </div>
        </div>
      </div>
    </div>

    <div class="nav">
    <div id="down">
      <i class="ion-android-arrow-down"></i>
    </div>
  </div>

  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
