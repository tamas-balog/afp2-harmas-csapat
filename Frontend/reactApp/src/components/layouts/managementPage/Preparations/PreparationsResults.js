import React from 'react';
import Preparationstore from "../../../../stores/PreparationStore";

class PreparationsResult extends React.Component{

    constructor(){
        super();
        this.state = {preparations : []};
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
                    <td>Sequential number</td>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Prepared at</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.preparations.map((preparation)=>{
                        return(
                            <tr key={preparation.sequentialNumber}>
                                <td>{preparation.sequentialNumber}</td>
                                <td>{preparation.id}</td>
                                <td>{preparation.name}</td>
                                <td>{preparation.preparedAt}</td>
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