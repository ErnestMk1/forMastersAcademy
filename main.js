const pandemicStartMap = "XX0X10010X000X010X0";
const people = pandemicStartMap.split('X').filter(e => e);
const end = people.map(a => {
  if (a.includes('1')) {
    return a.replaceAll('0', '1');
  }
  return a;
});
let counter = 0;
for (let i = 0; i < pandemicStartMap.length; i++) {
  if (pandemicStartMap[i] === 'X') {
    counter++;
  } else {
    break;
  }
}

const result = end.join('X');

for (let i = 0; i < pandemicStartMap.length; i++) {
  const block = document.createElement('div');
  block.classList.add(`test`, `start-${i}`);
  const startMap = document.querySelector('.start-map');
  startMap.appendChild(block);

  if (pandemicStartMap[i] === '1') {
    document.querySelector(`.start-${i}`).setAttribute('style', 'background-color:red');
  } else if (pandemicStartMap[i] === '0') {
    document.querySelector(`.start-${i}`).setAttribute('style', 'background-color:green')
  }
}


for (let j = -counter; j < pandemicStartMap.length - counter; j++) {
  const block = document.createElement('div');
  block.classList.add(`test`, `end-${j}`);
  const startMap = document.querySelector('.end-map');
  startMap.appendChild(block);

  if (result[j] === '1') {
    document.querySelector(`.end-${j}`).setAttribute('style', 'background-color:red');
  } else if (result[j] === '0') {
    document.querySelector(`.end-${j}`).setAttribute('style', 'background-color:green')
  }
}

const totalPeople = people.reduce((acc, el) => {
  return acc + el.length;
}, 0);
const infectedPeople = end.reduce((acc, el) => {
  if (el[0] === '1') {
    return acc + el.length;
  }
  return acc;
}, 0);
const percentageOfInfected = infectedPeople * 100 / totalPeople;

const total = document.querySelector('.total');
const infected = document.querySelector('.infected');
const percentage = document.querySelector('.percentage');

total.textContent = `Total: ${totalPeople}`;
infected.textContent = `Infected: ${infectedPeople}`;
percentage.textContent = `Percentage: ${percentageOfInfected}%`;
