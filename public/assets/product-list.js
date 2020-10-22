$(document).ready(function(){
    $('form').on('submit',function(){
        var item =$('form input');
        var listitem={item:item.val()};

        $.ajax({
            type:"POST",
            url:"/product",
            data:listitem,
            success: function(data){
                location.reload();
            }
        });
        return false;
    });
    $('li').on('click',function(){
        var item = $(this).text().trim().replace(" ","-");
        $.ajax({
            type:"DELETE",
            url:"/product/"+item,
            success:function(data){
                location.reload();
            }
        })
    })
});