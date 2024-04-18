$(document).ready(function(){
  let dt=JSON.parse(localStorage.getItem('data'));
  console.log(dt);
    for(let i=0;i<dt.length;i++){
      console.log(parseInt(dt[i]+1));
      $('i[data-yeuthich="'+(parseInt(dt[i]+1))+'"]').addClass('fas');
      //$('i[data-yeuthich="'+(parseInt(dt[i]+1))+'"]').off('click');
    }
    $('.yeuthich').click(function(){ 
      $(this).addClass('fas');
      let id=$(this).data('yeuthich');
      console.log(id);
      id=parseInt(id)-1;
      if(dt.indexOf(id)===-1) {
        dt.push(id);
        localStorage.setItem('data',JSON.stringify(dt));
        $(this).off('click');
        var url = 'favoriteproduct.html';
        window.open(url, '_blank');
        location.reload();
      }else{
        alert('<< Đã có trong sản phẩm yêu thích >>');
      }
    })
  })
