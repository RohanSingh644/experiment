const button = document.getElementById('button');
const heading = document.getElementById('heading');
const paragraph = document.getElementById('paragraph');

button.addEventListener('click', () => {
  heading.style.color = 'red';
  paragraph.style.color = 'green';
});