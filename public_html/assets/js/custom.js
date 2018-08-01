
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
      $('.wrapper').append("<div class='animalBox' data-nr='"+index+"' style='background-image:url(assets/images/"+item.img+"); top:"+yversatz+"px; left:"+xversatz+"px;'></div>");
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
        stop: function(e) {
            var mousePosX = e.offsetX;
            var mousePosY = e.offsetY;
            console.log(e.offsetX, e.offsetY);
            $(this).css({
                opacity:1
            });  
            var xs =$(this).attr('data-sxpos');
            var ys = $(this).attr('data-sypos');            
            for (var i = 0, max = allData.length; i < max; i++) {
               var picPosX = $(this).attr('data-anixpos');
               var picPosY = $(this).attr('data-aniypos');               
               var rangeXLeft= picPosX - 40;
               var rangeXRight = picPosX + 40;
               var rangeYTop= picPosY - 40;
               var rangeYBottom = picPosY + 40;
               if((mousePosX < rangeXLeft || mousePosX > rangeXRight)   
                  ||(mousePosY > rangeYTop || mousePosY < rangeYBottom)){                         
                   $(this).animate({top:picPosY, left:picPosX});
               }
               else{
                   $(this).animate({top:mousePosY, left:mousePosX});
               }
            }
            
            $(this).animate({top:ys,left:xs},300);
        }
      },
      {containment:".wrapper", scroll:false}
    );
    
    $('.animalBox').draggable();    
  } 
  function moveTxtBox(index, item){      
      $(".txtBox[data-nr='"+index+"']").animate({          
          left:item.xpos,
          top:item.ypos
      },500);
      
  }
  $(document).keyup(function(e) {      
      $.each(allData,function(key, value){
          moveTxtBox(key, value);
      });
  });  
    /*
     * Aufgabe: Button: 
     * 1. wenn Klick auf Leertaste, dann wird die Zuordnung ausgelesen, jedes Bild fährt zur richtigen Position (man kann die Positonen einfach auch den Bildern zuordnen    
     * 2. Wenn bei Loslassen Text auf Bild liegt, dann bleibt er da, ansonsten fährt er zur Startposition zurück
     * 3. Wenn Bild gleich Text, dann auf Bild liegen, ansonsten wird es wieder zur Startposition zurückgelegt
     */
    
    
