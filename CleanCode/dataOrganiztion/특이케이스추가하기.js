//특이 케이스를 잘활용하면 좋다. 유용하다.
//null 이면 api를 가질수없기때문에 특이한 케이스를 대표할수있는 클래스를 만든다.

class Hotel {
    constructor() {
      this.rooms = [];
    }
  
    addRoom(roomNumber) {
      this.rooms[roomNumber] = new Room(roomNumber);
    }
    emptyRoom(roomNumber) {
      // this.rooms[roomNumber] = null; BAD.
      this.rooms[roomNumber] = new EmptyRoom(roomNumber);
    }
    cleanRooms() {
      this.rooms.forEach(room => room.clean());
    }
  }
  
  
  class Room {
    constructor(roomNumber) {
      this.roomNumber = roomNumber;
    }
    clean() {
      console.log(`${this.roomNumber}번째 방을 청소한다.`);
    }
  }
  
  const hotel = new Hotel();
  hotel.addRoom(0);
  hotel.addRoom(1);
  hotel.cleanRooms(); //n번째방을 청소한다. n번쨰방을 청소한다.
  hotel.emptyRoom(1);
  hotel.cleanRooms(); //cannot clean cause of 'null' . null이기때문에. -> n번째방이 비어있어요.
  
  class EmptyRoom extends Room { //특이 케이스 를 null이 아닌 null,unknown 객체를 만들면 다형성에도 좋고 비어있다면 특이행동을 추가할수있어 확장성에도 좋다.
    clean() {
      console.log(`${this.roomNumber}방이 비어있어요`);
    }
  }
  