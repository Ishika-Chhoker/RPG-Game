
























async crawl(spider, moveBy, duration) {
    if (spider.currAnim !== "crawl") spider.play("crawl")

    await tween(
      spider.pos.x,
      spider.pos.x + moveBy,
      duration,
      (posX) => (spider.pos.x = posX),
      easings.easeOutSine
    )
  }

setMovementPattern() {
    for (const [index, spider] of this.spiders.entries()) {
      const idle = spider.onStateEnter("idle", async (previousState) => {
        if (spider.currAnim !== "idle") spider.play("idle")

        await new Promise((resolve) => {
          setTimeout(() => resolve(), 1000)
        })

        if (previousState === "crawl-left") {
          spider.enterState("crawl-right")
        } else {
          spider.jump()
          if (!spider.isOffScreen()) {
            play("spider-attack", { volume: 0.6 })
          }

          spider.enterState("crawl-left")
        }
      })

      const crawlLeft = spider.onStateEnter("crawl-left", async () => {
        spider.flipX = false

        await this.crawl(
          spider,
          -this.amplitudes[index],
          this.velocities[index]
        )
        spider.enterState("idle", "crawl-left")
      })

      const crawlRight = spider.onStateEnter("crawl-right", async () => {
        spider.flipX = true

        await this.crawl(spider, this.amplitudes[index], this.velocities[index])
        spider.enterState("idle", "crawl-right")
      })

      onSceneLeave(() => {
        idle.cancel()
        crawlLeft.cancel()
        crawlRight.cancel()
      })
    }
  }

enablePassthrough() {
    for (const spider of this.spiders) {
      spider.onBeforePhysicsResolve((collision) => {
        if (collision.target.is("passthrough") && spider.isJumping()) {
          collision.preventResolution()
        }
      })
    }
  }
}
