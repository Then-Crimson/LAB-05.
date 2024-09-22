# HTML & CSS & JS

A la fecha en el año 2024 html y css siguen siendo muy relevantes en cuanto a desarrollo web, pues ellos siguen siendo la base del desarrollo web, y los distintos frameworks o librerías, se basan o aprovechan de ellos.

## HTML

HyperText Markup Language, no es un lenguaje de programación, podría decirse que es un conjunto de etiquetas, para estructurar una pagina web. La estructura básica, es la siguiente:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> Este es un h1 </h1>
  <h2> Este es un h2 </h2>
  <p> Este es un parrafo </p>
</body>
</html>
```

Si deseas, puedes echar un vistazo a esta pagina para aprender un poco mas sobre HTML: 

[Manual de HTML](https://desarrolloweb.com/manuales/manual-html.html)

## CSS

Cascading Style Sheets, ayuda con el tema de los estilos, para que la pagina web, no sea plana y aburrida,, sino, todo lo contrario, hacerla colorida y agradable a la vista.



```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>

</body>
</html>
```

Algo importante a recordar sobre css, es el uso de los principales display’s los cuales son: block, inline, flexbox y grid.

Puedes ver mas de css en la siguiente pagina:

[CSS Reference - A free visual guide to CSS](https://cssreference.io/)

## JavaScript

A estas alturas de la materia, no hace falta presentar a JavaScript y que es lo que hace. JavaScript permite dar interactividad a los sitios web. 

Si deseas repasar un poco, puedes ver lo siguiente: [JavaScript Guide - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## Manipulación del DOM

Una vez hecho un pequeño repaso sobre html, css, js. Es hora de hablar del DOM (Document Object Model) y como podemos manipular el mismo. Seguramente te preguntaras, para que nos sirve manipular el DOM, y la respuesta es que así podemos dotar de vida a las paginas web que desarrollemos.

Veamos un pequeño ejemplo:

### QuerySelector()

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <p> This is a h1 </p>
  <script src="./main.js"></script>
</body>
</html>
```

```jsx
const paragraph = document.querySelector("p");
paragraph.textContent = "This is a paragraph";
```

Si inicias o ejecutas el sitio web, por lógica debería de mostrarse el mensaje “This is a h1” pero en lugar de eso, muestra el mensaje “This is a paragraph”. Esto se debe a que se modifico el texto que contenía la etiqueta p en un principio. 

Para realizar tal acción, se hizo uso de “ document.querySelector("p") “ y eso nos devuelve el primer elemento p que halle. Posterior a ello, con la variable ingresamos a la propiedad “textContent” para cambiar el texto que contiene.

Bien, seguro piensas, que pasaría en caso de tener mas elementos “p” como modificarlos todos a la vez. Y ello se resuelve de la siguiente manera:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <p> This is a h1 </p>
  <p> This is a h1 </p>
  <p> This is a h1 </p>
  <p> This is a h1 </p>
  <script src="./main.js"></script>
</body>
</html>
```

```jsx
const paragraph = document.querySelector("p");
paragraph.textContent = "This is a paragraph";
```

Si ejecutas ese código solo modificara el primer p hallado.

```
  <p> This is a paragraph </p>
  <p> This is a h1 </p>
  <p> This is a h1 </p>
  <p> This is a h1 </p>
```

Ahora hagamos la siguiente modificación en main.js.

```jsx
const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
  paragraph.textContent = "This is a paragraph";
});
```

Si observas bien ahora hacemos uso de querySelectorAll() y esto devuelve un NodeList que contiene todas las coincidencias halladas. Haciendo un recorrido a través de los elementos, modificamos todos los elementos p y este es el resultado:

```
  <p> This is a paragraph </p>
  <p> This is a paragraph </p>
  <p> This is a paragraph </p>
  <p> This is a paragraph </p>
```

Bien, aun podemos ser mas específicos, como es acceder a través de los id’s. 

Para ejemplificar ello, tendremos el siguiente código html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="root" ></div>
  <script src="./main.js"></script>
</body>
</html>
```

Ahora accederemos al id root, para mostrar elementos en el div.

```jsx
const app = document.getElementById("root");

const paragraph = document.createElement("p");
paragraph.textContent = "TEXTO JS";

app.appendChild(paragraph);
```

Y el resultado seria el siguiente:

```
<p> TEXTO JS </p>
```

Como estos ejemplos, aun puedes hallar mas, que sepas que casi todo se puede manipular para crear una pagina web dinámica, si deseas aprender mas sobre el DOM puedes ver la siguiente pagina: [DOM Manipulation in JavaScript – A Comprehensive Guide for Beginners (freecodecamp.org)](https://www.freecodecamp.org/news/dom-manipulation-in-javascript/)
