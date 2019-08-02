
function exibeHabilidades(usuarios) {
  for (usuario of usuarios) {
    var str1 = "O ";
    var str2 = usuario.nome;
    var str3 = " possui as habilidades: ";
    var str4 =  usuario.habilidades.join(", ");
    var str5 = ".";
    var res = str1.concat(str2, str3,str4,str5);
    
    return res;   
  }
}

var usuarios = [
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function myfunction() {
  document.getElementById("demo").innerHTML = exibeHabilidades(usuarios);
  }


