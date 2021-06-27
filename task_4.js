//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval

function betweenNumbers(from, to) {
    let start = from;
  
    let timerId = setInterval(function() {
      console.log(start);
      if (start == to) {
        clearInterval(timerId);
      }
      start++;
    }, 1000);
  }
  
  
  betweenNumbers(5, 8);