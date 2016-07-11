
thinkphp html
<input type="hidden" name="idval" value="{$vo.id}">

$(document).ready(function(){
  var finished = true;
  scrollw();
  function scrollw(){
    $(window).scroll(function(e){
      e.stopPropagation();
      var windowHeight = $(window).height();
      var scrollHeight = $(document).height();
      var scrollTop = $(window).scrollTop();
      // console.log(aa);
      var id=$("input[name=idval]").eq($("input[name=idval]").length-1).val();
      // console.log(id);
      if(scrollTop + windowHeight == scrollHeight && finished == true){
        finished = false;
        // console.log( 'in');
        $.post("{:U('Phone/Product/liajax')}",
          {id: id},
          function(data){
            if(!data){
              return;
            }
            var ele="";
            for(var i=0;i<data.length;i++){
                ele += .....
                  '<input type="hidden" name="idval" value="'+data[i].id+'"/>';
              }
            $("").append(ele);
            finished = true;
          },
          "json");
      }
    });
  }
});