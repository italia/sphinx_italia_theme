$(function(){
    var versionsBar = $('.versions-bar-content');
    var footer = $('.Footer');
    $(window).on('load resize scroll',function(){
        $(window).scrollTop() + $(window).height() > $(document).height() - footer.outerHeight() ?
            versionsBar.removeClass('u-fixedBottom') :
            versionsBar.addClass('u-fixedBottom');
    });
});