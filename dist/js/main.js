$(document).ready(function () {
    const savedMode = localStorage.getItem('mode');

    const initialMode = savedMode || 'light';

    $('#html').addClass(initialMode);

    $('#bg-toggle').on('click', function () {
        const currentMode = $('#html').hasClass('dark') ? 'light' : 'dark';
        $('#html').removeClass('dark light').addClass(currentMode);

        localStorage.setItem('mode', currentMode);
    });
});
