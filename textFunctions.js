$(document).ready(function() {
    responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
    let $btn1 = $('#btn1');

    $btn1.on('click', function() { 
        responsiveVoice.speak('CINEMA');
    })
})