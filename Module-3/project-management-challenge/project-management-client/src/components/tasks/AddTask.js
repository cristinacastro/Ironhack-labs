import React, { Component } from "react";
import axios from "axios";

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", isShowing: false }; // will help us to toggle addtask form
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const projectID = this.props.theProject._id; // <== we need to know to which project the created task belong, so we need to get its 'id' // it has to be the'id' because we are referencing project by its id in the task  model on the server side ( project: {type: Schema.Types.ObjectId, ref: 'Project'})

    // { title, description, projectID } => this is'req.body' that will be received on the server side in this route, so the names have to match
    try {
      await axios.post("http://localhost:4000/api/tasks", {
        title,
        description,
        projectID,
      });
      // after submitting the form, retrieve project one more time so the new task is displayed as well
    // 'then' llamamos al método 'getTheProject' que recibimos desde props a través de nuestro componente padre

      this.props.getTheProject();

    // reiniciamos los valores de state a strings vacíos para volver al comienzo

      this.setState({ title: "", description: "" });
    } catch (error) {
      console.log("error");
    }
  };

  //definimos un método que se encargue de controlar los cambios en los inputs y actualizar los valores en el state

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

 // creamos un método que se encargue de alternar el valor del booleano que definimos en nuestro state, el cual usaremos para mostrar/ocultar el form

  toggleForm = () => {
    if (!this.state.isShowing) {
      this.setState({ isShowing: true });
    } else {
      this.setState({ isShowing: false });
    }
  };

  // definimos un método que controle lo que se mostrará cuando el valor this.state.isShowing sea verdadero (es decir, el formulario de Add Task)

  showAddTaskForm = () => {
 // en caso de que el valor de isShowing sea verdadero, mostramos el formulario, que tendra:
    if (this.state.isShowing) {
      return (
        <div>
          <h3>Add Task</h3>
          <form onSubmit={this.handleFormSubmit}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
             // en cada input, un onChange que invoque a la función asignada a controlar el valor de dicho input y con él actualizar el valor del state; y un value, que se condiga con su homónimo del state.
              onChange={(e) => this.handleChange(e)}
            />

            <label>Description:</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={(e) => this.handleChange(e)}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <hr />
        <button onClick={() => this.toggleForm()}> Add task </button>
        {this.showAddTaskForm()}
      </div>
    );
  }
}

export default AddTask;
