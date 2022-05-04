const canvas = document.getElementById('shapes');
const ctx = canvas.getContext('2d');


// Limpiar el lienzo
ctx.clearRect(0, 0, 1000, 600) // x,y,width,height

const land = {
  x: 0,
  y: 0,
  width: 1000,
  height: 600,
}

const hawk = {
    x: 0,
    y: 10,
    width: 200,
    height: 100,
  }

  const salta = {
    x: 80,
    y: 540,
    width: 100,
    height: 60,
  }

// Pintar imagen en Canvas
const landImg = new Image();
landImg.src = './img/img-landscape 1100x999.png';

const hawkImg = new Image();
hawkImg.src = './img/img-hawk 1000x667.png';

const saltaImg = new Image();
saltaImg.src = './img/img-salta 1100x602.png';

const rockImg = new Image();
rockImg.src = './img/img-rock 774x1032.png';

const rock = [
    {
        x: 200,
        y: 540,
        width: 100,
        height: 100
    },
    {
        x: 400,
        y: 415,
        width: 100,
        height: 100
    },
    {
        x: 600,
        y: 540,
        width: 100,
        height: 100
    },
    {
        x: 800,
        y: 415,
        width: 100,
        height: 100
    }
]



// Función que pinta todos los elementos
window.onload = function () {
    //ctx.drawImage(sunImg, sun.x, sun.y, sun.width, sun.height);
    //trees.forEach(elem => {
    //  ctx.drawImage(treeImg, elem.x, elem.y, elem.width, elem.height);
    ctx.drawImage(landImg, land.x, land.y, land.width, land.height); // imagen, x, y, width, height
    ctx.drawImage(hawkImg, hawk.x, hawk.y, hawk.width, hawk.height);
    ctx.drawImage(saltaImg, salta.x, salta.y, salta.width, salta.height);
    rock.forEach(rock => {
        ctx.drawImage(rockImg, rock.x, rock.y, rock.width, rock.height);
    })
}
   

// Función que mueve el coche
function moveHawk() {
    ctx.clearRect(0, 0, 1000, 600);
    hawk.x = hawk.x + 5;
    if (hawk.x > 1000) {
        hawk.x = -50;
    }

    ctx.drawImage(hawkImg, hawk.x, hawk.y, hawk.width, hawk.height);
    ctx.drawImage(landImg, land.x, land.y, land.width, land.height); // imagen, x, y, width, height
    ctx.drawImage(hawkImg, hawk.x, hawk.y, hawk.width, hawk.height);
    ctx.drawImage(saltaImg, salta.x, salta.y, salta.width, salta.height);
    rock.forEach(rock => {
        ctx.drawImage(rockImg, rock.x, rock.y, rock.width, rock.height);
    })
}

function moveSalta() {
    ctx.clearRect(0, 0, 1000, 600);
    salta.y = salta.y - 1e0;
    
    if (salta.y < 500) {
       salta.y = 540;
   }

    ctx.drawImage(hawkImg, hawk.x, hawk.y, hawk.width, hawk.height);
    ctx.drawImage(landImg, land.x, land.y, land.width, land.height); // imagen, x, y, width, height
    ctx.drawImage(hawkImg, hawk.x, hawk.y, hawk.width, hawk.height);
    ctx.drawImage(saltaImg, salta.x, salta.y, salta.width, salta.height);
    rock.forEach(rock => {
        ctx.drawImage(rockImg, rock.x, rock.y, rock.width, rock.height);
    })  
}


// Función que arranca los movimientos
setTimeout(function () {
    let interval = setInterval(moveHawk, 100);
  }, 1000)
  
  setTimeout(function () {
    let interval = setInterval(moveSalta, 100);
  }, 1000)