//상속 의 문제점 :다중 상속이안됨. 수정과 확장이 어려움. 이럴떄 위임componsition. -수직적인 관계를 이용해서 재사용하는 개념.

class Printer {
    print() {
        console.log('기본적인 출력');
    }
}

class RedPrinter extends Printer { //하나이상 상속이 불가.
    print() {
        console.log('빨강적인 출력') //오버라이딩.
    }
}

const printers = [new Printer(), new RedPrinter()];
printers.forEach(printer => printer.print());

class Network {
    send();
}


//컴포지션(위임) : 전달된 위임자에 따라 다른 행동을 하는 것이 가능. -레고를 조립하듯 필요한 부품을 주입받아 주입받은 부품을 활용하는 개념.

class Printer {
    #printerHeader;
    constructor(printerHeader) {
        this.#printerHeader = printerHeader;
    }
    print() {
        this.#printerHeader ? this.#printerHeader.print() : console.log('기본적인 출력');
    }
}

class RedPrinterHeader {
    print() {
        console.log('빨강적인 출력')
    }
}
class BlackPrinterHeader {
    print() {
        console.log('검정적인 출력')
    }
}

const printerss = [new Printer(), new Printer(new RedPrinterHeader()), new Printer(new BlackPrinterHeader())];
printerss.forEach(printer => printer.print());

class Network {
    send();
}