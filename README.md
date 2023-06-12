# CuriousFacts
Es un proyecto realizado para practicar llamadas HTTP, la idea fue crear una página web que llame a una API externa y nos devuelva hechos curiosos en inglés de manera aleatoria. 

# Tabla de Contenidos

1. [Introducción](#introducción)
2. [Instalación](#instalación)
	* [Pasos para la instalación](#pasos-para-la-instalación)
	* [HTTP POSTMAN](#http-postman)
3. [Funcionalidades del proyecto](#funcionalidades-del-proyecto)
	* [Como funciona](#como-funciona)
4. [Figma](#recursos)
    * [Figma wireframes](#figma-wireframes)
    * [Figma atomos](#figma-atomos)
    * [Figma moleculas](#figma-moleculas)
    * [Figma organimos](#figma-organismos)
    * [Figma version tablet](#figma-version-tablet)
    * [Figma version desktop](#figma-version-desktop)
5. [Test](#test)

---

# Introducción
La empresa Useless Facts quiere desarrollar la parte front-end de una aplicación que devuelve hechos curiosos que a nadie le importan, la idea es que dentro de la página principal, podamos ver cada hecho curioso que nos devuelve la API https://uselessfacts.jsph.pl/ y si nos gusta un hecho curioso, lo podamos guardar dentro de un espacio favorito en la misma página principal.

---

# Instalación:
## Pasos para la instalación

A continuación se detallan los pasos para la instalación:

git clone https://github.com/mgblanco10/CuriousFacts

### No es necesacio instalar nada para ver esta aplicación, sin embargo se realizarón test y para verlos si requiere instalación, los mismos fueron realizados con Jest 

#### Para instalar y ver los test:
- npm init -y
#### Para correr los test:
- npm run test
- npm test -- --coverage

___
## HTTP POSTMAN
Las consultas de prueba sobre la API fueron realizadas con POSTMAN

En caso de necesitar más información puede referirse a 

https://web.postman.co/workspace/My-Workspace~69268119-482c-4f67-8de9-586d299763dc/request/27825552-ad8f1f0c-0d8d-4e6a-81bc-c24b4f1f54ad

# Funcionalidades del proyecto
 - `Funcionalidad 1`: Empezar e información de como funciona. 
 - `Funcionalidad 2`: Llamar a la api para optener un hecho curioso.
 - `Funcionalidad 2a`: Mostrar el hecho curioso llamado y dejar de mostrar el hecho curioso cuando se llame a uno nuevo.
 - `Funcionalidad 3`: Tener la funcionalidad de agregar un hecho curioso a una lista de favoritos.
 - `Funcionalidad 4`: Poder eliminar el hecho curioso de la lista de favoritos.

## Como funciona
Una vez entramos en la aplicacion, brinda la bienvenida al usuario y la funcionalidad de empezar explicando brevemente como funciona.

 ![pagina principal de la aplicacion](/img/mobileHome.png)

Cuando  empezamos nos brinda un recuadro donde se guardará nuestra lista de hechos curiosos favoritos, al inicio el mismo estrá vacio.

En la parte abajo nos muestra el hecho curioso random que cambia al presionar el botón, el mismo aparece junto con una estrella para poder agregar el hecho a nuestra lista de favoritos de así quererlo.

También nos permite eliminar de la lista el hecho curioso cuando así lo queramos.

![pagina de guardar y mostrarhechos curiosos en inglés](/img/mobileCuriousFacts.png)

## Recursos

### Figma wireframes
[Enlace al diseño wireframes](/img/wireframe.png)

### Figma atomos
[Enlace al diseño Atomos en Figma](/img/atomos.png)

### Figma moleculas
[Enlace al diseño Moleculas en Figma](/img/moleculas.png)

### Figma organismos
[Enlace al diseño Organismos en Figma](/img/organismos.png)

### Figma version tablet
[Enlace al diseño Versión Tablet en Figma de la página inicial](/img/tabletHome.png)

[Enlace al diseño Versión Tablet en Figma de la página con las funcionalidades](/img/tabletCuriousFact.png)

### Figma version desktop
[Enlace al diseño Versión Desktop en Figma de la página inicial](/img/desktopHome.png)

[Enlace al diseño Versión Desktop en Figma de la página con las funcionalidades](/img/desktopCuriousFact.png)

# Test
 ![test coverage](/img//testCoverage.png)



 









