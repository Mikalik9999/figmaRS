document.getElementById("menu").onclick = function() {open()};
document.getElementById("close").onclick = function() {close()};

function open() {
    document.getElementById("menu").style.display="none";
    document.getElementById("navigationMenu").classList.toggle("show");
}
function close() {
    document.getElementById("navigationMenu").classList.toggle("closeNavi");
    document.getElementById("menu").style.display="block";
}