$(document).ready(function () {

    $("[data-page]").addClass("hide");
    showPage(location.hash);

    $(window).on('hashchange', function () {
        var newPage = location.hash;
        showPage(newPage);
    });
});

function showPage (hash) {

    var $menuItem = $("[href='" + hash + "']");
    var page = hash.substring(1);

    var $nav = $(".nav");
    $nav.find("li").removeClass("active");
    $menuItem.parent().addClass("active");

    var $pages = $(".pages");
    // TODO Fadein, fadeout
    $pages.find("[data-page]").removeClass("active");
    $pages.find("[data-page='" + page + "']").addClass("active");
}
