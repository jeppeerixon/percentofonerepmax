const procent = ["120", "110", "100", "90", "80", "70", "60", "50" , "40" , "30"];


function myFunction () {

    let x = document.getElementById("weightSnatch").value;

    deleteOld();

    for (let i of procent) {
    let rundProcent = Math.round(x * (i/100))
    
    var z = document.createElement("TR");
    z.setAttribute("id", i);
    document.getElementById("formel").appendChild(z);

    var y = document.createElement("TD");
    var t = document.createTextNode(i + "% ");
    y.appendChild(t);
    document.getElementById(i).appendChild(y);

    var y = document.createElement("TD");
    var t = document.createTextNode(rundProcent + "kg");
    y.appendChild(t);
    document.getElementById(i).appendChild(y);
  }
}

function deleteOld() {
  const element = document.getElementById("formel");
  
  while (element.hasChildNodes()) {
  element.removeChild(element.firstChild);
}
}

//OM LOGON IN FÅR PLATS GÖR LITEN PLATE LOGO ISTÄLLET

