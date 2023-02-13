// const form = document.querySelector('#form');
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const data = new FormData(form);
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'diegodiazrodas@gmail.com');
//   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//   xhr.send(new URLSearchParams(data).toString());
//   console.log(xhr.send(new URLSearchParams(data).toString()))
// });

let formularioContacto = document.getElementById("formulario");
let consultas = [];
let idConsulta = 1;

const traerConsultasDeLS = () => {
  if (localStorage.getItem("consultas")) {
    consultas = JSON.parse(localStorage.getItem("consultas")); 
    consultas.forEach(() => idConsulta++); 
  }
};

traerConsultasDeLS();

const crearNuevaConsulta = () => {
  consultas = JSON.parse(localStorage.getItem("consultas")) || [];

  let consulta = {
    nombre: document.getElementById("nombreCliente").value,
    // apellido: document.getElementById("apellidoCliente").value,
    email: document.getElementById("emailCliente").value,
    asunto: document.getElementById("asuntoCliente").value,
    // actividad: document.getElementById("actividad").value,
    texto: document.getElementById("textoConsultas").value,
    id: idConsulta,
  };

  idConsulta++;

  consultas.push(consulta);
};

guardarFormularioLocalStorage = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    crearNuevaConsulta();
    guardarFormularioLocalStorage("consultas", JSON.stringify(consultas));

    let { nombre } = consultas.find(
      (persona) =>
        persona.nombre === nombreCliente.value
    );

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Consulta cargada correctamente",
      text: `Muchas gracias: ${nombre}`,
      showConfirmButton: false,
      timer: 2500,
    });
  } catch (e) {
    console.log(e);
  }

  formularioContacto.reset();
});