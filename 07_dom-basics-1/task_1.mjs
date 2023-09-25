import {createElement} from './utils/create-element.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const name = 'Игорь';
  const age = 17;

  function createStudentCard(studentName, studentAge) {
    const card = createElement('div', 'student-card');
    card.append(createElement('h2', 'student-card__name', studentName));
    card.append(createElement('span', 'student-card__age', studentAge, 'год', 'года', 'лет'));
    return card;
  }

  document.querySelector('body').append(createStudentCard(name, age));
})
