$(document).ready(function(){
    let dssp=JSON.parse(localStorage.getItem('data-sanpham'));
    $('.themvaogio').click(function(){
        var productId = $(this).data('id');
        var soluong = $(this).closest('.row').find('#soluonghientai').text();
        console.log(soluong);
        productId=parseInt(productId)-1;
        if(dssp.indexOf(productId)===-1){
            dssp.push(productId);
            localStorage.setItem("data-sanpham", JSON.stringify(dssp)); 
            var url = 'shoppingcart.html';
            window.open(url, '_blank');
        }else{
            alert('<< Sản phẩm đã có trong giỏ hàng >>');
        }
    })
});