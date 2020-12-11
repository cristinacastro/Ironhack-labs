import React, { Component } from 'react'
export default class AddFood extends Component {
    state = {
        name: '',
        calories: 0,
        image: '',
        quantity: 0,
        visibility: false
    }
    //formulario controlado, amb valors buits necessita dun handlechange per tal que es guardin els valors dels imputsqueanem introduint
    handleChange = event => {
        let { name, value } = event.target
        this.setState({[name]: value})
    }
    //el name de la linia 13 es event.target.name,(name, calories i image) i value = el valor de cada input del formulario (el que hagi introduit el usuario)
    //let object = { name: 'leandro', age: 30, }; console.log(object.name); console.log(object['name']); 

    handleFormSubmit = event => {
        event.preventDefault();
        this.props.addFood(this.state);
        //aixo enviarà el nou element i modificarà el estat de app, i quan es modifica un estat es torna a renderitzar la pàgina, es tornarà a carregar tot el contingut del render de app.
        this.setState({
            name: '',
            calories: 0,
            image: '',
            quantity: 0,
            visibility: false
        })
    }
    showThisForm = () => {
        this.setState({
            visibility: !this.state.visibility
        })
    }
    render() {
        return (
            <div>
                <div>
                {!this.state.visibility ? <button onClick={() => this.showThisForm()}>"Add New Food"</button>:
                    (<form onSubmit={this.handleFormSubmit}>
                        <label htmlFor="image">Image:</label> {/* Los value van a venir directamente del estado */}
                        <input type="text" name="image" id="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                        <label htmlFor="calories">Calories:</label>
                        <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>
                        <input type="submit" value="Submit"/>
                    </form>)}
                </div>
            </div>
        )
    }
}