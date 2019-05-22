const button = document.getElementById('button');

let cell = document.getElementsByTagName('td'),
    colorIndex = 0,
    i = colorIndex,
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    milliseconds = document.getElementById('milliseconds');

////////\\\\\\   ФУНКЦИИ ДЛЯ ТАЙМЕРА   //////\\\\\\\

let x = 0;
let y = 0;
let z = 0;

const setMinutes = () => minutes.innerHTML = x++;

const setSeconds = () => {

    seconds.innerHTML = "0" + y++;

    if (y > 9) {

        seconds.innerHTML = y++;
        if (y === 60) {
            y = 0;
        }

    } else {

        seconds.innerHTML = "0" + y++

        if (y === 60) {
            y = 0;
        }

    };

}

const setMilliseconds = () => {

    milliseconds.innerHTML = "0" + z++;

    if (z > 9) {

        milliseconds.innerHTML = z++;
        if (z === 60) {
            z = 0;
        }

    } else {

        milliseconds.innerHTML = "0" + z++

        if (z === 60) {
            z = 0;
        }

    };

}


/////////////// ВЕШАЕМ СОБЫТИЕ НА КНОПКУ /////////////////

button.addEventListener('click', () => {

    setInterval(setMinutes, 30000);
    setInterval(setSeconds, 980);
    setInterval(setMilliseconds, 30);

// ЗДЕСЬ ВЕШАЕМ СОБЫТИЕ НА ЯЧЕЙКУ ЧТОБЫ КЛИК НА ЯЧЕЙКУ ДЕЙСТВОВАЛ ТОЛЬКО ПОСЛЕ НАЖАТИИ НА КНОПКУ //

    for (i in cell) {

        cell[i].addEventListener('click', (e) => {

            let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'gray'];

            let clickedCell = e.target;

            const min = 0;

            const max = 6;

            let randomColor = Math.floor(Math.random() * (max - min) + min);

            clickedCell.style.backgroundColor = colors[randomColor];

        });

    }

});
