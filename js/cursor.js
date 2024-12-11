const cursorArea1 = document.getElementById('cursorArea1');
const cursorArea2 = document.getElementById('cursorArea2');
const cursorArea3 = document.getElementById('cursorArea3');
const cursorArea4 = document.getElementById('cursorArea4');
const cursorArea5 = document.getElementById('cursorAreaDenuncias');

const cursor = document.getElementById('cursor-move');
const header = document.getElementById('header');

    window.addEventListener('mousemove', function (event) {
        let x = event.clientX;
        let y = event.clientY;
    
        cursor.style.top = `${y - 20}px`;
        cursor.style.left = `${x - 30}px`;
    
        // EVENTOS - AUMENTO DO TAMANHO DO CURSOR
    
        cursorArea1.addEventListener('mouseover', function () {
            cursor.style.cssText += 'width: 120px; height: 120px; background-color: var(--background-color);';
    
            setTimeout(() => {
                cursor.innerHTML = `<h1>Scroll</h1>`
            }, 250);
        });
    
        cursorArea3.addEventListener('mouseover', function () {
            cursor.style.cssText += 'width: 120px; height: 120px; background-color: var(--background-color);';
    
            setTimeout(() => {
                cursor.innerHTML = `<h1>Scroll</h1>`
            }, 250);
        });
    
        // EVENTOS - TAMANHO PADRÃO DO CURSOR
    
    
        header.addEventListener('mouseover', function () {
            cursor.style.cssText += 'width: 20px; height: 20px; background-color: var(--primary-color);';
            cursor.innerHTML = '';
        });
    
        cursorArea2.addEventListener('mouseover', function () {
            cursor.style.cssText += 'width: 20px; height: 20px; background-color: var(--primary-color);';
            cursor.innerHTML = '';
        });
    
        cursorArea4.addEventListener('mouseover', function () {
            cursor.style.cssText += 'width: 20px; height: 20px; background-color: var(--primary-color);';
            cursor.innerHTML = '';
        });
    
        cursorArea5.addEventListener('mouseover', function () {
            cursor.style.cssText += 'width: 20px; height: 20px; background-color: var(--primary-color);';
            cursor.innerHTML = '';
        });
    
    });