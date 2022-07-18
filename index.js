document.getElementById("menu").onclick = function() {open()};
document.getElementById("close").onclick = function() {close()};
document.getElementById("nextRight").onclick = function() {right()};
document.getElementById("nextLeft").onclick = function() {left()};
document.onclick = function (e) {
    if (e.target.className !== "menuBurger" ) {
        close();
    }
};

function open() {
    document.getElementById("menu").style.display="none";
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

function right () {
    if (document.getElementById("spain").innerText === 'JAPAN')
    {
        document.getElementById("country").classList.add("showUsa");
        document.getElementById("spain").innerText= 'USA';
        document.getElementById("nextSpain").style.background = "rgba(242, 120, 92, 0.5)";
        document.getElementById("nextUsa").style.background = "#F2785C";
        document.getElementById("nextJapan").style.background = "rgba(242, 120, 92, 0.5)";
    } else if (document.getElementById("spain").innerText === 'SPAIN'){
    document.getElementById("country").classList.add("showJapan");
    document.getElementById("spain").innerText= 'JAPAN';
    document.getElementById("nextSpain").style.background = "#F2785C";
    document.getElementById("nextJapan").style.background = "rgba(242, 120, 92, 0.5)";
    }
}

function left () {
    if (document.getElementById("spain").innerText === 'JAPAN')
    {
        document.getElementById("country").classList.remove("showUsa");
        document.getElementById("country").classList.remove("showJapan");
        document.getElementById("spain").innerText= 'SPAIN';
        document.getElementById("nextSpain").style.background = "rgba(242, 120, 92, 0.5)";
        document.getElementById("nextJapan").style.background = "#F2785C";
        document.getElementById("nextUsa").style.background = "rgba(242, 120, 92, 0.5)";
    } else if (document.getElementById("spain").innerText === 'USA'){
    document.getElementById("country").classList.remove("showUsa");
    document.getElementById("country").classList.add("showJapan");
    document.getElementById("spain").innerText= 'JAPAN';
    document.getElementById("nextSpain").style.background = "#F2785C";
    document.getElementById("nextJapan").style.background = "rgba(242, 120, 92, 0.5)"
    document.getElementById("nextUsa").style.background = "rgba(242, 120, 92, 0.5)";
    }
}


