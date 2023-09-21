function getColor() {
    selectElement = document.querySelector('#colorList');
    output = selectElement.options[selectElement.selectedIndex].value;
    document.getElementById("ColorChanger").style.backgroundColor = output;
}