# **Cenedu-Peru**

Cenedu-Peru es una aplicación web que permite buscar información sobre las instituciones educativas del Perú, como escuelas, colegios, institutos y universidades. La aplicación utiliza datos públicos del Ministerio de Educación del Perú y los presenta de manera amigable para el usuario.

## **Funcionalidades**

* Búsqueda de instituciones educativas por nombre, nivel educativo y ubicación geográfica.

* Filtrado de resultados por la presencia de biblioteca, comedor, laboratorios, entre otros.	

* Visualización de información detallada de cada institución educativa, como su dirección, número de teléfono, correo electrónico, página web, entre otros.

## **Deployment**

Vista rápida de la web usando [Git Hub Pages](https://federico-orsi.github.io/Cenedu-Peru/contactanos.html)

## **Instalación**

Para poder ejecutar la aplicación de manera local, es necesario tener instalado Visual Studio Code como herramienta de visualización, NodeJs para instalación de dependencias. A continuación, se deben seguir los siguientes pasos:

1. Clonar este repositorio en la carpeta deseada:

```git clone https://github.com/Federico-Orsi/Cenedu-Peru.git```

2. Abrir proyecto con VSC

3. Instalar las dependencias desde la terminal:

***NodeJs***

```npm install```

## **Créditos**
Este proyecto fue creado por Erica Staroba <estaroba@hotmail.com> y Agustina Candela Castro <candela35988@gmail.com> en Diseño Grafico, y Federico Antonio Orsi <federicoantonio.orsi@gmail.com> y Diego Diaz Rodas <diegodiazrodas@gmail.com> en el desarrollo web.

# **Cambio de Credenciales para el envío de emails con EmailJS**

1. Crearse una cuenta en [EmailJs](https://www.emailjs.com/)
2. Agregar un nuevo servicio (*Add New Service*)

![image](https://user-images.githubusercontent.com/99621490/230207954-7f839cec-4c08-4c1a-9679-93b697462f18.png)

3. Seleccione Gmail y conecte la cuenta la cual recibirá los emails, puede guardar la *Service ID* en este paso, ya que luego deberá reemplazarla en el código.

![image](https://user-images.githubusercontent.com/99621490/230208262-1f222ff2-e7c4-4f78-b304-b7bc20252abb.png)

4. Puede cambiar el Template de como le llegarán los mails en *Email Templates*, y agregar las variables creadas en el código que se envían como parámetros:

![image](https://user-images.githubusercontent.com/99621490/230208577-adeb1315-e17b-4e54-be55-2a328443eb2e.png)

>name - 
>email - 
>subject - 
>message

![image](https://user-images.githubusercontent.com/99621490/230209337-58b841a4-6c09-4ea1-8930-93b6d85d3b80.png)

5. Pueden consultar con la documentacion de [EmailJs Docs](https://www.emailjs.com/docs/)

6. Y como ultimo paso se deben reemplazar la *Public Key*, *Service ID*, y *Template ID* en contactanos.html y form-encode.js

### Recomendaciónes futuras:

Agregar un reCAPTCHA, leer documentación [EmailJs Docs](https://www.emailjs.com/docs/) y [Google reCAPTCHA](https://developers.google.com/recaptcha/intro?hl=es-419). 

Codificar la información que se envía por el formulario.
