import React, {Component} from 'react';
import axios from 'axios';
import AddProject from './AddProject';
import { Link } from "react-router-dom";


class ProjectList extends Component {
    constructor() {
      super();
      //2do - definiremos dentro del state una variable igual a un array vacío, que luego utilizaremos para nuestros projectos
      this.state = { projects: [] };
    }
  
  
    //3ro - definiremos un método que traiga todos nuestros projects:
  
    getAllProjects = async () => {
  
        // 3.1 - hacemos una llamada axios a la ruta que creamos específicamente para esa tarea, que 'traiga' nuestros projects
        try {
        const apiResponse = await axios.get("http://localhost:4000/api/projects")
     console.log(apiResponse)
        this.setState({
            projects: apiResponse.data.allProjects
          });
  
      // 3.2 - 'then' utilizaremos la respuesta de dicha llamada para poblar la key que creamos en nuestro state.
  
    } catch (error) {
        console.log(error, "error")
    }
};
  
    // 4to - utilizamos un lifecycle method para asegurarnos que el pedido de todos los projects se realice tan pronto como se monte el componente.
    componentDidMount() {
        this.getAllProjects(); // PER QUÈ SERVEIX AIXÒ?
      }

    render() {
  
    //5to - renderizamos un mapeo de nuestra lista de proyectos y, para cada uno de ellos, usamos 'Link' para dirigir al usuario a la página del detalle de cada project (utilizaremos aquí la ruta que creamos para dicho fin)
  
    //6to - Llamamos a nuestro componente 'AddProject' y le pasamos por props el método que definimos para traer todos nuestros projects.
      return (
        <div>
          <div>
            {this.state.projects.map(eachProject => {
              return (
                // usamos el '_id' de cada project como 'key'
                <div key={eachProject._id}>
                  <Link to={`/projects/${eachProject._id}`}>
                    <h3>{eachProject.title}</h3>
                  </Link>
                   {/*  added so the tasks can be displayed:   */}
                  <ul>
                  { eachProject.tasks.map((task, index) => {
                    return <li key={index}>{task.title}</li>
                  }) }
                </ul>
                </div>
              );
            })}
          </div>
          <div>
          <AddProject getData={() => this.getAllProjects()} />
          </div>
        </div>
      );
    }
  }
  
  export default ProjectList;