
let dssp=[];
$(document).ready(function(){
    $('.themvaogio').click(function(){
        var productId = $(this).data('id');
        productId=parseInt(productId)-1;
        dssp.push(productId);
        console.log(dssp);
        var queryString = '?dssp=' + encodeURIComponent(dssp);
        var url = 'shoppingcart.html' + queryString;
        window.open(url, '_blank');
    })
});