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
