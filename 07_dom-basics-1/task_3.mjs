import {createElement} from "./utils/create-element.mjs";

document.addEventListener('DOMContentLoaded', () => {
  const allStudents = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
  ]

  function createStudentCard(student) {
    const card = createElement('li', 'student-card');
    card.append(createElement('h2', 'student-card__name', student.name));
    card.append(createElement('span', 'student-card__age', student.age, 'год', 'года', 'лет'));
    return card;
  }

  function createStudentsList(listArr) {
    const list = document.createElement('ul');
    list.classList.add('students-list');

    listArr.forEach((studentObj) => {
      list.append(createStudentCard(studentObj));
    })

    return list;
  }

  document.querySelector("body").append(createStudentsList(allStudents));
})
