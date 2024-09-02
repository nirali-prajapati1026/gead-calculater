
const myfun=()=>{
    let math=document.getElementById("math").value;
    let ds=document.getElementById("ds").value;
    let html=document.getElementById("html").value;
    let css= document.getElementById("css").value;
    let js=document.getElementById("js").value;
    let note=document.getElementById("note");
    
    
    
    let gread="";
    let total=parseFloat(math)+parseFloat(ds)+parseFloat(html)+parseFloat(css)+parseFloat(js);
    console.log(total);
    let persanteg=parseInt((total/500)*100);
        
    console.log(persanteg);
     
    if(persanteg<=100 && persanteg>=80){
        gread="A";
    }else if(persanteg<=79 && persanteg>=60){
        gread="B";
    }else if(persanteg<=59 && persanteg>=40){
        gread="C"
    }else{
        gread="F"
    }

  if(persanteg>39.5){
    note.innerHTML=`Total mark: ${total} and Persentage: ${persanteg}% <br> Gread: ${gread} result is: Pass`
  } else{
     note.innerHTML=`Total mark: ${total} and Persentage: ${persanteg}% <br> Gread: ${gread} result is: fall`
  }
}
