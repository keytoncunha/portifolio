

// CONNFIGURAÇÕES MENU

const cancel=window.document.querySelector("#cancel")
const burguer=window.document.querySelector("#burguer")
const nav=window.document.querySelector("#nav")

cancel.addEventListener('click',()=>{
    nav.setAttribute('class','menu_none')
})
burguer.addEventListener('click',()=>{
    nav.classList.remove('menu_none')
})
nav.addEventListener('mouseleave',()=>{
    if(window.innerWidth < 768){
        nav.setAttribute('class','menu_none')
    }
})