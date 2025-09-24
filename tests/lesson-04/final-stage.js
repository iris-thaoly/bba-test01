// Bài này có nhờ dev gợi ý solution rồi tự code chứ ko biết cách giải (TT__TT)
let countNumber = 0;
let pairsNumber = [];

// Duyệt i từ 1 đến 100
for (let i = 1; i <= 100; i++) {

    // Duyệt j từ i+1 đến 100 để tránh i = j và tránh trùng cặp
    for (let j = i + 1; j <= 100; j++) {

        // Tính tổng (i+j) chia hết cho 17
        if ((i + j) % 17 === 0) {
            countNumber++; // Nếu đúng thì tăng biến đếm thêm 1
            pairsNumber.push(`(${i}, ${j}) `); // Dùng backticks khi chèn biến giúp code gọn hơn
        }
    }
}

console.log("Tổng số cặp:", countNumber);
console.log(pairsNumber.toString(", "));