
function openMenu() {
    document.getElementsByClassName("menu")[0].onclick = function () {
        document.getElementsByClassName("menuArea")[0].style.top = "0px";
    }
}

function closeMenu() {
    document.getElementsByClassName("exitMenu")[0].onclick = function () {
        document.getElementsByClassName("menuArea")[0].style.top = "-100%";
    }
}

function autoFill() {
    document.getElementById("inputName").value = document.getElementById("name").innerText
    document.getElementById("inputLastName").value = document.getElementById("lastName").innerText
    document.getElementById("inputName").value = document.getElementById("name").innerText
}
