function searchGameData(gameArr) {
    const gamesNamesArr = gameArr.map(x => x[0]).flat(2)

    a = FuzzySet(gamesNamesArr);

    let name = document.getElementById("appHubAppName").innerText
    let gameData = null;

    let res = a.get(name);
    if (res.length !== 0) {
        let gameIndex = gamesNamesArr.indexOf(res[0][1]);
        gameData = {
            "gameData": gameArr[gameIndex],
            "prob": res[0][0]
        };
    }
    return gameData;
}
