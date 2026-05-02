function solve(x, y) {
    const ratio = y / x;
    return ratio === 2n ? 'NO' : 'YES';
}


const lines = input.trim().split('\n');
const t = parseInt(lines[0]);
for (let i = 1; i <= t; i++) {
    const [x, y] = lines[i].split(' ').map(BigInt);
    console.log(solve(x, y));
}


// ---- test cases ----
// const input = `5
// 1 2
// 1 3
// 1234567890 12345678900
// 2 8
// 7 84`;
// --------------------