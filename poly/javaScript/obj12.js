class Book{
    constructor(title, pages, done){ 
        // 동적으로 프로퍼티를 만드는 역할
        // 초기화 되면 객체 생성됨
        this.title = title;
        this.pages = pages;
        this.done = done;
    }

    finish() {
        let str = "";
        this.done === false ? str = "읽는 중" : str = "완독";
        return str;
    }
}

let git = new Book("깃 교과서", 500, false);
console.log(git);
console.log(git.finish());