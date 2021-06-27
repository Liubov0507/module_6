//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

function showNumbers() {
    const array = [25, 43, 54, 0, 15, true, null, 128, 0];
    let even = 0;
    let odd = 0;
    let zero = 0;

        for(let i=0; i <= array.length; i++) {
            if(typeof array[i]=== "number" && !isNaN(array[i])) {
                if(array[i] === 0){
                zero++;
        } 
            else if(array[i] %2 === 0) {
                even++;
        }
            else {
                odd++;
        }
    }
    }
    console.log("Четных чисел = " +even);
    console.log("Нечетных чисел = " +odd);
    console.log("Нолей = " +zero);
}

showNumbers();