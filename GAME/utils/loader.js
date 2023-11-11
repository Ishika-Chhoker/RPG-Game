export const load = {
    fonts : () => {
        loadFont("Round", "./assets/Round9x13.ttf");
    },
    assets: () => {
        loadSprite("up", "./assets/Arrow_Up_Key_Dark.png")
        loadSprite("down", "./assets/Arrow_Down_Key_Dark.png")
        loadSprite("left", "./assets/Arrow_Left_Key_Dark.png")
        loadSprite("right", "./assets/Arrow_Right_Key_Dark.png")
        loadSprite("space", "./assets/Space_Key_Dark.png")
        
        loadSprite("forest-background", "./assets/Forest_Background_0.png"),
        loadSprite("logo", "./assets/Logo.png"),
        loadSprite("coin", "./assets/Coin.png"),
        loadSprite("bridge", "./assets/Bridge.png"),
        loadSprite("grass-tileset", "./assets/Grass_Tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8
            }
        }),
        loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
              tm: 1,
              tr: 2,
              ml: 3,
              mm: 4,
              mr: 5,
              bl: 6,
              bm: 7,
              br: 8
            },
          })
          loadSprite("water", "./assets/Water.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
              wave: {
                from: 0,
                to: 7, //animations
                speed: 16,
                loop: true,
              },
            },
          })
          loadSprite("player", "./assets/Player.png", {
            sliceX: 4,
            sliceY: 6,
            anims: {
              idle: {
                from: 0,
                to: 3,
                loop: true,
              },
              run: {
                from: 4,
                to: 7,
                loop: true,
              },
              "jump-up": 8,
              "jump-down": 9,
            },
          })


    },
    sounds: () => {
        loadSound("confirm-ui", "./sounds/confirm-ui.wav")
    }
}

