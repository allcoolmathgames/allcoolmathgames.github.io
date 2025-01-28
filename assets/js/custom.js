$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
    })
});

(function() {
  // Create the first script tag for gtag.js
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-HZPSTNML9Q';
  document.head.appendChild(gaScript);

  // Create and initialize the second script for Google Analytics setup
  gaScript.onload = function() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-HZPSTNML9Q'); // Replace with your Measurement ID
  };
})();
