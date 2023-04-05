let formularioContacto = document.getElementById("contactForm");
let clientName = document.getElementById("clientName");
let clientEmail = document.getElementById("clientEmail");
let clientSubject = document.getElementById("clientSubject");
let clientBody = document.getElementById("bodyText");

function alerts(bodyAlert) {
  console.log(bodyAlert);

  Swal.fire({
    position: "center",
    icon: bodyAlert.icon,
    title: bodyAlert.title,
    text: `${bodyAlert.text}: ${bodyAlert.name}`,
    showConfirmButton: false,
    timer: 5000,
  });
}

const sendEmail = (bodyAlert) => {
  let params = {
    name: clientName.value,
    email: clientEmail.value,
    subject: clientSubject.value,
    message: clientBody.value,
  };

  let serviceID = "service_zte3jwt";
  let templateID = "template_avh19j4";

  emailjs
    .send(serviceID, templateID, params)
    .then(function (response) {
      alerts(bodyAlert);
      //console.log(JSON.stringify(response));
    })
    .catch(function (error) {
      alert("Error" + JSON.stringify(error));
    });
};

formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();

  let bodyAlert = {
    icon: "success",
    title: "Consulta cargada correctamente",
    text: "Muchas gracias",
    name: clientName.value,
  };

  try {
    // Envía el correo electrónico utilizando EmailJS.
    sendEmail(bodyAlert)
  } catch (e) {
    bodyAlert = {
      icon: "error",
      title: "No se pudo cargar su consulta",
      text: "Disculpe las molestias, por favor contactese por mail a info@cenedu.org",
      name: clientEmail.value,
    };
    alerts(bodyAlert);
    //console.log(e);
  }
  formularioContacto.reset();
});