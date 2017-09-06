<template>
  <div id="app">
    <div class="nav-mobile">
  		<div class="skrim">
  		</div>
  		<ul>
  			<li>
  				<router-link to="/">HOME</router-link>
  			</li>
  			<li>
  				<router-link to="/about">ABOUT</router-link>
  			</li>
  			<li>
  				<router-link to="/capabilities">CAPABILITIES</router-link>
  			</li>
  			<li>
  				<router-link to="/faq">FAQ</router-link>
  			</li>
  			<li>
  				<router-link to="/contact">CONTACT</router-link>
  			</li>
  		</ul>
  	</div>
  	<header id="header">
  		<div class="menu-button">
  			<div class="menu-container">
  				<div class="menu-icon"></div><span>MENU</span>
  			</div>
  		</div>
  		<div class="logo-container">
        <a href="/">
  			<object data="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77682/bfm-tower.svg" type="image/svg+xml">
  			</object> <!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  			<svg id="bf-text" style="enable-background:new 0 0 207.6 193;" version="1.1" viewbox="0 0 207.6 193" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">

  			<path class="st0" d="M35.6,53.5c0,0.6-0.2,1.3-0.5,1.9c-0.9,1.6-1.8,3.2-2.7,4.9c-0.3,0.5-0.6,0.5-1,0.3c-2.9-1.7-5.9-3.4-8.8-5 c-0.4-0.2-0.6-0.4-0.3-0.9c0.9-1.5,1.7-3.1,2.7-4.6c1.1-1.7,2.7-2.2,4.1-1.4c0.7,0.4,1.3,0.9,1.4,1.7c0.1,0.8,0.4,0.7,1,0.4 C33.4,49.7,35.7,51.2,35.6,53.5z M33.1,54.1c0-0.7-0.2-1-0.7-1.3c-0.5-0.2-0.9-0.1-1.3,0.2c-0.6,0.5-0.9,1.2-1.2,1.9 c-0.9,1.5-0.8,1.9,0.9,2.5c0.2,0.1,0.4,0.2,0.6,0C32.1,56.2,32.8,55.2,33.1,54.1z M28.8,52.1c-0.1-0.5-0.3-0.8-0.7-1 c-0.5-0.3-0.9-0.1-1.3,0.3c-0.6,0.6-0.9,1.4-1.4,2.2c-0.2,0.3-0.4,0.6,0,0.8c0.6,0.3,1.3,1.2,1.7,0.7C28,54.3,28.6,53.2,28.8,52.1z" id="B1"></path>
  			<path class="st0" d="M182.3,62c-2.1-0.1-3.7-1.1-4.8-2.8c-0.8-1.3-1.4-2.7-2.2-4.1c-0.3-0.5-0.1-0.8,0.4-1c3-1.6,6-3.1,9-4.7 c0.3-0.2,0.6-0.3,0.8,0.1c0.9,2,2.3,3.7,2.6,5.9C188.7,59,185.9,62.1,182.3,62z M185.8,55.9c0-1.2-0.7-2.1-1.2-3.1 c-0.1-0.3-0.4-0.2-0.7-0.1c-1.7,0.9-3.4,1.8-5.1,2.7c-0.3,0.2-0.5,0.4-0.3,0.8c0.4,0.7,0.7,1.4,1.2,2c0.9,1.1,2.3,1.4,3.6,0.9 C184.9,58.6,185.8,57.3,185.8,55.9z" id="D1"></path>
  			<path class="st0" d="M157,19.1c0.1,0.1,0.3,0.2,0.5,0.3c1.9,1.4,3.8,2.8,5.7,4.2c0.9,0.6,0.3,1-0.1,1.5c-0.3,0.5-0.6,0.9-1.3,0.4 c-1.2-1-2.5-1.8-3.7-2.8c-0.8-0.6-1,0.1-1.3,0.5c-0.3,0.4-0.9,0.8-0.1,1.4c1.1,0.7,2.1,1.6,3.2,2.3c0.9,0.6,0.1,1-0.2,1.5 c-0.3,0.4-0.5,1-1.2,0.4c-1-0.8-2.2-1.5-3.2-2.4c-0.9-0.7-1,0.2-1.3,0.6c-0.4,0.4-0.9,0.8-0.1,1.4c1.3,0.9,2.5,1.9,3.8,2.8 c0.8,0.5,0.3,0.9,0,1.4c-0.3,0.4-0.5,1.2-1.4,0.5c-1.9-1.5-3.9-2.9-5.9-4.3c-0.5-0.4-0.5-0.7-0.2-1.1c2-2.7,4-5.3,5.9-8 C156.5,19.4,156.6,19.1,157,19.1z" id="E1"></path>
  			<path class="st0" d="M93.7,9.3c0.9-1.3,2-2.5,2.8-3.8c0.8-1.4,1.9-1.5,3.2-1.6c0.2,0,0.4-0.1,0.6,0.1c0.1,0.2-0.1,0.4-0.2,0.6 c-1,1.3-2,2.6-3,3.9c-0.4,0.5-0.5,0.9,0.1,1.4c1.4,1.5,2.8,3,4.2,4.5c0.2,0.2,0.6,0.4,0.5,0.8c-0.1,0.3-0.5,0.2-0.8,0.2 c-1.4,0.4-2.5,0-3.4-1.3c-0.5-0.7-1.2-1.3-1.8-2c-0.3-0.3-0.6-1-1-0.7c-0.5,0.3-1.1,0.9-1,1.6c0.1,0.7,0.1,1.5,0.3,2.2 c0.1,0.6-0.1,0.9-0.7,1c-1.9,0.1-1.7,0.5-1.9-1.5c-0.3-3-0.6-6-1-8.9c-0.2-1.4,0.9-1,1.5-1.1c0.8-0.2,1.1,0.1,1.1,0.9 c0.1,1.2,0.3,2.4,0.4,3.6C93.6,9.3,93.6,9.3,93.7,9.3z" id="K1"></path>
  			<path class="st0" d="M56.5,29c0,0.2,0.1,0.5,0.1,0.7c0.4,1.7,0.3,1.8-1.2,2.6c-0.5,0.3-0.7,0.2-0.8-0.4c-0.7-3.7-1.4-7.4-2.1-11.1 c-0.2-1,0.7-1,1.2-1.4c0.4-0.3,0.7-0.5,1.2-0.1c3.1,2.1,6.3,4.1,9.4,6.1c0.5,0.3,0.6,0.5,0.1,0.9c-1.4,1.1-1.5,1.2-2.9,0.1 c-0.8-0.6-1.3-0.6-2.1,0c-0.7,0.6-1.6,1.1-2.4,1.6C56.7,28.4,56.4,28.6,56.5,29z M55.2,22.4c0,1.2,0.4,2.2,0.5,3.2 c0,0.2,0.2,0.4,0.3,0.3c0.7-0.4,1.4-0.8,1.9-1.3c0.2-0.2,0-0.3-0.1-0.4C57.1,23.6,56.2,23.1,55.2,22.4z" id="A1"></path>
  			<path class="st0" d="M75.8,20.8c-3,0-5.3-2.1-5.9-5.2c-0.5-2.8,1.2-5.5,4.1-6.5c1.3-0.5,2.7-0.6,4.1-0.1c0.5,0.2,0.7,0.4,0.5,0.9 c-0.1,0.3-0.3,0.5-0.3,0.8c-0.2,0.7-0.5,0.8-1.2,0.6c-2.1-0.6-4,0.5-4.4,2.4c-0.4,2.1,0.9,4.1,3,4.4c1.5,0.3,2.7-0.3,3.5-1.6 c0.7-1.3,1.4-0.2,2,0c0.9,0.3,0.3,0.9,0.1,1.3C80.1,19.7,78,20.8,75.8,20.8z" id="C1"></path>
  			<path class="st0" d="M131.9,7.7c-0.2,1.6-0.3,1.7-1.8,1.3c-1.3-0.3-2.6-0.6-3.9-1c-0.5-0.1-0.8,0-0.9,0.5c0,0.3-0.1,0.6-0.2,0.9 c-0.2,0.6,0,0.8,0.5,0.9c1.3,0.3,2.5,0.7,3.8,1c1.1,0.2,0.6,0.9,0.5,1.5c-0.1,0.6-0.2,1.1-1.1,0.8c-1.3-0.4-2.6-0.6-3.8-1 c-0.5-0.1-0.8,0-0.9,0.6c-0.2,0.9-0.5,1.9-0.7,2.8c-0.1,0.7-0.4,0.8-1,0.6c-0.1,0-0.2-0.1-0.3-0.1c-1.4-0.3-1.4-0.3-1-1.8 c0.7-3,1.5-6,2.2-8.9c0.2-0.7,0.4-0.9,1.2-0.7c2.3,0.6,4.6,1.2,6.9,1.7C131.6,7,132.1,7.1,131.9,7.7z" id="F1"></path>
  			<path class="st0" d="M35.9,35c0.4,0,0.6,0.3,0.8,0.5c1.8,1.6,3.6,3.2,5.3,4.9c0.6,0.6,1,0.5,1.5-0.1c0.8-1,1.8-1.9,2.7-2.9 c0.6-0.7,0.9-0.2,1.3,0.2c0.3,0.4,1.2,0.6,0.5,1.4c-1.6,1.7-3.2,3.4-4.7,5.1c-0.3,0.4-0.6,0.4-1,0.1c-2.5-2.3-5-4.7-7.6-7 c-0.4-0.3-0.4-0.6,0-1C35.1,35.9,35.4,35.3,35.9,35z" id="L1"></path>
  			<path class="st0" d="M174.5,34.6c-0.1,0.3-0.3,0.5-0.6,0.7c-1.8,1.6-3.6,3.2-5.5,4.7c-0.7,0.6-0.6,0.9-0.1,1.5 c0.9,0.9,1.7,2,2.5,2.9c0.6,0.6,0.3,1-0.3,1.3c-0.5,0.3-0.8,1.1-1.5,0.3c-1.4-1.7-2.9-3.4-4.4-5.1c-0.5-0.5-0.3-0.8,0.1-1.2 c2.4-2.1,4.9-4.2,7.3-6.3c0.7-0.6,1.1-0.6,1.6,0.1C174,33.9,174.4,34.2,174.5,34.6z" id="L2"></path>
  			<path class="st0" d="M145.5,12.9c-0.1,0.2-0.2,0.4-0.3,0.6c-1.4,2.9-2.8,5.8-4.1,8.7c-0.4,0.9-0.9,0.8-1.6,0.4 c-0.6-0.3-1.4-0.4-0.8-1.5c1.4-2.9,2.8-5.9,4.1-8.8c0.3-0.7,0.7-0.8,1.3-0.4C144.6,12.2,145.4,12.1,145.5,12.9z" id="I1"></path></svg> <object data="https://s3-us-west-2.amazonaws.com/s.cdpn.io/77682/bfm-bf.svg" id="b-f" type="image/svg+xml">
  			</object> <!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  			<svg id="Layer_1" style="enable-background:new 0 0 207.6 193;" version="1.1" viewbox="0 0 207.6 193" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">

  			<path class="st0" d="M71.2,183.6c0,1.6,0,3.2,0,4.8c0,1-0.6,1-1.3,1c-0.7,0-1.4,0.1-1.4-1c0-1.4,0-2.8,0-4.2c0-0.4,0.2-0.9-0.4-1.1 c-0.5-0.1-0.6,0.4-0.8,0.7c-0.6,0.8-1.1,1.7-1.7,2.5c-0.3,0.5-0.5,0.4-0.7,0c-0.5-0.9-1.1-1.7-1.7-2.6c-0.2-0.3-0.4-0.7-0.8-0.5 c-0.4,0.1-0.3,0.5-0.3,0.8c0,1.4,0,2.9,0,4.3c0,0.9-0.3,1.1-1.1,1.1c-0.7,0-1.5,0.1-1.4-1c0-3.2,0-6.4,0-9.7c0-0.7,0.3-0.9,1-1 c1.3-0.1,2.2,0.2,2.7,1.5c0.4,0.8,1,1.6,1.4,2.4c0.5,0.8,0.9,0.7,1.3,0c0.6-1,1.3-2.1,1.9-3.1c0.4-0.6,2.4-1,3-0.6 c0.3,0.2,0.2,0.6,0.2,0.9C71.2,180.4,71.2,182,71.2,183.6z" id="M2"></path>
  			<path class="st0" d="M101.6,183.5c0-1.5,0-3.1,0-4.6c0-0.8,0.2-1.2,1.1-1.1c1.4,0.1,2.7,0,4.1,0.1c3.3,0.2,5.6,2.6,5.6,5.8 c0,3.2-2.3,5.6-5.6,5.8c-1.4,0.1-2.7,0-4.1,0c-0.7,0-1-0.3-1-1C101.6,186.7,101.6,185.1,101.6,183.5z M104.2,183.5 c0,0.5,0,1.1,0,1.6c0,2,0,2,2.1,1.9c2.1-0.1,3.4-1.5,3.3-3.7c-0.1-2.4-2.8-4.1-5-3.2c-0.4,0.1-0.4,0.4-0.4,0.8 C104.2,181.8,104.2,182.6,104.2,183.5z" id="D2"></path>
  			<path class="st0" d="M82.2,183.5c0-1.6,0-3.1,0-4.7c0-0.8,0.3-1.1,1.1-1.1c2.3,0,4.5,0,6.8,0c0.8,0,1,0.4,1,1.1c0,0.7-0.1,1.3-1,1.2 c-1.4,0-2.8,0-4.2,0c-0.9,0-1,0.4-1.1,1.2c0,0.8,0.2,1.2,1.1,1.1c1.1-0.1,2.1,0,3.2,0c0.9,0,1.2,0.3,1.2,1.2c0,0.9-0.2,1.3-1.1,1.2 c-1.1-0.1-2.3,0-3.4,0c-0.9,0-0.9,0.5-0.9,1.2c0,0.6,0,1.2,0.9,1.2c1.5,0,2.9,0,4.4,0c0.8,0,1,0.4,1,1.1c0,0.7,0,1.3-1,1.3 c-2.3,0-4.6,0-7,0c-0.7,0-1-0.3-1-1C82.2,186.8,82.2,185.1,82.2,183.5z" id="E2"></path>
  			<path class="st0" d="M141.7,186.8c-0.3,0-0.5,0-0.7,0c-1.3-0.2-2,0.3-2.3,1.6c-0.3,1-1.2,1.4-2.3,1c-0.7-0.2-0.5-0.7-0.3-1.2 c1.3-3.2,2.7-6.3,4-9.5c0.3-0.8,0.8-1,1.6-1c0.9,0,1.4,0.3,1.7,1.2c1.2,3.1,2.6,6.1,3.9,9.2c0.2,0.5,0.6,1-0.1,1.4 c-0.6,0.3-2,0-2.2-0.5c0,0,0-0.1,0-0.1C144,186.8,144,186.8,141.7,186.8z M141.8,184.5c0.5-0.1,1.1,0.2,1.2-0.6 c0.1-0.5-0.9-2.2-1.2-2.2c-0.3,0-1.3,1.7-1.2,2.2C140.6,184.7,141.3,184.4,141.8,184.5z" id="A2"></path>
  			<path class="st0" d="M122.9,183.6c0-1.6,0-3.2,0-4.8c0-1.2,0.7-1,1.4-1c0.8,0,1.2,0.1,1.2,1c0,3.2-0.1,6.4,0,9.5 c0,1-0.5,1.1-1.3,1.1c-0.8,0-1.4,0-1.4-1.1C123,186.7,122.9,185.1,122.9,183.6z" id="I2"></path></svg>
      </a>
  		</div>
  		<div class="nav-container" style="display: none;">
  			<nav>
  				<ul>
  					<li>
  						<router-link to="/about">ABOUT</router-link>
  					</li>
  					<li>
  						<router-link to="/capabilities">CAPABILITIES</router-link>
  					</li>
  					<li>
  						<router-link to="/faq">FAQ</router-link>
  					</li>
  					<li>
  						<router-link to="/contact">CONTACT</router-link>
  					</li>
  				</ul>
  			</nav>
  		</div>
  	</header>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Firebase from 'firebase'


// Initialize Firebase
let config = {
  apiKey: "AIzaSyB47mWhKVYaWSCVuNGKnnJ4MKov5fvnhQo",
  authDomain: "blackfield-d7f6c.firebaseapp.com",
  databaseURL: "https://blackfield-d7f6c.firebaseio.com",
  projectId: "blackfield-d7f6c",
  storageBucket: "blackfield-d7f6c.appspot.com",
  messagingSenderId: "483752376687"
}

let app = Firebase.initializeApp(config);
let db = app.database();

export default {
  name: 'app'
}

$(document).ready(function() {
    $('#scrollDiv').hide();
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
          $(".logo-container").addClass('active');
          $("#header").addClass('active');
        }
        else {
          $(".logo-container").removeClass('active');
          $("#header").removeClass('active');
        }
    });
    $(".menu-button").click(function(){
      $(this).toggleClass("active");
      $(".nav-mobile").toggleClass("active");
    });

    $(".nav-mobile .skrim").click(function(){
      $(".menu-button").toggleClass("active");
      $(".nav-mobile").toggleClass("active");
    });

    $(".nav-mobile a").click(function(){
      $(".nav-mobile").toggleClass("active");
      $(".menu-button").toggleClass("active");
    });

    $(".logo-container a").click(function(){
      $(".nav-mobile").removeClass("active");
      $(".menu-button").removeClass("active");
    });

    $(document).ready(function() {
    	$('#fullpage').fullpage({
        touchSensitivity: 10,
        scrollingSpeed: 1000,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        onLeave: function(anchorLink, index, direction){
    		  var loadedSection = $(this);

    		  //using index
    		  if(index == 2 && direction =='down'){
    			  $("#down").addClass('black');
            $("#section-1").removeClass('active');
            $("#section-2").addClass('active');
            $(".logo-container").addClass('active');
            $("#header").addClass('active');
    		  }
          if(index == 3 && direction =='down'){
    			  $("#down").removeClass('black');
            $("#section-2").removeClass('active');
            $("#section-3").addClass('active');
    		  }
          if(index == 4 && direction =='down'){
    			  $("#down").addClass('black');
            $("#section-3").removeClass('active');
            $("#section-4").addClass('active');
    		  }
          if(index == 5 && direction =='down'){
    			  $("#down").hide();
            $("#section-1").removeClass('active');
            $("#section-5").addClass('active');
    		  }
          if(index == 4 && direction == 'up') {
            $("#down").show();
            $("#section-4").addClass('active');
          }
          if(index == 3 && direction == 'up') {
            $("#down").removeClass('black');
            $("#section-4").removeClass('active');
            $("#section-3").addClass('active');
          }
          if(index == 2 && direction == 'up') {
            $("#down").addClass('black');
            $("#section-3").removeClass('active');
            $("#section-2").addClass('active');
          }
          if(index == 1 && direction == 'up') {
            $("#down").removeClass('black');
            $("#section-2").removeClass('active');
            $("#section-1").addClass('active');
            $(".logo-container").removeClass('active');
            $("#header").removeClass('active');
          }
    	  }
      });
      $('#down').click(function(){
        $.fn.fullpage.moveSectionDown();
      });
    });
});

try{Typekit.load({ async: true });}catch(e){}
</script>

<style>
@import '/static/assets/css/normalize-min.css';
@import '/static/assets/css/skeleton-min.css';
@import '/static/assets/css/app.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
.st0{fill:#1D1D1D;}
</style>
