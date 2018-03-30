/*
 * Core code that initialises and runs basic components
 */
(function($) {

    $(function() {
        $(".title").click(returnToHomePage);
    });

    function returnToHomePage() {
        window.location = "/";
    }

})(jQuery);