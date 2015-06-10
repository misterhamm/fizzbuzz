$(document).ready(function(){

    var fizzBuzz = [];
    var fillArray = 1;
    var fizzIndex = 0;


    while(fillArray <= 100) {
        if (fillArray % 3 == 0 && fillArray % 5 ==0) {
            fizzBuzz.push('FizzBuzz');
        }
        else if (fillArray % 5 == 0) {
            fizzBuzz.push('Buzz');
        }
        else if (fillArray % 3 == 0) {
            fizzBuzz.push('Fizz');
        }
        else (fizzBuzz.push(fillArray));

        $('.printFB').append(fizzBuzz[fizzIndex]);
        fillArray++;
        fizzIndex++;
    };


});
