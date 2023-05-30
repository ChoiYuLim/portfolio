document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.footer-links > a');

    links.forEach(function (link) {
        link.addEventListener('mouseover', function () {
            this.style.color = '#008485'; // 원하는 글자색으로 변경
        });

        link.addEventListener('mouseout', function () {
            this.style.color = 'black'; // 원래 글자색으로 변경
        });
    });

    const btnScrollToTop = document.getElementById('btnScrollToTop');
    btnScrollToTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});