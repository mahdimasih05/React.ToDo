import { Component } from "react";

class AddTodos extends Component {
    state={
        content:""
    }
    handleChange = (e) => {
       this.setState({
           content: e.target.value
       })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.content !== "") {
        this.props.handleAdd(this.state);
        this.setState({
            content:""
        })
      } else {return(null)}
    }
    render() {
        return(
            <div className="container center">
                <form className="form" onSubmit={this.handleSubmit}>
                    <label className="label">Add todo's</label>
                    <input className="input" type="text" onChange={this.handleChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddTodos