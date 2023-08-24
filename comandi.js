let data = {
    "type": "module",
    "index":
        ["a", "address", "area", "article", "audio", "b", "body", "br", "button", "canvas", "code", "div", "footer", "form", "header", "h1", "h2", "h3", "h4", "h5", "h6", "iframe", "img", "input", "label", "li", "link", "nav", "ol", "option", "p", "script", "style", "table", "textarea", "ul", "video"],

    "a": [
        ["href", "indica il percorso (relativo o assoluto da aprire)", "https://www.google.com"],
        ["target", "apre il link in una nuova scheda", "_blank"],
        ["textContent", "Testo all'interno del tag", "default"],
        ["className", "w-100, h-100", ""]
    ],
    "div": [
        ["textContent", "Testo all'interno del tag", "default", "null"],
        ["class", "w-100, h-100", ""]
    ],
    "background": [
        ["backgroundColor", "definisce il colore dello sfondo", "null"],
        ["img", "permette di usare un'immagine come sfondo"], ["linear gradient", "imposta un gradiente lineare come sfondo", "null"],
        ["radial gradient", "imposta un gradiente circolare come sfondo", "null"],
        ["class", "w-100, h-100", ""]
    ],
    "display": [
        ["block", "occupa l'intera riga in cui è posizionato", "null"],
        ["contents", "", "null"],
        ["flex", "dispone i figli nella stessa riga e adatta le loro dimensioni in base allo schermo (anche se i tag figli hanno una width impostata)", "null"],
        ["grid", "", "null"],
        ["inline", "occupa lo spazio definito dalle sue dimensioni", "null"],
        ["textContent", "Testo all'interno del tag", "default", "null"],
        ["class", "w-100, h-100", ""]
    ],
    "p": [
        ["font", "definisce il font da utilizzare", "null"],
        ["fontSize", "definisce le dimensioni del font", "null"],
        ["letterSpacing", "imposta lo spazio tra le lettere", "null"],
        ["textDecoration", "imposta decorazioni al testo (sottolineato, barrato, ...)", "null"],
        ["text-shadow", "imposta l'ombreggiatura", "null"],
        ["textContent", "Testo all'interno del tag", "default", "null"],
        ["class", "w-100, h-100", ""]

    ]
};

let css = [
    ["background", "linear-gradient(20deg, #000 50%, transparent 50%), radial-gradient(pink 0%, blue 100%)", ""],
    ["border", "5px solid red, 2px dashed black", ""],
    ["margin", "5px", ""],
    ["padding", "0 2px 0 0", ""],
    ["height", "2rem, 2px, 10vh", ""],
    ["width", "2rem, 2px, 10vw", ""],
    ["outline", "2rem, 2px, 10vh", ""],
    ["color", "red", ""],
    ["text-align", "center, left, right, justify", ""],
    ["class", "w-100, h-100", ""]
]


/* Importa il file da json (da fare) */


/* Puts data key values into the select tag and on the table */
function makeList() {
    let index = data.index;
    let comandList = document.getElementById('tipologiaComandi');

    /* Defines the table creation button's properties */
    index.forEach(function addData(value) {
        let listItem = document.createElement('option');
        listItem.id = `${value}`;
        listItem.textContent = `${value}`;
        comandList.appendChild(listItem);
    })

    let table = document.getElementById('comandi');

    /* Runs the table creation function */
    if (table != undefined) {
        table.childNodes.forEach(function listen() {
            listItem.addEventListener('onselect', `{$displayData()}`);
        })
    };
}


/* Creates and udates the table for the selected tag */
function populateTable(dataObject, div, elementIndex) {
    let tableToPopulate = document.getElementById(div);
    let index;

    if (elementIndex == null) {
        index = dataObject;
    } else {
        index = dataObject[elementIndex]
    }


    for (i in index) {
        let stylePropertyValue = index[i][0];

        let row = document.createElement('tr');
        row.id = stylePropertyValue;

        let link = document.createElement('p');
        link.textContent = stylePropertyValue;

        let commandValue = document.createElement('td');
        commandValue.appendChild(link);

        let descriptionValue = document.createElement('td');
        let text = document.createElement('p');
        text.textContent=index[i][1]
        descriptionValue.appendChild(text);

        let valueValue = document.createElement('td');
        let input = document.createElement('input');
        input.id = `${index[i][0]}-inp`;
        input.defaultValue = index[i][2];
        valueValue.appendChild(input);

        row.appendChild(commandValue);
        row.appendChild(descriptionValue);
        row.appendChild(valueValue);

        tableToPopulate.appendChild(row);
    }
}

/* Prints the selected option relative properties in the div "main" */
function displayData() {
    const list = document.getElementById('tipologiaComandi');
    const table = document.getElementById('comandi');
    let elementCommand = 'default';

    /* Cleans the previous table */
    while (table.childNodes[0] != undefined) {
        let removed = document.getElementById(table.childNodes[0].id);
        table.removeChild(removed);
    }

    /* Pick the selected element */
    for (i in list.childNodes) {
        if (list.childNodes[i].selected === true) {
            elementCommand = list.childNodes[i].id;
        }
    };

    populateTable(data, 'comandi', elementCommand)
};

function createDiv() {
    let elements = document.getElementById('comandi').childNodes
    let container = document.getElementById('container');
    let newDiv = document.createElement(document.getElementById('tipologiaComandi').value);

    while(container.childElementCount != 0){
        let child = container.firstChild;
        container.removeChild(child);
    };

    elements.forEach((i) => {
        newDiv[i.id] = document.getElementById(`${i.id}-inp`).value;
    })

    newDiv.id = 'yourDiv';

    container.appendChild(newDiv)
};

function applyStyle() {
    let div = document.getElementById('yourDiv');
    let table = document.getElementById('styling').childNodes;
    div.style = "";
    let styling = "";

    table.forEach(i => {
        let inputValue = document.getElementById(`${i.id}-inp`).value;
        styling = styling + `${i.id}: ${inputValue}; `;
    })

    div.style = styling;

};

/* Aggiungere tasto send. i pulsanti dei vari comandi aggiungeranno la proprietà */
/* Aggiungere pulsante per cancellare */