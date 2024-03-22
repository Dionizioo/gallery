//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');

let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function() {
    showSlider('next');    
}

prevDom.onclick = function() {
    showSlider('prev');    
}

let runTimeOut;
let runNextAuto;

function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    // Remova esta parte para evitar o clique automático
    // clearTimeout(runNextAuto);
    // runNextAuto = setTimeout(() => {
    //     next.click();
    // }, timeAutoNext);
}

// Adicionar ouvintes de evento para os botões "SEE MORE" com IDs específicos
document.getElementById('img1').addEventListener('click', function() {
    redirect('img1');
});
document.getElementById('img2').addEventListener('click', function() {
    redirect('img2');
});
document.getElementById('img3').addEventListener('click', function() {
    redirect('img3');
});
document.getElementById('imgx').addEventListener('click', function() {
    redirect('imgx');
});
document.getElementById('img4').addEventListener('click', function() {
    redirect('img4');
});
document.getElementById('img5').addEventListener('click', function() {
    redirect('img5');
});
document.getElementById('img6').addEventListener('click', function() {
    redirect('img6');
});
document.getElementById('img7').addEventListener('click', function() {
    redirect('img7');
});



function redirect(id) {
    var url;

    switch (id) {
        case 'img1':
            url = 'https://github.com/Dionizioo/GameMario';
            break;
        case 'img2':
            url = 'https://dionizioo.github.io/Pokedex/';
            break;
        case 'img3':
            url = 'https://dionizioo.github.io/MovieApis/';
            break;
        case 'imgx':
            url = 'https://github.com/Dionizioo/';
            break;
        case 'img4':
            url = 'https://github.com/Dionizioo/Movie_Project';
            break;
        case 'img5':
            url = 'https://github.com/Dionizioo/Projects_React/tree/main/Party_Time';
            break;
        case 'img6':
            url = 'https://github.com/Dionizioo/Quiz-React-';
            break;
        case 'img7':
            url = 'https://github.com/Dionizioo/Projects_React/tree/main/Memories';
            break;    
        default:
            break;
    }
    window.open(url, '_blank');
}
