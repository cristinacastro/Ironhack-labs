import React, { Component } from "react";
import axios from "axios";

class TaskDetails extends Component {
  constructor(props) {
    super(props);
    // definimos nuestro state por el momento como un objeto vacío.

    this.state = {};
  }
  // 1ro - nos aseguramos que se ejecute el método que obtiene la task individual tan pronto como se monte el componente

  componentDidMount() {
    this.getTheTask();
  }
  // 2do - definimos el método que obtiene la task individual

  getTheTask = async () => {
    const { params } = this.props.match;
    try {
      const apiResponse = await axios.get(`http://localhost:4000/api/tasks/${params.taskId}`);

      const theTask = apiResponse.data.allProjects.tasks;
      console.log(theTask)
      this.setState(theTask);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <h3>Task Details</h3>
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>

        {/* To go back we can use react-router-dom method `history.goBack()` available on `props` object */}
        <button onClick={this.props.history.goBack}>Go Back</button>
      </div>
    );
  }
}

export default TaskDetails;
