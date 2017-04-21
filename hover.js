(function(){
  const doc= document;
  let buttons = doc.querySelectorAll("button");
  let image=doc.querySelector("image");
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
  for(let c=0;c<buttons.length;c++){
    button[c].addEventListener("mouseout",function(){
      for(let n=0;n<buttons.length;n++){
        if(m==1){
          buttons[c].style.opacity=1.0;
        }
        else{
          buttons[c].style.opacity=0.5;
        }
      }
})
}
div.image.addEventListener("mouseover",function(){
  if(image.style.background=="solid 15px white"){
    image.style.background="solid 15px green";
  }
  else{
    image.style.background="solid 15px white";
  }
})
div.image.addEventListener("mouseout",function(){
  if(div.image.style.background=="solid 15px green"){
    div.image.style.background="solid 15px white";
  }
  else{
    div.image.style.background="solid 15px green";
  }
})

    }

  )
