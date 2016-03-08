jQuery(document).ready(function ($) {

    //This is the start, all inputs add together as long as there is a number in each one (at least a zero).
    //MUST - Add in localStorage
    //If input is blank, make the value 0. Something similar to this(maybe on click before doing the .each?: $('#player2 #p2dbl1').val('0');

    $('#p1total').on('click', function(event) {
        event.preventDefault();

        $('#player1 input').each(function() {
            if ($(this).val() == "") {
                $(this).val(0);
            } else {}
        });

        $('#player1').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });

            $('<h4> ' + totalPoints + '</h4>').appendTo('#p1score');
            console.log('Player ONE has ' + totalPoints + ' points');
        });

    });

    $('#p2total').on('click', function(event) {
        event.preventDefault();

        $('#player2 input').each(function() {
            if ($(this).val() == "") {
                $(this).val(0);
            } else {}
        });

        $('#player2').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });

            $('<h4> ' + totalPoints + '</h4>').appendTo('#p2score');
            console.log('Player TWO has ' + totalPoints + ' points');
        });

    });

    $('#p3total').on('click', function(event) {
        event.preventDefault();

        $('#player3 input').each(function() {
            if ($(this).val() == "") {
                $(this).val(0);
            } else {}
        });

        $('#player3').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });

            $('<h4> ' + totalPoints + '</h4>').appendTo('#p3score');
            console.log('Player THREE has ' + totalPoints + ' points');
        });

    });

    $('#p4total').on('click', function(event) {
        event.preventDefault();

        $('#player4 input').each(function() {
            if ($(this).val() == "") {
                $(this).val(0);
            } else {}
        });

        $('#player4').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });

            $('<h4> ' + totalPoints + '</h4>').appendTo('#p4score');
            console.log('Player FOUR has ' + totalPoints + ' points');
        });

    });

});