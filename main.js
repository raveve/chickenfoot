jQuery(document).ready(function ($) {

    //This is the start, all inputs add together as long as there is a number in each one (at least a zero).
    //If input is blank, make the value 0. Something similar to this(maybe on click before doing the .each?: $('#player2 #p2dbl1').val('0');


    $('#p1total').on('click', function(event) {
        event.preventDefault();

        $('#player1').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });
            alert('Player 1 has ' + totalPoints + ' points');
        });

    });

    $('#p2total').on('click', function(event) {
        event.preventDefault();

        $('#player2').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });
            alert('Player 2 has ' + totalPoints + ' points');
        });

    });

});