export default function showDate() {
  let result;
  const d = new Date();
  const data = d.getDate();
  const month = d.getMonth();
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const currentMonth = months[month];
  const currentYear = d.getFullYear();

  function giveCorrectEnd(number, array) {
    let currentTime;
    const temp = number % 10;
    if (temp === 1 && number != 11) {
      return currentTime = `${number} ${array[0]}`;
    }
    else if (temp === 2 && number != 12 || temp === 3 && number != 13 || temp === 4 && number != 14) {
      return currentTime = `${number} ${array[1]}`;
    }
    else {
      return currentTime = `${number} ${array[2]}`;
    }
  }
  result = `${data} ${currentMonth} ${currentYear} года`;
  return result;
}
