alert("Bienvenido al calculador del Indice de Masa Corporal")

let salir = "";

while (salir != "salir"){
    
    const nombre = prompt("Ingrese su nombre por favor");
    console.log(nombre);
    
    const pesoCorporal = parseInt(prompt("Ingrese su peso corporal"));
    console.log(pesoCorporal);

    const altura = parseInt(prompt("Ingrese su altura en cm"));
    console.log(altura);

    const calcularIMC = (pesoCorporal, altura)=>{

        altura=altura/100;
    
        let resultadoIMC = pesoCorporal /(altura*altura);
    
        return (resultadoIMC).toFixed(1);
    
    }

    const mostrarIMC= calcularIMC(pesoCorporal,altura);
    console.log(mostrarIMC);

    switch(true){
        case mostrarIMC <= 15:
            alert("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con delgades muy severa");
            console.log("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con delgades muy severa")
            break;
        case mostrarIMC < 16:
            alert("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con delgades severa");
            console.log("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con delgades severa");
            break;
        case mostrarIMC < 18.5:
            alert("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con delgades");
            console.log("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con delgades");
            break;
        case mostrarIMC < 25:
            alert("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta saludable");
            console.log("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta saludable");
            break;
        case mostrarIMC < 25:
            alert("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con sobrepeso");
            console.log("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con sobrepeso");
            break;   
        case mostrarIMC < 35:
            alert("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con obesidad moderada");
            console.log("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con obesidad moderada");
            break;
        case  mostrarIMC < 40:     
            alert("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con obesidad severa");
            console.log("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con obesidad severa");
            break;
            default:     
            alert("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con obesidad muy severa obesidad Morbida");
            console.logalert("Señor/a "+ nombre +" su IMC es: "+mostrarIMC+" Usted esta con obesidad muy severa obesidad Morbida");
    
    }

    salir = prompt(' Si desea salir ingrese la palabra "salilr"');

}












