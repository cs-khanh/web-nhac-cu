let dsyt=[];
$(document).ready(function(){
    $('.yeuthich').click(function(){ 
      $(this).addClass('fas');
      $('.yeuthich').prop('disabled', true);
      let id=$(this).data('yeuthich');
      console.log(id);
      id=parseInt(id)-1;  
      dsyt.push(id);  
      var queryString = '?dsyt=' + encodeURIComponent(dsyt);
      var url = 'favoriteproduct.html' + queryString;
      window.open(url, '_blank');
    })
  })