function get(){

    let mydiv = document.getElementById("mydiv");

    let h1 = document.createElement("h1");
    h1.innerHTML = "Narendra Modi";

    let a = document.createElement("a");
    a.innerHTML = "Click to know more";
    a.setAttribute("href", "https://en.wikipedia.org/wiki/Narendra_Modi");

    let img = document.createElement("img");
    img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/b2/Shri_Narendra_Modi%2C_Prime_Minister_of_India_%283x4_cropped%29.jpg");
    img.style.height = "200px";
    img.style.width = "200px";

    img.addEventListener("click", () => {
        img.style.height = "400px";
        img.style.width = "400px";
    })

    mydiv.appendChild(h1)
    mydiv.appendChild(a)
    mydiv.appendChild(document.createElement("br"))
    mydiv.appendChild(document.createElement("br"))
    mydiv.appendChild(img)



}