var prg = document.querySelector('#progress');
var h3 = document.querySelector('h3');

var count = 0;
var set = setInterval(function() {
    if(count === 100 ) {
        clearInterval(set);
        h3.textContent = 'Loading complete!';
    }
    count++;
    prg.style.width = count + '%';
},50);
