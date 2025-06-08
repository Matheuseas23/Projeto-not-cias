
const botaoAbrir = document.querySelector(".header-mobíle > button")
const botaoFechar = document.querySelector(".header-mobíle > nav > button")
const botaoAbrir = document.querySelector("header > button")
const botaoFechar = document.querySelector("header nav button")



const body = document.querySelector("body")
const nav = document.querySelector(".header-mobíle > nav")
const nav = document.querySelector("header .mobíle")


botaoAbrir.addEventListener('click', AbrirMenu)
botaoFechar.addEventListener('click', fecharMenu)
botaoFechar.addEventListener('click', fecharMenu)

function AbrirMenu() {
    body.classList.toggle("escurecer")
    nav.classList.add("abrir")
    nav.classList.add("abrir")
}


function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}
