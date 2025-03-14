/*
 * Video
 */

(function($) {
    $(document).ready(function() {
    /* IF YOU WANT TO APPLY SOME BASIC JQUERY TO REMOVE THE VIDEO BACKGROUND ON A SPECIFIC VIEWPORT MANUALLY
     var is_mobile = false;
    if( $('.player').css('display')=='none') {
        is_mobile = true;       
    }
    if (is_mobile == true) {
        //Conditional script here
        $('.big-background, .small-background-section').addClass('big-background-default-image');
    }else{
        $(".player").mb_YTPlayer(); 
    }
    });
*/
    /*  IF YOU WANT TO USE DEVICE.JS TO DETECT THE VIEWPORT AND MANIPULATE THE OUTPUT  */

        //Device.js will check if it is Tablet or Mobile - http://matthewhudson.me/projects/device.js/
        if (!device.tablet() && !device.mobile()) {
            $(".player").mb_YTPlayer();
        } else {
            //jQuery will add the default background to the preferred class 
            $('.video-background').addClass(
                'video-background-default-image');
        }
    });
})(jQuery);


/*
 * Countdown
 */

$('#clock').countdown('2021/12/30').on('update.countdown', function(event) {
       var $this = $(this).html(event.strftime(''
         + '<div><span>%-w</span>week%!w</div>'
         + '<div><span>%-d</span>day%!d</div>'
         + '<div><span>%H</span>hr</div>'
         + '<div><span>%M</span>min</div>'
         + '<div><span>%S</span>sec</div>'))

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { $(this).find("span").css('padding-bottom','10px'); }
});
