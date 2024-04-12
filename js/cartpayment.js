let sp1={img:'../img/TrangChu/guitarTaylor-110e.webp',ten:'Guitar Taylor 110E',gia:'23.000.000'};
let sp2={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-114ce-grand-auditorium-wbag-hang-trung-bay-viet-music.png',ten:'Guitar Taylor 114CE',gia:'23.500.000'};
let sp3={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-bt1-baby-taylor-wbag-viet-music.png',ten:'Guitar Taylor BT1 Bayby WBAG',gia:'10.300.000'};
let sp4={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-bt2-mahogany-baby-taylor-wbag-viet-music.png',ten:'Guitar Taylor BT2 Mahogany Baby WBAG',gia:'11.700.000'};
let sp5={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-clp-300-clavinova-qua-su-dung-viet-music.png',ten:'Đàn Piano điện Yamaha CLP 300 Clavinova',gia:'6.000.000'};
let sp6={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-cvp-8-clavinova-qua-su-dung-viet-music.png',ten:'Đàn Piano điện Yamaha CVP 8 Clavinova',gia:'5.000.000'};
let sp7={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-p-95-p-series-qua-su-dung-viet-music.png',ten:'Đàn Piano điện Yamaha P95 Series',gia:'9.500.000'};
let dssp=[sp1,sp2,sp3,sp4,sp5,sp6,sp7];
$(document).ready(function(){
    var urlParams=new URLSearchParams(window.location.search);
    var sp = urlParams.get('dssp');
    var sl=urlParams.get('dssl');
    var tongTien=urlParams.get('tongTien')
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
});