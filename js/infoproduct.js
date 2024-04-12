dssp=[];
dssl=[];
function tinhTongTien(sl){
    let gia=$('#gia').html();
    console.log(gia,sl);
    gia=parseInt(gia.replace(/\./g,""));
    return gia*sl;
}
$(document).ready(function(){
    let tensp=$('#tensanpham').html();
    tensp=tensp.split('-');
    tensp=tensp[0];
    $('#tensanpham-banner').html(tensp)
    $('#soluonghientai').on('blur', function() {
        var newValue = $(this).text();
        if(newValue <=0 || newValue==""){
            $(this).text(1);
        }else{
            $(this).text(newValue);
            slht=eval($('#soluonghientai').text());
        }
        
    });
    slht=eval($('#soluonghientai').text());
    $('#giamsoluong').click(function(){
        if(slht>1){
            slht-=1;
            $('#soluonghientai').text(slht);
        }
    })
    $('#tangsoluong').click(function(){
        slht+=1;
        $('#soluonghientai').text(slht);
    })
    $('#muangay').click(function(){
        let id=$('.themvaogio').data('id');
        id=parseInt(id)-1;
        dssp.push(id);
        console.log(dssp);
        let sl=$('#soluonghientai').text();
        dssl.push(sl);
        console.log(dssl);
        let tongtien=tinhTongTien(sl);
        console.log(tongtien);
        var queryString = '?dssp=' + encodeURIComponent(dssp) +'&dssl=' + encodeURIComponent(dssl) +'&tongTien'+encodeURIComponent(tongtien);
        var url = 'cartpayment.html' + queryString;
        window.open(url, '_blank');
    })
})