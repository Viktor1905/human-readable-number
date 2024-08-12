module.exports = function toReadable (number) {
    number = number.toString()
    let result = ""
    let digit = number[number.length-2] != undefined ? number[number.length-2] + number[number.length-1]: number[number.length-1];
    let dozen
    let hundred = number[number.length-3] != undefined ? number[number.length-3] : "";
    let thousand = number[number.length-4] != undefined ? number[number.length-4] : "";
    let billion = number[number.length-7] != undefined ? number[number.length-7] : "";

    switch (number.length) {
        case (1): {
            result = digits(digit)
            break;
        }
        case (2): {
            result = dozens(digit)
            break;
        }
        case (3): {
            result = digits(number[number.length - 3]) + " hundred";
            if(digit !== "00"){
                result = digits(number[number.length - 3]) + " hundred " + dozens(digit)
            }
            break;
        }
        case (4): {
            result = digits(number[number.length - 4]) + " thousand " + digits(number[number.length - 3]) + " hundred " + dozens(digit)
            break;
        }
        case (5): {
            result = dozens(number[number.length - 5] + number[number.length - 4]) + " thousand " + digits(number[number.length - 3]) + " hundred " + dozens(digit)
            break;
        }
        case (6): {
            result = digits(number[number.length - 6]) + " hundred thousand " + dozens(number[number.length - 5] + number[number.length - 4]) + " thousand " + digits(number[number.length - 3]) + " hundred " + dozens(digit)
            break;
        }
        case (7): {
            result = digits(number[number.length - 7]) + " billion " + digits(number[number.length - 6]) + " hundred thousand " + dozens(number[number.length - 5] + number[number.length - 4]) + " thousand " + digits(number[number.length - 3]) + " hundred " + dozens(digit)
            break;
            break;
        }
    }
    return result
}
function digits(number){
    switch (+number[number.length-1]){
        case (0) :
            return "zero"
            break;
        case (1):
            return  "one"
            break;
        case (2) :
            return "two"
            break;
        case (3):
            return "three"
            break;
        case (4) :
            return "four"
            break;
        case (5):
            return "five"
            break;
        case (6) :
            return "six"
            break;
        case (7):
            return "seven"
            break;
        case (8) :
            return "eight"
            break;
        case (9):
            return "nine"
            break;
    }

}
function dozens(number){
    switch (number[number.length - 2] + number[number.length - 1]) {
        case ("00") :
            if(number.length > 2) {
                return "zero"
            }
            return
            break;
        case ("01"):
            return "one"
            break;
        case ("02") :
            return "two"
            break;
        case ("03"):
            return "three"
            break;
        case ("04") :
            return "four"
            break;
        case ("05"):
            return "five"
            break;
        case ("06") :
            return "six"
            break;
        case ("07"):
            return "seven"
            break;
        case ("08") :
            return "eight"
            break;
        case ("09") :
            return "nine"
            break;
        case ("10"):
            return "ten"
            break;
        case ("11"):
            return "eleven"
            break;
        case ("12"):
            return "twelve"
            break;
        case ("13"):
            return "thirteen"
            break;
        case ("14"):
            return "fourteen"
            break;
        case ("15"):
            return "fifteen"
            break;
        case ("16"):
            return "sixteen"
            break;
        case ("17"):
            return "seventeen"
            break;
        case ("18"):
            return "eighteen"
            break;
        case ("19"):
            return "nineteen"
            break;
    }
    if(number[number.length - 2] >= 2){
        let result;
        switch (number[number.length - 2]) {
            case ("2") :
                result = "twenty";
                if(number[number.length-1] != "0") {
                    result += ` ${digits(number)}`;
                }
                break;
            case ("3"):
                result = "thirty";
                if(number[number.length-1] != "0") {
                    result += ` ${digits(number)}`;
                }
                break;
            case ("4") :
                result = "forty";
                if(number[number.length-1] != "0") {
                    result += ` ${digits(number)}`;
                }
                break;
            case ("5"):
                result = "fifty";
                if(number[number.length-1] != "0") {
                    result += ` ${digits(number)}`;
                }
                break;
            case ("6") :
                result = "sixty";
                if(number[number.length-1] != "0") {
                    result += ` ${digits(number)}`;
                }
                break;
            case ("7"):
                result = "seventy";
                if(number[number.length-1] != "0") {
                    result += ` ${digits(number)}`;
                }
                break;
            case ("8") :
                result = "eighty";
                if(number[number.length-1] != "0") {
                    result += ` ${digits(number)}`;
                }
                break;
            case ("9"):
                result = "ninety";
                if(number[number.length-1] != "0") {
                    result += ` ${digits(number)}`;
                }
                break;
        }
        return result;
    }
}
