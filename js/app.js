const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

// buena suerte

let imagecont = document.querySelector(".img-container");
let index = 0;


function changeimg() {
  imagecont.style.background = `url(./img/${pictures[index]}.jpeg) center / cover fixed no-repeat`; 
}


const buttons = document.querySelectorAll(".btn");

function goright() {
  if (index == pictures.length - 1) {
    index = 0;
  }
  else {
    index++;
  }
} 

function goleft() {
  if (index == 0) {
    index = pictures.length-1;
  }
  else {
    index--;
  }
}


buttons.forEach(function(button){
  button.addEventListener("click",function() {
    if (button.classList.contains("btn-left")) {
      goleft();
      changeimg();
    }
    else if(button.classList.contains("btn-right")) {
      goright();
      changeimg();
    }
  })
})