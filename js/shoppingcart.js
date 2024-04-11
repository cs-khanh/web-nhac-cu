let sp1={img:'../img/TrangChu/guitarTaylor-110e.webp',ten:'Guitar Taylor 110E',gia:'23.000.000'};
let sp2={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-114ce-grand-auditorium-wbag-hang-trung-bay-viet-music.png',ten:'Guitar Taylor 114CE',gia:'23.500.000'};
let sp3={img:'..../img/SanPham/Guitar/dan-guitar-acoustic-taylor-bt1-baby-taylor-wbag-viet-music.png',ten:'Guitar Taylor BT1 Bayby WBAG',gia:'10.300.000'};
let sp4={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-bt2-mahogany-baby-taylor-wbag-viet-music.png',ten:'Guitar Taylor BT2 Mahogany Baby WBAG',gia:'11.700.000'};
let sp5={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-clp-300-clavinova-qua-su-dung-viet-music.png',ten:'Đàn Piano điện Yamaha CLP 300 Clavinova',gia:'6.000.000'};
let sp6={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-cvp-8-clavinova-qua-su-dung-viet-music.png',ten:'Đàn Piano điện Yamaha CVP 8 Clavinova',gia:'5.000.000'};
let sp7={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-p-95-p-series-qua-su-dung-viet-music.png',ten:'Đàn Piano điện Yamaha P95 Series',gia:'9.500.000'};
let dssp=[sp1,sp2,sp3,sp4,sp5,sp6,sp7];
function thanhTien(row){
    let gia= row.find('.gia').text();
    gia=parseInt(gia.replace(/\./g,""));
    let sl= parseInt(row.find('.soluonghientai').text());
    let formattedTongTien = new Intl.NumberFormat('vi-VN').format(gia*sl);
    return formattedTongTien;
}
function tinhTongTienTatCa() {
    let tongTienTatCa = 0;
    $('.thanhTien').each(function() {
        let giaTri = parseInt($(this).text().replace(/\./g,""));
        tongTienTatCa += giaTri;
    });
    return tongTienTatCa;
}
$(document).ready(function(){
    var urlParams = new URLSearchParams(window.location.search);
    var sp = urlParams.get('dssp');
    sp=sp.split(',');
    console.log(sp);
    console.log(sp.length);
    for(let i=0;i<sp.length;i++){
        let data=`
    <tr>
    <td>
        <img src="${dssp[sp[i]].img}" alt="" width="100px">
    </td>
    <td>
        <h6>${dssp[sp[i]].ten}</h6>
    </td>
    <td>
        <h6 class="gia">${dssp[sp[i]].gia} <span >&#x20AB;</span></h6>
        
    </td>
    <td>
        <div class="btn-group">
            <button type="button" class="btn giamsoluong">-</button>
            <button type="button" class="btn soluonghientai" contenteditable='true'>1</button>
            <button type="button" class="btn tangsoluong">+</button>
        </div>
    </td>
    <td>
        <h6 class="thanhTien"></h6>
    </td>
    <td>
        <button class="btn text-danger xoasp" type="button"><i class="fas fa-trash"></i></button>
    </td>
</tr>
    `
        console.log(data);
        console.log(dssp[sp[i]].img);
        $('#myTable').append(data);
    }
    $('.giamsoluong').click(function(){
        let row = $(this).closest('tr');
        let slht = parseInt(row.find('.soluonghientai').text());
        if(slht>1){
            slht-=1;
            row.find('.soluonghientai').text(slht);
            row.find('.thanhTien').text(thanhTien(row) + ' ₫');
            $('#tongTien').text(new Intl.NumberFormat('vi-VN').format(tinhTongTienTatCa()) + ' ₫');
        }
    });

    $('.tangsoluong').click(function(){
        let row = $(this).closest('tr');
        let slht = parseInt(row.find('.soluonghientai').text());
        slht+=1;
        row.find('.soluonghientai').text(slht);
        row.find('.thanhTien').text(thanhTien(row) + ' ₫');
        $('#tongTien').text(new Intl.NumberFormat('vi-VN').format(tinhTongTienTatCa()) + ' ₫');
    });

    $('.thanhTien').each(function(){
        let row = $(this).closest('tr');
        $(this).text(thanhTien(row) + ' ₫');
    });
    $('.xoasp').click(function(){
        let row=$(this).closest('tr');
        row.remove();
        $('#tongTien').text(new Intl.NumberFormat('vi-VN').format(tinhTongTienTatCa()) + ' ₫');
    });
    $('#tongTien').text(new Intl.NumberFormat('vi-VN').format(tinhTongTienTatCa()) + ' ₫');


});
