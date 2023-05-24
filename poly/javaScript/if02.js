// function birthCheck() {
//     const currentYear = 2023;
//     let birthYear;
//     let age;

//     birthYear = parseInt(prompt("태어난 연도"));

//     age = currentYear - birthYear + 1;
//     if (age < 20) {
//         alert("성인이 아닙니다 ")
//     }

//     alert(`${currentYear} 년 현재, ${age}세 입니다`)

// }

// birthCheck();

function birthCheck() {
    // 내 컴퓨터에 세팅된 날짜
    const date = new Date();
    const currentYear = date.getFullYear();
    // const currentYear = 2023;
    let birthStr;
    birthStr = prompt("태어난 년도");
    if (!isNaN(birthStr)) {
        if (birthStr.length == 4) {
            console.log(birthStr);
            if (birthStr) {
                // 값 
                console.log("태어난 해 " + birthStr);
                console.log("나이 " + (currentYear - parseInt(birthStr) + 1));
            } else {
                // null 
                console.log("입력해주세요");
            }
        } else {
            alert('정확한 년도를 입력해주세요');
        }
    } else {
        alert('숫자가 아닙니다.');
    }

}