import {createStudentsList} from "./utils/create-student-card.mjs";

document.addEventListener('DOMContentLoaded', () => {
  const allStudents = [
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
  ]

  document.querySelector("body").append(createStudentsList(allStudents));
})
