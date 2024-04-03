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
    console.log(slht);
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
    
})