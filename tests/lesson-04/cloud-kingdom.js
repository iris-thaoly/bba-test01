let powerUp = "mushroom";

/*
// Cách 1
if (powerUp === "mushroom") {
    console.log("Mario becomes Super!");
} else if(powerUp === "flower"){
    console.log("Mario can shoot fireballs!");
} else if(powerUp === "star"){
    console.log("Mario is invincible!");
} else if(powerUp === "none"){
    console.log("Mario is normal");
} else {
    console.log("Unknown power-up");
}
*/

/*
// Cách 2
let effect = "";

if (powerUp === "mushroom") {
    effect = "Mario becomes Super!";
} else if(powerUp === "flower"){
    effect = "Mario can shoot fireballs!";
} else if(powerUp === "star"){
    effect = "Mario is invincible!";
} else if(powerUp === "none"){
    effect = "Mario is normal";
} else {
    effect = "Unknown power-up";
}

console.log(effect);
*/

// Cách 3
let effect = powerUp === "mushroom" ? "Mario becomes Super!" :
    powerUp === "flower" ? "Mario can shoot fireballs!" :
        powerUp === "star" ? "Mario is invincible!" :
            powerUp === "none" ? "Mario is normal" : "Unknown power-up";

console.log(effect);