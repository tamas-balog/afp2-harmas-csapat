import React from 'react';
import Preparationstore from "../../../../stores/PreparationStore";
import PreparationActions from "../../../../actions/PreparationActions";

class PreparationsResult extends React.Component{

    constructor(){
        super();
        this.state = { 
            preparations : []
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange(){
        this.setState({preparations : Preparationstore._preparations})
    }

    componentDidMount(){
        Preparationstore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        Preparationstore.removeChangeListener(this._onChange);
    }

    render(){
        return(
            <table className="table table-dark">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Prepared</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.preparations.map((preparation)=>{
                        return(
                            <tr key={preparation.id}>
                                <td>{preparation.pizza.name}</td>
                                <td>{preparation.prepared}
                                <button
                                className="btn btn-info"
                                onClick={()=>{
                                    PreparationActions.update(
                                        preparation.id,
                                    );window.location.reload();}  }
                                >Done
                                </button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}
export default PreparationsResult;