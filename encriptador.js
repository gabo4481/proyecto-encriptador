let resultado = document.getElementById("texto-desencriptado");

function desactivarcopiar(){
      document.getElementById("boton-copia").removeAttribute("disabled");
}


function encriptar(){
    let texto = sacartextocaja();
    resultado.value = textoEncriptado(texto);     
}

function desencriptar(){
    let texto = sacartextocaja();
    resultado.value = textoDesencriptado(texto);
}

function mostrartexarea(){
    document.getElementById("contenedor-copiado").style.display="block";
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
            desactivarcopiar()
            mostrartexarea();
            return frase.value;
        }else{
            alert("Solo se Aceptan Minusculas y Sin Acentos ni Caracteres Especiales.");
        }
    }
    

}

function textoEncriptado(frase){
    var texto = frase;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function textoDesencriptado(frase){
    var texto = frase;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;
}

const botonCopiar = document.querySelector(".boton-copiar");
    botonCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".texto-copia");
        contenido.select();
        document.execCommand("copy");
        alert("Texto Copiado Con Exito!")
    }
    )


