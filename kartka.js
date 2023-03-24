import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytanie obrazków

loadSprite("tlo","christmastrees.png")
loadSprite("pola","polapola.png")
loadSprite("pola2","choinka11.png")

loadSound("muzyka","muzyka111.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("tlo"),
    pos(0,0)
])

// wczytanie obrazków


const pola = add([
    sprite("pola"),
    pos(300,140)
])

onMouseRelease(()=>play("muzyka"))

let jasna = false

loop(1, ()=>{

    if(!jasna) 
    
    {
        pola.use(sprite("pola2"))
        jasna = true
    }

    else
    
    {
        pola.use(sprite("pola"))
        jasna = false 
    }
    

    
})
