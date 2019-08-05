function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setColor() {
  $("#hello").css("color", randomColor());
  console.log("Moused Over!")
}


(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

$(window).scroll(function(event) {
  
  $(".about-1").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

$(window).scroll(function(event) {
  
  $(".about-2").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
});

$(window).scroll(function(event) {
  
  $(".projects").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
});

$(window).scroll(function(event) {
  
  $(".funthings").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
});

$(window).scroll(function(event) {
  
  $(".contact").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
});

$(window).scroll(function(event) {
  
  $(".booking-form").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
});


// EMAIL SECTION

function sendMail() {
  // getName
  // getBusinessName
  // getEmail
  // getType
 var name = document.getElementById("name").value;
 var business = document.getElementById("business").value;
 var email = document.getElementById("email").value;
 var dropdown = document.getElementById("dropdown").value;
 var how = document.getElementById("how").value;


 var template_params = {
   "reply_to": email,
   "from_name": name,
   "name": name,
   "email": email,
   "talk-to-me": talk-to-me,
   "how": how
};

var service_id = "default_service";
var template_id = "template_1SvvVysN";
emailjs.send(service_id, template_id, template_params);
}

function success() {

alert("Your Email Was Successfully Sent!");


  //site key 6LeNLqoUAAAAAGOd386OPuSlB8zBSkMdi0UrfTaL
  //secret key 6LeNLqoUAAAAAFz7HHjHqCAuTdeGNs8JgDKkRKKK


}


emailjs.send('<YOUR SERVICE ID>', '<YOUR TEMPLATE ID>', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });