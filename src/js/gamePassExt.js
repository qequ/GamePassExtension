function gamePassExtension(url) {

    fetch(url)
        .then(data => data.text())
        .then(t => CSVToArray(t, ","))
        .then(arr => searchGameData(arr))
        .then(gameData => insertData(gameData))
}
var url = "https://docs.google.com/spreadsheets/d/1kspw-4paT-eE5-mrCrc4R9tg70lH2ZTFrJOUmOtOytg/gviz/tq?tqx=out:csv&sheet=sheet_name"

// Main
gamePassExtension(url);
