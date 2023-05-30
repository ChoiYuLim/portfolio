// FAVORITE_PG 배열을 테이블로 만드는 함수
function createPGTable() {
    // 로컬 스토리지에서 favoriteData 가져오기
    const favoriteData = JSON.parse(localStorage.getItem("favorite_pg"));
    const tableBody = document.querySelector(".tbl-content");

    // Remove existing table rows
    while (tableBody.firstChild) {
        tableBody.firstChild.remove();
    }

    if (favoriteData !== null && favoriteData !== undefined) {
        favoriteData.forEach((item) => {
            const row = document.createElement("tr");

            // 데이터 셀
            Object.values(item).forEach((value) => {
                if (value) {
                    const cell = document.createElement("td");
                    cell.textContent = value;
                    row.appendChild(cell);
                }
            });

            tableBody.appendChild(row);
        });
    }
}

function createACTable() {
    const favoriteData = JSON.parse(localStorage.getItem("favorite_ac"));

    const tableBody = document.querySelector(".tbl-content");

    while (tableBody.firstChild) {
        tableBody.firstChild.remove();
    }

    if (favoriteData !== null && favoriteData !== undefined) {

        favoriteData.forEach((item) => {
            const row = document.createElement("tr");

            // 데이터 셀
            Object.values(item).forEach((value) => {
                if (value) {
                    const cell = document.createElement("td");
                    cell.textContent = value;
                    row.appendChild(cell);
                }
            });

            tableBody.appendChild(row);
        });
    }
}

function createHPTable() {
    const favoriteData = JSON.parse(localStorage.getItem("favorite_hp"));
    const tableBody = document.querySelector(".tbl-content");

    while (tableBody.firstChild) {
        tableBody.firstChild.remove();
    }
    
    if (favoriteData !== null && favoriteData !== undefined) {
        favoriteData.forEach((item) => {
            const row = document.createElement("tr");

            // 데이터 셀
            Object.values(item).forEach((value) => {
                if (value) {
                    const cell = document.createElement("td");
                    cell.textContent = value;
                    row.appendChild(cell);
                }
            });

            tableBody.appendChild(row);
        });
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#ac').addEventListener("click", createACTable);
    document.querySelector('#hp').addEventListener("click", createHPTable);
    document.querySelector('#pg').addEventListener("click", createPGTable);
});
