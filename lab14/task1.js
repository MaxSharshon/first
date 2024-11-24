function isPrime(num) {
    if (num <= 1) return false; // Числа менші або рівні 1 не є простими
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Якщо число ділиться на будь-яке інше, то воно не є простим
    }
    return true;
}

let n = 0;
while (n <= 100) {
    if (isPrime(n)) {
        console.log(n);
    }
    n++;
}
