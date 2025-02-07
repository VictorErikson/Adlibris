let pris100_120 = 0;
let pris121_130 = 0;
let pris131_150 = 0;
let pris151_200 = 0;
let pris201_250 = 0;
let pris251 = 0;


let romanceCount = 0;
let thrillerCount = 0;
let scifiCount = 0;


let svenskaCount = 0;
let spanskaCount = 0;
let franskaCount = 0;
let tyskaCount = 0;
let ryskaCount = 0;

let inbundenCount = 0;
let pocketCount = 0;
let ebokCount = 0;

let reaCount = 0;

fetch('books.json')
    .then(response => response.json())  
    .then(books => {
        bookPrices(books);
        genreCounts(books);
        languageCounts(books);
        formatCounts(books);
        reaCounts(books);
    })

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".filter button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            const parentDiv = button.parentElement;
    
            const list = parentDiv.querySelector("ul");

            if (list) {
                list.classList.toggle("active");
            }
        });
    });
});





function bookPrices(books) {
    books.forEach(book => {
        let pris = book.pris;

        if (pris >= 100 && pris <= 120) {
            pris100_120++;
        } else if (pris >= 121 && pris <= 130) {
            pris121_130++;
        } else if (pris >= 131 && pris <= 150) {
            pris131_150++;
        } else if (pris >= 151 && pris <= 200) {
            pris151_200++;
        } else if (pris >= 201 && pris <= 250) {
            pris201_250++;
        } else {
            pris251++;
        }
    });

    document.getElementById("pris100-120").textContent = pris100_120;
    document.getElementById("pris121-130").textContent = pris121_130;
    document.getElementById("pris131-150").textContent = pris131_150;
    document.getElementById("pris151-200").textContent = pris151_200;
    document.getElementById("pris201-250").textContent = pris201_250;
    document.getElementById("pris251").textContent = pris251;
}


function genreCounts(books) {
    books.forEach(book => {
        if (book.genre === 'Roman') {
            romanceCount++;
        } else if (book.genre === 'Thriller') {
            thrillerCount++;
        } else if (book.genre === 'Science Fiction') {
            scifiCount++;
        }
    });

    document.getElementById('romanceCount').textContent = romanceCount;
    document.getElementById('thrillerCount').textContent = thrillerCount;
    document.getElementById('scifiCount').textContent = scifiCount;
}


function languageCounts(books) {

    books.forEach(book => {
        if (book.språk === 'Svenska') {
            svenskaCount++;
        } else if (book.språk === 'Spanska') {
            spanskaCount++;
        } else if (book.språk === 'Franska') {
            franskaCount++;
        } else if (book.språk === 'Tyska') {
            tyskaCount++;
        } else if (book.språk === 'Ryska') {
            ryskaCount++;
        }
    });

    document.getElementById('svenskaCount').textContent = svenskaCount;
    document.getElementById('spanskaCount').textContent = spanskaCount;
    document.getElementById('franskaCount').textContent = franskaCount;
    document.getElementById('tyskaCount').textContent = tyskaCount;
    document.getElementById('ryskaCount').textContent = ryskaCount;
}


function formatCounts(books) {

    books.forEach(book => {
        if (book.format === 'Inbunden') {
            inbundenCount++;
        } else if (book.format === 'Pocket') {
            pocketCount++;
        } else if (book.format === 'E-bok') {
            ebokCount++;
        }
    });

    document.getElementById('inbundenCount').textContent = inbundenCount;
    document.getElementById('pocketCount').textContent = pocketCount;
    document.getElementById('ebokCount').textContent = ebokCount;
}

function reaCounts(books) {
    books.forEach(book => {
        if (book.rea === true) {
            reaCount++;
        }
    });

    document.getElementById('reaCount').textContent = reaCount;
}
