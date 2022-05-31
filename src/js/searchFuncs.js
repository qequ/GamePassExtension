function searchGameByName(arr, name) {

    let start = 0, end = arr.length - 1;
    // Iterate while start not meets end
    while (start <= end) {

        // Find the mid index
        let mid = Math.floor((start + end) / 2);
        // If element is present at mid, return True
        if (arr[mid][0] === name) return mid;

        // Else look in left or right half accordingly
        else if (arr[mid] < name)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return -1;
}

function searchGameData(gameArr) {
    function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }
    let name = document.getElementById("appHubAppName").innerText
    gameArr.sort(sortFunction);
    let gameData = null;

    let index = searchGameByName(gameArr, name);
    if (index !== -1) {
        gameData = gameArr[index];
    }
    return gameData;
}
