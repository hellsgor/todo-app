export function createElement(tagName, className, content = '') {
  const element = document.createElement(tagName);
  element.classList.add(className);
  element.textContent = content;
  return element;
}
