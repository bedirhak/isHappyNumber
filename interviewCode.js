    /* verilen sayinin rakamlarinin karelerini alip toplayan bir loop olusturalim.
    cikti 1'e esit olasiya kadar bu loopu devam ettirelim.

    ornek:
    19
    1^2 + 9^2 = 1+81 = 82
    8^2 + 2^2 = 64+4 = 68
    6^2 + 8^2 = 36 + 64 = 100
    1^2 + 0^2 + 0^2 = 1 */

    const foundDigits = (number) => {
        var digits = [];
        while (number !== 0) {
            var digit = number % 10;
            digits.push(digit);
            number = Math.floor(number / 10);
        }
        return digits;
    };
    var howManyTimes = 0;
    
    function isHappy(number) {
        howManyTimes++;
        var result = false;
        var sum = number;
        var digits = foundDigits(sum);
        sum = 0;
        digits.forEach((digit) => {
        sum += digit * digit;
        }); 
        if (sum === 1){
            result = true
            return result;
        } else if (howManyTimes >= 10){
            result = false
            return result;
        }
        else{
            result = isHappy(sum);
        }
        return result;
    }

    console.log(isHappy(19));
    
    