// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5


function button1() {
    var temp = document.getElementById("inp3")
    var tempo = temp.value

    var Adult = document.getElementById("inp1")
    var Adul = Adult.value

    var Crianca = document.getElementById("inp2")
    var Criancas = Crianca.value

    var QuatFinal1 = document.getElementById("Quantidade-Final")
    var QuatFinal2 = document.getElementById("Quantidade-Final2")

    if(tempo < 6) {

    var ResCarne = Adul * 400

    var ResCarneCriancas = (Adul * 400) * 0.5
    var ResCarneCrianca = ResCarneCriancas * Criancas
    var ResCarneTot = ResCarne + ResCarneCrianca

    var ResCerveja = Adul * 1200

    var ResRefriAgua = Adul * 1000

    var ResRefriAguaCriancas = (Adul * 1000) * 0.5
    var ResRefriAguaCrianca = ResRefriAguaCriancas * Criancas
    var ResRefriAguaTot = ResRefriAgua + ResRefriAguaCrianca

    console.log(ResCarne) //Só para verificar
    console.log(ResCarneCrianca) //Só para verificar
    console.log(ResCerveja) //Só para verificar
    console.log(ResRefriAgua) //Só para verificar
    console.log(ResRefriAguaCrianca) //Só para verificar

    QuatFinal1.innerHTML = `<p>${ResCarneTot / 1000} Kg de carne e ${ResCerveja / 1000} L de cerveja</p>`
    QuatFinal2.innerHTML += `<p>${ResRefriAguaTot / 1000} L de água e refrigerante</p>`
    }
    else {

        var ResCarne = Adul * 650

        var ResCarneCriancas = (Adul * 650) * 0.5
        var ResCarneCrianca = ResCarneCriancas * Criancas
        var ResCarneTot = ResCarne + ResCarneCrianca

        var ResCerveja = Adul * 2000

        var ResRefriAgua = Adul * 1500

        var ResRefriAguaCriancas = (Adul * 1500) * 0.5
        var ResRefriAguaCrianca = ResCarneCriancas * Criancas
        var ResRefriAguaTot = ResRefriAgua + ResRefriAguaCrianca

        console.log(ResCarne) //Só para verificar
        console.log(ResCarneCrianca) //Só para verificar
        console.log(ResCerveja) //Só para verificar
        console.log(ResRefriAgua) //Só para verificar
        console.log(ResRefriAguaCrianca) //Só para verificar

        QuatFinal1.innerHTML = `<p>${ResCarneTot / 1000} Kg de carne e ${ResCerveja / 1000} L de cerveja</p>`
        QuatFinal2.innerHTML += `<p>${ResRefriAguaTot / 1000} L de água e refrigerante</p>`
    }
}

function recarregar() {
    window.location.reload(true);
}