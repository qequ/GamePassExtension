function insertData(divData) {
    let sheetColumns = [null, "System", null, "Status", "Added", "Removed"];


    let element = document.getElementsByClassName("rightcol game_meta_data")[0];
    let block_data = document.createElement("div");
    block_data.className = "gamepass_extension_data";

    let text_div = document.createElement("div");
    text_div.className = "text_div";

    if (!divData) {
        let p_tag = document.createElement("p");
        p_tag.textContent = "Game Doesn't seem to be in Game Pass";
        text_div.append(p_tag);

    }
    else {
        // add divs with status of the game in game pass
        let div_rows = document.createElement("div");

        for (const key of sheetColumns) {
            if (key && divData[sheetColumns.indexOf(key)]) {
                let p_row = document.createElement("p");
                let span_data = document.createElement("span");

                span_data.textContent = key + ": ";
                let b_data = document.createElement("b");
                b_data.textContent = divData[sheetColumns.indexOf(key)];
                p_row.append(span_data);
                p_row.append(b_data);

                div_rows.append(p_row);

            }
        }
        text_div.append(div_rows);
    }

    let image_div = document.createElement("div");
    image_div.className = "div_image";

    let a_tag = document.createElement("a");
    let name = document.getElementById("appHubAppName").innerText
    a_tag.href = "https://www.xbox.com/Search?q=" + name.replaceAll(" ", "+");
    let img_elem = document.createElement("img");
    img_elem.setAttribute("src", browser.extension.getURL("src/assets/xboxicon.png"));

    a_tag.appendChild(img_elem);
    image_div.append(a_tag);

    block_data.append(text_div);
    block_data.append(image_div);

    element.prepend(block_data);

}