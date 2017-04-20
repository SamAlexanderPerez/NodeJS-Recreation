(function(){
  const doc= document;
  let buttons = doc.querySelectorAll("button");
    for(let b=0;b<buttons.length;b++){
      button[b].addEventListener("mouseover",function(){
        for(let m=0;m<buttons.length;m++){
          if(m==1){
            buttons[b].style.opacity=0.5;
          }
          else{
            buttons[b].style.opacity=1.0;
          }
        }
  })
  }
    }

  })

})
