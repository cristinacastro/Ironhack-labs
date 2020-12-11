import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditProject from "./EditProject"; 
import AddTask from '../tasks/AddTask';



class ProjectDetails extends Component {
  // 1ro - definimos nuestra clase ProjectDetails
  // 2do - definimos su constructor con 'props' como argumento (ya que pasaremos los 'details' desde un componente padre). Esto es opcional.
  // 3ro - utilizamos el método 'super' para utilizar dichas 'props'
  // 4to - definimos el state en un ppio. como un objeto vacío.

  constructor(props) {
    super(props);
    //2do - definiremos dentro del state una variable igual a un array vacío, que luego utilizaremos para nuestros projectos
    this.state = {};
  }
  // declaramos al método que nos garantice que nuestra función encargada de hacer la llamada a BDD (getSingleProject) se ejecute al montarse el componente

  componentDidMount() {
    this.getSingleProject();
  }

  //aixo que fa?
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  // definimos el método que traiga el project individual buscado
  getSingleProject = async () => {
    // 1ro - desestructuramos params de nuestro objeto this.props.match
    const { params } = this.props.match;
    // 2do - hacemos una llamada axios a nuestra ruta del backend encargada de mostrar cada projecto individualmente
    try {
      const apiResponse = await axios.get(
        `http://localhost:4000/api/projects/${params.id}`
      );
      //console.log(apiResponse);
      // 3ro - con la respuesta, actualizamos nuestro state
      const theProject = apiResponse.data;
      this.setState(theProject);
      console.log(theProject);
      // 4to - atrapamos los errores, en caso de que hubiese, y los mostramos por consola.
    } catch (error) {
      console.log(error, "error");
    }
  };

  renderEditForm = () => {
    if (!this.state.title) {
      this.getSingleProject();
    } else {
      //{...props} => so we can have 'this.props.history' in Edit.js
      return (
        <EditProject
          theProject={this.state}
          getTheProject={this.getSingleProject}
          {...this.props}
        />
      );
    }
  };

  deleteProject = async () => {
    const { params } = this.props.match;
    try {
      await axios.delete(`http://localhost:4000/api/projects/${params.id}`);
      this.props.history.push("/projects");
    
    } catch (error) {
      console.log(error);
    }
  };


  renderAddTaskForm = () => {
    if(!this.state.title){
        this.getSingleProject();
      } else {
// pass the project and method getSingleProject() as a props down to AddTask component
        return <AddTask theProject={this.state} getTheProject={this.getSingleProject} />
      }
  }


  render() {
    // retornamos en el render al title y description que tenemos en nuestro state (actualizado por nuestro método getSingleProject) y usamos al componente 'Link' para ir hacía nuestra ruta '/projects'
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        {/* show the task heading only if there are tasks */}
        { this.state.tasks && this.state.tasks.length > 0 && <h3>Tasks</h3> }
        {/* map through the array of tasks and... */}
        { this.state.tasks && this.state.tasks.map((task, index) => {
            return(
                <div key={ index }>
                {/* ... make each task's title a link that goes to the task details page */}
                    <Link to={`/tasks/${task._id}`}>
                        { task.title }
                    </Link>
                </div>
            )
        }) }
        <div>{this.renderEditForm()}</div>
        <button onClick={() => this.deleteProject()}>Delete project</button> 
        <br/>
        <div> {/*<== !!! */}
            {this.renderAddTaskForm()} 
		</div>

		<br/><br/><br/><br/><br/>
        <Link to={"/projects"}>Back to projects</Link>
      </div>
    );
  }
}

export default ProjectDetails;
