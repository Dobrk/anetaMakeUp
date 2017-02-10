$(".cross").hide();
$(".menu-small").hide();
$(".hamburger").click(function () {
    $(".menu-small").slideToggle("slow", function () {
        $(".hamburger").hide();
        $(".cross").show();
    });
});

$(".cross").click(function () {
    $(".menu-small").slideToggle("slow", function () {
        $(".cross").hide();
        $(".hamburger").show();
    });
});