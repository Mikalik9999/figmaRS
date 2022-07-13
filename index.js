document.getElementById("menu").onclick = function() {open()};
document.getElementById("close").onclick = function() {close()};
document.onclick = function (e) {
    if (e.target.className !== "menuBurger" ) {
        close();
    }
};

function open() {
    document.getElementById("menu").style.display="none";
    alert('sdg');
    document.getElementById("navigationMenu").classList.add("show");
}
function close() {
    document.getElementById("navigationMenu").classList.add("transformation");
    function close() {
        document.getElementById("navigationMenu").classList.remove("show");
        document.getElementById("menu").style.display="block";
        document.getElementById("navigationMenu").classList.remove("transformation")
    }
    setTimeout(close, 1000);
}


