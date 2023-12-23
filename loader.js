const games = [
    {
        name: "lol",
        link: "https://example.com",
        image: `data:image/jpeg;base64,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`
    }
]
document.addEventListener("DOMContentLoaded", (event) => {
    games.forEach(element => {
        var elementDiv = document.createElement("div");
        elementDiv.id = element.name;
        elementDiv.classList.add("app-div")
        document.getElementById("gamerdov").appendChild(elementDiv);

        var btn = document.createElement("a");
        btn.classList.add("app-p")
        btn.onclick = function () {
            console.log(element.name+"\n"+element.link)
        }
        elementDiv.appendChild(btn)

        var imgP = document.createElement("img")
        imgP.src = element.image;
        imgP.classList.add("app-img")
        btn.appendChild(imgP)

        var para = document.createElement("p");
        para.innerHTML = element.name
        para.classList.add("app-para")
        elementDiv.appendChild(para)
    });
});

document.onclick = hideMenu; 
document.oncontextmenu = rightClick; 
  
function hideMenu() { 
    console.log("lol")    
} 

function rightClick(e) { 
    console.log("User has right clicked\nLogged!");
} 
