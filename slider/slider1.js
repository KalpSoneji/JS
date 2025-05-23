var currentIndex = 0;
var images = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

var prev = document.getElementById("prev");
var next = document.getElementById("next");
var image = document.getElementById("image");

prev.addEventListener("click", () => {

    currentIndex = (currentIndex - 1 + images.length) % images.length;
    console.log(currentIndex);
    

    image.src = "../Images/" + images[currentIndex]

})

next.addEventListener("click", () => {
    
    currentIndex = (currentIndex + 1) % images.length;
    console.log(currentIndex);
    

    image.src = "../Images/" + images[currentIndex]

})