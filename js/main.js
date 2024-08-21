"use strict"

const MAX_PAGE = 5
const MIN_PAGE = 1

let page = 1

if (localStorage.getItem("page")) {

    page = parseInt(localStorage.getItem("page"))

}

document.querySelector(".btn-next").addEventListener("click", () => {

    if (page < MAX_PAGE) {
        page++
        app()
    }

})

document.querySelector(".btn-prev").addEventListener("click", () => {
    
    if (page > MIN_PAGE) {
        page--
        app()
    }

})

function app() {

    localStorage.setItem("page", page)

    if (page == MIN_PAGE) 
        document.querySelector(".btn-prev").setAttribute("disabled", true)
    else
        document.querySelector(".btn-prev").removeAttribute("disabled")

    if (page == MAX_PAGE) 
        document.querySelector(".btn-next").setAttribute("disabled", true)
    else
        document.querySelector(".btn-next").removeAttribute("disabled")

    const infos = [...document.querySelectorAll(".container-info")]

    const pages = [...document.querySelectorAll(".list-container")]

    infos[0].style.display = page == 1 ? "flex" : "none"
    infos[1].style.display = page != 1 ? "flex" : "none"

    pages.forEach(p => p.style.display = p.id == `page-${page}` ? "flex" :  "none")    

    document.querySelector(".footer-info").textContent = `Página: ${page}/5 - usuário: ricardo.kondo - 12/08/2024 13:54:02 `

}

app()