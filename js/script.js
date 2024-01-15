document.addEventListener('DOMContentLoaded', function () {
    var containers = document.querySelectorAll('.test');

    containers.forEach(function (container) {
        var titleElement = container.querySelector('.video-list__title');

        container.addEventListener('click', function (event) {
            // Check if the clicked element or any of its parents have the 'explanationButton' class
            var target = event.target;
            while (target != container) {
                if (target.classList.contains('explanationButton')) {
                    // If the clicked element is an explanationButton, do nothing and let the default behavior proceed
                    return;
                }
                target = target.parentNode;
            }

            // If the clicked element is not an explanationButton, proceed with the original functionality
            var titleText = titleElement.textContent.trim();
            var link = 'vanillaJSProjects/' + encodeURIComponent(titleText) + '/index-START.html';

            window.open(link, '_blank');
            console.log('Link:', link);
        });
    });
});
