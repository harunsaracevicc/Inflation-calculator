function inflationCalculator() {
  let inflationRate = document.querySelector('#inflationRate');
  let money = document.querySelector('#money');
  let years = document.querySelector('#years');

  inflationRate = parseFloat(inflationRate.value);
  money = parseFloat(money.value);
  years = parseFloat(years.value);

  let worth = money + money * (inflationRate / 100);

  for (let i = 1; i < years; i++) {
    worth += worth * (inflationRate / 100);
  }

  worth = worth.toFixed(2);

  let message = document.createElement('div');
  message.className = 'message';
  message.innerText = `Today's ${money}$ is worth the same as ${worth} for ${years} years.`;

  document.querySelector('.container').appendChild(message);
}
