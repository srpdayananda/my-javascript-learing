const button = document.getElementById('button');
button.addEventListener('click', () => {
    const Input = document.getElementById('nameInput');
    const name = Input.value;
    const message = name ? `Hello ${name}` : 'enter your name';
    alert(message);
});
