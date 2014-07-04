document.getElementById("play-button").onclick = function(){
    playVid();
};

function playVid(e){
    var video = '<iframe id="youtube-video" width="805" height="481" src="//www.youtube.com/embed/IMXMhhu5anw?autoplay=1&controls=0&showinfo=0&autohide=1&rel=0"></iframe>';
    var trailer = document.getElementById("trailer");

    trailer.innerHTML = video;
}

smoothScroll.init({
    speed: 500,
    easing: 'ease',
    offset: 0,
    updateURL: false
});
