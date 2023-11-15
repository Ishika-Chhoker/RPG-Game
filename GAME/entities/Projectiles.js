export class Projectiles {
    constructor(positions, amplitudes, type) {
      this.ranges = ranges
      this.Projectiles = []
      const animMap = {
        "fish": "swim",
        "flame": "burn"
      }
      for (const position of positions) {
        this.Projectiles.push(
          add([
            sprite(type, { anim: animMap[type] }),
            area({ shape: new Rect(vec2(0), 12, 12) }),
            anchor("center"),
            pos(position),
            scale(4),
            rotate(90),
            state("launch", ["launch", "rotate", "fall"]),
            offscreen(),
            "fish",
          ])
        )
      }
    }
  
    setMovementPattern() {
      for (const [index, projectile] of this.Projectiles.entries()) {
        const launch = projectile.onStateEnter("launch", async () => {
          await tween(
            projectile.pos.y,
            projectile.pos.y - this.amplitudes[index],
            2,
            (posY) => (projectile.pos.y = posY),
            easings.easeOutSine
          )
          projectile.enterState("rotate", "fall")
        })
  
        const rotate = projectile.onStateEnter("rotate", (nextState) => {
          projectile.rotateBy(180)
          projectile.enterState(nextState)
        })
  
        const fall = projectile.onStateEnter("fall", async () => {
          await tween(
            projectile.pos.y,
            projectile.pos.y + this.amplitudes[index],
            2,
            (posY) => (fish.pos.y = posY),
            easings.easeOutSine
          )
          projectile.enterState( "launch")
        })
  
        onSceneLeave(() => {
          launch.cancel()
          rotate.cancel()
          fall.cancel()
        })
      }
    }
  }
