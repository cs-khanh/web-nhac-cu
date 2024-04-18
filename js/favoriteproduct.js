let sp1={img:'../img/TrangChu/guitarTaylor-110e.webp',ten:'Guitar Taylor 110E',gia:'23.000.000'};
let sp2={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-114ce-grand-auditorium-wbag-hang-trung-bay-viet-music.png',ten:'Guitar Taylor 114CE',gia:'23.500.000'};
let sp3={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-bt1-baby-taylor-wbag-viet-music.png',ten:'Guitar Taylor BT1',gia:'10.300.000'};
let sp4={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-bt2-mahogany-baby-taylor-wbag-viet-music.png',ten:'Guitar Taylor',gia:'11.700.000'};
let sp5={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-clp-300-clavinova-qua-su-dung-viet-music.png',ten:'Piano Yamaha CLP 300',gia:'6.000.000'};
let sp6={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-cvp-8-clavinova-qua-su-dung-viet-music.png',ten:'Piano Yamaha CVP 8 Clavinova',gia:'5.000.000'};
let sp7={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-p-95-p-series-qua-su-dung-viet-music.png',ten:'Piano Yamaha P 95',gia:'9.500.000'};
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

let dsyt=[sp1,sp2,sp3,sp4,sp5,sp6,sp7,sp8,sp9,sp10,sp11,sp12,sp13,sp14,sp15,sp16,sp17];
$(document).ready(function(){
    $('#myFavorite').on('click', '.xoasp', function(){
        let id = parseInt($(this).closest('.product').find('.themvaogio').data('id'))-1;
        $(this).closest('.product').remove();
        console.log(id);
        // Tìm vị trí của phần tử trong mảng có id tương ứng và xóa nó
        for (let i = 0; i < sp.length; i++) {
          if (parseInt(sp[i]) === id) {
              sp.splice(i, 1);
              break;
          }
        }
        console.log(sp);
        localStorage.setItem('data',JSON.stringify(sp));
    });
    var sp=[];
    sp= JSON.parse(localStorage.getItem("data"));
    if(sp!=null){
      for(let i=0;i<sp.length;i++){
        let data=`
        <div class="col-md-3 d-flex justify-content-center align-items-center float-left product">
                    <div class="img-thumbnail col-md-12 mt-3">
                      <a href=""><img class="col-md-12" src="${dsyt[sp[i]].img}" alt="" ></a>
                      <div class="title-product">
                        <a class="nav-link pt-0 text-center text-info" href="">${dsyt[sp[i]].ten}</a>
                        <p class="text-center font-weight-bold">${dsyt[sp[i]].gia}</p>
                      </div>
                      <div class="row d-flex justify-content-center">
                        <div class="col-md-9">
                        <button class="btn btn-block text-light themvaogio mb-3" data-id="${parseInt(sp[i])+1}" type="button">Thêm vào giỏ</button>
                        </div>
                        <div class="col-md-3 text-center">
                            <button class="btn text-danger xoasp" type="button"><i class="fas fa-trash"></i></button>
                        </div>
                      </div>
                    </div>  
                </div>
        `
        $('#myFavorite').append(data);
    }
    }
    if(sp!=null){
      if(sp.length===0){
        $('.nullFavorite').show();
        $('#myFavorite').hide();
      }else{
        $('.nullFavorite').hide();
        $('#myFavorite').show();
      }
    }else{
      $('.nullFavorite').show();
      $('#myFavorite').hide();
    }
})