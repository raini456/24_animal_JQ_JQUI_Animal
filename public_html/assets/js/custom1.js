
//$( selector(htmlelement,cssclass,id) ).methode -> .css(),.attr(),.hide(),.show()
//$( selector(htmlelement,cssclass,id) ).event(fn(){...})   -> .click(),.ready(),.on() 
$(document).ready(function(){
    
    console.log("READY !!!");
    console.log(allData);
    // Globale Variablen Startwere setzen
  for(var i=0;i < allData.length;i++){
        
        //Erzeuge div-element und speicher es in variable
        var div0 = document.createElement("div");
        var image = 'url(../assets/images/' + allData[i].img + ')';
        div0.setAttribute("animal-no", i);
        div0.className="animalDiv";
        inside.appendChild(div0);
        div0.click(function(){
            alert(image);
        });
        /*div0.css({
            backgroundImage:'assets/images/allData[' + i +')'
        });*/
        $('.animalDiv').animate({
            
            backgroundImage:image
        },100);
        var div1 = document.createElement("div");
        console.log(image);
        div1.setAttribute("data-nr",i); /// !!!!!!!!!!!!!!!!!!!!!
        div1.className = "animalTxt"; 
        
        
        var gtxt = document.createTextNode(allData[i].gtxt);  
        var ftxt = document.createTextNode(allData[i].ftxt);  
        //Stecke text-element in div-element
        div1.appendChild(gtxt);
        //Gebe jedem div-element ein event mit    
        div1.onclick = function(){ 
            alert( this.getAttribute("data-nr") );                
        }
        //füge div-element zum DOM (htmlstruktur) hinzu
        //mache sichtbar
        inside.appendChild(div0);
        wrapper.appendChild(div1); 
        $('#animalDiv').animate({
            backgroundImage:'url(assets/images/'+ allData[i].img + ')'
        },100);
    }
    
});//ready End
