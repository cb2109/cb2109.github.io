/*
 * Core code that initialises and runs basic components
 */
(function($) {

    $(function() {
        $(".pagechange").click(animateout);
    });

    function animateout() {
        var $that = 
        $(".maincontainer").removeClass("animatein").addClass("animateout");
        var pageurl = $(this).attr("pageurl");
        if (pageurl !== "") {
            setTimeout(function() {
                window.location.href = pageurl;
            }, 1000);
        }
    }

})(jQuery);