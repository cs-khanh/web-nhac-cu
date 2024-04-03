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
    if(regex.test(document.getElementById('pw').value.trim())==false){
        document.getElementById('tbPw').innerText="*phải có chữ, số, ít nhất 6 ký tự";
        return false;
    }else{
        document.getElementById('tbPw').innerText="*";
        return true;
    }
}
function KiemTraXacNhanPassword(){
    if(document.getElementById('pw').value!=document.getElementById('nlpw').value) {
        document.getElementById("tbNlpw").innerText="* Phải nhập giống ô mật khẩu";
        return false;
    }else{
        document.getElementById("tbNlpw").innerText="*";
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
function SubmitForm(){
    if(KiemTraTenDN()==false || KiemTraPassword()==false || KiemTraXacNhanPassword()==false){
        alert('Bạn chưa nhập đủ thông tin!');
        return false;
    }else{
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
    $('#pw').blur(function(){
        KiemTraPassword();
    })
    $('#nlpw').blur(function(){
        KiemTraXacNhanPassword();
    })
    let checked=false;
    $('#dieukhoan').change(function(){
        if($(this).prop("checked") == true){
            checked=true;
        }
        else{
            checked=false;
        }
    })
    $('#dky').click(function(){
        if(KiemTraTenDN() && KiemTraPassword() && KiemTraXacNhanPassword() && checkEmail() && checkPhone() && checked){
            alert('Đăng ký tài khoản thành công!');
            $('input').val('');
            $('#dieukhoan').prop('checked',false);
            window.open('login.html?');
        }else{
            alert('Bạn phải nhập đúng thông tin và xác nhận điều khoản!');
        }
    })
})