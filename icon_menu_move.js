function move(x) {
    x.classList.toggle("change");
}

window.onscroll = function (){
    scrolling()
};
function scrolling(){
    var $header = $(".header"),
        headerPos = $header.position().top,
        $temiCaldi =$(".temi_caldi"),
        $line = $(".line");
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > headerPos) {
            $header.css("position", "fixed").css("top", 0);
            $temiCaldi.css("display", "none");
            $line.css("display", "none");

        }
        else {
            $header.css("position", "static");
            $temiCaldi.css("display", "block");
            $line.css("display", "block");
        }
    });
}