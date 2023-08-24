const nav = document.querySelector('[data-encabezado]');
let animado = document.querySelectorAll(".animado");


/* funcion para manejar desplazamiento suave al hacer clic sobre un enlace */

function smoothScroll(target){
    const targetElement = document.querySelector(target);
    if(targetElement){
        window.scrollTo({
            behavior: 'smooth', 
            top: (targetElement.offsetTop - 400),
        });
    }
}

const navLinks = document.querySelectorAll('.nav-list');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        

        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScroll(target);
        console.log(MenuLateral)


        
    })
})



/* Abrir Menu Hamburguesa */
const menuBurguer = document.querySelector('.encabezado__menuBurguer');
const encabezado__container = document.querySelector('.encabezado__container');
menuBurguer.addEventListener('click', () => {

    /* contenedor absoluto */
    const newDiv = document.createElement('div');
    newDiv.classList.add('navBarMovil')
    const navBar = `
    <div>
        <button class='nav-list boton cerrar'>Cerrar</button>
        <nav>
            <ul>
                <li><a class="nav-list" href="#sobreMi">Sobre Mi</a></li>
                <li><a class="nav-list" href="#skills">Skills</a></li>
                <li><a class="nav-list" href="#hobbies">Hobbies</a></li>
                <li><a class="nav-list" href="#formacion">Formacion</a></li>
                <li><a class="nav-list">Jhon.naib327@gmail.com</a></li>
            </ul>
        </nav>
    </div>
    `;

    newDiv.innerHTML = navBar;
    encabezado__container.appendChild(newDiv);


    




/* Cerrar Menu Hamburguersa */

    
    const cerrarMenu = document.querySelectorAll('.nav-list')

    cerrarMenu.forEach(target => {
        target.addEventListener('click', () => {
            newDiv.parentNode.removeChild(newDiv)
        })
    })


})




/* Formulario */
/* const nombre = document.querySelector('[data-contactoNombre]');
const email = document.querySelector('[data-contactoEmail]');
const telefono = document.querySelector('[data-contactoTelefono]');
const asunto = document.querySelector('[data-contactoAsunto]');
const btn_contacto = document.querySelector('[data-btn-contacto]');

btn_contacto.addEventListener('click', () => {

    console.log('Correo enviado..')
    nombre.value = '';
    email.value = '';
    telefono.value = '';
    asunto.value = '';
}) */




let experienciaDetalle = document.querySelectorAll('.experiencia__detalles')

for(var i=0; i<experienciaDetalle.length; i++){

    experienciaDetalle[i].addEventListener('mouseenter', (e) => {

        e.target.style.opacity = 1;
        e.target.classList.toggle('animacion');
        console.log(e.target)
      
    })

    experienciaDetalle[i].addEventListener('mouseleave', (e) => {
        
        e.target.style.opacity = 0;
        e.target.classList.toggle('animacion')
        console.log(e.target);
      
    })
}





window.addEventListener('scroll', function(){
    nav.classList.toggle('active', this.window.scrollY > 0)
    mostrarScroll();

});


function mostrarScroll(){
    //Calcula la altura
    let scrollTop = document.documentElement.scrollTop;
    
    
    for(var i=0; i < animado.length; i++){
        //Calcula la alura desde inicio hasta el elemento seleccionado
        let alturaAnimado = animado[i].offsetTop;
        
        if(alturaAnimado - 900 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add('mostrarArriba');
        }

        if(alturaAnimado -900 > scrollTop){
            animado[i].style.opacity = 0;
        }
    }
}
