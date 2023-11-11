class UIManager {

    displayBlinkingUIMessage(content, position){
        const message = add([
            text(content, {
                size:24,
                font: "Round"
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"])
        ])
        message.onStateEnter("flash-up", async () =>{
            await tween(
                message.opacity,
                0, //target value
                0.5, //how much time should it take to the message to go from fully visible to 0 visibility
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-down")
        })
        message.onStateEnter("flash-down", async () =>{
            await tween(
                message.opacity,
                1, //target value
                0.5, //how much time should it take to the message to go from fully visible to 0 visibility
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-up")
        })
    }
    displayMainMenu(){
        add([
            sprite("forest-background"), 
            scale(4)

        ])
        add([
            sprite("logo"),
            area(), //creates a hit-box over game object
            anchor("center"),
            pos(center().x, center().y -245),
            scale(5)

        ])
        this.displayBlinkingUIMessage(
            "Press [ ENTER ] to Start Game",
            vec2(center().x,center().y+ 100)
        )

        onKeyPress("enter", () => {
            play("confirm-ui", { speed : 1.5})
            go("controls")
        })
    }
    displayControlsMenu(){
        add([
            sprite("forest-background"), 
            scale(4)

        ])
        add([
            text("How to play??", {font : "Round", size: 50}),
            area(),
            anchor("center"),
            pos(center().x, center().y -200),
        ])

        const controlPrompts =  add([
            pos(center().x + 30, center().y)   
        ])
        controlPrompts.add([
            sprite("up"),
            pos(0,-80)
        ])
        controlPrompts.add([sprite("down")])
        controlPrompts.add([sprite("left"), pos(-80,0)])
        controlPrompts.add([sprite("right"), pos(80,0)])
        controlPrompts.add([sprite("space"), pos(-200,0)])

        controlPrompts.add([
            text("jump", {font : "Round", size: 32}),  
            pos(-190,100)
        ])
        controlPrompts.add([
            text("Move", {font : "Round", size: 32}),  
            pos(10,100)
        ])
        this.displayBlinkingUIMessage(
            "Press [ ENTER ] to Start Game",
            vec2(center().x,center().y+ 250)
        )

        onKeyPress("enter", () => {
            play("confirm-ui", { speed : 1.5})
            go("1")
        })


    }

} 

export const uiManager = new UIManager();