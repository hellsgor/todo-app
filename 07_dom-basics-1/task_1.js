const name = 'Игорь';
const age = 17;

function createElement(tagName, className, content = '') {
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.textContent = content;
  return element;
}

function createStudentCard(studentName, studentAge) {
  const card = createElement('div', 'student-card');
  card.append(createElement('h2', 'student-card__name', studentName));
  card.append(createElement('span', 'student-card__age', studentAge));
  return card;
}

document.querySelector('body').append(createStudentCard(name, age));
