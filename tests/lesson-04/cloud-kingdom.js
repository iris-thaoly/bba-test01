let playerName = "Mario";
let currentLives = 3;

const coninLevel1 = 25;
const coinLevel2 = 30;
const coinLevel3 = 45;

// Trung bình cộng số coin của 3 levels làm tròn, coin trong game chỉ có thể là số nguyên dương
let avgTotal = (coninLevel1 + coinLevel2 + coinLevel3) / 3;
console.log(Math.round(avgTotal));

// In số dư
let remainNumber = (coninLevel1 + coinLevel2 + coinLevel3) % 3;
console.log(remainNumber);
