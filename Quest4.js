// Задание 4

function ElectricalApp(name, power) {
  this.name = name,
  this.power = power,
  this.isTurnedOn = false
}
// Включить прибор
ElectricalApp.prototype.setTurnedOn = function() {
  this.isTurnedOn = true
};
// Выключить прибор
ElectricalApp.prototype.setTurnedOff = function() {
  this.isTurnedOn = false
};

function TableLamp(name, power, type, colorTemp) {
  this.name = name,
  this.power = power,
  this.type = type,
  this.colorTemp = colorTemp
}

TableLamp.prototype = new ElectricalApp()
// Изменить цветовую температуру
TableLamp.prototype.changeColorTemp = function(newColorTemp) {
  this.colorTemp = newColorTemp
}

function Laptop(name, power, memoryType, os) {
  this.name = name,
  this.power = power,
  this.memoryType = memoryType,
  this.os = os
}

Laptop.prototype = new ElectricalApp()
// Перезагрузка
Laptop.prototype.restart = function() {
  this.setTurnedOff(),
  this.setTurnedOn(),
  console.log(`${this.name} успешно перезагружен!`)
}


const lampOne = new TableLamp('Arte Lamp Conference A1106LT-1BK', 5, 'office', 4000);
lampOne.setTurnedOn();
lampOne.changeColorTemp(5000);
console.log(lampOne);


const laptopOne = new Laptop('Lenova ideaRad S145', 30, 'DDR4', 'Windows 10 Home');
laptopOne.setTurnedOn();
laptopOne.restart();
console.log(laptopOne);
