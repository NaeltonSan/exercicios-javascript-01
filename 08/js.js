    var btnElement = document.getElementById('new');
    var squaresElement = document.getElementById('squares');

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    btnElement.onclick = function () {
      var square = document.createElement('div');
      var widthRandom = Math.floor(Math.random() * 100 + 1);
      var heightRandom = Math.floor(Math.random() * 100 + 1);
      var heightRandom = Math.floor(Math.random() * 100 + 1);
      square.style.width = widthRandom + 'px';
      square.style.height = heightRandom + 'px';
      square.style.backgroundColor = '#F00';

      square.onmouseover = function () {
        square.style.backgroundColor = getRandomColor();
      }

      squaresElement.appendChild(square);
    };