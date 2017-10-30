$(document).ready(function () {
    //Init the controller
    var controller = new ScrollMagic.Controller();

    //pin the pixorr logo
    new ScrollMagic.Scene({
        triggerElement: '#features-container',
        duration: '300%',
        triggerHook: 0.1
    })
        .setPin('#pixorr-logo',{ pushFollowers:false})
        .addTo(controller)
        .setTween(TweenMax.to("#pixorr-logo-image", 1, {borderRadius: '50%' } ));

    //
    var Transitions = new ScrollMagic.Scene({

    });
});