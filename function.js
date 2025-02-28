/**
 * Létrehozza a dinamikus űrlapot, amely lehetővé teszi új adatok bevitelét.
 *
 * Lépések:
 * 1. Létrehozza a <form> elemet, beállítja az ID-t és az action attribútumot.
 * 2. Létrehozza a szükséges input mezőket és címkéket:
 *    - Szerző neve
 *    - Csapat
 *    - Első mű
 *    - Második mű megadását lehetővé tevő checkbox
 *    - Második mű
 * 3. Hozzáadja az error div elemeket a validációs hibaüzenetek megjelenítéséhez.
 * 4. Hozzáad egy gombot az űrlap elküldéséhez.
 *
 * @returns {HTMLFormElement} Az elkészített űrlap.
 */
function generatefrom() {
    const form = document.createElement('form');
    form.id = 'form';
    form.action = '#';
  
    // 1. div: Szerző neve
    const divSzerzo = document.createElement('div');
  
    const labelSzerzo = document.createElement('label');
    labelSzerzo.htmlFor = 'szerzo_nev';
    labelSzerzo.textContent = 'Szerző neve:';
    divSzerzo.appendChild(labelSzerzo);
    divSzerzo.appendChild(document.createElement('br'));
  
    const inputSzerzo = document.createElement('input');
    inputSzerzo.type = 'text';
    inputSzerzo.id = 'szerzo_nev';
    inputSzerzo.name = 'szerzo_nev';
    divSzerzo.appendChild(inputSzerzo);
    divSzerzo.appendChild(document.createElement('br'));
    divSzerzo.appendChild(document.createElement('br'));
  
    const errorSzerzo = document.createElement('div');
    errorSzerzo.className = 'error';
    errorSzerzo.id = 'error-szerzo-nev';
    divSzerzo.appendChild(errorSzerzo);
  
    form.appendChild(divSzerzo);
  
    // 2. div: Csapat
    const divGroup = document.createElement('div');
  
    const labelGroup = document.createElement('label');
    labelGroup.htmlFor = 'group';
    labelGroup.textContent = 'Csapat:';
    divGroup.appendChild(labelGroup);
    divGroup.appendChild(document.createElement('br'));
  
    const inputGroup = document.createElement('input');
    inputGroup.type = 'text';
    inputGroup.id = 'group';
    inputGroup.name = 'group';
    divGroup.appendChild(inputGroup);
    divGroup.appendChild(document.createElement('br'));
    divGroup.appendChild(document.createElement('br'));
  
    const errorGroup = document.createElement('div');
    errorGroup.className = 'error';
    errorGroup.id = 'error-group';
    divGroup.appendChild(errorGroup);
  
    form.appendChild(divGroup);
  
    // 3. div: Első mű
    const divMu1 = document.createElement('div');
  
    const labelMu1 = document.createElement('label');
    labelMu1.htmlFor = 'mu1';
    labelMu1.textContent = 'Első mű:';
    divMu1.appendChild(labelMu1);
    divMu1.appendChild(document.createElement('br'));
  
    const inputMu1 = document.createElement('input');
    inputMu1.type = 'text';
    inputMu1.id = 'mu1';
    inputMu1.name = 'mu1';
    divMu1.appendChild(inputMu1);
    divMu1.appendChild(document.createElement('br'));
    divMu1.appendChild(document.createElement('br'));
  
    const errorMu1 = document.createElement('div');
    errorMu1.className = 'error';
    errorMu1.id = 'error-mu1';
    divMu1.appendChild(errorMu1);
  
    form.appendChild(divMu1);
  
    // 4. div: Második mű megadása (checkbox)
    const divCheckbox = document.createElement('div');
  
    const labelCheckbox = document.createElement('label');
    labelCheckbox.htmlFor = 'masodik';
    labelCheckbox.textContent = 'Szeretnél megadni második művet is?';
    divCheckbox.appendChild(labelCheckbox);
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'masodik';
    checkbox.name = 'masodik';
    divCheckbox.appendChild(checkbox);
    divCheckbox.appendChild(document.createElement('br'));
    divCheckbox.appendChild(document.createElement('br'));
  
    // Üres error mező a checkboxhoz
    const errorCheckbox = document.createElement('div');
    errorCheckbox.className = 'error';
    errorCheckbox.id = 'error-checkbox';
    divCheckbox.appendChild(errorCheckbox);
  
    form.appendChild(divCheckbox);
  
    // 5. div: Második mű
    const divMu2 = document.createElement('div');
  
    const labelMu2 = document.createElement('label');
    labelMu2.htmlFor = 'mu2';
    labelMu2.textContent = 'Második mű:';
    divMu2.appendChild(labelMu2);
    divMu2.appendChild(document.createElement('br'));
  
    const inputMu2 = document.createElement('input');
    inputMu2.type = 'text';
    inputMu2.id = 'mu2';
    inputMu2.name = 'mu2';
    divMu2.appendChild(inputMu2);
    divMu2.appendChild(document.createElement('br'));
    divMu2.appendChild(document.createElement('br'));
  
    const errorMu2 = document.createElement('div');
    errorMu2.className = 'error';
    errorMu2.id = 'error-mu2';
    divMu2.appendChild(errorMu2);
  
    form.appendChild(divMu2);
  
    // Gomb hozzáadása
    const button = document.createElement('button');
    button.textContent = 'Hozzáadás';
    form.appendChild(button);
  
    return form;
}

/**
 * Létrehozza a táblázat fejlécét a megadott adatok alapján, majd hozzáfűzi a táblázathoz.
 *
 *
 * @param {Object} headerData - Az objektum, amely a fejléc adatait tartalmazza.
 * @param {HTMLTableElement} table - A cél táblázat, amelyhez a fejlécet hozzá kell adni.
 */
function generateTableHeader(headerData, table) {
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    // "Szerző neve" fejléc cella
    const thSzerzo = document.createElement('th');
    thSzerzo.textContent = headerData.szerzo;
    headerRow.appendChild(thSzerzo);

    // "Csapat" fejléc cella
    const thCsapat = document.createElement('th');
    thCsapat.textContent = headerData.csapat;
    headerRow.appendChild(thCsapat);

    // "Művei" fejléc cella (colSpan=2)
    const thMuvei = document.createElement('th');
    thMuvei.textContent = headerData.mu1;
    thMuvei.colSpan = 2;
    headerRow.appendChild(thMuvei);

    thead.appendChild(headerRow);
    table.appendChild(thead);
}

/**
 * Dinamikusan generálja a táblázat tartalmát a megadott adatok alapján.
 *  Végigiterál az adatsorokon (az első elemet kihagyva, mert az a fejléc).
 *    - Létrehozza a sorokat (<tr>) és a cellákat a szerző, csapat, valamint a művek számára.
 *    - Ha nincs második mű (mu2 üres), egy cellába öleli a mu1 értékét (colSpan=2).
 *    - Ha mindkét mű meg van adva, két külön cellában jeleníti meg őket.
 *  Hozzáfűzi a <tbody>-t a táblázathoz.
 *
 * @param {HTMLTableElement} table - A cél táblázat.
 * @param {Array<Object>} data - A táblázat adatait tartalmazó tömb.
 */
function generateTable(table, data) {
    // Korábbi tartalom törlése
    table.innerHTML = "";

    // Fejléc létrehozása (az első elem tartalmazza a fejléc adatait)
    generateTableHeader(data[0], table);

    // Táblázat törzsének létrehozása
    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    // Adatsorok bejárása (az első elemet kihagyva)
    for (let i = 1; i < data.length; i++) {
        const rowData = data[i];
        const row = document.createElement('tr');

        // Szerző neve cella
        const tdSzerzo = document.createElement('td');
        tdSzerzo.textContent = rowData.szerzo;
        row.appendChild(tdSzerzo);

        // Csapat cella
        const tdCsapat = document.createElement('td');
        tdCsapat.textContent = rowData.csapat;
        row.appendChild(tdCsapat);

        // Művei: ellenőrizzük, hogy van-e második mű (mu2)
        if (rowData.mu2 === "") {
            // Ha nincs második mű, akkor egy cellában jelenítjük meg a mu1 értékét (colSpan=2)
            const tdMuvei = document.createElement('td');
            tdMuvei.textContent = rowData.mu1;
            tdMuvei.colSpan = 2;
            row.appendChild(tdMuvei);
        } else {
            // Ha mindkét mű meg van adva, két külön cellában jelenítjük meg őket
            const tdMu1 = document.createElement('td');
            tdMu1.textContent = rowData.mu1;
            row.appendChild(tdMu1);

            const tdMu2 = document.createElement('td');
            tdMu2.textContent = rowData.mu2;
            row.appendChild(tdMu2);
        }
        tbody.appendChild(row);
    }
}

/**
 * Egyszerű validáció, amely ellenőrzi, hogy az input mező nem üres-e.
 *
 *
 * @param {HTMLInputElement} inputElem - A validálandó input mező.
 * @param {string} errorMessage - A hibaüzenet, amely megjelenik, ha az input üres.
 * @returns {boolean} Igaz, ha az input nem üres, különben hamis.
 */
function simpleValidation(inputElem, errorMessage) {
    let valid = true;
    const parentElement = inputElem.parentElement;
    let errorPlace = parentElement.querySelector('.error');
    if (errorPlace) {
        errorPlace.innerHTML = "";
    }
    if (inputElem.value.trim() === '') {
        if (errorPlace !== null) {
            errorPlace.innerHTML = errorMessage;
        } else {
            const newError = document.createElement('div');
            newError.className = 'error';
            newError.innerHTML = errorMessage;
            parentElement.appendChild(newError);
        }
        valid = false;
    }
    return valid;
}

/**
 * Validálja a második mű bevitelét.
 *
 *  Ha a checkbox be van jelölve:
 *    - Ellenőrzi, hogy a második mű input nem üres-e.
 *    - Ha üres, megjeleníti a hibaüzenetet.
 * Ha a checkbox nincs bejelölve:
 *    - Ha a második mű input tartalmaz értéket, hibaüzenetet jelenít meg,
 *      mert a második mű csak a checkbox bejelölése esetén adható meg.
 *
 * @param {HTMLInputElement} checkboxElement - A checkbox, amely jelzi, hogy a második mű megadása kötelező.
 * @param {HTMLInputElement} mu2Element - A második mű input mező.
 * @returns {boolean} Igaz, ha a validáció sikeres, különben hamis.
 */
function secondValidation(checkboxElement, mu2Element) {
    let valid = true;

    if (checkboxElement.checked) {
        if (mu2Element.value.trim() === "") {
            const errorMu2 = document.getElementById('error-mu2');
            errorMu2.style.display = "block";
            errorMu2.innerHTML = "A második mű megadása kötelező";
            valid = false;
        } else {
            document.getElementById('error-mu2').style.display = "none";
        }
    } else {
        if (mu2Element.value.trim() !== "") {
            const errorCheckbox = document.getElementById('error-checkbox');
            errorCheckbox.style.display = "block";
            errorCheckbox.innerHTML = "Második mű megadásához kötelező bejelölni";
            valid = false;
        } else {
            document.getElementById('error-checkbox').style.display = "none";
        }
        document.getElementById('error-mu2').style.display = "none";
    }
    return valid;
}
