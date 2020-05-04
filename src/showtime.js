export default function showTime() {
  let result;
  const d = new Date();
  const hour = d.getHours();
  const minute = d.getMinutes();

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
  
  result = `${giveCorrectEnd(hour, ['час', 'часа', 'часов'])} ${giveCorrectEnd(minute, ['минута', 'минуты', 'минут'])}`;
  return result;
}
