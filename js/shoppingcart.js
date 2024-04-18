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
    var sp=[];
    sp= JSON.parse(localStorage.getItem("data-sanpham"));
    if(sp!=null){
        for(let i=0;i<sp.length;i++){
            let data=`
        <tr>
        <td>
            <img src="${dssp[sp[i]].img}" alt="" width="100px">
        </td>
        <td>
            <h6 class="tensanpham" data-id="${sp[i]}">${dssp[sp[i]].ten}</h6>
        </td>
        <td>
            <h6 class="gia">${dssp[sp[i]].gia} <span >&#x20AB;</span></h6>
            
        </td>
        <td>
            <div class="btn-group">
                <button type="button" class="btn giamsoluong">-</button>
                <button type="button" class="btn soluonghientai">1</button>
                <button type="button" class="btn tangsoluong">+</button>
            </div>
        </td>
        <td>
            <h6 class="thanhTien"></h6>
        </td>
        <td>
            <button class="btn text-danger xoa" data-toggle="modal" data-target="#myModal" type="button"><i class="fas fa-trash"></i></button>
        </td>
    </tr>
        `
            $('#myTable').append(data);
        }
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
    $('.xoa').click(function(){
        let row=$(this).closest('tr');
        $('.xoasp').click(function(){
            let id=row.find('.tensanpham').data('id');
            for (let i = 0; i < sp.length; i++) {
                if (parseInt(sp[i]) === id) {
                    sp.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem('data-sanpham',JSON.stringify(sp));
            row.remove();
            $('#tongTien').text(new Intl.NumberFormat('vi-VN').format(tinhTongTienTatCa()) + ' ₫');
        })
    });
    $('#tongTien').text(new Intl.NumberFormat('vi-VN').format(tinhTongTienTatCa()) + ' ₫');
    $('#muangay').click(function(){
        var id=JSON.parse(localStorage.getItem("IDTK"));
        if(id==null){
            alert('<< Bạn cần phải đăng nhập để thực hiện chức năng này');
        }else{
            if(tinhTongTienTatCa()==0){
                alert('Không có sản phẩm nào trong giỏ hàng!');
            }else{
                var sls = []; // Mảng chứa số lượng của các sản phẩm
                $('#myTable tr').each(function() {
                    var sl = $(this).find('.soluonghientai').text(); // Lấy số lượng từ mỗi dòng
                    sls.push(sl);
                    console.log(sp, sl);
                });
        
                var queryString = '?dssp=' + encodeURIComponent(sp) + '&dssl=' + encodeURIComponent(sls) +'&tongTien='+encodeURIComponent(tinhTongTienTatCa());
                var url = 'cartpayment.html' + queryString;
                window.open(url, '_blank');
            }
        }   
    });
    if(sp!=null){
        if(sp.length===0){
          $('.nullShopping').show();
          $('.myShopping').hide();
        }else{
          $('.nullShopping').hide();
          $('.myShopping').show();
        }
      }else{
        $('.nullShopping').show();
        $('.myShopping').hide();
      }
});
