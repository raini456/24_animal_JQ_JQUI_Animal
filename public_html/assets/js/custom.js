
//$( selector(htmlelement,cssclass,id) ).methode -> .css(),.attr(),.hide(),.show()
//$( selector(htmlelement,cssclass,id) ).event(fn(){...})   -> .click(),.ready(),.on() 
$(document).ready(function(){
    
    console.log("READY !!!");
    // Globale Variablen Startwere setzen
    
    createScreen();
    
});//ready End

function  createScreen(){

   $.each(allData,function(index,item){
            createAniamlBox(index,item);
            creatTxtBox(index,item);
   });    
}

function createAniamlBox(index,item){
      //var xversatz = 100+(105*index);
      var xversatz = item.xpos;
      var yversatz = item.ypos;
      $('.wrapper').append("<div class='animalBox' data-nr='"+index+"' style='background-image:url(assets/images/"+item.img+"); top:"+yversatz+"px; left:"+xversatz+"px;'></div>");
}

function creatTxtBox(index,item){
    var xversatz = 100+(105*index);
      $('.wrapper').append("<div class='txtBox' data-nr='"+index+"' \n\
      style='top:50px; left:"+xversatz+"px;'>"+item.ftxt+"</div>");
    $('.txtBox').draggable();
}