const cover = document.querySelector(".cover__greetings");
const crackAnim = function () {
    $(".crack").animate({"opacity" : "0.5"}, 100, "linear")
}
const letterFalling = function (){
    $('.cover__greetings--H').transition(   { perspective: "100px", rotate:'50deg' }, 500, 'linear');
    // $(".cover__greetings--H").animate({"transform" : "rotate20deg"}, 100, "linear")
}

$(document).ready(function (){
    $(".cover__greetings").animate({"top" : "60%"}, 300, "linear");
    setTimeout(crackAnim, 300);
    setTimeout(letterFalling, 300);
});