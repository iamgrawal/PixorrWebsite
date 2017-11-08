$(document).ready(function () {
    //Init the controller
    var controller = new ScrollMagic.Controller({
      vertical:true,
      horizontal: false
    });

    //Init wow animation object
    new WOW().init();

    //Init wow animation object
    new WOW().init();

    //pin the pixorr logo
    new ScrollMagic.Scene({
        triggerElement: '#features-container',
        duration: '300%',
        triggerHook: 0.7
    })
        .setPin('#pixorr-logo',{ pushFollowers:false})
        .addTo(controller)
        .setTween(TweenMax.to("#pixorr-logo-image", 1, {borderRadius: '55%' } ));

    //Transition 1 image
    new ScrollMagic.Scene({
      triggerElement:'#feature-1',
      triggerHook: 1,
      duration: '110%',
      reverse: false
    })
        .setClassToggle('#feature-1-image', 'slideInLeft')
        .addTo(controller);
    
    //Transition 1 text
    new ScrollMagic.Scene({
      triggerElement:'#feature-1',
      triggerHook: 1,
      duration: '110%',
      reverse: false
    })
        .setClassToggle('#feature-1-text', 'fadeInUp')
        .addTo(controller);
    
    //Transition 2 image
    new ScrollMagic.Scene({
      triggerElement:'#feature-2',
      triggerHook: 1,
      duration: '110%',
      reverse: false
    })
        .setClassToggle('#feature-2-image', 'slideInRight')
        .addTo(controller);
    
   //Transition 2 text
    new ScrollMagic.Scene({
      triggerElement:'#feature-2',
      triggerHook: 1,
      duration: '110%',
      reverse: false
    })
        .setClassToggle('#feature-2-text', 'fadeInUp')
        .addTo(controller);

    //Transition 3 image
    new ScrollMagic.Scene({
      triggerElement:'#feature-3',
      triggerHook: 1,
      duration: '110%',
      reverse: false
    })
        .setClassToggle('#feature-3-image', 'slideInLeft')
        .addTo(controller);
    
   //Transition 3 text
    new ScrollMagic.Scene({
      triggerElement:'#feature-3',
      triggerHook: 1,
      duration: '110%',
      reverse: false
    })
        .setClassToggle('#feature-3-text', 'fadeInUp')
        .addTo(controller);
});