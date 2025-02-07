

const cards = document.querySelector("#cards");

const printBookCard = (books) => {
    const cardsContainer = document.querySelector(".cardsContainer")
    cardsContainer.innerHTML="";
    
    books.forEach(book => {
       
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("card");
        const img = document.createElement("img");
        const title = document.createElement("a");
        const author = document.createElement("h3");
        const buy = document.createElement("button");
        buy.innerText = book.pris + " kr";
        author.innerText = book.författare;

        title.innerText=book.titel;
        img.src = book.bildUrl;
        bookContainer.append(img, title, author, buy)
        cardsContainer.append(bookContainer)

    })
}  


