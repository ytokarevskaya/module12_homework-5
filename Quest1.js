// Задание 1

const city = {
  city: 'Saint Petersburg'
}

const student = Object.create(city);
student.name = 'Olga';
student.surname = 'Markova';

function showProp(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ': ' + obj[key])
    }
  }
}

showProp(student)
