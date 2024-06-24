function toggleBtnActive(elem, idContent) {
  const currentActiveElem = document.querySelector('.btn.active');
  currentActiveElem.classList.remove('active');
  elem.classList.toggle('active');

  const div = document.getElementById(idContent);
  const currentActiveDiv = document.querySelector('.content.active');
  currentActiveDiv.classList.remove('active');
  div.classList.add('active');
}
