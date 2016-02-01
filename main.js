jQuery(document).ready(function ($) {

    //This is the start, all inputs add together as long as there is a number in each one (at least a zero).


    $('#p1total').on('click', function(event) {
        event.preventDefault();

        $('#player1').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });
            alert(totalPoints);
        });

    });

    $('#p2total').on('click', function(event) {
        event.preventDefault();

        $('#player2').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });
            alert(totalPoints);
        });

    });

});