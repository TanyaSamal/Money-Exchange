module.exports = function makeExchange(currency) {
 let coins = {};
 let halfDollars = "H";
 let quarters = "Q";
 let dimes = "D";
 let nickels = "N";
 let pennies = "P";

 if (currency <= 0){
     return coins;
 }

 if (currency > 10000){
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
 }

    let half = Math.floor(currency / 50);
    if (half > 0) coins[halfDollars] = half;

    let rest = Math.floor((currency % 50) / 25);
    if (rest > 0) coins[quarters] = rest;

    rest = Math.floor((currency % 50) % 25 / 10);
    if (rest > 0) coins[dimes] = rest;

    rest = Math.floor((currency % 50) % 25 % 10 / 5);
    if (rest > 0) coins[nickels] = rest;

    rest = Math.floor((currency % 50) % 25 % 10 % 5);
    if (rest > 0) coins[pennies] = rest;

    return coins;
}
