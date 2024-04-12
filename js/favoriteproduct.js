let sp1={img:'../img/TrangChu/guitarTaylor-110e.webp',ten:'Guitar Taylor 110E',gia:'23.000.000'};
let sp2={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-114ce-grand-auditorium-wbag-hang-trung-bay-viet-music.png',ten:'Guitar Taylor 114CE',gia:'23.500.000'};
let sp3={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-bt1-baby-taylor-wbag-viet-music.png',ten:'Guitar Taylor BT1',gia:'10.300.000'};
let sp4={img:'../img/SanPham/Guitar/dan-guitar-acoustic-taylor-bt2-mahogany-baby-taylor-wbag-viet-music.png',ten:'Guitar Taylor',gia:'11.700.000'};
let sp5={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-clp-300-clavinova-qua-su-dung-viet-music.png',ten:'Piano Yamaha CLP 300',gia:'6.000.000'};
let sp6={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-cvp-8-clavinova-qua-su-dung-viet-music.png',ten:'Piano Yamaha CVP 8 Clavinova',gia:'5.000.000'};
let sp7={img:'../img/SanPham/Piano/dan-piano-dien-yamaha-p-95-p-series-qua-su-dung-viet-music.png',ten:'Piano Yamaha P 95',gia:'9.500.000'};
let dsyt=[sp1,sp2,sp3,sp4,sp5,sp6,sp7];
$(document).ready(function(){
    $('#myFavorite').on('click', '.xoasp', function(){
        $(this).closest('.product').remove();
    });
    var urlParams = new URLSearchParams(window.location.search);
    var sp = urlParams.get('dsyt');
    sp=sp.split(',');
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
})