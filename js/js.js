const el = document.querySelector('img');
el.addEventListener('mouseover', makeBlue);

function makeBlue() {
    document.querySelector('img').style.background = 'blue';
}

//change style
$(function () {
    $('#addEmail').on('click', function () {
        //event.preventDefault();
        console.log("thanks!");
    });
})
