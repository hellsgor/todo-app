import {createElement} from "./create-element.mjs";

export function createStudentsList(listArr) {
  const list = document.createElement('ul');
  list.classList.add('students-list');

  listArr.forEach((studentObj) => {
    list.append(createStudentCard(studentObj));
  })

  return list;
}

function createStudentCard(student) {
  const card = createElement('li', 'student-card');
  card.append(createElement('h2', 'student-card__name', student.name));
  card.append(createElement('span', 'student-card__age', student.age, 'год', 'года', 'лет'));
  return card;
}
