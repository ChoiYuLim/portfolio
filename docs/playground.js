function changeImage(event) {
    const clickedImage = event.target;
    const row = clickedImage.parentNode.parentNode;
    const rowData = Array.from(row.children).map((cell) => cell.textContent);

    if (clickedImage.src.includes('img/logo_black.png')) {
        clickedImage.src = './img/logo2.png';
        alert('즐겨찾기에 추가했습니다.');

        if (FAVORITE_PG === null || typeof FAVORITE_PG === 'undefined') {
            FAVORITE_PG = []; // FAVORITE_PG null 또는 undefined인 경우, 빈 배열로 초기화
        }

        FAVORITE_PG.push(rowData); // 즐겨찾기 배열에 정보 추가\
    } else {
        clickedImage.src = 'img/logo_black.png';
        alert('즐겨찾기를 해제했습니다.');
        const index = FAVORITE_PG.findIndex((data) => JSON.stringify(data) === JSON.stringify(rowData));
        if (index !== -1) {
            FAVORITE_PG.splice(index, 1);  // 즐겨찾기 배열에서 정보 제거
        }
    }
    localStorage.setItem('favorite_pg', JSON.stringify(window.FAVORITE_PG));
}

function createTable() {
    const tableHeader = document.querySelector(".tbl-header");
    const tableBody = document.querySelector(".tbl-content");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "playground.json");
    xhr.send();

    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const headerRow = document.createElement("tr");

            // 빈 헤더 셀
            const emptyHeaderCell = document.createElement("th");
            headerRow.appendChild(emptyHeaderCell);

            // JSON 데이터의 각 키를 기반으로 헤더 셀 생성
            Object.keys(data[0]).forEach((key) => {
                const headerCell = document.createElement("th");
                headerCell.textContent = key;
                headerRow.appendChild(headerCell);
            });

            tableHeader.appendChild(headerRow);

            data.forEach((item) => {
                const row = document.createElement("tr");
                const cell = document.createElement("td");
                const image = document.createElement("img");

                const parkname = item.공원명;

                if (FAVORITE_PG !== null && typeof FAVORITE_PG !== 'undefined' && FAVORITE_PG.some((favoriteItem) => favoriteItem.includes(parkname))) {
                    // 만약 즐겨찾기가 되어있다면
                    image.src = "./img/logo2.png";
                } else {
                    // 만약 즐겨찾기가 안되어있다면
                    image.src = "./img/logo_black.png";
                }
                image.width = 35;
                image.height = 35;

                image.addEventListener("click", changeImage);  // 이미지 클릭 이벤트 등록

                cell.appendChild(image);
                row.appendChild(cell);

                Object.values(item).forEach((value) => {
                    const cell = document.createElement("td");
                    cell.textContent = value;
                    row.appendChild(cell);
                });
                tableBody.appendChild(row);
            });
        }
    };
    localStorage.setItem('favorite_pg', JSON.stringify(window.FAVORITE_PG));
}