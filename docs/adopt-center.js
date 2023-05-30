document.addEventListener('DOMContentLoaded', function () {
    const btnFavorite = document.querySelectorAll('img[src="img/logo_black.png"]');

    btnFavorite.forEach(function (img) {
        img.addEventListener('click', function () {
            if (img.src.includes('img/logo_black.png')) {
                img.src = './img/logo2.png';
                alert('즐겨찾기에 추가했습니다.');
            } else {
                img.src = 'img/logo_black.png';
                alert('즐겨찾기를 해제했습니다.');
            }
        });
    });
});

