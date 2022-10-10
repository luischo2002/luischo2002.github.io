const btnvolver=
document.querySelector("#btn_cerrar_sesion");

const dialogovolver=
document.querySelector("#volver");

const cancela=
document.querySelector("#cancelar");

const volveratra=
document.querySelector("#volver_atras");

const añadirsaldo=
document.querySelector("#saldo");

const saldo_boton=
document.querySelector("#añadir_saldo");

const saldoo=
document.querySelector("#saldooo");

if(btnvolver){
    btnvolver.addEventListener("click",()=>{
        dialogovolver.showModal();
    })
    }
    if(cancela){
        cancela.addEventListener("click",()=>{
            dialogovolver.close();
        })
        }
        if(volveratra){
            volveratra.addEventListener("click",()=>{
                location.href="index.html";
            })
            }
            if(saldoo){
                saldoo.addEventListener("click",()=>{
                    añadirsaldo.showModal();
                })
                }  
                if(saldo_boton){
                    saldo_boton.addEventListener("click",()=>{
                        añadirsaldo.close();
                    })
                    }  