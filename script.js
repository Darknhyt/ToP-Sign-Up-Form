let darkmode = false;

document.getElementById("color").addEventListener("click", () => {
    if (darkmode) {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#FFF";
        darkmode = false;
    } else {
        document.body.style.backgroundColor = "#FFF";
        document.body.style.color = "#000";
        darkmode = true;
    }
})