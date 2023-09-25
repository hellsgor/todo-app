import {createStudentsList} from "./utils/create-student-card.mjs";

document.addEventListener('DOMContentLoaded', () => {

  const allStudents = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
  ]

  const body = document.querySelector("body");

  const btn = document.createElement('button');
  btn.textContent = 'Показать список';
  btn.setAttribute('type', 'button');
  btn.classList.add('button');
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (body.querySelector('.students-list')) {
      body.removeChild(body.querySelector('.students-list'));
    }
    body.append(createStudentsList(allStudents));
  })

  body.append(btn);
})
