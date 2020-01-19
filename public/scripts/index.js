$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('#logo').fadeIn(1000);
    $('#btnMenuCollapse').click(function () {
        $('.nav li a').css('background', 'rgba(231, 76, 60, 1.0)');
    });
    
});

function topMenuClicked(menuItemName) {
    switch (menuItemName) {
        case 'PROJECTS':
            $('#content').load('../projects.html');
            break;
        case 'APPS':
            $('#content').load('../apps.html');
            break;
        case 'PHOTOGRAPHY':
            $('#content').load('../photography.html');
            break;
        case 'LITERARY WORKS':
            $('#content').load('../literary-works.html');
            break;
        case 'IDEAS':
            $('#content').load('../ideas.html');
            break;
        default:
            $('#content').html('NO CONTENT FOUND!');
            break;
    }
}