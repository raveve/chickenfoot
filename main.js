jQuery(document).ready(function ($) {

    //MUST - Add in localStorage
    //If input is blank, make the value 0, is there a way to do this without putting the zero inside the input on the DOM?
    //Remove previous total score and replace it with new total score

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

    $('#p5total').on('click', function(event) {
        event.preventDefault();

        $('#player5 input').each(function() {
            if ($(this).val() == "") {
                $(this).val(0);
            } else {}
        });

        $('#player5').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });

            $('<h4> ' + totalPoints + '</h4>').appendTo('#p5score');
            console.log('Player FIVE has ' + totalPoints + ' points');
        });

    });

    $('#p6total').on('click', function(event) {
        event.preventDefault();

        $('#player6 input').each(function() {
            if ($(this).val() == "") {
                $(this).val(0);
            } else {}
        });

        $('#player6').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });

            $('<h4> ' + totalPoints + '</h4>').appendTo('#p6score');
            console.log('Player SIX has ' + totalPoints + ' points');
        });

    });

    $('#p7total').on('click', function(event) {
        event.preventDefault();

        $('#player7 input').each(function() {
            if ($(this).val() == "") {
                $(this).val(0);
            } else {}
        });

        $('#player7').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });

            $('<h4> ' + totalPoints + '</h4>').appendTo('#p7score');
            console.log('Player SEVEN has ' + totalPoints + ' points');
        });

    });

    $('#p8total').on('click', function(event) {
        event.preventDefault();

        $('#player8 input').each(function() {
            if ($(this).val() == "") {
                $(this).val(0);
            } else {}
        });

        $('#player8').each(function() {
            var totalPoints = 0;
            $(this).find('input').each(function(i,n) {
                totalPoints += parseInt($(n).val(),10);
            });

            $('<h4> ' + totalPoints + '</h4>').appendTo('#p8score');
            console.log('Player EIGHT has ' + totalPoints + ' points');
        });

    });

});
