function sendEmail() { 
  var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
    cadena = document.getElementById("email_contacto").value;
    mensaje = document.getElementById("mensaje").value;
    nombre = document.getElementById("nombre").value;  
    apellido =  document.getElementById("apellido").value; 
    Asunto = document.getElementById("asunto").value;

    if  (cadena.indexOf("@") > -1 ){
        Email.send({ 
        Host: "smtp.gmail.com", 
        port:       465,
        Username: "pedro.jerez.u@gmail.com", 
        Password: "178387316", 
        To: 'val.gazzu@gmail.com', 
        From: cadena, 
        Subject: Asunto, 
        Body: 'Nombre Cliente: ' +nombre + ' ' + apellido + '\n'+'Mensaje: ' + mensaje , 
        
    }) 
        limpiar();
        alert("Mail enviado correctamente") 
        .then(function (message)
        { 
        }); 
    } 
    else{   
        document.getElementById("email_contacto").focus();
        alert("Correo Erroneo");
        return false;
    }

} 

function soloLetras(e) {
    var key = e.keyCode || e.which,
        tecla = String.fromCharCode(key).toLowerCase(),
        letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
        especiales = [8, 37, 39, 46],
        tecla_especial = false;
    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
}

function limpiar(){
   /*limpia casillas */  document.getElementById("email_contacto").value  = "";
   /*limpia casillas */  document.getElementById("mensaje").value = "";
   /*limpia casillas */  document.getElementById("nombre").value  = "";
   /*limpia casillas */  document.getElementById("apellido").value = "";
   /*limpia casillas */  document.getElementById("asunto").value = "";
}



/* Alternar entre agregar y eliminar la clase "responsive" a topnav cuando el usuario hace clic en el ícono */
function myFunction() {
    var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
}
