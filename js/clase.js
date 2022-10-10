const btnAbrirRegistro=
document.querySelector("#btn_registrarse");

const btnCerrar_Registro=
document.querySelector("#cerrar_registro");

const registro=
document.querySelector("#registrarse");
if(btnAbrirRegistro){
btnAbrirRegistro.addEventListener("click",()=>{
    registro.showModal();
})
}
if(btnCerrar_Registro){
    btnCerrar_Registro.addEventListener("click",()=>{
        registro.close();
    })  
}
const btnIniciarSesion=
document.querySelector("#iniciar_sesion");

const iniciosesio=
document.querySelector("#inicio_sesion");

const abrirsesio=
document.querySelector("#abrir_sesion");
if(btnIniciarSesion){
    btnIniciarSesion.addEventListener("click",()=>{
        iniciosesio.showModal();
    })
    }
    if(abrirsesio){
        abrirsesio.addEventListener("click",()=>{
            location.href="principal.html";
        
        })  
    }
