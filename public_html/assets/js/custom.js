
//$( selector(htmlelement,cssclass,id) ).methode -> .css(),.attr(),.hide(),.show()
//$( selector(htmlelement,cssclass,id) ).event(fn(){...})   -> .click(),.ready(),.on() 
$(document).ready(function(){
    
    console.log("READY !!!");
    // Globale Variablen Startwere setzen
    
    createScreen();
    
    
});//ready End
function  createScreen(){
   $.each(allData,function(index,item){
            createAnimalBox(index,item);
            createTxtBox(index,item);
   });    
}

function createAnimalBox(index,item){
      //var xversatz = 100+(105*index);
      var xversatz = item.xpos;
      var yversatz = item.ypos;
      $('.wrapper').append("<div id='aBox"+index+"' class='animalBox' data-nr='"+index+"' style='background-image:url(assets/images/"+item.img+"); top:"+yversatz+"px; left:"+xversatz+"px;'></div>");
}

function createTxtBox(index,item){
    var xversatz = 100+(105*index);
    var posAnimalBoxX=item.xpos;
    var posAnimalBoxY=item.ypos;
      $('.wrapper').append("<div class='txtBox' data-nr='"+index+"' \n\
      style='top:50px; left:"+xversatz+"px;' data-sxpos='"+xversatz+"px' data-sypos='50px' data-anixpos='"+posAnimalBoxX+"px' data-aniypos='"+posAnimalBoxY+"px'>"+item.ftxt+"</div>");
      $('.txtBox').mouseover(function(){
          $(this).css({
              boxShadow:'0 0 4px black'              
          });}).mouseout(function(){
           $(this).css({
              boxShadow:''  
          });
      });
              
      $('.txtBox').draggable( {     
        start: function() {
            $(this).css({
                opacity:0.3,
                
            });
        },
        drag: function() {
        },
        stop: function() {
            $(this).css({
                opacity:1
            }); 
            var trefferObj;
            for (var i = 0, max = $('.animalBox').length; i < max; i++) {
                var obj = $('.animalBox')[i];

                if (isHit($(this)[0], obj)) {
                    trefferObj = obj;
                }
                if (trefferObj != undefined){
                    if ($(this).attr('data-nr') == $(trefferObj).attr("data-nr")) {
                        $(trefferObj).slideUp().slideDown();
                    }                     
                    else{
                       var xs = $(this).attr('data-sxpos');
                       var ys = $(this).attr('data-sypos'); 
                       $(this).animate({top: ys, left: xs}, 300);
                       alert("try again");
                    }
                }
             }
        }
      },      
      {containment:".wrapper", scroll:false}
    );
    
    $('.animalBox').draggable();    
  } 
  function moveTxtBox(i, item){      
      $(".txtBox[data-nr='"+ i +"']").animate({          
          left:item.xpos,
          top:item.ypos
      },1500);      
  }
  $(document).keyup(function(e) {      
      $.each(allData,function(key, value){
          moveTxtBox(key, value);
      });
  }); 
  function isHit(div1, div2){
      var rect1 = div1.getBoundingClientRect();
      var rect2 = div2.getBoundingClientRect();
      return !(rect1.right<rect2.left||
              rect1.left>rect2.right||
              rect1.bottom<rect2.top||
              rect1.top>rect2.bottom
              );
  }
    /*
     * Aufgabe: Button: 
     * 1. wenn Klick auf Leertaste, dann wird die Zuordnung ausgelesen, jedes Bild fährt zur richtigen Position (man kann die Positonen einfach auch den Bildern zuordnen    
     * 2. Wenn bei Loslassen Text auf Bild liegt, dann bleibt er da, ansonsten fährt er zur Startposition zurück
     * 3. Wenn Bild gleich Text, dann auf Bild liegen, ansonsten wird es wieder zur Startposition zurückgelegt
     */
    
    
