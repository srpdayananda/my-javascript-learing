const nameArray = [
    "ruwan pradeep dayananda",
    "ishara madushani dayananda",
    "sudarshana pradeep dayananda",
    "ruwan bandara",
    "sudarshana bandara"
];
let filteredNames = [];

const list = document.getElementById('list');

const createList = () => {
    let str = '<ul>'
    for (const name of filteredNames) {
        str += `<li>${name}</li>`;
    }
    str += '</ul>';
    list.innerHTML = str;
}
const load = () => {
    filteredNames = nameArray;
    createList();
}

load();

document.getElementById('input').addEventListener('keyup', (event) => {
    const value = event.target.value;
    if (value) {
        filteredNames = nameArray.filter((name) => {
            return name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
        })
    } else {
        filteredNames = nameArray;
    }
    createList();
})



