$(document).ready(function(){
    var id=JSON.parse(localStorage.getItem("IDTK"));
    if(id==null){
        $('#account').html(' Đăng nhập');
        $('#account-link').attr('href','../html/login.html');
    }else{
        var dsuser= JSON.parse(localStorage.getItem("DSuser"));
        $('#account').html(' Hi '+dsuser[id].name);
        $('#account-link').attr('href','../html/accountmanagement.html');
    }
})