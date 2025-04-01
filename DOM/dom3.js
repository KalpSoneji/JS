const changeSize = () => {

    let mydiv = document.getElementById("mydiv");
    
    if(mydiv.style.backgroundColor === "yellow"){

        mydiv.style.height = "200px";
        mydiv.style.width = "200px";
        mydiv.style.backgroundColor = "red";
        mydiv.style.borderRadius = "0"; 
        mydiv.style.backgroundImage = "";

    } 
    
    else{
    
        mydiv.style.height = "400px";
        mydiv.style.width = "400px";
        mydiv.style.backgroundColor = "yellow";
        mydiv.style.borderRadius = "50%";
        mydiv.style.backgroundImage = "url('https://hips.hearstapps.com/hmg-prod/images/best-guard-dogs-1650302456.jpeg?crop=0.754xw:1.00xh;0.0651xw,0&resize=1200:*')";
        mydiv.style.backgroundSize = "cover";
        
    }

}