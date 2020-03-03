const Numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred"
};

module.exports = function toReadable(number) {
    let stringifyNumber = [];
    let stringNumber = number + "";
    let numberLength = stringNumber.length;
    if (numberLength === 1 || number <= 20) {
        stringifyNumber.push(Numbers[number]);
    }
    if (numberLength === 2 && number > 20) {
        stringifyNumber.push(Numbers[stringNumber[0] + "0"]);
        if (number % 10 !== 0) {
            stringifyNumber.push(Numbers[stringNumber[1]]);
        }
    }

    if (numberLength === 3) {
        stringifyNumber.push(Numbers[stringNumber[0]]);
        stringifyNumber.push(Numbers[100]);
        if (number % 100 !== 0) {
            number = number % 100;
            stringNumber = number + "";
            numberLength = stringNumber.length;
            if (numberLength === 1 || number <= 20) {
                stringifyNumber.push(Numbers[number]);
            }
            if (numberLength === 2 && number > 20) {
                stringifyNumber.push(Numbers[stringNumber[0] + "0"]);
                if (number % 10 !== 0) {
                    stringifyNumber.push(Numbers[stringNumber[1]]);
                }
            }
        }
    }

    return stringifyNumber.join(" ");
};
