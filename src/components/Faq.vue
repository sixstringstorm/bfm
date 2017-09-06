<template>
  <div id="fullpage">

  <section id="faq-1" class="section h-slide">
    <img class="bg" src="/static/assets/images/jet-car.jpg" />
    <img class="fg" src="/static/assets/images/jet-man.png" />
    <div class="skrim"></div>
    <h2>SKILLS ARE CHEAP. PASSION IS PRICELESS.<small>- Gary Vaynerchuck</small></h2>
  </section>

  <section id="faq-2" class="section faq-questions">
    <img src="/static/assets/images/fields.jpg">
    <div class="skrim"></div>
    <div class="texture"></div>
    <div class="questions">
    </div>
  </section>

  <section id="faq-3" class="section h-slide">
    <img class="bg" src="/static/assets/images/trees.jpg" />
    <img class="fg" src="/static/assets/images/motorcycle.png"/>
    <div class="skrim"></div>
    <h2>SKILLS ARE CHEAP. PASSION IS PRICELESS.<small>- Gary Vaynerchuck</small></h2>
  </section>
  </div>
</template>
<script>
$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: '#faq-1',
    duration: '200%',
    triggerHook: 1.4
  })
  .setTween('#faq-1 .fg', {
    x: "40%",
    ease: Linear.easeNone
  })
  .addTo(controller);
});
$(document).ready(function () {
  var controller = new ScrollMagic.Controller();
  var scene = new ScrollMagic.Scene({
    triggerElement: '#faq-3',
    duration: '200%',
    triggerHook: 1.4
  })
  .setTween('#faq-3 .fg', {
    x: "-50%",
    ease: Linear.easeNone
  })
  .addTo(controller);
});

</script>
