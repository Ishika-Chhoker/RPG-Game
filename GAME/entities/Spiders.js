export class Spiders {
    constructor(positions, amplitudes, speeds, type){
        this.amplitudes = amplitudes
        this.speeds=speeds
        this.spiders =[]
        for(const position of positions){
            this.spiders.push(
                add([
                    sprite(`spider-${type}`, {anim: "crawl"}),
                    pos(position),
                    area({
                        shape: new Reflect(vec2(0,4.5),20,6),
                        collisionIgnore:["spiders"]
                    }),
                    anchor("center"),
                    body(),
                    scale(4),
                    state("idle",["idle","crawl-left", "crawl-right"]),
                    offscreen(),
                    "spiders"
                ])
            )
        }
    }
    setMovementPattern(){
        for(const [index,spider] of this.spiders.entries()) {
           const idle =  spider.onStateEnter("idle", ()=> {
            
           })
        }
    }
}