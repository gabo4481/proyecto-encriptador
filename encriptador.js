let resultado = document.getElementById("texto-desencriptado");
let desactivadorCopia =  document.getElementById("boton-copia").removeAttribute("disabled");

function encriptar(){
    
    let texto = sacartextocaja();
    resultado.innerHTML = textoEncriptado(texto);
    desactivadorCopia;
       
}

function desencriptar(){
    let texto = sacartextocaja();
    resultado.innerHTML = textoDesencriptado(texto);
    desactivadorCopia;
}

function mostrarTexto(){
    document.getElementById("texto-desencriptado").style.display = "static"
}

function ocultar(){
    document.getElementById("muneco").style.display = "none";
    document.getElementById("parrafos-section2").style.display = "none";
}

function sacartextocaja(){
    let frase = document.getElementById("frase");
    let is_valid = true;
    if(frase.value.length == 0){
        alert("Ingrese un Texto Por Favor.")
    }else{
        for (let i = 0; i < frase.value.length; i++) {
            let char_code = frase.value.charCodeAt(i);
            if ((char_code >= 97 && char_code <= 122) || char_code == 32 || char_code == 10){
              is_valid = true;
            } else {
              is_valid = false;
              break;
            }
          }
        
        if(is_valid){
            ocultar();
            mostrarTexto();
            return frase.value;
        }else{
            alert("Solo se Aceptan Minusculas y Sin Acentos ni Caracteres Especiales.");
        }
    }
    

}
function textoEncriptado(frase){
    let fraseEncriptada = frase.replace(/e/img,"enter");
    fraseEncriptada = fraseEncriptada.replace(/i/img,"imes");
    fraseEncriptada = fraseEncriptada.replace(/a/img,"ai");
    fraseEncriptada = fraseEncriptada.replace(/o/img,"ober");
    fraseEncriptada = fraseEncriptada.replace(/u/img,"ufat");
    return fraseEncriptada;
}

function textoDesencriptado(frase){
    let fraseDesencriptada = frase.replace(/enter/img,"e");
    fraseDesencriptada = fraseDesencriptada.replace(/imes/img,"i");
    fraseDesencriptada = fraseDesencriptada.replace(/ai/img,"a");
    fraseDesencriptada = fraseDesencriptada.replace(/ober/img,"o");
    fraseDesencriptada = fraseDesencriptada.replace(/ufat/img,"u");
    return fraseDesencriptada;
}

const botonCopiar = document.querySelector(".boton-copiar");
    botonCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".texto-copia").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola")
    })

