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
            alert('Cập nhật thông tin tài khoản thành công!');
            $('.showUsername').html($('#username').val());
            $('#usernameedit').val($('#username').val())
            $('#emailedit').val($('#email').val());
            $('#sdtedit').val($('#sdt').val());
            $('#addressedit').val($("#address").val());
            //$('#updateinfo input').val('');
        }else{
            alert('<< Bạn phải nhập đúng thông tin!>>');
        }
    })
    $('#changepw').click(function(){
        console.log($('#pwPresent').val());
        if(KiemTraPassword() && KiemTraXacNhanPassword() && KiemTraPasswordNewAndPresent() && $('#pwPresent').val().trim()!=""){
            alert('Thay đổi mật khẩu thành công!');
        $('input[type=password]').val("");
        }else{
            alert('<< Bạn phải nhập đúng thông tin!>>');
        }
    })
})