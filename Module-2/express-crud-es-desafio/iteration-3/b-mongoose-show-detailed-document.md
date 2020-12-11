# Mostrar documento detallado

Hasta ahora solo hemos mostrado el título de cada libro, pero queremos que los usuarios de nuestra aplicación puedan ver toda la información. Podemos llevarlos a la vista detallada donde pueden ver todo lo que hemos guardado en nuestra DB relacionada con ese libro específico. 

Creemos una vista dentro de la carpeta de vistas views/book-details.hbs, donde se mostrarán todos estos datos. Seguro que no crearemos una vista por libro, sabemos cómo manipular los datos para que la vista cambie dinámicamente.

## Agregar las rutas

Primero, asegúrese de que todos los títulos en books.hbs sean hipervínculos. El link debe incluir un campo que podamos usar para consultar la base de datos para encontrar un libro específico.

¿Qué campo podemos usar? 

```html
{{!-- views/books.hbs --}}

<h1>BOOKS</h1>
{{#each books}}
    <p>
        <a href="//completar link">{{//título del libro}}</a>
    </p>
{{/each}}
```

Cuando hacemos clic en uno de los títulos, ¿hacia dónde navegaremos?

¡Exactamente! Navegaremos a una ruta como la siguiente: http://localhost:3000/book/5a79d85fd642ff1f1e6a479e (sí, ¡la parte final será diferente de un libro a otro!)

Agreguemos esta ruta a nuestro proyecto y hagamos que muestre una vista de book-details, por ahora.

```js
// routes/index.js

router.get('//nuestra ruta', (req, res, next) => {
  //completar función;
});
```
## Obtener el id

**Consultando la DB**

Para obtener el id de la URL, la mejor opción es usar req.params.

Tenemos todo lo que necesitamos para consultar nuestra base de datos, recuperar toda la información sobre el libro cliqueado y pasar los datos a nuestra vista.

¿Qué método de Mongoose debemos usar para consultar?

Tenemos un par de opciones: find(), findOne(), findById() son las más comunes. Después de tener la información sobre el libro que estamos buscando, debemos pasar esos datos a la vista.

Usando findOne() la base de datos recupera un objeto con el libro. Si usamos el método find(), devolverá un array con los objetos que coinciden con los criterios, pero en nuestro caso solo hay un objeto con el id que le pasamos, por lo que obtendremos el array con un elemento. 
Seguiremos usando el método findById() ya que es el más claro.

```js
// routes/index.js

router.get('/book/:bookId', (req, res, next) => {
//completar función que con el :id de la Url te renderice en la página book-details cada libro. 
});
```



Agreguemos un código en book-details.hbs para que podamos mostrar la información que tenemos de la base de datos. Queremos un ```<h1><h1>``` con el título del libro. Y rellenar los siguientes campos con el autor, la descripción, y el rating. En el ```<a>``` haremos un return a la ruta /books

```html
<h1>{{//título del libro}}</h1>
<span>Written by: {{//autor del libro}}</span>
<p>Summary: {{//descripción del libro}}</p>
<p>Rating: {{//rating del libro}}/10</p>
<a href="//volvemos a books">Return</a>
```

Al hacer clic en cualquiera de los libros, deberíamos ver sus detalles.