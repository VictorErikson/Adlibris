const book = [
    {
      "titel": "Blommor i regnet",
      "författare": "Lisa Johansson",
      "pris": 199,
      "beskrivning": "En poetisk roman om livets skörhet och de ögonblick av skönhet som ibland uppstår mitt i mörka perioder.",
      "utgivningsdatum": "2024-03-15",
      "bildUrl": "https://s2.adlibris.com/images/71112517/flykten-om-prinsessan-martha-av-sverige-kronprins-olav-av-norge.jpg"
    },
    {
      "titel": "Mörka hemligheter",
      "författare": "Erik Lindström",
      "pris": 159,
      "beskrivning": "En thrillerroman som följer en detektiv på jakt efter svar på mysterier som sträcker sig långt tillbaka i tiden.",
      "utgivningsdatum": "2023-11-05",
      "bildUrl": "https://s2.adlibris.com/images/52824304/walking.jpg"
    },
    {
      "titel": "Resan till det okända",
      "författare": "Sofia Bergström",
      "pris": 229,
      "beskrivning": "En science fiction-roman om en expedition till en annan galax där upptäckten av ett nytt livsform förändrar allt.",
      "utgivningsdatum": "2025-01-20",
      "bildUrl": "https://s2.adlibris.com/images/70585356/velgjoreren.jpg"
    },
    {
      "titel": "Hjärtats väg",
      "författare": "Amanda Forsberg",
      "pris": 179,
      "beskrivning": "En känsloladdad berättelse om att hitta sig själv genom kärlek och förlust.",
      "utgivningsdatum": "2024-05-01",
      "bildUrl": "https://s2.adlibris.com/images/65715286/den-fremmede.jpg"
    },
    {
      "titel": "Livets stora frågor",
      "författare": "Johan Sundberg",
      "pris": 249,
      "beskrivning": "En filosofisk bok som utforskar de djupaste frågorna om meningen med livet och människans plats i universum.",
      "utgivningsdatum": "2023-10-10",
      "bildUrl": "https://s2.adlibris.com/images/69870324/utspring.jpg"
    },
    {
      "titel": "Vägen till frihet",
      "författare": "Maria Lind",
      "pris": 199,
      "beskrivning": "En biografi om en kvinnas kamp för frihet och rättvisa i en förtryckande värld.",
      "utgivningsdatum": "2025-02-01",
      "bildUrl": "https://s1.adlibris.com/images/72345799/nomaden.jpg"
    },
    {
      "titel": "Bortom horisonten",
      "författare": "Fredrik Nilsson",
      "pris": 179,
      "beskrivning": "En episk berättelse om äventyr och vänskap, där huvudpersonen söker sitt förlorade förflutna.",
      "utgivningsdatum": "2024-08-19",
      "bildUrl": "https://s2.adlibris.com/images/67522602/til-minne-om-en-morder.jpg"
    },
    {
      "titel": "Skuggorna av vårt förflutna",
      "författare": "Helena Andersson",
      "pris": 229,
      "beskrivning": "En historisk roman om en familj som bär på mörka hemligheter från en svunnen tid.",
      "utgivningsdatum": "2023-09-22",
      "bildUrl": "https://s2.adlibris.com/images/68978166/skammens-vag.jpg"
    },
    {
      "titel": "Det osynliga bandet",
      "författare": "Marcus Eriksson",
      "pris": 169,
      "beskrivning": "En fängslande roman om relationer, vänskap och det osynliga band som binder oss samman genom livet.",
      "utgivningsdatum": "2024-07-12",
      "bildUrl": "https://s2.adlibris.com/images/66799509/til-minde-om-en-morder.jpg"
    },
    {
      "titel": "Koden till evigheten",
      "författare": "Henrik Persson",
      "pris": 299,
      "beskrivning": "En thriller om en hemlig organisation som söker efter en forntida kod som kan ge odödlighet.",
      "utgivningsdatum": "2025-03-30",
      "bildUrl": "https://s1.adlibris.com/images/71704404/tranorna-flyger-soderut.jpg"
    }
  ];

let searchFunction = () => {
    let inputValue = document.querySelector("#bookSearch").value;
    let lowerCase = inputValue.toLowerCase();
    let cards = document.querySelectorAll("#cards div");

    let matchedBooks = book.filter( book => book.titel.toLocaleLowerCase().includes(lowerCase));
    
    document.querySelector("div.cardsContainer").innerHTML="";
    
    

}

document.querySelector("#searchButton").addEventListener("click", searchFunction);