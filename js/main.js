//Default array of colors
const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

//Variable initialization
let timerId = 0;

refs.btnStart.addEventListener('click', event => {
  timerId = setInterval(selectBodyBackgroundColor, 1000);
  event.target.disabled = true;
});

refs.btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
});

//Function to generate RANDOM NUMBER (index of array element)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Function to select BACKGROUND COLOR
const selectBodyBackgroundColor = () => {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};

/*
=================== TASK CONDITION ===================

1. Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. 
2. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

3. Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
*/
