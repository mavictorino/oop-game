

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

const player = new Player();

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft();
    } else if (e.code === 'ArrowRight') {
        player.moveRight();
    }
});


