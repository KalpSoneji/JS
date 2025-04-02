
imgArray = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"]

function imgChange(){

    var img = document.getElementById("image");

    
    var randomIndex =  Math.floor(Math.random() * imgArray.length);

    //imgArray[Math.floor(Math.random() * 5)];

    img.src = "../Images/" +  imgArray[randomIndex]
    

}