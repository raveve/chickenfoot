jQuery(document).ready(function ($) {

    //This is the start, all inputs add together as long as there is a number in each one (at least a zero).
    //Planning to switch it over to a loop instead of using all the variables.

    for (i = 0; i < 18; i++) {

    };

    $('#p1total').on('click', function(event) {
        event.preventDefault();

        var input1 = document.getElementById('p1dbl1').value,
            input2 = document.getElementById('p1dbl2').value,
            input3 = document.getElementById('p1dbl3').value,
            input4 = document.getElementById('p1dbl4').value,
            input5 = document.getElementById('p1dbl5').value,
            input6 = document.getElementById('p1dbl6').value,
            input7 = document.getElementById('p1dbl7').value,
            input8 = document.getElementById('p1dbl8').value,
            input9 = document.getElementById('p1dbl9').value,
            input10 = document.getElementById('p1dbl10').value,
            input11 = document.getElementById('p1dbl11').value,
            input12 = document.getElementById('p1dbl12').value,
            input13 = document.getElementById('p1dbl13').value,
            input14 = document.getElementById('p1dbl14').value,
            input15 = document.getElementById('p1dbl15').value,
            input16 = document.getElementById('p1dbl16').value,
            input17 = document.getElementById('p1dbl17').value,
            input18 = document.getElementById('p1dbl18').value;

        var total = parseInt(input1)
                    + parseInt(input2)
                    + parseInt(input3)
                    + parseInt(input4)
                    + parseInt(input5)
                    + parseInt(input6)
                    + parseInt(input7)
                    + parseInt(input8)
                    + parseInt(input9)
                    + parseInt(input10)
                    + parseInt(input11)
                    + parseInt(input12)
                    + parseInt(input13)
                    + parseInt(input14)
                    + parseInt(input15)
                    + parseInt(input16)
                    + parseInt(input17)
                    + parseInt(input18);

        console.log(total);

    });

    $('#p2total').on('click', function(event) {
        event.preventDefault();

        var input1 = document.getElementById('p2dbl1').value,
            input2 = document.getElementById('p2dbl2').value,
            input3 = document.getElementById('p2dbl3').value,
            input4 = document.getElementById('p2dbl4').value,
            input5 = document.getElementById('p2dbl5').value,
            input6 = document.getElementById('p2dbl6').value,
            input7 = document.getElementById('p2dbl7').value,
            input8 = document.getElementById('p2dbl8').value,
            input9 = document.getElementById('p2dbl9').value,
            input10 = document.getElementById('p2dbl10').value,
            input11 = document.getElementById('p2dbl11').value,
            input12 = document.getElementById('p2dbl12').value,
            input13 = document.getElementById('p2dbl13').value,
            input14 = document.getElementById('p2dbl14').value,
            input15 = document.getElementById('p2dbl15').value,
            input16 = document.getElementById('p2dbl16').value,
            input17 = document.getElementById('p2dbl17').value,
            input18 = document.getElementById('p2dbl18').value;

        var total = parseInt(input1)
            + parseInt(input2)
            + parseInt(input3)
            + parseInt(input4)
            + parseInt(input5)
            + parseInt(input6)
            + parseInt(input7)
            + parseInt(input8)
            + parseInt(input9)
            + parseInt(input10)
            + parseInt(input11)
            + parseInt(input12)
            + parseInt(input13)
            + parseInt(input14)
            + parseInt(input15)
            + parseInt(input16)
            + parseInt(input17)
            + parseInt(input18);

        console.log(total);

    });

});