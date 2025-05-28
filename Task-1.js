// Tabs logic
const tabs = document.querySelectorAll('.buttons button');
const panels = document.querySelectorAll('section[role="tabpanel"]');

function showPanel(index) {
  tabs.forEach((tab, i) => {
    const selected = i === index;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', selected);
    panels[i].hidden = !selected;
  });
  panels[index].focus();
}

tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => showPanel(idx));
});

// Show first panel by default
showPanel(0);

// CSS demo color toggle
const cssBox = document.querySelector('.css-demo-box');
const colors = ['#238636', '#bc2c2c', '#d29922', '#2c74bc', '#6a2c9c'];
let colorIndex = 0;

cssBox.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colors.length;
  cssBox.style.backgroundColor = colors[colorIndex];
  cssBox.style.transform = 'scale(1.05)';
  setTimeout(() => {
    cssBox.style.transform = 'scale(1)';
  }, 150);
});

cssBox.addEventListener('keydown', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    cssBox.click();
  }
});

// JS demo alert with message display
const jsBtn = document.querySelector('.js-demo-btn');
const jsMsg = document.querySelector('.js-demo-msg');

jsBtn.addEventListener('click', () => {
  alert('Hello from JavaScript!');
  jsMsg.textContent = 'You clicked the button! JS alert fired.';
  setTimeout(() => {
    jsMsg.textContent = '';
  }, 4000);
});
