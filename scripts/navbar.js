$(document).ready(function(){
    $(".navbar").resize(function () {
        $('.jumbotron').height($(".navbar").height() + 10);
    });
    if ($(".navbar").height() > $('.jumbotron').height()) $('.jumbotron').height($(".navbar").height() + 10);
});