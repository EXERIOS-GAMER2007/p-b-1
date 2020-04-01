$('.select-dropdown').on('click', function(event) {
    event.stopPropagation();
});

$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
$(document).ready(function(){
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();
    $('select').select2({
        width: "100%",
        minimumResultsForSearch: 10,
    });
    $('select_multiples').select();
    $('.chips').chips();
    $('.parallax').parallax();
    $('.tabs').tabs();
});

window.onbeforeunload = function(){
    $("#ErumBot").fadeOut("slow");
};

function Loading() {
    $("#loader").fadeIn("slow");
    setTimeout(showPage, 700)
}

function showPage() {
    $("#loader").fadeOut("slow");
    $("#ErumBot").delay(700).fadeIn("slow");
}

$("#guild_selector").change(function(e){
    e.stopPropagation();
    window.location = "/dashboard/" + $("#guild_selector").val();
});