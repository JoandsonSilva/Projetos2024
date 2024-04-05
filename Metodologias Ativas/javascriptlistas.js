function mostrarAulas() {
    var opcaoSelecionada = document.getElementById("opcoesAula").value;
    var aulas = document.querySelectorAll(".aula");
    
  
    aulas.forEach(function(aula) {
        aula.style.display = "none";
    });

    
    document.querySelector("." + opcaoSelecionada).style.display = "block";
}


function preencherTemas() {
    var opcoesAula = document.getElementById("opcoesAula");
    var opcoesTema = document.getElementById("opcoesTema");
    var temas = [];

  
    opcoesTema.innerHTML = "";

    
    switch (opcoesAula.value) {
        case "aulaH":
            
            temas = ["Tema 1", "Tema 2", "Tema 3"];
            break;
        case "aulaComRotação":
           
            temas = ["Tema A", "Tema B", "Tema C"];
            break;
        case "aulaComSalaInvertida":
           
            temas = ["Tema X", "Tema Y", "Tema Z"];
            break;
        default:
            break;
    }

    
    temas.forEach(function (tema) {
        var option = document.createElement("option");
        option.text = tema;
        opcoesTema.add(option);
    });

   
    document.getElementById("topicosAula").style.display = "block";
}


document.getElementById("opcoesAula").addEventListener("change", preencherTemas);


preencherTemas();