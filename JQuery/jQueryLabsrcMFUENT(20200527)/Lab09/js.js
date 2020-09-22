$(window).scroll(function () {
    let persent = $(this).scrollTop()
        / ($('body').height() - $(window).height());
    $('#read_progress_bar').width(`${Math.round(persent * 100)}vw`);
}) 


$("#idtable").on('click','.btn-danger', function(){
    $(this).closest('tr').remove();
})