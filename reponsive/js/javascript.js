
      $(function() {

        var $window           = $(window),
        win_height_padded = $window.height() * 1.1,
        isTouch           = Modernizr.touch;

        if (isTouch) { $('.revealOnScroll').addClass('animated'); }

        $window.on('scroll', revealOnScroll);

        function revealOnScroll() {
          var scrolled = $window.scrollTop(),
          win_height_padded = $window.height() * 1.1;

          // Showed...
          $(".revealOnScroll:not(.animated)").each(function () {
            var $this     = $(this),
            offsetTop = $this.offset().top;

            if (scrolled + win_height_padded > offsetTop) {
              if ($this.data('timeout')) {
                window.setTimeout(function(){
                  $this.addClass('animated ' + $this.data('animation'));
                }, parseInt($this.data('timeout'),10));
              } else {
                $this.addClass('animated ' + $this.data('animation'));
              }
            }
          });
          // Hidden...
          $(".revealOnScroll.animated").each(function (index) {
            var $this     = $(this),
            offsetTop = $this.offset().top;
            if (scrolled + win_height_padded < offsetTop) {
              $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
            }
          });
        }

        revealOnScroll();
      });
      $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
