

let n1 = Number(prompt('Enter number 1'));
let n2 = Number(prompt('Enter number 2'));


if ((n1 >= -10 && n1 <= 10) && (n2 >= 90 && n2 <= 110)) {
    while (n1 <= n2) {
        if (n1 >= 50 && n1 <= 60) {
            n1++;
            continue;
        }

        if (n1 >= 90) break;
        console.log(n1);
        n1++;
    }
}