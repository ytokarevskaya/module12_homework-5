// Задание 2

const city = {
  city: 'Saint Petersburg'
}

const student = Object.create(city);
student.name = 'Olga';
student.surname = 'Markova';

function checkProp(obj, str) {
  return str in obj
}

console.log(checkProp(student, 'name'))
