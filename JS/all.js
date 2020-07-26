$(document).ready(function () {
    // 打開選單
    $(".hammenu").click(function (e) { 
        e.preventDefault();
        $(".wrap").toggleClass("open-menu");
    });
});