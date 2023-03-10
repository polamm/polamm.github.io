import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

// wczytanie obrazków

loadSprite("tlo","christmastrees.png")
loadSprite("pola","polapola.png")



add([
    sprite("tlo"),
    pos(0,0)
])

// wczytanie obrazków


// add([
//     sprite("pola"),
//     pos(300,140)
// ])