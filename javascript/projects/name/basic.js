function nameShow() {
    let name = prompt(`what is your name?`);
    document.getElementById("showname").innerText = `Hello, ${name}`;
}