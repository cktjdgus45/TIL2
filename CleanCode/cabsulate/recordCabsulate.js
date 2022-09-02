// const organization = { name: 'Acme Gooseberries', country: 'GB' };

// organization.name = 'Dream Coding'; //불변성을 해침.
// console.log(organization.name);
// console.log(organization.country);

//subject : 레코드 {key:value} 캡슐화 하기.

class Organization {
    //read 읽기 만 가능하게 만든 청사진.
    #name;
    #country;
    constructor(data) {
        this.#data = data;
        this.#name = data.name;
        this.#country = data.organization;
    }
    get name() { //의도가 명확해진 클린코드.
        return this.#name;
    }
    get country() {
        return this.#country;
    }
    // set name(value){
    //     this.#name= value;
    // }
    // set country(value){
    //     this.#country= value;
    // }\
    get rawData() {
        return { ...this.#data }; //얕은복사 , 겉만 <->깊은복사 , 내부돌며 일일히 다 ,loadsh.cloneDeep
    }
}

const organization = new Organization({ name: 'Acme Goosberries', country: 'GN' });