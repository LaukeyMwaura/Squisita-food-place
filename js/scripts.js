function show() {
    var s = document.getElementById("hide1");
    if (s.style.display === "none") {
        s.style.display = "block";
    } else {
        s.style.display = "none";
    }
}
}
$(document).ready(function() {
    $("button").click(function() {
        $(".hide1").show(fast);
    });
});
// $(".showing1").click(function() {
// $(".showing1").fadeOut();
// $(".design").fadeIn();
// });
// });
// $('.method').on('click', function() {
//     $('.method').removeClass('blue-border');
//     $(this).addClass('blue-border');
// });
// var $cardInput = $('.input-fields input');

// $('.next-btn').on('click', function(e) {

// $cardInput.removeClass('warning');

// $cardInput.each(function() {
//     var $this = $(this);
//     if (!$this.val()) {
//         $this.addClass('warning');
//     }
// })
// });

// })