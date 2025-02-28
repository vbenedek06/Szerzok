// Commit 1: Inicializálás: HTML struktúra, statikus tableData és táblázat elem létrehozása

const tableData = [
    {
        szerzo: "Szerző neve",
        csapat: "Csapat",
        mu1: "Művei"  // Ezt a cellát két oszlopban jelenítjük meg (colSpan=2)
    },
    {
        szerzo: "Vörösmarty Mihály",
        csapat: "romantikus triász",
        mu1: "Zalán futása",
        mu2: "Szózat"
    },
    {
        szerzo: "Móricz Zsigmond",
        csapat: "Nyugat I.",
        mu1: "Hét krajcár",
        mu2: ""  // Ha nincs második mű, üres string: egyetlen cella fogja lefedni a két oszlopot
    },
    {
        szerzo: "Illyés Gyula",
        csapat: "Nyugat II.", 
        mu1: "Egy mondat a zsarnokságról",
        mu2: "Puszták népe"
    },
    {
        szerzo: "Radnóti Miklós",
        csapat: "Nyugat III.",
        mu1: "Pogány köszöntő",
        mu2: "Járkálj csak, halálraítélt"
    }
];

// Új táblázat létrehozása és a <body> végéhez adása
const table = document.createElement('table');
document.body.appendChild(table);

document.body.appendChild(generatefrom());

generateTable(table, tableData);

const form = document.getElementById('form');
// Űrlap eseménykezelője: új adatsor hozzáadása
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Megakadályozza az űrlap alapértelmezett elküldését

    // Az űrlap elemeinek lekérése
    const szerzoHtmlElement = document.getElementById('szerzo_nev');  
    const csapatHtmlElement = document.getElementById('group');      
    const mu1HtmlElement = document.getElementById('mu1');              
    const masodikHtmlElement = document.getElementById('masodik');      
    const mu2HtmlElement = document.getElementById('mu2');             

    // Az űrlap mezőinek értékeinek lekérése
    const szerzo = szerzoHtmlElement.value;      
    const csapat = csapatHtmlElement.value;       
    const mu1 = mu1HtmlElement.value;               
    let mu2 = mu2HtmlElement.value; // let, mert esetleg módosítjuk később

    let valid = true; // valid változó kezdeti értéke: true
    if (!simpleValidation(szerzoHtmlElement, "A szerző neve kitöltése kötelező")) {
        valid = false;
    }
    if (!simpleValidation(csapatHtmlElement, "A csapat kitöltése kötelező")) {
        valid = false;
    }
    if (!simpleValidation(mu1HtmlElement, "Az első mű megadása kötelező")) {
        valid = false;
    }
    if (!secondValidation(masodikHtmlElement, mu2HtmlElement)) {
        valid = false;
    }
    if (!valid) {
        return; // Ha valamelyik kötelező mező üres, kilépünk
    }

    if (!masodikHtmlElement.checked) {
        mu2 = "";
    }

    const newRow = {
        szerzo: szerzo,
        csapat: csapat,
        mu1: mu1,
        mu2: mu2
    };
    tableData.push(newRow);          
    table.innerHTML = "";            
    generateTable(table, tableData);                 
    this.reset();                    
});
