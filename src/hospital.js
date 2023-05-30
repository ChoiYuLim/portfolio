function changeImage(event) {
    const clickedImage = event.target;
    const row = clickedImage.parentNode.parentNode;
    const rowData = Array.from(row.children).map((cell) => cell.textContent);

    if (clickedImage.src.includes('img/logo_black.png')) {
        clickedImage.src = './img/logo2.png';
        alert('즐겨찾기에 추가했습니다.');
        FAVORITE_DATA.push(rowData);  // 즐겨찾기 배열에 정보 추가
    } else {
        clickedImage.src = 'img/logo_black.png';
        alert('즐겨찾기를 해제했습니다.');
        const index = FAVORITE_DATA.findIndex((data) => JSON.stringify(data) === JSON.stringify(rowData));
        if (index !== -1) {
            FAVORITE_DATA.splice(index, 1);  // 즐겨찾기 배열에서 정보 제거
        }
    }
}