#PROYECTO RPA LATAM
##Contenido

- Resumen
- Objetivos
- Requisitos
- Herramientas
- Librerías y dependencias
- Mejora continua
- Demo
- Conclusiones

---

## Resumen
El proyecto va dirigido para el público en general que desee:
• Informarse de las noticias de acuerdo a categorías consumiendo APIs.
• Suscribirse a los planes ofrecidos por la empresa patrocinadora ofreciéndolas en la web.

## Objetivos

- Simular el proceso de suscripción incluyendo método de pago.
- Optimizar el código para una estructura más robusta.
- Hacer uso de Redux (infraestructura: separa componentes y funciones).

## Requisitos

- Para mostrar las suscripciones es necesario levantar un servidor en el puerto 5000 con json-server, levantando el archivo data.json en la carpeta data
(json-server ./src/data/data.json --port 5000).

## Herramientas

- Visual Studio Code: Usado como editor de texto durante todo el desarrollo del proyecto.
- Google Meet: Necesaria para las reuniones del equipo.
- Git - Github: Una usada para controlar las versiones del proyecto, mientras que otra fue usada como repositorio.
- NPM: Como gestor de dependencias (package manager).

## Librerías y dependencias

1. Redux: Usado como patrón de arquitectura para la separación de los componentes y sus flujos.
2. Boostrap - MaterialUI - SweetAlert2: Gracias a estas librerías nos facilitamos el trabajo de los estilos de los componentes y los mensajes.
3. React Router Dom: El ruteo no pudo haber sido realizado sino hacíamos uso de esta dependencia, fue esencial.
4. Axios: Librería utilizada para facilitar el consumo de las apis.
5. Validator: Usado para las validaciones de los formularios.
6. Animate: Biblioteca de animaciones para enfatizar, páginas de inicio, controles deslizantes y sugerencias para guiar la atención.

## Mejora Continua

Proceso de cambio, de desarrollo y con posibilidades de mejorar.
Aquí entra a tallar el proyecto en el repositorio en GitHub y Netlify
Logrando Continuous Deployment.

## Demo

La demo es solo una demostración de las interfaces debido a que las Apis utilizadas son de desarrollo.
https://awesome-lichterman-90ae6e.netlify.app/

## Conclusiones

1.Aprendimos a realizar un proyecto utilizando react logrando visualizar noticias y suscribiéndose a un plan.
2.Aprendimos a manejar Redux.
3.Aprendimos la lógica de las pasarelas de pagos, logrando conocer como funcionan Stripe y Mercado Pago.
###End
