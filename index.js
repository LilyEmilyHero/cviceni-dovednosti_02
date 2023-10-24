console.log('funguju!');

const updateSkill = (level, skill) => {
  const valueElement = document.querySelector(`#${skill} .skill__value`);
  const progressElement = document.querySelector(`#${skill} .skill__progress`);
  valueElement.textContent = `${level} / 100`;
  progressElement.style.width = `${level}%`;
};

const html = Number(prompt('Jaká je vaše úroveň HTML? (0 až 100)'));
const css = Number(prompt('Jaká je vaše úroveň CSS? (0 až 100)'));
const js = Number(prompt('Jaká je vaše úroveň JavaScriptu? (0 až 100)'));

updateSkill(html, 'skill1');
updateSkill(css, 'skill2');
updateSkill(js, 'skill3');
