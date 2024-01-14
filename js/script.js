document.addEventListener('DOMContentLoaded', function () {
    var containers = document.querySelectorAll('.test');

    containers.forEach(function (container) {
        var titleElement = container.querySelector('.video-list__title');

        container.addEventListener('click', function () {
            var titleText = titleElement.textContent.trim();
            var link = 'vanillaJSProjects/' + encodeURIComponent(titleText) + '/index-START.html';

            // Open the link in a new tab/window
            window.open(link, '_blank');

            // Log the link for testing purposes
            console.log('Link:', link);
        });
    });
});