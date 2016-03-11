jQuery(document).ready(function ($) {

    //localStorage is adding in the player's total score with the ID from the total column. Need to also store each input so they are returned on page load also.
    //Will need to add a clear all button for clearing scores before a new game.
    //If input is blank, make the value 0, is there a way to do this without putting the zero inside the input on the DOM?

    $('#players5-8').on('click', function(event) {
        event.preventDefault();
        $('#player1, #player2, #player3, #player4, #players5-8').hide();
        $('#player5, #player6, #player7, #player8, #players1-4').css("display", "inline-block");
    });

    $('#players1-4').on('click', function(event) {
        event.preventDefault();
        $('#player5, #player6, #player7, #player8, #players1-4').hide();
        $('#player1, #player2, #player3, #player4, #players5-8').show();

    });

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

            $('#p1stotal').remove();
            $('<h4 id="p1stotal"> ' + totalPoints + '</h4>').appendTo('#p1score');

            localStorage.setItem('p1score', totalPoints);
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

            $('#p2stotal').remove();
            $('<h4 id="p2stotal"> ' + totalPoints + '</h4>').appendTo('#p2score');

            localStorage.setItem('p2score', totalPoints);
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

            $('#p3stotal').remove();
            $('<h4 id="p3stotal"> ' + totalPoints + '</h4>').appendTo('#p3score');

            localStorage.setItem('p3score', totalPoints);

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

            $('#p4stotal').remove();
            $('<h4 id="p4stotal"> ' + totalPoints + '</h4>').appendTo('#p4score');

            localStorage.setItem('p4score', totalPoints);
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

            $('#p5stotal').remove();
            $('<h4 id="p5stotal"> ' + totalPoints + '</h4>').appendTo('#p5score');

            localStorage.setItem('p5score', totalPoints);
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

            $('#p6stotal').remove();
            $('<h4 id="p6stotal"> ' + totalPoints + '</h4>').appendTo('#p6score');

            localStorage.setItem('p6score', totalPoints);
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

            $('#p7stotal').remove();
            $('<h4 id="p7stotal"> ' + totalPoints + '</h4>').appendTo('#p7score');

            localStorage.setItem('p7score', totalPoints);
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

            $('#p8stotal').remove();
            $('<h4 id="p8stotal"> ' + totalPoints + '</h4>').appendTo('#p8score');

            localStorage.setItem('p8score', totalPoints);
        });

    });

});
