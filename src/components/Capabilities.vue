<template>
  <div>
    <div class="vid-wrapper">

      <video data-preserve-html-node="true" loop="" id="vid" class="vid" poster="/static/assets/images/capabilities.gif">
        <source data-preserve-html-node="true" src="https://s3-us-west-1.amazonaws.com/blackfieldmedia/bfm-demo-min.mp4">
        <source data-preserve-html-node="true" src="https://s3-us-west-1.amazonaws.com/blackfieldmedia/bfm-demo.ogv" type="video/ogg">
        <source data-preserve-html-node="true" src="https://s3-us-west-1.amazonaws.com/blackfieldmedia/bfm-demo.webm" type="video/webm">
      </video>

      <div class="play-wrapper">
        <div class="play"></div>
      </div>

      <div id="progressB"></div>
    </div>

    <section id="capabilities" class="full-width">
        <div class="grid-row">
            <div class="grid-panel" onmouseover="Play()" onmouseout="Pause()">
              <div class="grid-image">
                <video loop="" id="video-coffee" class="absolute-center" preload="none" poster="/static/assets/images/coffee.jpg" x-webkit-airplay="deny" muted>
                  <source data-src="https://s3-us-west-1.amazonaws.com/blackfieldmedia/coffee-vid-min.mp4">
                </video>
              </div>
              <div class="text-wrapper">
                <h3>BRANDING & VISUAL DESIGN</h3>
                <button class="button-primary" ng-click="ability = 1;"><span>SEE MORE</span></button>
              </div>
            </div>
            <div class="grid-panel">
              <div class="grid-image" style="background-image:url('/static/assets/images/web-design.jpg');"></div>
              <div class="text-wrapper">
                <h3>WEB DESIGN</h3>
                <button class="button-primary" ng-click="ability = 2;"><span>SEE MORE</span></button>
              </div>
            </div>
            <div class="grid-panel">
              <div class="grid-image" style="background-image:url('/static/assets/images/photography.jpg');"></div>
              <div class="text-wrapper">
                <h3>PHOTOGRAPHY</h3>
                <button class="button-primary" ng-click="ability = 3;"><span>SEE MORE</span></button>
              </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="grid-row">
            <div class="grid-panel" onmouseover="zooPlay()" onmouseout="zooPause()">
              <div class="grid-image">
                <video loop="" id="video-zoo" class="absolute-center" preload="none" poster="/static/assets/images/red-panda.jpg" x-webkit-airplay="deny" muted>
                  <source src="https://s3-us-west-1.amazonaws.com/blackfieldmedia/sac-zoo-intro.mp4">
                </video>
              </div>
              <div class="text-wrapper">
                <h3>VIDEO PRODUCTION</h3>
                <button class="button-primary" ng-click="ability = 4;"><span>SEE MORE</span></button>
              </div>
            </div>
            <div class="grid-panel">
              <div class="grid-image" style="background-image:url('/static/assets/images/copyrighting.jpg');"></div>
              <div class="text-wrapper">
                <h3>COPYWRITING</h3>
                <button class="button-primary" ng-click="ability = 5;"><span>SEE MORE</span></button>
              </div>
            </div>
            <div class="grid-panel" onmouseover="creativityVideoPlay()" onmouseout="creativityVideoPause()">
              <div class="grid-image">
                <video loop="" id="video-creativity" class="absolute-center" preload="none" poster="/static/assets/images/creativity-plus.jpg" x-webkit-airplay="deny" muted>
                  <source src="/assets/video/head-and-heart.mp4">
                </video>
              </div>
              <div class="text-wrapper">
                <h3>RETENTION STRATEGY</h3>
                <button class="button-primary" ng-click="ability = 6;"><span>SEE MORE</span></button>
              </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <div class="grid-row">
            <div class="grid-panel">
              <div class="grid-image" style="background-image:url('/static/assets/images/conversion-strategy.jpg');"></div>
              <div class="text-wrapper">
                <h3>CONVERSION STRATEGY</h3>
                <button class="button-primary" ng-click="ability = 7;"><span>SEE MORE</span></button>
              </div>
            </div>
            <div class="grid-panel" onmouseover="userVideoPlay()" onmouseout="userVideoPause()">
              <div class="grid-image">
                <video loop="" id="video-users" class="absolute-center" preload="none" poster="/static/assets/images/light-sabers.jpg" x-webkit-airplay="deny" muted>
                  <source src="https://s3-us-west-1.amazonaws.com/blackfieldmedia/user-strategy.mp4">
                </video>
              </div>
              <div class="text-wrapper">
                <h3>INCREASED USER STRATEGY</h3>
                <button class="button-primary" ng-click="ability = 8;"><span>SEE MORE</span></button>
              </div>
            </div>
            <div class="grid-panel">
              <div class="grid-image" style="background-image:url('/assets/images/coffee.jpg');"></div>
              <div class="text-wrapper">
                <h3>ANALYTICS</h3>
                <button class="button-primary" ng-click="ability = 9;"><span>SEE MORE</span></button>
              </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </section>

    <!-- <section id="ability-modal" ng-show="ability >= 1 && ability <= 9">
      <div class="ability-modal-inner" ng-show="ability == 1" ng-include="'/partials/branding.html'"></div>
      <div class="ability-modal-inner" ng-show="ability == 2" ng-include="'/partials/web.html'"></div>
      <div class="ability-modal-inner" ng-show="ability == 3" ng-include="'/partials/photography.html'"></div>
      <div class="ability-modal-inner" ng-show="ability == 4" ng-include="'/partials/video.html'"></div>
      <div class="ability-modal-inner" ng-show="ability == 5" ng-include="'/partials/copywriting.html'"></div>
      <div class="ability-modal-inner" ng-show="ability == 6" ng-include="'/partials/retention.html'"></div>
      <div class="ability-modal-inner" ng-show="ability == 7" ng-include="'/partials/conversion.html'"></div>
      <div class="ability-modal-inner" ng-show="ability == 8" ng-include="'/partials/user.html'"></div>
      <div class="ability-modal-inner" ng-show="ability == 9" ng-include="'/partials/analytics.html'"></div>
      <div class="close-ability" ng-click="ability = 0;"><i class="material-icons">clear</i></div>
      <div class="ability-nav">
        <div class="nav left" ng-click="ability = ability-1"><i class="material-icons">keyboard_arrow_left</i></div>
        <div class="nav right" ng-click="ability = ability+1"><i class="material-icons">keyboard_arrow_right</i></div>
      </div>
    </section> -->
  </div>
</template>

<script>

  function loadVideos(){
    $("video").each(function(index){
            $(this).get(0).load();
            $(this).get(0).addEventListener("canplaythrough", function(){
                this.play();
                this.pause();
            });
    });
  }

  var myVideo=document.getElementById("video-coffee");

  function Pause()
  {
    myVideo.pause();
  }
  function Play()
  {
  if (myVideo.paused)
    myVideo.play();
  }

  var userVideo=document.getElementById("video-users");

  function userVideoPause()
  {
    userVideo.pause();
  }
  function userVideoPlay()
  {
  if (userVideo.paused)
    userVideo.play();
  }

  var creativityVideo=document.getElementById("video-creativity");

  function creativityVideoPause()
  {
    creativityVideo.pause();
  }
  function creativityVideoPlay()
  {
  if (creativityVideo.paused)
    creativityVideo.play();
  }

  var zooVideo=document.getElementById("video-zoo");

  function zooPause()
  {
    zooVideo.pause();
  }
  function zooPlay()
  {
  if (zooVideo.paused)
    zooVideo.play();
  }

  function panelSize() {

  }

  $(document).ready(function() {
      panelSize();
  });
</script>
