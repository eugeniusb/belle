(function ($) {
    $(document).ready(function ($) {
        $('#carousel').unslider({
            autoplay: true,
            infinite: true
        });

        $(document).on('click', 'a', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });
    });
})(jQuery);

