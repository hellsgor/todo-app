import {createElement} from './utils/create-element.mjs';

const studentObj = {
  name: 'Пётр',
  age: 23,
}

function createStudentCard(student) {
  const card = createElement('div', 'student-card');
  card.append(createElement('h2', 'student-card__name', student.name));
  card.append(createElement('span', 'student-card__age', student.age, 'год', 'года', 'лет'));
  return card;
}

document.querySelector('body').append(createStudentCard(studentObj));
