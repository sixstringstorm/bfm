<template>
  <div>
    <div class="image-container">
      <div class="parallax-image" style="background-image:url('/static/assets/images/chemex.gif');">
        <div class="skrim"></div>
        <div class="texture"></div>
      </div>
      <div class="contact-text absolute-center">
        <p class="tk-adobe-garamond-pro text-center">We'd love to sit down with you for <strong>coffee</strong> or a nice <strong>bourbon.</strong></p>
        <p class="tk-adobe-garamond-pro text-center">Send us a message. Let's get in touch.</p>
      </div>
    </div>

    <form id="contact-form">
    <div class="skrim"></div>
    <div class="container">
      <div class="row">
        <div class="one-half column">
          <label>First Name</label>
          <div class="open-input">
            <input type="text" class="u-full-width" />
          </div>
        </div>
        <div class="one-half column">
          <label>Last Name</label>
          <div class="open-input">
            <input type="text" class="u-full-width" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="one-half column">
          <label>Email Address</label>
          <div class="open-input">
            <input type="email" class="u-full-width" />
          </div>
        </div>

        <div class="one-half column">
          <label>Subject</label>
          <div class="open-input">
            <input type="text" class="u-full-width" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="twelve columns">
          <label>Favorite Ice Cream Flavor</label>
          <div class="open-input">
            <input type="text" class="u-full-width" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="twelve columns">
          <label>Message</label>
          <div class="open-input" style="height: 200px;margin-bottom: 25px;">
            <textarea class="u-full-width" ></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="one-third column">
          <button class="button-primary">SEND</button>
        </div>
      </div>
    </div>
    </form>
  </div>
</template>
