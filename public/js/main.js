const bgToggle = $('#bg-toggle');
// const htmlTag = $('#html');

bgToggle.on('click', function () {
    $('#html').toggleClass('dark');
})