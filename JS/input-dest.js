// цей файл - файл ініціалізації плагіна
// countryList - масив із назвами країн
const countryList = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'The Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'The Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Haiti',
    'Honduras',
    'Hungary',
]

// створюємо новий об'єкт класа autoComplete
// у ньому у властивостях описані налаштування плагіна
const autoCompleteJS = new autoComplete({
    selector: "#location", //вказівка по якому id шукати input

    placeHolder: "Country name...",

    data: {
        src: countryList, //звідки береться список країн
        cache: true,
    },

    resultItem: {
        highlight: true,
    },

    events: {
        input: {
            selecton: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            },
        },
    },

    resultsList: {
        maxResults: 15,
    },

    searchEngine: 'strict',
});