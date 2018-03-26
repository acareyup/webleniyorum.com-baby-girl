var audio = new Audio("https://www.webleniyorum.com/wp-content/uploads/2018/03/lullabygoodnight.mp3");
audio.autoplay=true;

$('#play-pause-button').on("click", function () {
    if ($(this).attr('src') == 'https://www.webleniyorum.com/wp-content/uploads/2018/03/pause-button.png') {
        $(this).attr('src','https://www.webleniyorum.com/wp-content/uploads/2018/03/play-button.png');
        audio.pause();
    }
    else {
        $(this).attr('src','https://www.webleniyorum.com/wp-content/uploads/2018/03/pause-button.png');
        audio.play();
    }
});

audio.onended = function () {
    $("#play-pause-button").attr('src', 'https://www.webleniyorum.com/wp-content/uploads/2018/03/pause-button.png');
};