localStorage.setItem('mode', 'dark')

const bgToggle = $('#bg-toggle');
// let htmlTag = $('#html');

bgToggle.on('click', function () {
    $('#html').toggleClass('dark light');
    localStorage.setItem('mode', $('#html').attr("class"));
    console.log($('#html').attr("class"));
    
})

