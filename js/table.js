  $(window).load(function(){
    $("table#morePriority, table#samePriority").on("click", ".remove", function () {
        $(this).closest('tr').remove();
    });
    $("table#phoneTable").on("click", ".remove", function () {
        $(this).closest('tr').remove();
    });
});
