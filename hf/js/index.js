$(function () {
    function time(){
        var date1 = new Date();
        var date2=new Date(date1);
        date2.setDate(date1.getDate()+2);
        var month=(date2.getMonth()+1);
        var day=date2.getDate();
        $("#month").text(month);
        $("#day").text(day);
    }
    time();
});