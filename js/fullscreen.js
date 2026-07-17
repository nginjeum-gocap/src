document.body.addEventListener("click", function() {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

    }

});
