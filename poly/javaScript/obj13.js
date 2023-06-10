class Book {
    //생성자 선언
    //2개 매개변수 입력 받는다.
    constructor(title, price) {
        //생성자의 역할은
        //매개변수로 받은 값을 동작 프로퍼티로 설정한다 
        this.title = title;
        this.price = price;
    }
    //메소드
    buy() { console.log(`${this.title}의 가격은 ${this.price}이다`) }

}
/*let boo = new Book("자료구조", 15000);
console.log(boo); //프로퍼티만 출력
boo.buy(); //메소드를 호출한다 */


class Textbook extends Book{
    constructor(title,price,major){
        super(title,price);
        this.major = major;
    }
    buyTextBook(){
        console.log(`${this.major} 전공서적, ${this.title}`)
    }
}

let bar = new Textbook('알고리즘', 20000, '전공필수')
console.log(bar);