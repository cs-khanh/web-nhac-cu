function KiemTraTenDN(){
    var regex=/^[a-z]\w*/;
    if(regex.test(document.getElementById('username').value.trim())==false){
        document.getElementById('tbUsername').innerText="* bắt đầu phải bằng ký tự";
        return false;
    }else{
        document.getElementById('tbUsername').innerText="*";
        return true;
    }
}
function KiemTraPassword(){
    var regex=/^[a-zA-Z\d]{6,}/;
    if(regex.test(document.getElementById('pwNew').value.trim())==false){
        document.getElementById('tbPwNew').innerText="*phải có chữ, số, ít nhất 6 ký tự";
        return false;
    }else{
        document.getElementById('tbPwNew').innerText="*";
        return true;
    }
}
function KiemTraXacNhanPassword(){
    if(document.getElementById('pwNew').value!=document.getElementById('pwNewRe').value) {
        document.getElementById("tbPwNewRe").innerText="* Phải nhập giống ô mật khẩu";
        return false;
    }else{
        document.getElementById("tbPwNewRe").innerText="*";
        return true;
    }
}
function checkEmail(){
    let regex=/^[\w]+@([a-z]{2,}\.)+[a-z]{2,3}$/i;
    if(regex.test(document.getElementById('email').value.trim())==false){
        document.getElementById('tbEmail').innerText="* nhập sai email";
        return false;
    }else{
        document.getElementById('tbEmail').innerText="*";
        return true;
    }
}
function checkPhone(){
    let regex=/^0[2-9]{1}[0-9]{8}$/;
    if(regex.test(document.getElementById('sdt').value.trim())==false){
        document.getElementById('tbSdt').innerText="* số điện thoại gồm 10 chữ số";
        return false;
    }else{
        document.getElementById('tbSdt').innerText="*";
        return true;
    }
}
function kiemTraDiaChi(){
    let diachi= $('#address').val().trim();
    if(diachi==""){
        $("#tbAddress").html('* Không được để trống địa chỉ');
        return false;
    }else{
        $("#tbAddress").html('*');
        return true;
    }
}
function KiemTraPasswordNewAndPresent(){
    if(document.getElementById('pwPresent').value==document.getElementById('pwNew').value) {
        document.getElementById("tbPwNew").innerText="* Không được giống mật khẩu hiện tại";
        return false;
    }else{
        document.getElementById("tbPwNew").innerText="*";
        KiemTraPassword();
        return true;
    }
}
$(document).ready(function(){
    var id=JSON.parse(localStorage.getItem("IDTK"));
    if(id==null){
        $('.change ').hide();
        $('.change-success').show();
    }else{
        $('.change ').show();
        $('.change-success').hide();
        var dsuser= JSON.parse(localStorage.getItem("DSuser"));
        $('#usernameedit,#username').val(dsuser[id].name);
        $('.showUsername').html(dsuser[id].name);
        $('#emailedit,#email').val(dsuser[id].email);
        $('#sdtedit,#sdt').val(dsuser[id].sdt);
        $('#addressedit,#address').val(dsuser[id].address);
    }
    $('#username').blur(function(){
        KiemTraTenDN();
    })
    $('#email').blur(function(){
        checkEmail();
    })
    $('#sdt').blur(function(){
        checkPhone();
    })
    $('#pwNew').blur(function(){
        KiemTraPassword();
    })
    $('#pwNew').blur(function(){
        KiemTraPasswordNewAndPresent();
    })
    $('#pwNewRe').blur(function(){
        KiemTraXacNhanPassword();
    })
    $( "#address" ).blur(function(){
        kiemTraDiaChi();
    })
    $('#changeInfo').click(function(){
        if(KiemTraTenDN() && checkEmail() && checkPhone() && kiemTraDiaChi()){
            dsuser[id].name=$('#username').val();
            dsuser[id].email=$('#email').val();
            dsuser[id].sdt=$('#sdt').val();
            dsuser[id].address=$("#address").val();
            localStorage.setItem('DSuser',JSON.stringify(dsuser));
            alert('Cập nhật thông tin tài khoản thành công!');
            location.reload();
        }else{
            alert('<< Bạn phải nhập đúng thông tin!>>');
        }
    })
    $('#changepw').click(function(){
        let pw=($('#pwPresent').val());
        if(dsuser[id].pw==pw){
            if(KiemTraPassword() && KiemTraXacNhanPassword() && KiemTraPasswordNewAndPresent()){
                dsuser[id].pw=$('#pwNew').val();
                localStorage.setItem('DSuser', JSON.stringify(dsuser));
                alert('Thay đổi mật khẩu thành công!');
                $('input[type=password]').val("");
            }else{
                alert('<< Bạn phải nhập đúng thông tin!>>');
            }
        }else if($('#pwPresent').val().trim()==""){
            alert('<< Bạn cần nhập mật khẩu hiện tại >>');
        }else{
            alert('<< Mật khẩu hiện tại sai! >>');
        }
    })
    $('.dangxuat').click(function(){
        localStorage.removeItem('IDTK');
        window.location.href='../html/login.html';
    })
})