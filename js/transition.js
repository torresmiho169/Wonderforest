//declaração de variaveis 

//variaveis para a transição(scroll)

const main1 = document.getElementById('main-1');
const timeline = document.getElementById('timeline');
const main2 = document.getElementById('cursorArea3');

// header - variaveis
const headerNav = document.getElementById('flexNavCenter');
const headerResponsivo = document.getElementById('headerResponsivo');


//main-1 content - variaveis
const primeiroMain1 = document.getElementById('primeiro-main-1');
const segundoMain1 = document.getElementById('segundo-main-1');
const terceiroMain1 = document.getElementById('terceiro-main-1');
const quartoMain1 = document.getElementById('quarto-main-1');
const imgMain1 = document.getElementById('img-fixaMain1');



//main-2 content - variaveis 
const primeiroCard = document.getElementById('primeiro-card');
const segundoCard = document.getElementById('segundo-card');
const terceiroCard = document.getElementById('terceiro-card');
const stickyMain2 = document.getElementById('stickyMain2');


//carrossel-2 - variaveis 

const stickyCarrossel2 = document.getElementById('carrosel2-sticky');

//carrossel-3 - nao fudido - variaveis
const carousel3 = document.getElementById('carousel-nao-fudido')

function aparecerMenu() {
    headerResponsivo.style.top = '0'
}

function voltarMenu() {
    headerResponsivo.style.top = '-1000px'
}


//transitions & animations(scroll)



window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;



    //opacidade dos elementos(main1 - scroll)


    if (scrollPosition >= 780 && scrollPosition <= 860) {
        terceiroMain1.style.filter = 'opacity(0%)';
        quartoMain1.style.filter = 'opacity(0%)';
        segundoMain1.style.filter = 'opacity(0%)';
        primeiroMain1.style.filter = 'opacity(100%)'
    } else if (scrollPosition >= 950 && scrollPosition <= 980) {
        terceiroMain1.style.filter = 'opacity(0%)';
        primeiroMain1.style.filter = 'opacity(0%)';
        segundoMain1.style.filter = 'opacity(100%)';
    } else if (scrollPosition >= 1120 && scrollPosition <= 1300) {
        segundoMain1.style.filter = 'opacity(0%)';
        quartoMain1.style.filter = 'opacity(0%)';
        terceiroMain1.style.filter = 'opacity(100%)';
    } else if (scrollPosition >= 1310 && scrollPosition <= 1450) {
        terceiroMain1.style.filter = 'opacity(0%)';
        quartoMain1.style.filter = 'opacity(100%)';
    } else {
        primeiroMain1.style.filter = 'opacity(0%)'
        quartoMain1.style.filter = 'opacity(0%)';
    }



    //main-2 transitions(scroll)




    if (scrollPosition > 2450) {
        main2.style.filter = 'opacity(100%)';
            
        //condições - cards transitions
        if(scrollPosition >= 2750 && scrollPosition <= 2900) {
                primeiroCard.style.cssText = 'filter: opacity(100%) !important; width: 250px; top: 0rem;';
            } else if(scrollPosition >= 2900 && scrollPosition <= 3100) {
                segundoCard.style.cssText = 'filter: opacity(100%) !important; width: 250px; top: 9rem;';
            } else if(scrollPosition >= 3100) {
                terceiroCard.style.cssText = 'filter: opacity(100%) !important; width: 250px; top: 4rem;';
            }
             else { 
                primeiroCard.style.cssText = 'filter: opacity(0%); width: 200px; height; 350px; top: 2rem';
                segundoCard.style.cssText = 'filter: opacity(0%); width: 200px; height; 350px; top: 10rem';
                terceiroCard.style.cssText = 'filter: opacity(0%); width: 200px; height; 350px; top: 4rem';
            }

        

        //condições - carrossel2



    } else {
        main2.style.filter = 'opacity(0%)';
    }


    //Header-color transition(scroll)



    if (scrollPosition > 700) {

        headerColorGreen.classList.remove('nao-ativo');
        headerColorGreen.classList.add('ativo');
        headerColorGreen.classList.remove('hidden');
    } else {
        headerColorGreen.classList.remove('ativo');
        headerColorGreen.classList.add('nao-ativo');

        // headerColorGreen.addEventListener('animationend', function () {
        //     headerColorGreen.classList.add('hidden');
        // }, { once: true });
    }



});

//RESPONSIVEL - JS (VAI TODO MUNDO TOMAR NO CU)

setInterval(() => {
    let widthWindow = window.innerWidth

    if(widthWindow < 425) {
        
    }
}, 100);