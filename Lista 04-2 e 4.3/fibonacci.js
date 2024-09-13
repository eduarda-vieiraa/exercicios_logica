let a = 1, b = 1;
let count = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci são:");

while (count <= 10) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
    count++;
}
