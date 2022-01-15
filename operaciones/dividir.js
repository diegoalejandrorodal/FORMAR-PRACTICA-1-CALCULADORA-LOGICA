function dividir ( a , b ) {      
    if ((a > 0 ) && ( b > 0)) 
    {   
        let resultado = a / b ;   
        return console.log("la division es : " + resultado );    
    } else {
     return console.log("Ingrese un valor mayor a cero" );     
    }
    }
    module.exports = dividir;