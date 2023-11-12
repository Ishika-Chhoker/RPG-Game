export class Player{
    constructor(
        posX,
        posY, 
        speed, 
        jumpForce, 
        nbLives, 
        currentLevelScene, 
        isInTerminalScene
    ){
        this.isInTerminalScene = isInTerminalScene
        this.currentLevelScene = currentLevelScene
        this.initialX = posX
        this.initalY = posY
        this.makePlayer()
        this.setPlayerControls()
        this.speed = speed;
        this.jumpForce = jumpForce
        this.lives = nbLives
        this.previousHeight = this.gameObj.pos.y
    }

    makePlayer(){
        this.gameObj = add([
            sprite("player", { anim: "idle" }),
            area({ shape: new Rect(vec2(0, 3), 8, 8) }),
            anchor("center"),
            pos(this.initialX, this.initalY),
            scale(4),
            body(),
            "player",
          ])        
    }

    setPlayerControls(){
        onKeyDown("left", () => {
            if(this.gameObj.curAnim()!=="run") this.gameObj.play("run")
            this.gameObj.flipX = true
        })
    }
}






















































































enableMobVunerability() {
    function hitAndRespawn(context) {
      play("hit", { speed: 1.5 })
      context.respawnPlayer()
    }
    this.gameObj.onCollide("fish", () => hitAndRespawn(this))
    this.gameObj.onCollide("spiders", () => hitAndRespawn(this))
    this.gameObj.onCollide("flames", () => hitAndRespawn(this))
    this.gameObj.onCollide("axes", () => hitAndRespawn(this))
    this.gameObj.onCollide("saws", () => hitAndRespawn(this))
    this.gameObj.onCollide("birds", () => hitAndRespawn(this))
  }