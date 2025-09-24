
// Ex-1
function createCharacters() {

    const characters = [
        { name: "Mario", level: 5, health: 100 },
        { name: "Luigi", level: 4, health: 95 },
        { name: "Princess Peach", level: 3, health: 80 },
        { name: "Bowser", level: 10, health: 500 },
        { name: "Yoshi", level: 6, health: 110 },
        { name: "Toad", level: 2, health: 70 }
    ];

    console.log(characters);

    const charactersPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        };
    });

    console.log(charactersPowerUp);

    let possibleWinners = charactersPowerUp.filter(character => character.health > 1000);
    console.log(possibleWinners);
}

createCharacters();

// Ex-2
let players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Princess Peach", score: 850 },
    { name: "Bowser", score: 800 },
    { name: "Yoshi", score: 800 },
    { name: "Toad", score: 500 }
];

function printLeaderBoard(players) {
    // Sắp xếp theo thứ tự giảm dần
    players.sort((a, b) => b.score - b.score);

    // Cách 1: Duyệt từng phần tử trong mảng và in ra kèm điều kiện index từ 0 đến 2 thì kèm unicode
    players.forEach((player, index) => {
        if (index === 0) {
            console.log(`🥇 ${player.name} ${player.score}`);
        } else if (index === 1) {
            console.log(`🥈 ${player.name} ${player.score}`);
        } else if (index === 2) {
            console.log(`🥉 ${player.name} ${player.score}`);
        } else {
            console.log("   " + `${player.name} ${player.score}`);
        }
    });

    // Cách 2: Duyệt bằng for (cách này có nhờ khai sáng của dev)
    let medal;
    for (i = 0; i < players.length; i++) {
        if (i === 0) {
            medal = "🥇";
            console.log(`${medal} ${i + 1}. ${players[i].name} - ${players[i].score}`);
        } else if (i === 1) {
            medal = "🥈";
            console.log(`${medal} ${i + 1}. ${players[i].name} - ${players[i].score}`);
        } else if (i === 2) {
            medal = "🥉";
            console.log(`${medal} ${i + 1}. ${players[i].name} - ${players[i].score}`);
        } else {
            console.log(`   ${i + 1}. ${players[i].name} - ${players[i].score}`);
        }
    }
};

printLeaderBoard(players);