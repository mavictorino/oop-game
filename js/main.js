

class Player {
    constructor(){
        this.width = 20;
        this.height = 10;
        this.positionX = 0;
        this.positionY = 0;
        this.domElement = null;

        this.createDomElement();

        
    }
    createDomElement() {
        this.domElement = document.createElement("div");

        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const board = document.getElementById("board");
        board.appendChild(this.domElement);
    }

    moveRight() {
        this.positionX = this.positionX + 1;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveLeft() {
        this.positionX = this.positionX - 1;
        this.domElement.style.left = this.positionX + "vw";
    }
}


class Obstacle {
    constructor() {
        this.width = 20;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width - 0 + 1)) + 0;  //this formula gives a random number between 0 and (100 - this.width)
        this.positionY = 100;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
        this.domElement = document.createElement("div");

        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        const board = document.getElementById("board");
        board.appendChild(this.domElement);
    }
    moveDown() {
        this.positionY = this.positionY - 1;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}

const player = new Player();

let obstacleArr = []; // will store instances of the class Obstacle


// create obstacles
setInterval(() => {
    const newObstacle = new Obstacle();
    obstacleArr.push(newObstacle);
}, 4000);



//move all obstacles
setInterval(() => {
   obstacleArr.forEach((obstacleInstace) => {
    
    //move current obstacle
    obstacleInstace.moveDown();
    
    //detect colision
    if (
        player.positionX < obstacleInstace.positionX + obstacleInstace.width &&
        player.positionX + player.width > obstacleInstace.positionX &&
        player.positionY < obstacleInstace.positionY + obstacleInstace.height &&
        player.positionY + player.height > obstacleInstace.positionY
    ) {
        console.log("game over");
        location.href = "gameover.html";
        
    }
   }) 
}, 50);


document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft();
    } else if (e.code === 'ArrowRight') {
        player.moveRight();
    }
});


