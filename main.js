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
    end.unshift('X');
    counter++;
  } else {
    break;
  }
}

const pandemicEndMap = end.join('X').slice(counter);


function drawing(string, location) {
  for (let i = 0; i < string.length; i++) {
    const block = document.createElement('div');
    block.classList.add(`test`, `${location}-${i}`);

    const drawMap = document.querySelector(`.${location}`);

    drawMap.appendChild(block);

    if (string[i] === '1') {
      document.querySelector(`.${location}-${i}`).setAttribute('style', 'background-color:red');
    } else if (string[i] === '0') {
      document.querySelector(`.${location}-${i}`).setAttribute('style', 'background-color:green')
    }
  }
}


drawing(pandemicStartMap, 'start');
drawing(pandemicEndMap, 'end');

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
