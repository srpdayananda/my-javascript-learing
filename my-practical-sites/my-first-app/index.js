const nameArray = [];

const displayDetails = () => {
    const nameInput = document.getElementById('nameInput');
    nameArray.push(nameInput.value)
    nameInput.value = '';

    const list = document.getElementById('list');

    let strList = '<ul>';
    let i = nameArray.length;
    while (i > 0) {
        const name = `<li>${nameArray[i - 1]}</li>`;
        strList += name;
        i--;
    }
    strList += '</ul>';
    list.innerHTML = strList;

}

const addButton = document.getElementById("addButton");
addButton.addEventListener("click", displayDetails)



nameInput.addEventListener('keyup', (event) => {
    console.log()
})


