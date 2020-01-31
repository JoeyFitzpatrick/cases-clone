var boxes = document.querySelectorAll(".column-item")

document.getElementsByClassName("right-column")[0].addEventListener("mouseover", mouseOver);
document.getElementsByClassName("right-column")[0].addEventListener("mouseout", mouseOut);


  let idVar = setInterval(() => { 

  }, 500);


function mouseOver() {
    idVar = setInterval(() => { 
        boxes.forEach(function (box) {
            var r = Math.round(Math.random() * 256),
                g = Math.round(Math.random() * 256),
                b = Math.round(Math.random() * 256);
            box.style.background = `rgb(${r},${g},${b})`;
      }); 
      }, 300);
};

function mouseOut() {
    boxes.forEach(function(box) {
        box.style.background = "";
    });

    clearInterval(idVar);
    
};
