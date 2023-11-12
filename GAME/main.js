
import kaboom from './libs/kaboom.mjs'
import { level1Layout, level1Mappings } from './content/level1/level1Layout.js';
import { uiManager } from './utils/UIManager.js';
import { load } from './utils/loader.js';
import { Level } from "./utils/Level.js"
import { Player } from './entities/Player.js';
import { Camera } from './utils/Camera.js';


kaboom({  
    width: 1280,
    height: 720
})

load.fonts()
load.sounds()
load.assets() 

//scenes in Kaboom js --

const scenes = { 
    //keys that point towards functionss
    menu: () => {
        uiManager.displayMainMenu()
    },
    controls: () => {
        uiManager.displayControlsMenu()
    },
    1: () => {
        setGravity(1400)
        const level1 = new Level()
        level1.drawBackground("forest-background")
        level1.drawMapLayout(level1Layout, level1Mappings)
        const player = new Player(
            1500 , 
            100,
            400,
            650,
            3,
            1,
            false
        )
        
        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)

        level1.drawWaves("water","wave")
    },
    2: () => {

    },
    3: ()=> {

    },
    gameover: ( ) => {

    },
    end: () => {

    }
}

for(const key in scenes){
    scene(key, scenes[key])
}

    player.enablePassthrough()
    player.enableCoinPickUp()
    player.enableMobVunerability()

const spiders = new Spiders(
    level1Config.spiderPositions.map((spiderPos) => spiderPos()),
    level1Config.spiderAmplitudes,
    level1Config.spiderSpeeds,
    level1Config.spiderType
  )
  spiders.setMovementPattern()
  spiders.enablePassthrough()

  const fish = new Projectiles(
    level1Config.fishPositions,
    level1Config.fishRanges,
    "fish"
  )
  fish.setMovementPattern()
  
  loadSprite("fish", "./assets/Fish_1.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      swim: { from: 0, to: 1, loop: true },
    },
  })

  const flames = new Projectiles(
    level2Config.flamePositions.map((flamePos) => flamePos()),
    level2Config.flameAmplitudes,
    level2Config.flameType
  )
  flames.setMovementPattern()

  loadSprite("flame", "./assets/Flame_1.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      burn: { from: 0, to: 1, loop: true },
    },
  })

  go("menu");

