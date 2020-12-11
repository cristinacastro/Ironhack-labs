# Configurando todo

En esta iteración, crearemos nuevos libros y los almacenaremos en nuestra base de datos.

Sí, necesitaremos dos rutas, la primera para renderizar el formulario donde el usuario pueda completar toda la información sobre un nuevo libro, y otra para obtener los datos del libro y agregarlos a la base de datos. ¡Hagamoslo!

**Las rutas de '/book/add' deben ir ANTES de la ruta '/book/:bookId'. Si las ubican después de '/book/:bookId' las solicitudes no lograran entrar en la ruta "/book/add" porque express intenta interpretar "add" como un ":bookId"**

Primero, cree una nueva ruta book/add en nuestro archivo routes/index.js que debería renderizar un archivo book-add.hbs. ¿Qué método usaremos?

```js
// routes/index.js
router.get('/book/add', (req, res, next) => {
  //renderizamos book-add.hbs
});
```

¿Y el segundo? Necesitamos otro para obtener los datos y agregarlos a nuestra base de datos Mongo. Podemos usar la misma ruta pero cambiando el método. De momento dejamos la función preparada. Más adelante la completaremos. Aquí la tenemos: 

```js
// routes/index.js

/* POST /book/add --> sends the book information from the form to the server */
router.post('/book/add', (req, res, next) => {
  
});
```

¡Increíble! Ahora necesitamos crear un archivo book-add.hbs dentro de la carpeta views y agregar un formulario, con todos los campos que necesitamos para crear un nuevo libro.

```html
<!-- views/book-add.hbs -->

<form action="¿a qué ruta llevamos los datos del formulario? " method="¿qué método usamos?">
    <label for="">Title:</label>
    <input type="text" name="title">

    <label for="">Author:</label>
    <input type="text" name="author">

    <label for="">Description:</label>
    <input type="text" name="description">

    <label for="">Rate:</label>
    <input type="number" name="rating">

    <button type="submit">ADD</button>
</form>
```

