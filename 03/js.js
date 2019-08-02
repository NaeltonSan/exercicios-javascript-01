var skills = ["Javascript", "ReactJS", "React Native"];
function temHabilidade(skills) {
  return skills.indexOf("Java") !== -1;
}
function myfunction() {
document.getElementById("demo").innerHTML = temHabilidade(skills);
}

// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var elemento = 'a';
// var idx = array.indexOf(elemento);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(elemento, idx + 1);
// }
// function myfunction() {
// document.getElementById("demo").innerHTML = indices;
// }
