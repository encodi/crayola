/******
 * Crayola ES6 Game Dev Tools 
 * Omar Gonzalez Rocha - Copyright MIT license 2017
 * Conventions: 
 * _underscore for pseudo private methods 
 */

//Lib Concatenation
//@prepros-prepend ./lib/utils.js
//@prepros-prepend ./lib/config.js
//@prepros-prepend ./lib/scene.js
//@prepros-prepend ./lib/shape-sprite.js
//@prepros-prepend ./lib/bitmap-sprite.js
//@prepros-prepend ./lib/game.js

let idle1 = {
    "set": "idle",
    "shape": [
        "transparent", "white", "white", "transparent",
        "red", "white", "red", "white",
        "white", "white", "white", "white",
        "red", "red", "red", "white",
        "transparent", "white", "white", "transparent",
    ]
}

let idle2 = {
    "set": "idle",
    "shape": [
        "transparent", "white", "white", "transparent",
        "white", "red", "white", "red",
        "white", "white", "white", "white",
        "white", "red", "red", "red",
        "transparent", "white", "white", "transparent",
    ]

}

let moving1 = {
    "set": "moving",
    "shape": [
        "transparent", "white", "white", "transparent",
        "white", "red", "white", "red",
        "white", "white", "white", "white",
        "white", "red", "red", "red",
        "white", "white", "white", "white",
    ]
}

let moving2 = {
    "set": "moving",
    "shape": [
        "white", "white", "white", "white",
        "red", "white", "red", "white",
        "white", "white", "white", "white",
        "red", "red", "red", "white",
        "transparent", "white", "white", "transparent",
    ]
}

let player = new ShapeSprite(
    "player", [idle1, idle2, moving1, moving2], 4, 20, "A"
)

let eIdle1 = {
    "set": "idle",
    "shape": [
        "orange", "transparent", "transparent", "orange",
        "orange", "transparent", "transparent", "orange",
        "transparent", "orange", "orange", "transparent",
        "transparent", "transparent", "transparent", "transparent",
        "transparent", "transparent", "transparent", "transparent",
    ]
}

let eIdle2 = {
    "set": "idle",
    "shape": [
        "transparent", "transparent", "transparent", "transparent",
        "transparent", "transparent", "transparent", "transparent",
        "transparent", "orange", "orange", "transparent",
        "orange", "transparent", "transparent", "orange",
        "orange", "transparent", "transparent", "orange",
    ]
}

let enemy = new ShapeSprite(
    "enemy", [eIdle1, eIdle2], 4, 10, "A"
)

let catImg = {
    "set": "idle",
    "src": "assets/cat-bat.png"
}

let catImg2 = {
    "set": "idle",
    "src": "assets/cat-bat-alt.png"
}

let cat = new BitmapSprite(
    "cat", [catImg, catImg2],
    100,
    100
)

let scene = new Scene([player, enemy, cat]);

player.x = scene.frame.width / 2;
player.y = scene.frame.height / 2;

enemy.x = scene.frame.width / 3;
enemy.y = scene.frame.height / 3;

cat.x = scene.frame.width * .7
cat.y = scene.frame.height / 3
let game = new Game([scene]);
game.mouseClick();
game.keyDown();
game.run();