// Custom JS code can go here

// You can customize Reveal options:
Reveal.configure({"center": true, "controls": false, "width":1280, "height":960, "loop":true, "autoSlideStoppable":false, "autoSlide":15000});


// (an outdated version of) http://headjs.com/ is also loaded
head.ready("lodash.min.js", function () {
  // LoDash can be used from here
});
head.js("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js");

// Refresh every 30 minutes to keep videos in sync
// Will also pull in new content!
setInterval(function() {
  window.location.reload();
}, 30*60000); 
