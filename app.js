
function changepic(anything) {
    var nike = document.querySelector('.img1');
    nike.src = anything;
}

function changecolor(color) {
    const sec = document.querySelector(".sneaker__figure");
    const sec2 = document.querySelector(".size-tallas.active2");
    const sec3 = document.querySelector(".cant-color");
    const sec4 = document.querySelector(".preci__button");
    sec.style.background = color;
    sec2.style.background = color;
    sec3.style.background = color;
    sec4.style.background = color;
    
}
