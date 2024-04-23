/*============ NAV-MENU =============*/

const enlaces = document.getElementsByClassName('enlaces')[0];

const menu = document.getElementsByClassName('menu')[0];

const menuextra = document.getElementById('menu');

let abierto = false;

const toggleMenu = () =>{
    enlaces.classList.toggle('enlaces2')
    enlaces.style.transition = 'transform 0.5s ease-in-out'
}

menu.addEventListener('click', function(e){
    toggleMenu();
    if (document.querySelector('.enlaces.enlaces2')){
        abierto = true;
    }else{
        abierto = false;
    }
})

window.addEventListener('click', function(e){

    this.console.log(e.target)
    if(abierto){
        if(e.target !== menuextra){
            toggleMenu();
            abierto = false;
        }
    }

})

window.addEventListener('resize', function(){

    if(screen.width > 800){
        if (abierto) {
            toggleMenu();
            enlaces.style.transition = 'none';
            abierto = false
        }
    }   

})

window.addEventListener('scroll', function(){

    if (abierto) {
        toggleMenu();
        abierto = false
    }
})

window.addEventListener('touchmove', function(){

    if (abierto) {
        toggleMenu();
        abierto = false
    }
})


/*==================== SHOW SCROLL up ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 500) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*============ MODAL =============*/
// let cerrar = document.querySelectorAll(".close")[0];
//     abrir = document.querySelectorAll(".servicios__cards")[0];
//     modal = document.querySelectorAll(".servicios__modal")[0];
//     modalc = document.querySelectorAll(".servicios__modal-container")[0];
//     img = document.querySelectorAll(".modal__img")[0];


// abrir.addEventListener("click",function(e){
//     e.preventDefault();
//     modalc.style.opacity="1"
//     img.style.transform="scale(1)"
//     modalc.style.visibility="visible"
//     modal.classList.toggle("modal-close")
//     img.classList.toggle("open")
// });

// cerrar.addEventListener("click",function(e){
//     modal.classList.toggle("modal-close")
//     // img.style.transform="scale(0)"
//     // img.classList.toggle("open")
//     setTimeout(function(){
//         modalc.style.opacity="0"
//         modalc.style.visibility="hidden"
//     },1000)
// });

// window.addEventListener("click",function(e){
//     if(e.target == modalc){
//         modal.classList.toggle("modal-close")
//         // img.style.transform="scale(0)"
//         // img.classList.toggle("open")
//         setTimeout(function(){
//             modalc.style.opacity="0"
//             modalc.style.visibility="hidden"
//         },1500)
//     }
// });




    /*================================== MODAL Contactos =================================*/
/*============ MODAL TELEFONOS =============*/
let cerrar4 = document.querySelectorAll(".close-telefonos")[0];
abrirc4 = document.querySelectorAll(".cards__contac_telefonos")[0];
modal4 = document.querySelectorAll(".telefonos")[0];
modalc4 = document.querySelectorAll(".modal__telefonos")[0];
img4 = document.querySelectorAll(".modal__img-telefonos")[0];

abrirc4.addEventListener("click",function(e){
    e.preventDefault();
    modalc4.style.opacity="1"
    img4.style.transform="scale(1)"
    modalc4.style.visibility="visible"
    modal4.classList.toggle("modals-close")
    img4.classList.toggle("open")
});

cerrar4.addEventListener("click",function(){
    modal4.classList.toggle("modals-close")
    // img.style.transform="scale(0)"
    // img.classList.toggle("open")
    setTimeout(function(){
        modalc4.style.opacity="0"
        modalc4.style.visibility="hidden"
    },400)
});

window.addEventListener("click",function(e){
    if(e.target == modalc4){
        modal4.classList.toggle("modals-close")
        // img.style.transform="scale(0)"
        // img.classList.toggle("open")
        setTimeout(function(){
            modalc4.style.opacity="0"
            modalc4.style.visibility="hidden"
        },400)
    }
});

/*============ MODAL DIRECCION =============*/
let cerrar5 = document.querySelectorAll(".close-direccion")[0];
abrirc5 = document.querySelectorAll(".cards__contac_direccion")[0];
modal5 = document.querySelectorAll(".direccion")[0];
modalc5 = document.querySelectorAll(".modal__direccion")[0];
img5 = document.querySelectorAll(".modal__img-direccion")[0];

abrirc5.addEventListener("click",function(e){
    e.preventDefault();
    modalc5.style.opacity="1"
    img5.style.transform="scale(1)"
    modalc5.style.visibility="visible"
    modal5.classList.toggle("modals-close")
    img5.classList.toggle("open")
});

cerrar5.addEventListener("click",function(){
    modal5.classList.toggle("modals-close")
    // img.style.transform="scale(0)"
    // img.classList.toggle("open")
    setTimeout(function(){
        modalc5.style.opacity="0"
        modalc5.style.visibility="hidden"
    },400)
});

window.addEventListener("click",function(e){
    if(e.target == modalc5){
        modal5.classList.toggle("modals-close")
        // img.style.transform="scale(0)"
        // img.classList.toggle("open")
        setTimeout(function(){
            modalc5.style.opacity="0"
            modalc5.style.visibility="hidden"
        },400)
    }
});

/*============ MODAL HORARIO =============*/
let cerrar6 = document.querySelectorAll(".close-horarios")[0];
abrirc6 = document.querySelectorAll(".cards__contac_horarios")[0];
modal6 = document.querySelectorAll(".horarios")[0];
modalc6 = document.querySelectorAll(".modal__horarios")[0];
img6 = document.querySelectorAll(".modal__img-horarios")[0];

abrirc6.addEventListener("click",function(e){
    e.preventDefault();
    modalc6.style.opacity="1"
    img6.style.transform="scale(1)"
    modalc6.style.visibility="visible"
    modal6.classList.toggle("modals-close")
    img6.classList.toggle("open")
});

cerrar6.addEventListener("click",function(){
    modal6.classList.toggle("modals-close")
    // img.style.transform="scale(0)"
    // img.classList.toggle("open")
    setTimeout(function(){
        modalc6.style.opacity="0"
        modalc6.style.visibility="hidden"
    },400)
});

window.addEventListener("click",function(e){
    if(e.target == modalc6){
        modal6.classList.toggle("modals-close")
        // img.style.transform="scale(0)"
        // img.classList.toggle("open")
        setTimeout(function(){
            modalc6.style.opacity="0"
            modalc6.style.visibility="hidden"
        },400)
    }
});

/*============ MODAL CORREO =============*/
let cerrar7 = document.querySelectorAll(".close-correo")[0];
abrirc7 = document.querySelectorAll(".cards__contac_correo")[0];
modal7 = document.querySelectorAll(".correo")[0];
modalc7 = document.querySelectorAll(".modal__correo")[0];
img7 = document.querySelectorAll(".modal__img-correo")[0];

abrirc7.addEventListener("click",function(e){
    e.preventDefault();
    modalc7.style.opacity="1"
    img7.style.transform="scale(1)"
    modalc7.style.visibility="visible"
    modal7.classList.toggle("modals-close")
    img7.classList.toggle("open")
});

cerrar7.addEventListener("click",function(){
    modal7.classList.toggle("modals-close")
    // img.style.transform="scale(0)"
    // img.classList.toggle("open")
    setTimeout(function(){
        modalc7.style.opacity="0"
        modalc7.style.visibility="hidden"
    },400)
});

window.addEventListener("click",function(e){
    if(e.target == modalc7){
        modal7.classList.toggle("modals-close")
        // img.style.transform="scale(0)"
        // img.classList.toggle("open")
        setTimeout(function(){
            modalc7.style.opacity="0"
            modalc7.style.visibility="hidden"
        },400)
    }
});