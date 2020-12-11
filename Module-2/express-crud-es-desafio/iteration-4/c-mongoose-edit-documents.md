# Editar documentos

Cualquier usuario puede agregar libros a nuestro library-project, pero ¿qué tal modificar uno? ¡Agreguemos esta característica a nuestro proyecto!

## Editar un formulario

Primero necesitamos un formulario de edición, donde el usuario podrá modificar la información de cada libro. Creemos una vista book-edit.hbs  y agreguemos el formulario que su action vaya a una ruta nueva que sea /book/edit. ¿Qué método necesitaremos, Post o Get?

```html
<form action="ruta" method="//¿qué método necesitamos?">
  <label for="">Title:</label>
  <input type="text" name="title" />

  <label for="">Author:</label>
  <input type="text" name="author" />

  <label for="">Description:</label>
  <input type="text" name="description" />

  <label for="">Rate:</label>
  <input type="number" name="rating" />

  <button type="submit">EDIT</button>
</form>
```

¿Es esto suficiente para editar un libro? Lo es, pero no es una buena experiencia para el usuario. Imagínese como usuario haciendo clic en el botón editar y toda la información sobre el elemento que está tratando de editar no está allí, por lo que debe completar todos los campos nuevamente.
Para hacerlo mejor, debemos setear todos los valores de los inputs con valores prellenados del libro existente. ¿Cómo podemos hacer eso?

Necesitamos crear una ruta en la que mostraremos esta vista, pero antes pasemos la información sobre el libro que el usuario está intentando editar.

Primero, agreguemos el link de edición a cada uno de nuestros libros en la ruta /books. ¿Cómo podemos pasar la información sobre el libro que estamos tratando de editar? 

Modificamos el contenido de nuestro archivo books.hbs.

Observe cómo establecemos el atributo href para editar los documentos, de esta manera la propiedad book_id será dinámica. Tenemos que pasar el id a través del query string.

```html
<h1>BOOKS</h1>
{{#each books}}
<p>
  <a href="/ruta al detalle de cada libro">{{this.title}}</a>

  <a href="/book/edit/.... completar ruta con query string" class="edit-button">EDIT</a>
</p>
{{/each}}
```

También puede agregar el siguiente CSS al archivo style.css en la carpeta /public/stylesheets para diferenciar el botón de edición.

```css
.edit-button {
  margin-left: 20px;
  color: #fff;
  text-decoration: none;
  padding: 2px 4px;
  background-color: grey;
  border-radius: 6px;
}
```

## Obtener los datos

Sabemos a dónde irá el usuario cuando haga clic en el botón Editar. Necesitamos crear la ruta para obtener esa solicitud del usuario y renderizar la vista.
**colocar esta ruta GET /book/edit antes de la ruta GET /book/:bookId**

```js
router.get("/book/edit", (req, res, next) => {
  //renderizamos la plantilla book-edit;
});
```

Pero antes de renderizar el formulario de edición, debemos recuperar los datos del libro de nuestra base de datos y pasar esos datos a nuestra vista. ¿Cómo podemos obtener los datos del libro en el que estamos haciendo clic? Recuerde que estamos pasando el id a través del query string. 

Necesitamos el objeto req.query para obtener el id del libro y luego consultar la base de datos solicitando toda la información acerca del mismo.

Tenga en cuenta que estamos utilizando el método **findOne**, de esta manera la base de datos devuelve un objeto con el libro que estamos buscando. Si usamos el método find, Mongoose devuelve un array de objetos.

```js
router.get("/book/edit", (req, res, next) => {
//completamos la función. 
  
});
```

#### Campos prellenados

Ahora estamos renderizando nuestro formulario de edición, pero están vacíos. Necesitamos completar esos datos con la información que recuperamos de la base de datos. Agregue el atributo value, con la información correspondiente sobre cada campo (en book-edit.hbs).

```html
<form action="/book/edit?book_id={{book._id}}" method="post">
  <label for="">Title:</label>
  <input type="text" name="title" value="{{...title}}" />

  <label for="">Author:</label>
  <input type="text" name="author" value="{{...author}}" />

  <label for="">Description:</label>
  <input type="text" name="description" value="{{...description}}" />

  <label for="">Rate:</label>
  <input type="number" name="rating" value="{{...rating}}" />

  <button type="submit">EDIT</button>
</form>
```

¡Perfecto! Ahora cada input se completa previamente con la información del libro que estamos tratando de editar. También modificamos el atributo action del formulario. Cuando el usuario hace clic en el botón EDITAR, la web realizará una solicitud POST a esa URL. ¡Sigamos adelante!

## Actualizar el documento

Cree la ruta con un método POST para que podamos obtener la información del libro. Dentro de la ruta, deberíamos obtener toda la información de req.body, y del id del libro desde req.query y luego usar el método _update_ para editar el libro en nuestra base de datos.

Recuerde la sintaxis para el método _update_. El primer parámetro es el query para encontrar el elemento que queremos editar. En el segundo parámetro, especificamos los campos que queremos actualizar. Como estamos obteniendo todos los campos del req.body, puede setearlos todos.

Después de actualizar el documento, Mongoose nos devuelve el documento antiguo de la base de datos. Y a veces esto puede confundirnos un poco porque en algunos casos queremos pasar a la vista el documento actualizado. Afortunadamente, podemos agregar un tercer parámetro al método update para que Mongoose nos devuelva el documento actualizado. El tercer parámetro debe ser un objeto en el cual especificamos que queremos el nuevo documento: {new: true}. La sintaxis completa se ve así:

```js
Model.update({ query }, { $set: { key: value, key: value } }, { new: true })
  .then()
  .catch();
```

Configuremos el método post:

```js
router.post("/book/edit", (req, res, next) => {
  const { title, author, description, rating } = req.body;
  //completamos la función
});
```

