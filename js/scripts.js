

var button = document.getElementById('button'),
    cell   = document.getElementsByTagName('td'),
    colorIndex = 0,
    i = colorIndex;
    var x = 0;


button.addEventListener( 'click', function () {

    for (i = 0; i < cell.length; i++) {

        cell[i].addEventListener('click', function (e) {
            var colors = ['red', 'blue', 'green', 'yelloy', 'purple', 'gray'];
            var clickedCell = e.target;

            var min = 0;

            var max = 5;

            var randomColor = min + Math.floor(Math.random() * (max + 1 - min));

            clickedCell.style.backgroundColor = colors[randomColor];
            
        });



}

});
