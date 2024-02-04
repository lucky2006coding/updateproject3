window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");
    }
}

document.addEventListener('click', e =>{
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropDown =>{
        if(dropDown === currentDropdown) return
        dropDown.classList.remove('active')
    })
})

function portfolio(){
    window.location = "portfolio.html";
}

function home(){
    window.location = "index.html";
}

function aboutus(){
    window.location = "aboutus.html";
}

function service(){
    window.location = "service.html";
}

function contactus(){
    window.location = "contactus.html";
}


const boxes = document.querySelectorAll('.visionbox')
window.addEventListener('scroll', checkBoxes)
checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
     const boxTop = box.getBoundingClientRect().top
     if(boxTop < triggerBottom){
        box.classList.add('show')
     }else{
        box.classList.remove('show')
     }

    })

}

const indeximageboxes = document.querySelectorAll('.imgvisionbox')
window.addEventListener('scroll', checkBoxes2)
checkBoxes2()

function checkBoxes2(){
    const triggerBottom = window.innerHeight / 5 * 4
    indeximageboxes.forEach(box => {
     const boxTop = box.getBoundingClientRect().top
     if(boxTop < triggerBottom){
        box.classList.add('show')
     }else{
        box.classList.remove('show')
     }

    })

}


const ceo1 = document.querySelectorAll('.ceo1')
window.addEventListener('scroll', checkBoxes3)
checkBoxes3()

function checkBoxes3(){
    const triggerBottom = window.innerHeight / 5 * 4
    ceo1.forEach(box => {
     const boxTop = box.getBoundingClientRect().top
     if(boxTop < triggerBottom){
        box.classList.add('show')
     }else{
        box.classList.remove('show')
     }

    })

}

const projecttext = document.querySelectorAll('.projecttext')
window.addEventListener('scroll', checkBoxes4)
checkBoxes4()

function checkBoxes4(){
    const triggerBottom = window.innerHeight / 5 * 4
    projecttext.forEach(box => {
     const boxTop = box.getBoundingClientRect().top
     if(boxTop < triggerBottom){
        box.classList.add('show')
     }else{
        box.classList.remove('show')
     }

    })

}

const projecttext1 = document.querySelectorAll('.projecttext1')
window.addEventListener('scroll', checkBoxes5)
checkBoxes5()

function checkBoxes5(){
    const triggerBottom = window.innerHeight / 5 * 4
    projecttext1.forEach(box => {
     const boxTop = box.getBoundingClientRect().top
     if(boxTop < triggerBottom){
        box.classList.add('show')
     }else{
        box.classList.remove('show')
     }

    })

}

const projectimg = document.querySelectorAll('.projectimg')
window.addEventListener('scroll', checkBoxes6)
checkBoxes6()

function checkBoxes6(){
    const triggerBottom = window.innerHeight / 5 * 4
    projectimg.forEach(box => {
     const boxTop = box.getBoundingClientRect().top
     if(boxTop < triggerBottom){
        box.classList.add('show')
     }else{
        box.classList.remove('show')
     }

    })

}

const smlist = document.querySelectorAll('.main-smlist')
window.addEventListener('scroll', checkBoxes7)
checkBoxes7()

function checkBoxes7(){
    const triggerBottom = window.innerHeight / 5 * 4
    smlist.forEach(box => {
     const boxTop = box.getBoundingClientRect().top
     if(boxTop < triggerBottom){
        box.classList.add('show')
     }else{
        box.classList.remove('show')
     }

    })

}

const cvbtntext = document.querySelectorAll('.cvbtntext')
window.addEventListener('scroll', checkBoxes8)
checkBoxes8()

function checkBoxes8(){
    const triggerBottom = window.innerHeight / 5 * 4
    cvbtntext.forEach(box => {
     const boxTop = box.getBoundingClientRect().top
     if(boxTop < triggerBottom){
        box.classList.add('show')
     }else{
        box.classList.remove('show')
     }

    })

}




const fotterrightbar = document.querySelectorAll('.fotterrightbar')
window.addEventListener('scroll', checkBoxes10)
checkBoxes10()

function checkBoxes10(){
    const triggerBottom = window.innerHeight / 5 * 4
    fotterrightbar.forEach(box => {
     const boxTop = box.getBoundingClientRect().top
     if(boxTop < triggerBottom){
        box.classList.add('show')
     }else{
        box.classList.remove('show')
     }

    })

}



