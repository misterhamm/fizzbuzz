$(document).ready(function(){

/*    var fizzBuzz = [];
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

        $('.printFB').append('<li>'+fizzBuzz[fizzIndex]+'</li>');
        fillArray++;
        fizzIndex++;
    };


*/

function fizzbuzz(max) {
    for ( var i = 1; i <= max; i++ ) {
        if (i % 5 == 0 && i % 3 == 0 ) {
            $('.printFB').append('<li>' + "FizzBuzz" + '</li>');
        } else if (i % 3 == 0) {
            $('.printFB').append('<li>' + "Fizz" + '</li>');
        } else if (i % 5 == 0) {
            $('.printFB').append('<li>' + "Buzz" + '</li>');
        } else {
            $('.printFB').append('<li>' + i + '</li>');
        }
    }
}

//Below is not working and is breaking FizzBuzz. Likely incorrect usage of parseInt
$('.input-number').click(function() {
    var parseTemp = $('input').val();
    if (isNaN(parseInt(parseTemp))) {
        alert("Hey, that's not a number, dummy!");
    }
    else if ($('input').val() % 1 != 0) {
        alert("Please use only whole numbers");
    }
    else {
        fizzbuzz(parseInt(parseTemp));
    }
    return $('input').val("");
});

$(document).on('click', '.reset', function() {
    $('.printFB').children().remove();
});

});
