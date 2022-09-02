//subject : 컬렉션 캡슐화 하기

export class Person {
    //내부에서 쓰고있는 컬렉션이 외부에 노출되지않게. 노출하더라도 가능한 api들 한정해서 내부에서 조절.
    #name;
    #courses;
    constructor(name) {
      this.#name = name;
      this.#courses = [];
    }
  
    get name() {
      return this.#name;
    }
  
    get courses() {
      // return this.#courses.slice(0,-1);
      return [...this.#courses];  //새로운 (수정용)배열을 생성-> 본 클래스에는 영향 x.
    }
    addCourse(course) {
      this.#courses.push(course); //배열 수정할수있는 api 를 제공
    }
  
    removeCourse(course, runIfAbsent) {
      const index = this.#courses.indexOf(course);
      if (index === -1) {
        runIfAbsent();
        return;
      }
      this.#courses.splice(index, 1);
    }
  
    set courses(courses) {
      this.#courses = courses;
    }
  }
  
  export class Course {
    #name;
    #isAdvanced;
    constructor(name, isAdvanced) {
      this.#name = name;
      this.#isAdvanced = isAdvanced;
    }
  
    get name() {
      return this.#name;
    }
  
    get isAdvanced() {
      return this.#isAdvanced;
    }
  }
  
  const ellie = new Person('엘리');
  const course = new Course('리팩토링', true);
  ellie.addCourse(course);
  console.log(ellie.courses.length);
  ellie.removeCourse(course, () => { console.log('코스가 비었다.') })
  console.log(ellie.courses.length);
  ellie.removeCourse(course, () => { console.log('코스가 비었다.') })
  // export class Person {
  //   #name;
  //   #courses;
  //   constructor(name) {
  //     this.#name = name;
  //     this.#courses = [];
  //   }
  
  //   get name() {
  //     return this.#name;
  //   }
  
  //   get courses() {
  //     return this.#courses;
  //   }
  
  //   set courses(courses) {
  //     this.#courses = courses;
  //   }
  // }
  
  // export class Course {
  //   #name;
  //   #isAdvanced;
  //   constructor(name, isAdvanced) {
  //     this.#name = name;
  //     this.#isAdvanced = isAdvanced;
  //   }
  
  //   get name() {
  //     return this.#name;
  //   }
  
  //   get isAdvanced() {
  //     return this.#isAdvanced;
  //   }
  // }
  
  // const ellie = new Person('엘리');
  // ellie.courses.push(new Course('리팩토링', true));
  // console.log(ellie.courses.length);
  