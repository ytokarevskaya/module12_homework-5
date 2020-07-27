// Задание 5

class TableLamp extends ElectricalApp {
  constructor(name, power, type, colorTemp) {
    super(name, power);
    this.type = type;
    this.colorTemp = colorTemp
  }
  
  changeColorTemp(newColorTemp) {
    this.colorTemp = newColorTemp
  }
}

class Laptop extends ElectricalApp {
  constructor(name, power, memoryType, os) {
    super(name, power);
    this.memoryType = memoryType;
    this.os = os
  }
  
  restart() {
    super.setTurnedOff();
    super.setTurnedOn();
    console.log(`${this.name} успешно перезагружен!`)
  }
}

const lampOne = new TableLamp('Arte Lamp Conference A1106LT-1BK', 5, 'office', 4000);
lampOne.setTurnedOn();
lampOne.changeColorTemp(5000);
console.log(lampOne);

const laptopOne = new Laptop('Lenova ideaRad S145', 30, 'DDR4', 'Windows 10 Home');
laptopOne.setTurnedOn();
laptopOne.restart();
console.log(laptopOne);
