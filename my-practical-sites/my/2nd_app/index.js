function clear() {
    document.getElementById("clear").value = ""
}
function number(num) {
    document.getElementsByClassName("number").value += num
}
let numbers = document.getElementsByClassName("number");
numbers.addEventListener("click", number);