# Lista de documentos

Lo primero que haremos es enumerar todos los libros en una nueva ruta. 
Creemos una ruta /books dentro de nuestro archivo routes/index.js y rendericemos una vista de libros.
Se debe crear el archivo books dentro de la carpeta vistas. 

```js
// routes/index.js

router.get('/books', ....   //completar función 
});
```

Nuestra vista está vacía, y no estamos pasando ningún dato para renderizar. Vamos a consultar nuestra colección de libros para traer todos los libros que tenemos en nuestra base de datos. Primero, debemos importar el modelo Book en index.js. 

```js
// routes/index.js

const express = require('express');
const router  = express.Router();

//importar Book Model <== 
```

Ahora estamos listos para comenzar a hacer algunas consultas de Mongoose dentro de la ruta. Tenemos que hacer una consulta a la base de datos y renderizar todos los libros que aparecen en la base de datos  en la plantilla books de hbs.  

¿Cómo podemos pasar esa información a nuestra vista? ¿Dónde deberíamos llamar al método res.render()?

Sabemos que podemos agregar un segundo parámetro al método res.render(), donde podemos pasar algunos datos, por lo que es fácil. Pero, ¿dónde deberíamos poner nuestro método res.render() en primer lugar? La consulta de Mongoose es asíncrona y si colocamos res.render() fuera del bloque de la promise, se procesará antes de recuperar los datos, por lo que no podremos mostrar la información en la vista.

```js
// routes/index.js

router.get('/books', (req, res, next) => {
//completar función
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
    })
});
```

Finalmente, tenemos que agregar el código en nuestro books.hbs para mostrar el título de cada libro:

```html
{{!-- views/books.hbs --}}

<h1>BOOKS</h1>

{{#//completar}}
    <p>{//completar}}</p>
{{//completar}}
```

Si nuestra consulta va bien, deberíamos ver  todos los libros que tenemos en la base de datos (que se han creado en la BDD a partir del archivo seeds.js) yendo a la página /books en el navegador (http://localhost:3000/books).

¡Increíble! ¡Tenemos nuestra biblioteca mostrando todos los libros que tenemos!

