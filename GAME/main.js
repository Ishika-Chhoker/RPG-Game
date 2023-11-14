import kaboom from './libs/kaboom.mjs'
import { uiManager } from './utils/UIManager.js';
import { load } from './utils/loader.js';
import { Level } from "./utils/Level.js"
import { Player } from './entities/Player.js';
import { Camera } from './utils/Camera.js';
import { level1Config } from './content/level1/config.js';
import { level1Layout, level1Mappings } from './content/level1/level1Layout.js';
import { level2Config } from './content/level2/config.js';
import { level2Layout,level2Mappings } from './content/level2/level2Layout.js';
import { level3Config } from './content/level3/config.js';
import { level3Layout,level3Mappings } from './content/level3/level3Layout.js';

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
            level1Config.playerStartPosX,
            level1Config.playerStartPosY,
            level1Config.playerSpeed,
            level1Config.jumpForce,
            level1Config.nbLives,
            1,
            false
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.update()

       
        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)

        level1.drawWaves("water","wave")
        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)
       
    },
    2: () => {  setGravity(1400)
        const level2 = new Level()
        level2.drawBackground("Castle-background")
        level2.drawMapLayout(level2Layout, level2Mappings)
        const player = new Player(
            level2Config.playerStartPosX,
            level2Config.playerStartPosY,
            level2Config.playerSpeed,
            level2Config.jumpForce,
            level2Config.nbLives,
            2,
            false
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.update()

       
        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)

        level2.drawWaves("lava","wave")
        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)

    },
    3: ()=> { setGravity(1400)
        const level3 = new Level()
        level3.drawBackground("sky-background-0")
        level3.drawBackground("sky-background-1")
        level3.drawBackground("sky-background-2")
        level3.drawMapLayout(level3Layout, level3Mappings)
        const player = new Player(
            level3Config.playerStartPosX,
            level3Config.playerStartPosY,
            level3Config.playerSpeed,
            level3Config.jumpForce,
            level3Config.nbLives,
            3,
            true
        )
        player.enablePassthrough()
        player.enableCoinPickUp()
        player.update()

       
        const camera = new Camera()
        camera.attach(player.gameObj, 0, 200)

        level3.drawWaves("clouds","wave")
        uiManager.addDarkBg()

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)

    },
    gameover: ( ) => {

    },
    end: () => {

    }
}

for(const key in scenes){
    scene(key, scenes[key])
}

go("menu");
