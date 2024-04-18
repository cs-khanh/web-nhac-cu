let sp1={img:'../img/TrangChu/guitarTaylor-110e.webp',ten:'Guitar Taylor 110E',gia:'23.000.000'};
let sp2={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-114ce-grand-auditorium-wbag-hang-trung-bay-viet-music.png',ten:'Guitar Taylor 114CE',gia:'23.500.000'};
let sp3={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-bt1-baby-taylor-wbag-viet-music.png',ten:'Guitar Taylor BT1 Bayby WBAG',gia:'10.300.000'};
let sp4={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-bt2-mahogany-baby-taylor-wbag-viet-music.png',ten:'Guitar Taylor BT2 Mahogany Baby WBAG',gia:'11.700.000'};
let sp5={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-clp-300-clavinova-qua-su-dung-viet-music.png',ten:'Đàn Piano điện Yamaha CLP 300 Clavinova',gia:'6.000.000'};
let sp6={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-cvp-8-clavinova-qua-su-dung-viet-music.png',ten:'Đàn Piano điện Yamaha CVP 8 Clavinova',gia:'5.000.000'};
let sp7={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-p-95-p-series-qua-su-dung-viet-music.png',ten:'Đàn Piano điện Yamaha P95 Series',gia:'9.500.000'};
let sp8={img:'../img/SanPham/Guitar/dan-guitar-acoustic-yamaha-f310-f-series-viet-music.png',ten:'Đàn Guitar Yamaha F310 Series',gia:'3.900.000'}
let sp9={img:'../img/SanPham/Guitar/dan-guitar-acoustic-yamaha-fg-401-qua-su-dung-viet-music.png',ten:'Đàn Guitar Acoustic Yamaha FG-401',gia:'10.500.000'}
let sp10={img:'../img/SanPham/Guitar/dan-guitar-classic-cordoba-hauser-limited-macassar-ebony-viet-music.png',ten:'Đàn Guitar Classic Cordoba Hauser Limited Macassar Ebony',gia:'170.00.000'}
let sp11={img:'../img/SanPham/Guitar/dan-guitar-classic-cordoba-torres-viet-music.png',ten:'Đàn Guitar Classic Cordoba Torres',gia:'150.000.000'}
let sp12={img:'../img/SanPham/Guitar/dan-guitar-classic-yamaha-gc82s-gc-gcx-series-viet-music.png',ten:'Đàn Guitar Classic Yamaha GC82S - GC / GCX Series',gia:'275.000.000'}
let sp13={img:'../img/SanPham/Piano/dan-organ-korg-pa600-viet-music.png',ten:'Đàn Organ Korg PA600',gia:'26.000.000'}
let sp14={img:'../img/SanPham/Piano/dan-organ-kurtzman-sv800-viet-music.png',ten:'Đàn Organ Kurtzman SV800',gia:'17.000.000'}
let sp15={img:'../img/SanPham/Piano/dan-piano-hybrid-grand-yamaha-c1x-sh3-silent-cx-series-viet-music.png',ten:'Grand Piano Yamaha C1X - CX Series',gia:'720.000.000'}
let sp16={img:'../img/SanPham/Piano/grand-piano-yamaha-c5-pe-c-series-viet-music.png',ten:'Grand Piano Yamaha C5 PE - Series',gia:'890.000.000'}
let sp17={img:'../img/SanPham/Piano/grand-piano-yamaha-cfx-premium-cf-series-viet-music_30d700f1-33b4-48ed-bbac-8055b058a6b3.png',ten:'Grand Piano Yamaha CFX Premium - CF Series',gia:'4.900.000.000'}

let dssp=[sp1,sp2,sp3,sp4,sp5,sp6,sp7,sp8,sp9,sp10,sp11,sp12,sp13,sp14,sp15,sp16,sp17];
function checkName() {
    let regex= /^(([A-Z]{1}[a-z]{0,6}\s{1}){1,6}[A-Z]{1}[a-z]{0,6})$|^(([A-Z]{1,7}\s{1}){1,6}[A-Z]{1,7})$/ ;
    let chuoi=$('#name').val();
    if (regex.test(chuoi)) { 
       $('#tbName').html('*');
       return true;
    }else{
        $('#tbName').html('Kí tự đầu mỗi chữ viết hoa hoặc viết hoa toàn bộ ');
       return false;
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
$(document).ready(function(){
    let t=$('#tong').html();
    $ ("#name").blur(function(){
        checkName();
    })
    $('#sdt').blur(function(){
        checkPhone();
    })
    $( "#address" ).blur(function(){
        kiemTraDiaChi();
    })
    console.log(t);
    $('.dathang').click(function(){
        if(checkName()  && checkPhone() && kiemTraDiaChi() && typeof t!='undefined') {
            window.location.href = '../html/completeorders.html';
        }else if(checkName()==false ||checkPhone() ==false || kiemTraDiaChi()==false){
            alert('Bạn phải nhập đầy đủ thông tin');
        }else if(typeof t=='undefined'){
            alert('Không có sản phẩm nào để thanh toán');
        }
    })
    var urlParams=new URLSearchParams(window.location.search);
    var sp = urlParams.get('dssp');
    var sl=urlParams.get('dssl');
    var tongTien=parseInt(urlParams.get('tongTien'));
    sp=sp.split(',');
    sl=sl.split(',');
    console.log(sp,sl);
    console.log(tongTien);
    for(let i=0;i<sp.length;i++){
        let index=parseInt(sp[i]);
        let data=
        `
        <div class="col-md-3">
                  <div class="img-thumbnail">
                    <img src="${dssp[index].img}" alt="" width="100%">
                  </div>
                </div>
                <div class="col-md-9 pt-3">
                  <h6>${dssp[index].ten}</h6>
                  <h6 class="pt-1">Giá: <span class="gia">${dssp[index].gia}</span></h6>
                  <h6 class="soluong pt-1">Số lượng: <span class="text-danger">${parseInt(sl[i])}</span></h6>
                </div>
        `
        $('.hienthisp').append(data);
    }
    let formattedTongTien = new Intl.NumberFormat('vi-VN').format(tongTien);
    $('#giadan').html(formattedTongTien + ' ₫');
    $('#giavanchuyen').html('50.000 ₫');
    let tong=tongTien+50000;
    let formatted = new Intl.NumberFormat('vi-VN').format(tong);
    $('#tong').html(formatted+' ₫');
    $('#transport').change(function(){
        let vanchuyen=$('#transport').val();
        if(vanchuyen=='50000'){
            $('#giavanchuyen').html('50.000 ₫');
            let tong=tongTien+50000;
            t=tong;
            let formatted = new Intl.NumberFormat('vi-VN').format(tong);
            $('#tong').html(formatted+' ₫');
        }else if(vanchuyen=='80000'){
            $('#giavanchuyen').html('80.000 ₫');
            let tong=tongTien+80000;
            t=tong;
            let formatted = new Intl.NumberFormat('vi-VN').format(tong);
            $('#tong').html(formatted+' ₫')
        }
    })
});