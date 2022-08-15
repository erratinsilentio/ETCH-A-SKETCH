const container = document.querySelector("#container")
const squares = document.createElement("div");
const rows = document.createElement("div");

const button = document.querySelector("#button");
const color = document.querySelector("#color");

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value+" x "+slider.value; 
output.style.cssText = "font-family: 'Courier New', Courier, monospace; font-weight: bold;"


slider.oninput = function() {

  output.innerHTML = this.value+" x "+this.value;
  
  while (container.firstChild) {
    container.removeChild(container.firstChild);
}



let squaresWidth = (400 / slider.value)+'px'
let squaresHeight = (400 / slider.value)+"px";

let rowWidth = 400+"px";
let rowHeight = (400 / slider.value)+"px";

let y = 0;
let x = 0;


while (y<slider.value){
    const rows = document.createElement("div");
    rows.classList.add("rows");
    
    rows.style.height = rowHeight;
    rows.style.width = rowWidth;
  
    container.appendChild(rows);
  
    
    while (x<slider.value){
      const squares = document.createElement("div");
      squares.classList.add("child");
  
      squares.style.height = squaresHeight;
      squares.style.width = squaresWidth;

      squares.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = color.value;
      });
  
      rows.appendChild(squares);
        x++;
    

        button.addEventListener("click", (e) => {
            squares.style.backgroundColor = "#f7e6f5";
        
        });
    }
    y++
    x = 0;
    
  }
  
}



var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  })

