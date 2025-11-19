$(document).ready(function () {
    function isInView(el) {
        return $(el).offset().top < $(window).scrollTop() + $(window).height();
    }

    $(window).on('scroll', function () {
        $('.skillbar').each(function () {
            if (isInView(this) && !$(this).hasClass('animated')) {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 1000);
                $(this).addClass('animated');
            }
        });
    }).trigger('scroll');
});
