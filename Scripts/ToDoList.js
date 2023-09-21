function pushList() {
    let view = document.getElementById("listThings");
    let newTd = document.createElement("li");
    var inputText = document.getElementById("addToList").value;
    var node = document.createTextNode(inputText);
    newTd.appendChild(node);
    view.appendChild(newTd);
}